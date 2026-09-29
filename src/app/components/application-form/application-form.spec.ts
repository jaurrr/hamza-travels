import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  ActivatedRoute,
  convertToParamMap
} from '@angular/router';

import { ApplicationForm } from './application-form';

describe('ApplicationForm', () => {

  let component: ApplicationForm;
  let fixture: ComponentFixture<ApplicationForm>;


  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [ApplicationForm],

      providers: [
        {
          provide: ActivatedRoute,

          useValue: {
            snapshot: {
              paramMap: convertToParamMap({
                id: 'pan-card'
              })
            }
          }

        }
      ]

    }).compileComponents();


    fixture =
      TestBed.createComponent(ApplicationForm);

    component =
      fixture.componentInstance;

    await fixture.whenStable();

  });


  it('should create', () => {

    expect(component).toBeTruthy();

  });

});