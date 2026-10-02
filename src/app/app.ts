import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslationService } from './core/translation.service';


import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';

import { SeoService } from './core/seo.service';
import {
  INSTAGRAM_URL,
  waGeneralEnquiry
} from './core/contact.constants';

const SPLASH_KEY = 'ht-splash-shown';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Navbar,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  showSplash = signal(true);

  readonly whatsappFloatLink = waGeneralEnquiry();
  readonly instagramUrl = INSTAGRAM_URL;

  constructor(
  private seo: SeoService,
  protected i18n: TranslationService
) {}

  ngOnInit(): void {
    // Splash screen only on the very first load of the session —
    // not on every page load / refresh.
    let alreadyShown = false;
    try {
      alreadyShown =
        sessionStorage.getItem(SPLASH_KEY) === '1';
    } catch {
      /* storage unavailable — show splash */
    }

    if (alreadyShown) {
      this.showSplash.set(false);
      return;
    }

    setTimeout(() => {
      this.showSplash.set(false);
      try {
        sessionStorage.setItem(SPLASH_KEY, '1');
      } catch {
        /* ignore */
      }
    }, 2000);
  }
}
