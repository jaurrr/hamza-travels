import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  OnDestroy
} from '@angular/core';
import {
  Router,
  RouterLink
} from '@angular/router';

import { TranslatePipe } from '../../core/translate.pipe';
import { TranslationService } from '../../core/translation.service';
import { LandingScrollService } from '../../core/landing-scroll.service';

import {
  SERVICES,
  Service
} from '../../data/services.data';

@Component({
  selector: 'app-navbar',
  imports: [
    CommonModule,
    RouterLink,
    TranslatePipe
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnDestroy {

  menuOpen = false;
  searchText = '';
  isListening = false;

  /** Visible voice-search error, auto-cleared after 4 seconds. */
  voiceError = '';

  // Dark mode
  isDarkMode = false;

  private recognition: any;
  private voiceErrorTimer?: ReturnType<typeof setTimeout>;

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
    public translationService: TranslationService,
    private scrollSpy: LandingScrollService
  ) {

    /* =========================
       LOAD SAVED THEME
    ========================= */

    const savedTheme =
      localStorage.getItem('theme');

    if (savedTheme === 'dark') {

      this.isDarkMode = true;

      document.body.classList.add(
        'dark-mode'
      );
    }


    /* =========================
       VOICE SEARCH
    ========================= */

    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (SpeechRecognition) {

      this.recognition =
        new SpeechRecognition();

      this.recognition.lang = 'en-IN';

      this.recognition.continuous = false;

      this.recognition.interimResults = false;


      /* =========================
         VOICE START
      ========================= */

      this.recognition.onstart = () => {

        this.isListening = true;

        // Notify Angular about browser callback
        this.cdr.detectChanges();
      };


      /* =========================
         VOICE END
      ========================= */

      this.recognition.onend = () => {

        this.isListening = false;

        // Notify Angular about browser callback
        this.cdr.detectChanges();
      };


      /* =========================
         VOICE RESULT
      ========================= */

      this.recognition.onresult = (
        event: any
      ) => {

        const transcript =
          event.results[0][0].transcript;

        this.searchText =
          transcript;

        // Update search UI/results immediately
        this.cdr.detectChanges();
      };


      /* =========================
         VOICE ERROR
      ========================= */

      this.recognition.onerror = () => {

        this.isListening = false;

        this.showVoiceError();

        // Update UI after browser error
        this.cdr.detectChanges();
      };


      /* =========================
         VOICE NO MATCH
      ========================= */

      this.recognition.onnomatch = () => {

        this.showVoiceError();

        this.cdr.detectChanges();
      };
    }
  }


  ngOnDestroy(): void {
    if (this.voiceErrorTimer) {
      clearTimeout(this.voiceErrorTimer);
    }
  }


  /* =========================
     DARK MODE
  ========================= */

  toggleTheme(): void {

    this.isDarkMode =
      !this.isDarkMode;

    document.body.classList.toggle(
      'dark-mode',
      this.isDarkMode
    );

    localStorage.setItem(
      'theme',
      this.isDarkMode
        ? 'dark'
        : 'light'
    );
  }


  /* =========================
     SCROLL-SPY NAV STATE
  ========================= */

  /**
   * On the landing page ('/') the active link follows the scroll-spy;
   * on every other page it follows the router URL.
   */
  navActive(target: string): boolean {

    if (this.router.url === '/') {
      return this.scrollSpy.activeSection() === target;
    }

    return (
      this.router.url === '/' + target ||
      (target === 'home' && this.router.url === '/')
    );
  }


  /**
   * On the landing page, nav links smooth-scroll to the section
   * instead of triggering a router navigation.
   */
  goTo(
    event: Event,
    sectionId: string,
    _routePath: string
  ): void {

    this.closeMenu();

    if (this.router.url === '/') {

      event.preventDefault();

      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: 'smooth' });
    }

    // On any other page the routerLink handles navigation.
  }


  /* =========================
     VOICE SEARCH
  ========================= */

  /**
   * Show a visible, translated error message that clears itself
   * after 4 seconds — never a raw alert().
   */
  private showVoiceError(): void {

    this.voiceError =
      this.translationService.translate(
        'nav.voiceError',
        'Voice search failed. Please type your search instead.'
      );

    if (this.voiceErrorTimer) {
      clearTimeout(this.voiceErrorTimer);
    }

    this.voiceErrorTimer = setTimeout(() => {

      this.voiceError = '';

      this.cdr.detectChanges();

    }, 4000);
  }


  startVoiceSearch(): void {

    if (!this.recognition) {

      this.showVoiceError();

      return;
    }


    if (this.isListening) {

      this.recognition.stop();

      return;
    }


    try {

      // Recognition language follows the active app language.
      this.recognition.lang =
        this.translationService.lang() === 'hi'
          ? 'hi-IN'
          : 'en-IN';

      this.recognition.start();

    } catch (error) {

      // Prevent duplicate start error
      this.isListening = false;

      this.showVoiceError();

      this.cdr.detectChanges();
    }
  }


  /* =========================
     MOBILE MENU
  ========================= */

  toggleMenu(): void {

    this.menuOpen =
      !this.menuOpen;
  }


  closeMenu(): void {

    this.menuOpen = false;
  }


get searchResults(): Service[] {

  const search =
    this.searchText
      .trim()
      .toLowerCase();


  if (!search) {
    return [];
  }


  // Common voice/search spelling variations
  const normalizedSearch =
    search
      .replace(/aadhar/g, 'aadhaar')
      .replace(/adhar/g, 'aadhaar')
      .replace(/adhaar/g, 'aadhaar');


  return SERVICES
    .filter((service: Service) => {

      // Match against BOTH the translated and the English
      // catalogue text so search works in either language.
      const name =
        this.translationService.serviceName(
          service.id,
          service.name
        );

      const category =
        this.translationService.serviceCategory(
          service.category
        );

      const description =
        this.translationService.serviceDescription(
          service.id,
          service.description
        );

      const haystack = (
        name + ' ' +
        category + ' ' +
        description + ' ' +
        service.name + ' ' +
        service.category + ' ' +
        service.description
      )
        .toLowerCase()
        .replace(/aadhar/g, 'aadhaar')
        .replace(/adhar/g, 'aadhaar')
        .replace(/adhaar/g, 'aadhaar');


      return haystack.includes(normalizedSearch);

    })
    .slice(0, 6);
}


  /* =========================
     OPEN SERVICE
  ========================= */

  openService(
    service: Service
  ): void {

    this.searchText = '';

    this.closeMenu();

    this.router.navigate([
      '/service',
      service.id
    ]);
  }


  /* =========================
     CLEAR SEARCH
  ========================= */

  clearSearch(): void {

    this.searchText = '';
  }

}
