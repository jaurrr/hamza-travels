import {
  ChangeDetectorRef,
  Component
} from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  upiCopied = false;


  constructor(
    private cdr: ChangeDetectorRef
  ) {}


  openEmail(event: Event): void {

    event.preventDefault();

    const isMobile =
      /Android|iPhone|iPad|iPod|Mobile/i.test(
        navigator.userAgent
      );

    if (isMobile) {

      window.location.href =
        'mailto:hamzatravel992@gmail.com';

    } else {

      window.open(
        'https://mail.google.com/mail/?view=cm&fs=1&to=hamzatravel992@gmail.com',
        '_blank'
      );

    }

  }


  openUpi(event: Event): void {

    event.preventDefault();

    const isMobile =
      /Android|iPhone|iPad|iPod|Mobile/i.test(
        navigator.userAgent
      );

    if (isMobile) {

      window.location.href =
        'upi://pay?pa=paytm.s2boq6c@pty&pn=Hamza%20Travels';

      return;
    }


    navigator.clipboard
      .writeText('paytm.s2boq6c@pty')
      .then(() => {

        this.upiCopied = true;

        // Notify Angular after async clipboard callback
        this.cdr.detectChanges();


        setTimeout(() => {

          this.upiCopied = false;

          // Notify Angular after timeout
          this.cdr.detectChanges();

        }, 3000);

      });

  }

}