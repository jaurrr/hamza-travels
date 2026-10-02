import {
  AfterViewInit,
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

import { TranslatePipe } from '../../core/translate.pipe';
import { TranslationService } from '../../core/translation.service';
import { LandingScrollService } from '../../core/landing-scroll.service';
import {
  waGeneralEnquiry,
  waLink
} from '../../core/contact.constants';
import {
  SERVICES,
  Service
} from '../../data/services.data';
import {
  DESTINATIONS,
  Destination
} from '../../data/destinations.data';
import { Home } from '../home/home';

/** Landing sections tracked by the scroll-spy. */
const SECTION_IDS = ['home', 'services', 'about', 'explore', 'contact'];

/** Service ids shown in the "Popular Services" preview. */
const POPULAR_SERVICE_IDS = [
  'flight-ticket',
  'train-ticket',
  'visa-services',
  'pan-card',
  'aadhaar',
  'passport',
  'hotel-booking',
  'scholarship'
];

/** Destination keys shown in the "Explore" preview. */
const EXPLORE_PREVIEW_KEYS = [
  'saudi-arabia',
  'makkah',
  'dubai',
  'thailand',
  'kashmir',
  'goa'
];

@Component({
  selector: 'app-landing',
  imports: [
    CommonModule,
    RouterLink,
    TranslatePipe,
    Home
  ],
  templateUrl: './landing.html',
  styleUrl: './landing.css'
})
export class Landing implements OnInit, AfterViewInit, OnDestroy {

  popularServices: Service[] = POPULAR_SERVICE_IDS
    .map(id => SERVICES.find(s => s.id === id))
    .filter((s): s is Service => !!s);

  previewDestinations: Destination[] = EXPLORE_PREVIEW_KEYS
    .map(key => DESTINATIONS.find(d => d.key === key))
    .filter((d): d is Destination => !!d);

 testimonials = [
  { nameKey: 't1name', roleKey: 't1role', textKey: 't1text', stars: 4 },
  { nameKey: 't2name', roleKey: 't2role', textKey: 't2text', stars: 5 },
  { nameKey: 't3name', roleKey: 't3role', textKey: 't3text', stars: 3 }
];

/** Returns [0..n-1] so the template can render exactly n stars. */
starList(n: number): number[] {
  return Array.from({ length: n }, (_, i) => i);
}


  /** Big WhatsApp CTA link. */
  whatsappCta = waGeneralEnquiry();

  private isBrowser: boolean;
  private observer?: IntersectionObserver;
  private onResize?: () => void;
  private snapRaf = 0;

  constructor(
    @Inject(PLATFORM_ID) platformId: object,
    private scrollSpy: LandingScrollService,
    private i18n: TranslationService
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }


  /* =========================
     SNAP-SCROLL CSS
  ========================= */

  ngOnInit(): void {
    if (!this.isBrowser) {
      return;
    }

    document.documentElement.classList.add('snap-scroll');
    this.injectSnapCss();
  }


  /* =========================
     SCROLL-SPY
  ========================= */

  ngAfterViewInit(): void {
    if (!this.isBrowser || typeof IntersectionObserver === 'undefined') {
      return;
    }

    this.observer = new IntersectionObserver(
      entries => {

        let bestId: string | null = null;
        let bestRatio = 0;

        for (const entry of entries) {
          if (
            entry.isIntersecting &&
            entry.intersectionRatio >= bestRatio
          ) {
            bestId = entry.target.id;
            bestRatio = entry.intersectionRatio;
          }
        }

        if (bestId) {
          this.scrollSpy.setActive(bestId);
        }
      },
      {
        rootMargin: '-45% 0px -45% 0px',
        threshold: 0
      }
    );

    const observer = this.observer;

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    }

    // Tall sections + snap = "stuck" feeling. Exempt sections taller
    // than the viewport so they scroll freely; short ones keep the
    // smooth snap effect.
    this.applySnapEligibility();
    this.onResize = () => {
      cancelAnimationFrame(this.snapRaf);
      this.snapRaf = requestAnimationFrame(() => this.applySnapEligibility());
    };
    window.addEventListener('resize', this.onResize);
    // Re-check after images/fonts settle (section heights can change).
    setTimeout(() => this.applySnapEligibility(), 1500);
  }


  /* =========================
     CLEANUP
  ========================= */

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }

    // LandingScrollService exposes reset() ('home') — no clear() exists.
    this.scrollSpy.reset();

    if (this.onResize) {
      window.removeEventListener('resize', this.onResize);
      this.onResize = undefined;
    }
    cancelAnimationFrame(this.snapRaf);

    if (!this.isBrowser) {
      return;
    }

    document.documentElement.classList.remove('snap-scroll');
    document.getElementById('ht-snap-css')?.remove();
  }


  /* =========================
     HELPERS
  ========================= */

  /**
   * Adds .snap-tall to sections taller than the viewport so the injected
   * CSS exempts them from scroll-snap (they scroll freely, no stuck feel).
   */
  private applySnapEligibility(): void {
    if (!this.isBrowser) {
      return;
    }
    const vh = window.innerHeight || 800;
    document.querySelectorAll<HTMLElement>('.snap-section').forEach(el => {
      el.classList.toggle('snap-tall', el.offsetHeight > vh * 1.02);
    });
  }

  private injectSnapCss(): void {
    if (document.getElementById('ht-snap-css')) {
      return;
    }

    const style = document.createElement('style');
    style.id = 'ht-snap-css';
    style.textContent =
      'html.snap-scroll{scroll-snap-type:y proximity}' +
      '.snap-section{scroll-snap-align:start}' +
      '.snap-section.snap-tall{scroll-snap-align:none}' +
      '@media (prefers-reduced-motion:reduce){' +
      'html.snap-scroll{scroll-snap-type:none}' +
      '}';

    document.head.appendChild(style);
  }

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
