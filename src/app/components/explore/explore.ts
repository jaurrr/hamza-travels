import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslatePipe } from '../../core/translate.pipe';
import { TranslationService } from '../../core/translation.service';
import {
  waGeneralEnquiry,
  waLink
} from '../../core/contact.constants';
import {
  DESTINATIONS,
  Destination
} from '../../data/destinations.data';

@Component({
  selector: 'app-explore',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './explore.html',
  styleUrl: './explore.css'
})
export class Explore {

  destinations: Destination[] = DESTINATIONS;

  /** Generic CTA link used at the bottom of the page. */
  contactCta = waGeneralEnquiry();

  constructor(private i18n: TranslationService) {}

  /**
   * WhatsApp link prefilled with the translated destination name,
   * e.g. "Hi Hamza Travels! I want to know more about Dubai."
   */
  destWaLink(key: string): string {
    const name = this.i18n.translate(
      'explore.dest.' + key + '.name',
      key
    );

    return waLink(
      `Hi Hamza Travels! I want to know more about ${name}.`
    );
  }
}
