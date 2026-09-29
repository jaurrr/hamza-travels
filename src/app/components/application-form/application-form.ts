import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import {
  ActivatedRoute,
  RouterLink
} from '@angular/router';

import {
  SERVICE_FORMS,
  FormField
} from '../../data/forms.data';

import { SERVICES } from '../../data/services.data';

@Component({
  selector: 'app-application-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './application-form.html',
  styleUrl: './application-form.css'
})
export class ApplicationForm implements OnInit {

  serviceId = '';
  serviceName = '';

  fields: FormField[] = [];

  applicationForm!: FormGroup;

  submitted = false;

  applicationSubmitted = false;

  serviceNotFound = false;


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute
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


    const serviceForm = SERVICE_FORMS.find(
      form => form.serviceId === this.serviceId
    );


    this.fields =
      serviceForm?.fields ?? [];


    const controls: Record<string, any> = {};


    this.fields.forEach(field => {

      const validators = [];


      // Required validation
      if (field.required) {

        validators.push(
          Validators.required
        );

      }


      // Mobile number validation
      if (field.name === 'mobile') {

        validators.push(
          Validators.pattern(
            /^[6-9][0-9]{9}$/
          )
        );

      }


      // Aadhaar number validation
      if (field.name === 'aadhaar') {

        validators.push(
          Validators.pattern(
            /^[0-9]{12}$/
          )
        );

      }


      // Create form control
      controls[field.name] = [
        '',
        validators
      ];

    });


    this.applicationForm =
      this.fb.group(controls);


    // Date relationship validation
    this.setupDateRelationshipValidation();

  }


  // =====================================================
  // DATE RELATIONSHIP VALIDATION
  // =====================================================

  private setupDateRelationshipValidation(): void {

    // Travel Date → Return Date
    if (
      this.applicationForm.get('travelDate') &&
      this.applicationForm.get('returnDate')
    ) {

      this.applicationForm
        .get('travelDate')!
        .valueChanges
        .subscribe(() => {

          this.validateDatePair(
            'travelDate',
            'returnDate'
          );

        });


      this.applicationForm
        .get('returnDate')!
        .valueChanges
        .subscribe(() => {

          this.validateDatePair(
            'travelDate',
            'returnDate'
          );

        });

    }


    // Check-in Date → Check-out Date
    if (
      this.applicationForm.get('checkIn') &&
      this.applicationForm.get('checkOut')
    ) {

      this.applicationForm
        .get('checkIn')!
        .valueChanges
        .subscribe(() => {

          this.validateDatePair(
            'checkIn',
            'checkOut'
          );

        });


      this.applicationForm
        .get('checkOut')!
        .valueChanges
        .subscribe(() => {

          this.validateDatePair(
            'checkIn',
            'checkOut'
          );

        });

    }

  }


  private validateDatePair(
    startDateField: string,
    endDateField: string
  ): void {

    const startDateControl =
      this.applicationForm.get(
        startDateField
      );

    const endDateControl =
      this.applicationForm.get(
        endDateField
      );


    if (
      !startDateControl ||
      !endDateControl
    ) {
      return;
    }


    const startDate =
      startDateControl.value;

    const endDate =
      endDateControl.value;


    // Do not apply relationship validation
    // until both dates have a value.
    if (!startDate || !endDate) {

      this.removeDateError(
        endDateControl
      );

      return;
    }


    const start =
      new Date(startDate);

    const end =
      new Date(endDate);


    // Return / Check-out date cannot
    // be earlier than Travel / Check-in date.
    if (end < start) {

      endDateControl.setErrors({
        ...endDateControl.errors,
        dateBeforeStart: true
      });

    } else {

      this.removeDateError(
        endDateControl
      );

    }

  }


  private removeDateError(
    control: any
  ): void {

    if (!control.errors) {
      return;
    }


    const errors = {
      ...control.errors
    };


    delete errors['dateBeforeStart'];


    control.setErrors(
      Object.keys(errors).length
        ? errors
        : null
    );

  }


  submitApplication(): void {

    // Prevent submission for invalid service
    if (this.serviceNotFound) {
      return;
    }


    this.submitted = true;

    this.applicationForm.markAllAsTouched();


    // Re-check date relationships before submission
    this.validateAllDateRelationships();


    // Stop if form is invalid
    if (this.applicationForm.invalid) {
      return;
    }


    const formData =
      this.applicationForm.value;


    let message =
      `*HAMZA TRAVELS - NEW APPLICATION*\n\n`;


    message +=
      `*Service:* ${this.serviceName}\n\n`;


    // Add all customer details
    this.fields.forEach(field => {

      const value =
        formData[field.name];


      if (
        value !== undefined &&
        value !== null &&
        value !== ''
      ) {

        message +=
          `*${field.label}:* ${value}\n`;

      }

    });


    message +=
      `\nPlease contact the customer for further processing.`;


    const whatsappNumber =
      '919935212224';


    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


    window.open(
      whatsappUrl,
      '_blank'
    );


    // Reset form
    this.applicationForm.reset();

    this.submitted = false;

    this.applicationSubmitted = true;

  }


  private validateAllDateRelationships(): void {

    // Travel Date → Return Date
    if (
      this.applicationForm.get('travelDate') &&
      this.applicationForm.get('returnDate')
    ) {

      this.validateDatePair(
        'travelDate',
        'returnDate'
      );

    }


    // Check-in Date → Check-out Date
    if (
      this.applicationForm.get('checkIn') &&
      this.applicationForm.get('checkOut')
    ) {

      this.validateDatePair(
        'checkIn',
        'checkOut'
      );

    }

  }


  isInvalid(
    fieldName: string
  ): boolean {

    const control =
      this.applicationForm.get(
        fieldName
      );


    return !!(
      control &&
      control.invalid &&
      (
        control.touched ||
        this.submitted
      )
    );

  }

}