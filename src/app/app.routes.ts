import { Routes } from '@angular/router';

import { Home } from './components/home/home';
import { Services } from './components/services/services';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { ServiceDetails } from './components/service-details/service-details';
import { ApplicationForm } from './components/application-form/application-form';
import { Explore } from './components/explore/explore';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'services',
    component: Services
  },
  {
    path: 'service/:id',
    component: ServiceDetails
  },
  {
    path: 'apply/:id',
    component: ApplicationForm
  },
  {
    path: 'about',
    component: About
  },
  {
    path: 'contact',
    component: Contact
  },
    {
    path: 'explore',
    component: Explore
  },

  {
    path: '**',
    redirectTo: ''
  }
];