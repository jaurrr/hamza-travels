import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  faLink,
  faPhone
} from '@fortawesome/free-solid-svg-icons';

import {
  faInstagram,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';

import {
  INSTAGRAM_URL,
  OWNER_PHONE,
  WHATSAPP_CHANNEL_URL,
  telLink,
  waGeneralEnquiry,
  waLink
} from '../../core/contact.constants';

import { TranslatePipe } from '../../core/translate.pipe';

@Component({
  selector: 'app-footer',
  imports: [
    RouterLink,
    FontAwesomeModule,
    TranslatePipe
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

  faPhone = faPhone;
  faWhatsapp = faWhatsapp;
  faInstagram = faInstagram;
  faLink = faLink;

  // ---- Centralised contact details (single source of truth) ----

  readonly businessTelLink = telLink();
  readonly ownerTelLink = telLink(OWNER_PHONE);

  readonly businessWaLink = waGeneralEnquiry();

  readonly ownerWaLink = waLink(
    'Hi! I want to talk to the owner of Hamza Travels.',
    OWNER_PHONE
  );

  readonly instagramUrl = INSTAGRAM_URL;
  readonly whatsappChannelUrl = WHATSAPP_CHANNEL_URL;

  readonly businessPhoneDisplay = '+91 99352 12224';

  readonly year = new Date().getFullYear();

}
