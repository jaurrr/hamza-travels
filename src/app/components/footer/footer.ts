import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  faLink,
  faPhone
} from '@fortawesome/free-solid-svg-icons';

import {
  faInstagram,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  imports: [
    RouterLink,
    FontAwesomeModule
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

  faPhone = faPhone;
  faWhatsapp = faWhatsapp;
  faInstagram = faInstagram;
  faLink = faLink;

}