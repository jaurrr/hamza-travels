import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  ActivatedRoute,
  convertToParamMap
} from '@angular/router';

import { of } from 'rxjs';

import { ServiceDetails } from './service-details';

describe('ServiceDetails', () => {

  let component: ServiceDetails;
  let fixture: ComponentFixture<ServiceDetails>;


  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [ServiceDetails],

      providers: [
        {
          provide: ActivatedRoute,

          useValue: {
            paramMap: of(
              convertToParamMap({
                id: 'pan-card'
              })
            )
          }

        }
      ]

    }).compileComponents();


    fixture =
      TestBed.createComponent(ServiceDetails);

    component =
      fixture.componentInstance;

    await fixture.whenStable();

  });


  it('should create', () => {

    expect(component).toBeTruthy();

  });

});