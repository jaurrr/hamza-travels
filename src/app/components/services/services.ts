import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import {
  SERVICES,
  Service
} from '../../data/services.data';

import { TranslatePipe } from '../../core/translate.pipe';
import { TranslationService } from '../../core/translation.service';

@Component({
  selector: 'app-services',
  imports: [
    CommonModule,
    RouterLink,
    TranslatePipe
  ],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {

  services: Service[] = SERVICES;

  constructor(
    public i18n: TranslationService
  ) {}

  get travelServices(): Service[] {
    return this.services.filter(
      service => service.category === 'Travel Services'
    );
  }

  get governmentServices(): Service[] {
    return this.services.filter(
      service => service.category === 'Government & Document Services'
    );
  }

  get insuranceVehicleServices(): Service[] {
    return this.services.filter(
      service => service.category === 'Insurance & Vehicle Services'
    );
  }

  get otherServices(): Service[] {
    return this.services.filter(
      service =>
        service.category !== 'Travel Services' &&
        service.category !== 'Government & Document Services' &&
        service.category !== 'Insurance & Vehicle Services'
    );
  }

  getServiceIcon(serviceId: string): string {

    const icons: Record<string, string> = {

      // =========================
      // TRAVEL SERVICES
      // =========================

      'flight-ticket': 'fa-solid fa-plane',
      'train-ticket': 'fa-solid fa-train',
      'bus-ticket': 'fa-solid fa-bus',
      'visa-services': 'fa-solid fa-passport',
      'hotel-booking': 'fa-solid fa-hotel',
      'holiday-packages': 'fa-solid fa-umbrella-beach',
      'travel-insurance': 'fa-solid fa-shield-halved',
      'tour-travel': 'fa-solid fa-route',
      'hajj-umrah': 'fa-solid fa-kaaba',
      'gamca': 'fa-solid fa-clipboard-check',
      'car-booking': 'fa-solid fa-car',

      // =========================
      // GOVERNMENT & DOCUMENTS
      // =========================

      'aadhaar': 'fa-solid fa-id-card',
      'pan-card': 'fa-solid fa-id-card',
      'passport': 'fa-solid fa-passport',
      'driving-license': 'fa-solid fa-car',
      'birth-certificate': 'fa-solid fa-file-circle-plus',
      'death-certificate': 'fa-solid fa-file-circle-xmark',
      'ration-card': 'fa-solid fa-basket-shopping',
      'niwas-certificate': 'fa-solid fa-house',
      'income-certificate': 'fa-solid fa-file-invoice-dollar',
      'caste-certificate': 'fa-solid fa-file-lines',
      'ayushman-card': 'fa-solid fa-heart-pulse',
      'government-schemes': 'fa-solid fa-landmark',
      'voter-id': 'fa-solid fa-check-to-slot',
      'vidhwa-pension': 'fa-solid fa-hand-holding-heart',
      'vridha-pension': 'fa-solid fa-person-cane',
      'viklang-pension': 'fa-solid fa-wheelchair',
      'khatauni-khet-nakal': 'fa-solid fa-map',
      'electricity-bill': 'fa-solid fa-bolt',

      // =========================
      // INSURANCE & VEHICLE
      // =========================

      'life-insurance': 'fa-solid fa-heart',
      'insurance-policy': 'fa-solid fa-shield-halved',
      'bike-paper-renewal': 'fa-solid fa-motorcycle',
      'car-paper-renewal': 'fa-solid fa-car',
      'bike-insurance-renewal': 'fa-solid fa-motorcycle',
      'car-insurance-renewal': 'fa-solid fa-car-side',
      'e-challan': 'fa-solid fa-ticket',

      // =========================
      // BUSINESS
      // =========================

      'gst': 'fa-solid fa-file-invoice',
      'food-license': 'fa-solid fa-utensils',

      // =========================
      // EDUCATION
      // =========================

      'scholarship': 'fa-solid fa-graduation-cap',
      'college-forms': 'fa-solid fa-school',
      'exam-form': 'fa-solid fa-file-pen',
      'maharaja-suhel-dev-university': 'fa-solid fa-building-columns',

      // =========================
      // DOCUMENT
      // =========================

      'lamination': 'fa-solid fa-file-shield',
      'urgent-photo': 'fa-solid fa-camera',

      // =========================
      // ONLINE
      // =========================

      'online-filling-form': 'fa-solid fa-keyboard',
      'village-camping-all-work': 'fa-solid fa-globe'
    };

    return icons[serviceId] || 'fa-solid fa-file';
  }
}