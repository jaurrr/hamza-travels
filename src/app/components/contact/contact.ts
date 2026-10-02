import {
  ChangeDetectorRef,
  Component
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  BUSINESS_EMAIL,
  BUSINESS_PHONE,
  OWNER_PHONE,
  UPI_ID,
  telLink,
  upiLink,
  waGeneralEnquiry,
  waLink
} from '../../core/contact.constants';

import { TranslatePipe } from '../../core/translate.pipe';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  // ---- Centralised contact details (single source of truth) ----

  readonly businessPhone = BUSINESS_PHONE;
  readonly ownerPhone = OWNER_PHONE;
  readonly email = BUSINESS_EMAIL;
  readonly upiId = UPI_ID;

  // ---- Pre-built links ----

  readonly businessTelLink = telLink();
  readonly ownerTelLink = telLink(OWNER_PHONE);

  readonly generalWaLink = waGeneralEnquiry();

  readonly ownerWaLink = waLink(
    'Hi! I want to talk to the owner of Hamza Travels.',
    OWNER_PHONE
  );

  readonly documentsWaLink = waLink(
    'Hi Hamza Travels! I have a question about sharing documents.'
  );

  readonly paymentWaLink = waLink(
    'Hi Hamza Travels! I have a question about payment confirmation.'
  );

  readonly mailtoLink = `mailto:${BUSINESS_EMAIL}`;

  readonly upiPayLink = upiLink();

  readonly mapsUrl =
    'https://maps.app.goo.gl/uQiyJZ2Kj3GvEPdeA?g_st=ac';


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
        this.mailtoLink;

    } else {

      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${BUSINESS_EMAIL}`,
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
        this.upiPayLink;

      return;
    }


    navigator.clipboard
      .writeText(UPI_ID)
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
