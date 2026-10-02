import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ActivatedRoute,
  RouterLink
} from '@angular/router';

import { SERVICES } from '../../data/services.data';

import { TranslatePipe } from '../../core/translate.pipe';
import { TranslationService } from '../../core/translation.service';

import {
  waLink,
  waServiceEnquiry
} from '../../core/contact.constants';

@Component({
  selector: 'app-application-form',
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    TranslatePipe
  ],
  templateUrl: './application-form.html',
  styleUrl: './application-form.css'
})
export class ApplicationForm implements OnInit {

  serviceId = '';
  serviceName = '';

  customerName = '';

  enquirySent = false;

  serviceNotFound = false;


  constructor(
    private route: ActivatedRoute,
    public i18n: TranslationService
  ) {}


  ngOnInit(): void {

    this.serviceId =
      this.route.snapshot.paramMap.get('id') ?? '';


    const service = SERVICES.find(
      service => service.id === this.serviceId
    );


    // Stop if service ID is invalid
    if (!service) {

      this.serviceNotFound = true;

      return;
    }


    this.serviceName =
      service.name;

  }


  submitEnquiry(): void {

    // Prevent submission for invalid service
    if (this.serviceNotFound) {
      return;
    }


    // Service name in the current language, English fallback.
    const serviceName =
      this.i18n.serviceName(
        this.serviceId,
        this.serviceName
      );


    const name =
      this.customerName.trim();


    const url = name
      ? waLink(
          `Hi Hamza Travels! I want to enquire about ${serviceName}. My name is ${name}.`
        )
      : waServiceEnquiry(serviceName);


    window.open(
      url,
      '_blank'
    );


    // Reset and show success
    this.customerName = '';

    this.enquirySent = true;

  }

}
