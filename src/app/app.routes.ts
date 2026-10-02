import { Routes } from '@angular/router';

import { Landing } from './components/landing/landing';
import { Home } from './components/home/home';
import { Services } from './components/services/services';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { ServiceDetails } from './components/service-details/service-details';
import { ApplicationForm } from './components/application-form/application-form';
import { Explore } from './components/explore/explore';
import { NotFound } from './components/not-found/not-found';

import { SeoData } from './core/seo.service';

function seo(
  titleKey: string,
  descKey: string,
  titleFallback: string,
  descFallback: string
): { seo: SeoData } {
  return {
    seo: { titleKey, descKey, titleFallback, descFallback }
  };
}

export const routes: Routes = [
  {
    path: '',
    component: Landing,
    data: seo(
      'seo.home.title',
      'seo.home.desc',
      'Hamza Travels — Flight, Train, Hotel Booking & Document Services',
      'Hamza Travels: flight/train/hotel booking, visa assistance, PAN, Aadhaar, passport & 46+ online and document services. Enquire on WhatsApp.'
    )
  },
  {
    path: 'services',
    component: Services,
    data: seo(
      'seo.services.title',
      'seo.services.desc',
      'All Services | Hamza Travels',
      'Browse 46+ services: travel booking, PAN, Aadhaar, passport, certificates, insurance, online forms and more with Hamza Travels.'
    )
  },
  {
    path: 'service/:id',
    component: ServiceDetails,
    data: seo(
      'seo.details.title',
      'seo.details.desc',
      'Service Details | Hamza Travels',
      'Service details, required documents and charges at Hamza Travels. Enquire now on WhatsApp.'
    )
  },
  {
    path: 'apply/:id',
    component: ApplicationForm,
    data: seo(
      'seo.apply.title',
      'seo.apply.desc',
      'Enquire Now | Hamza Travels',
      'Send a quick enquiry to Hamza Travels on WhatsApp. Our team will contact you for further processing.'
    )
  },
  {
    path: 'about',
    component: About,
    data: seo(
      'seo.about.title',
      'seo.about.desc',
      'About Us | Hamza Travels',
      'Hamza Travels — your convenient destination for online, government, document and travel-related services. Simple, fast & transparent.'
    )
  },
  {
    path: 'contact',
    component: Contact,
    data: seo(
      'seo.contact.title',
      'seo.contact.desc',
      'Contact Us | Hamza Travels',
      'Contact Hamza Travels on call, WhatsApp or email for travel bookings, document services and online applications.'
    )
  },
  {
    path: 'explore',
    component: Explore,
    data: seo(
      'seo.explore.title',
      'seo.explore.desc',
      'Explore Destinations | Hamza Travels',
      'Explore Makkah, Madinah, Dubai, Thailand, Kashmir, Goa and more with Hamza Travels. Plan your journey with us.'
    )
  },
  {
    path: '**',
    component: NotFound,
    data: seo(
      'seo.notfound.title',
      'seo.notfound.desc',
      'Page Not Found | Hamza Travels',
      'The page you are looking for does not exist. Visit Hamza Travels homepage.'
    )
  }
];
