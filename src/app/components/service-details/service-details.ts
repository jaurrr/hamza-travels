import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

import {
  SERVICES,
  Service
} from '../../data/services.data';

import { TranslatePipe } from '../../core/translate.pipe';
import { TranslationService } from '../../core/translation.service';

@Component({
  selector: 'app-service-details',
  imports: [
    CommonModule,
    RouterLink,
    TranslatePipe
  ],
  templateUrl: './service-details.html',
  styleUrl: './service-details.css'
})
export class ServiceDetails implements OnInit {

  service: Service | undefined;

  constructor(
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    public i18n: TranslationService
  ) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      const serviceId = params.get('id');

      this.service = SERVICES.find(
        service => service.id === serviceId
      );

      this.cdr.detectChanges();

    });

  }

}