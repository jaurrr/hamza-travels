import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TranslatePipe } from '../../core/translate.pipe';
import { TranslationService } from '../../core/translation.service';
import {
  telLink,
  waGeneralEnquiry
} from '../../core/contact.constants';

@Component({
  selector: 'app-home',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, OnDestroy {

  currentTime = '';
  currentDate = '';

  /** External contact shortcuts used by the Support ribbon card. */
  whatsappHelp = waGeneralEnquiry();
  callLink = telLink();

  private clockInterval?: ReturnType<typeof setInterval>;

  constructor(
    private cdr: ChangeDetectorRef,
    private i18n: TranslationService
  ) {}

  ngOnInit(): void {
    this.updateClock();

    this.clockInterval = setInterval(() => {
      this.updateClock();
      this.cdr.detectChanges();
    }, 1000);
  }

  private updateClock(): void {
    const now = new Date();

    // Clock formatting follows the active language.
    const locale = this.i18n.lang() === 'hi' ? 'hi-IN' : 'en-IN';

    this.currentTime = new Intl.DateTimeFormat(locale, {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    }).format(now);

    this.currentDate = new Intl.DateTimeFormat(locale, {
      timeZone: 'Asia/Kolkata',
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    }).format(now);
  }

  ngOnDestroy(): void {
    if (this.clockInterval) {
      clearInterval(this.clockInterval);
    }
  }
}
