import { Injectable, signal } from '@angular/core';

/**
 * Shared scroll-spy state for the landing page.
 *
 * The Landing component observes its sections with an IntersectionObserver
 * and writes the id of the section currently in view here. The global
 * Navbar reads it to highlight the matching link while the user is on `/`.
 */
@Injectable({ providedIn: 'root' })
export class LandingScrollService {

  /** Id of the landing section currently in view ('home' | 'services' | ...). */
  readonly activeSection = signal<string>('home');

  setActive(id: string): void {
    if (this.activeSection() !== id) {
      this.activeSection.set(id);
    }
  }

  reset(): void {
    this.activeSection.set('home');
  }
}
