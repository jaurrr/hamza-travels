import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component
} from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive
} from '@angular/router';

import {
  SERVICES,
  Service
} from '../../data/services.data';

@Component({
  selector: 'app-navbar',
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  menuOpen = false;
  searchText = '';
  isListening = false;

  // Dark mode
  isDarkMode = false;

  private recognition: any;

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef
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

        // Update UI after browser error
        this.cdr.detectChanges();
      };
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
     VOICE SEARCH
  ========================= */

  startVoiceSearch(): void {

    if (!this.recognition) {

      alert(
        'Voice search is not supported in this browser.'
      );

      return;
    }


    if (this.isListening) {

      this.recognition.stop();

      return;
    }


    try {

      this.recognition.start();

    } catch (error) {

      // Prevent duplicate start error
      this.isListening = false;

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

      const name =
        service.name
          .toLowerCase()
          .replace(/aadhar/g, 'aadhaar')
          .replace(/adhar/g, 'aadhaar')
          .replace(/adhaar/g, 'aadhaar');


      const category =
        service.category
          .toLowerCase()
          .replace(/aadhar/g, 'aadhaar')
          .replace(/adhar/g, 'aadhaar')
          .replace(/adhaar/g, 'aadhaar');


      const description =
        service.description
          .toLowerCase()
          .replace(/aadhar/g, 'aadhaar')
          .replace(/adhar/g, 'aadhaar')
          .replace(/adhaar/g, 'aadhaar');


      return (
        name.includes(normalizedSearch) ||
        category.includes(normalizedSearch) ||
        description.includes(normalizedSearch)
      );

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