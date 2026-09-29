import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

import {
  SERVICES,
  Service
} from '../../data/services.data';

@Component({
  selector: 'app-service-details',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './service-details.html',
  styleUrl: './service-details.css'
})
export class ServiceDetails implements OnInit {

  service: Service | undefined;

  constructor(
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
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