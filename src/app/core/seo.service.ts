import { Injectable, effect } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

import { TranslationService } from './translation.service';

export interface SeoData {
  titleKey: string;
  descKey: string;
  titleFallback: string;
  descFallback: string;
}

const DEFAULT_SEO: SeoData = {
  titleKey: 'seo.home.title',
  descKey: 'seo.home.desc',
  titleFallback: 'Hamza Travels — Flight, Train, Hotel Booking & Document Services',
  descFallback:
    'Hamza Travels: flight/train/hotel booking, visa assistance, PAN, Aadhaar, passport & 46+ online and document services. Chat on WhatsApp for quick enquiry.'
};

/**
 * Sets document title + meta description + Open Graph tags per route,
 * in the currently active language. Routes declare their SEO via
 * `data: { seo: {...} }` in app.routes.ts.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {

  private current: SeoData = DEFAULT_SEO;

  constructor(
    private router: Router,
    private title: Title,
    private meta: Meta,
    private i18n: TranslationService
  ) {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => this.updateFromRoute());

    // Re-render SEO strings when the language changes.
    effect(() => {
      this.i18n.lang();
      this.apply(this.current);
    });
  }

  updateFromRoute(): void {
    let route = this.router.routerState.root;
    let seo: SeoData | undefined;
    while (route.firstChild) {
      route = route.firstChild;
      const dataSeo = route.snapshot.data['seo'] as SeoData | undefined;
      if (dataSeo) {
        seo = dataSeo;
      }
    }
    this.current = seo ?? DEFAULT_SEO;
    this.apply(this.current);
  }

  private apply(seo: SeoData): void {
    const title = this.i18n.translate(seo.titleKey, seo.titleFallback);
    const desc = this.i18n.translate(seo.descKey, seo.descFallback);

    this.title.setTitle(title);

    this.meta.updateTag({ name: 'description', content: desc });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: desc });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Hamza Travels' });
    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image'
    });
  }
}
