/**
 * Explore page destination catalogue.
 *
 * Display text (name / description) is resolved in the template via
 * the i18n keys `explore.dest.<key>.name` and `explore.dest.<key>.desc`,
 * so only the language-independent data lives here.
 */
export interface Destination {
  /** i18n key suffix, e.g. 'saudi-arabia' -> explore.dest.saudi-arabia.name */
  key: string;
  /** Image path under /public */
  image: string;
  /** Font Awesome icon class */
  icon: string;
}

export const DESTINATIONS: Destination[] = [
  {
    key: 'saudi-arabia',
    image: '/images/saudi-arabia.jpg',
    icon: 'fa-solid fa-mosque'
  },
  {
    key: 'makkah',
    image: '/images/makkah.jpg',
    icon: 'fa-solid fa-kaaba'
  },
  {
    key: 'madinah',
    image: '/images/madinah.jpg',
    icon: 'fa-solid fa-mosque'
  },
  {
    key: 'dubai',
    image: '/images/dubai.jpg',
    icon: 'fa-solid fa-city'
  },
  {
    key: 'kuwait',
    image: '/images/kuwait.jpg',
    icon: 'fa-solid fa-building'
  },
  {
    key: 'qatar',
    image: '/images/qatar.jpg',
    icon: 'fa-solid fa-building'
  },
  {
    key: 'thailand',
    image: '/images/thailand.jpg',
    icon: 'fa-solid fa-umbrella-beach'
  },
  {
    key: 'kashmir',
    image: '/images/kashmir.jpg',
    icon: 'fa-solid fa-mountain-sun'
  },
  {
    key: 'manali',
    image: '/images/manali.jpg',
    icon: 'fa-solid fa-mountain'
  },
  {
    key: 'goa',
    image: '/images/goa.jpg',
    icon: 'fa-solid fa-umbrella-beach'
  },
  {
    key: 'flight',
    image: '/images/flight.jpg',
    icon: 'fa-solid fa-plane'
  },
  {
    key: 'hotel',
    image: '/images/hotel.jpg',
    icon: 'fa-solid fa-hotel'
  }
];
