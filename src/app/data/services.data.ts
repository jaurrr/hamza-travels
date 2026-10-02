export interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  requirements: string[];
  charge: string;
}

export const SERVICES: Service[] = [

  // =====================================================
  // TRAVEL SERVICES
  // =====================================================

  {
    id: 'flight-ticket',
    name: 'Flight Ticket Booking',
    category: 'Travel Services',
    description: 'Domestic and international flight ticket booking assistance.',
    requirements: [
      'Passenger Details',
      'Travel Details',
      'Valid ID / Passport'
    ],
    charge: 'Contact us for charges'
  },

  {
    id: 'train-ticket',
    name: 'Train Ticket Booking',
    category: 'Travel Services',
    description: 'Train ticket booking assistance for your journey.',
    requirements: [
      'Passenger Details',
      'Travel Details'
    ],
    charge: 'Contact us for charges'
  },

  {
    id: 'bus-ticket',
    name: 'Bus Ticket Booking',
    category: 'Travel Services',
    description: 'Bus ticket booking assistance for different routes.',
    requirements: [
      'Passenger Details',
      'Travel Details'
    ],
    charge: 'Contact us for charges'
  },

  {
    id: 'visa-services',
    name: 'Visa Assistance',
    category: 'Travel Services',
    description: 'Assistance with visa applications and related travel documentation.',
    requirements: [
      'Passport',
      'Personal Details',
      'Destination Country',
      'Required Visa Documents'
    ],
    charge: 'Contact us for charges'
  },

  {
    id: 'hotel-booking',
    name: 'Hotel Booking',
    category: 'Travel Services',
    description: 'Hotel booking assistance for domestic and international travel.',
    requirements: [
      'Customer Details',
      'Destination',
      'Check-in Date',
      'Check-out Date'
    ],
    charge: 'Contact us for charges'
  },

  {
    id: 'holiday-packages',
    name: 'Holiday Packages',
    category: 'Travel Services',
    description: 'Assistance with holiday packages, travel planning and arrangements.',
    requirements: [
      'Customer Details',
      'Travel Destination',
      'Travel Dates',
      'Number of Travellers'
    ],
    charge: 'Contact us for charges'
  },

  {
    id: 'travel-insurance',
    name: 'Travel Insurance',
    category: 'Travel Services',
    description: 'Assistance with travel insurance requirements for your journey.',
    requirements: [
      'Customer Details',
      'Destination',
      'Travel Dates',
      'Traveller Details'
    ],
    charge: 'Contact us for charges'
  },

  {
    id: 'tour-travel',
    name: 'Tour & Travel Services',
    category: 'Travel Services',
    description: 'Assistance with tour planning, travel arrangements and related services.',
    requirements: [
      'Customer Details',
      'Travel Destination',
      'Travel Dates'
    ],
    charge: 'Contact us for charges'
  },

  {
    id: 'hajj-umrah',
    name: 'Hajj & Umrah Services',
    category: 'Travel Services',
    description: 'Assistance with Hajj and Umrah travel arrangements and related services.',
    requirements: [
      'Passport',
      'Personal Details',
      'Travel Details'
    ],
    charge: 'Contact us for charges'
  },

  {
    id: 'gamca',
    name: 'GAMCA Medical Services',
    category: 'Travel Services',
    description: 'Assistance with GAMCA related registration and appointment services.',
    requirements: [
      'Passport',
      'Personal Details',
      'Required Documents'
    ],
    charge: 'Contact us for charges'
  },
  // =========================
// CAR BOOKING
// =========================

// =====================================================
// CAR BOOKING
// =====================================================

{
  id: 'car-booking',
  name: 'Car Booking',
  category: 'Travel Services',
  description: 'Car booking assistance for local and outstation travel.',
  requirements: [
    'Passenger Name',
    'Mobile Number',
    'Pickup Location',
    'Destination',
    'Travel Date',
    'Number of Passengers'
  ],
  charge: 'Contact us for charges'
},

  // =====================================================
  // GOVERNMENT & DOCUMENT SERVICES
  // =====================================================

  {
    id: 'aadhaar',
    name: 'Aadhaar Card Services',
    category: 'Government & Document Services',
    description: 'Aadhaar card application and correction assistance.',
    requirements: [
      'Aadhaar Card',
      'Supporting Document as Required',
      'Appointment may be Required',
      'Birth Certificate',
      'Mobile Number'
    ],
    charge: 'Contact us for charges'
  },

  {
    id: 'pan-card',
    name: 'PAN Card Services',
    category: 'Government & Document Services',
    description: 'PAN card application and related assistance.',
    requirements: [
      'Aadhaar Card',
      'Passport Size Photo',
      'Signature',
      'Mobile Number',
      'Email ID'
    ],
    charge: 'Contact us for charges'
  },

  {
    id: 'passport',
    name: 'Passport Services & PCC',
    category: 'Government & Document Services',
    description: 'Passport application and related assistance.',
    requirements: [
      'Aadhaar Card',
      'PAN Card',
      'Bank Passbook',
      'High School Marksheet if Available'
    ],
    charge: 'Contact us for charges'
  },

  {
    id: 'driving-license',
    name: 'Driving License Services',
    category: 'Government & Document Services',
    description: 'Driving licence application and related assistance.',
    requirements: [
      'Aadhaar Card',
      'Blood Group',
      'Photo',
      'Signature'
    ],
    charge: 'Contact us for charges'
  },

  {
    id: 'birth-certificate',
    name: 'Birth Certificate',
    category: 'Government & Document Services',
    description: 'Assistance with birth certificate applications and related services.',
    requirements: [
      'Child Details',
      'Date of Birth',
      'Father Name',
      'Mother Name',
      'Place of Birth'
    ],
    charge: 'Contact us for charges'
  },

  {
    id: 'death-certificate',
    name: 'Death Certificate',
    category: 'Government & Document Services',
    description: 'Assistance with death certificate applications and related services.',
    requirements: [
      'Deceased Person Details',
      'Date of Death',
      'Place of Death',
      'Required Supporting Documents'
    ],
    charge: 'Contact us for charges'
  },

  {
    id: 'ration-card',
    name: 'Ration Card Services',
    category: 'Government & Document Services',
    description: 'Assistance with ration card applications and related services.',
    requirements: [
      'Aadhaar Card',
      'Family Details',
      'Address Details',
      'Required Documents'
    ],
    charge: 'Contact us for charges'
  },

  {
    id: 'niwas-certificate',
    name: 'Residence Certificate',
    category: 'Government & Document Services',
    description: 'Assistance with residence certificate applications.',
    requirements: [
      'Aadhaar Card',
      'Address Proof'
    ],
    charge: 'Contact us for charges'
  },

  {
    id: 'income-certificate',
    name: 'Income Certificate',
    category: 'Government & Document Services',
    description: 'Assistance with income certificate applications.',
    requirements: [
      'Aadhaar Card',
      'Income Related Documents'
    ],
    charge: 'Contact us for charges'
  },

  {
    id: 'caste-certificate',
    name: 'Caste Certificate',
    category: 'Government & Document Services',
    description: 'Assistance with caste certificate applications.',
    requirements: [
      'Aadhaar Card',
      'Supporting Documents'
    ],
    charge: 'Contact us for charges'
  },

  {
    id: 'ayushman-card',
    name: 'Ayushman Card & All Beneficiary Cards',
    category: 'Government & Document Services',
    description: 'Assistance with Ayushman Card related services.',
    requirements: [
      'Aadhaar Card',
      'Required Family Details'
    ],
    charge: 'Contact us for charges'
  },

  {
    id: 'government-schemes',
    name: 'Government Scheme Services',
    category: 'Government & Document Services',
    description: 'Assistance with online applications for various government schemes.',
    requirements: [
      'Aadhaar Card',
      'Mobile Number',
      'Required Scheme Documents'
    ],
    charge: 'Contact us for charges'
  },

  {
    id: 'voter-id',
    name: 'Voter ID Services',
    category: 'Government & Document Services',
    description: 'Assistance with Voter ID application and related services.',
    requirements: [
      'Aadhaar Card',
      'Address Proof',
      'Passport Size Photo'
    ],
    charge: 'Contact us for charges'
  },

  {
    id: 'vidhwa-pension',
    name: 'Widow Pension',
    category: 'Government & Document Services',
    description: 'Assistance with online widow pension applications and related services.',
    requirements: [
      'Aadhaar Card',
      'Bank Account Details',
      'Required Supporting Documents'
    ],
    charge: 'Contact us for charges'
  },

  {
    id: 'vridha-pension',
    name: 'Old Age Pension',
    category: 'Government & Document Services',
    description: 'Assistance with online old age pension applications and related services.',
    requirements: [
      'Aadhaar Card',
      'Bank Account Details',
      'Required Supporting Documents'
    ],
    charge: 'Contact us for charges'
  },

  {
    id: 'viklang-pension',
    name: 'Divyang Pension',
    category: 'Government & Document Services',
    description: 'Assistance with disability pension applications and related services.',
    requirements: [
      'Aadhaar Card',
      'Bank Account Details',
      'Disability Certificate',
      'Required Supporting Documents'
    ],
    charge: 'Contact us for charges'
  },

  {
    id: 'khatauni-khet-nakal',
    name: 'Land Record / Khatauni Copy',
    category: 'Government & Document Services',
    description: 'Assistance with online land records, Khatauni and Khet Ki Nakal related services.',
    requirements: [
      'Land Details',
      'Khata / Gata Number if Available',
      'Owner Details'
    ],
    charge: 'Contact us for charges'
  },

  {
    id: 'electricity-bill',
    name: 'Electricity Bill Services',
    category: 'Government & Document Services',
    description: 'Electricity bill checking and online payment assistance.',
    requirements: [
      'Electricity Consumer Number',
      'Registered Details if Required'
    ],
    charge: 'Contact us for charges'
  },


  // =====================================================
  // INSURANCE & VEHICLE SERVICES
  // =====================================================

  {
    id: 'life-insurance',
    name: 'Life Insurance',
    category: 'Insurance & Vehicle Services',
    description: 'Assistance with life insurance related requirements and applications.',
    requirements: [
      'Applicant Details',
      'Date of Birth',
      'Occupation',
      'Required Documents'
    ],
    charge: 'Contact us for charges'
  },

  {
    id: 'insurance-policy',
    name: 'Insurance Policy Services',
    category: 'Insurance & Vehicle Services',
    description: 'Assistance with different types of insurance policies.',
    requirements: [
      'Customer Details',
      'Policy Type',
      'Required Documents'
    ],
    charge: 'Contact us for charges'
  },

  {
    id: 'bike-paper-renewal',
    name: 'Bike Document Renewal / RC',
    category: 'Insurance & Vehicle Services',
    description: 'Assistance with bike documents and paper renewal related services.',
    requirements: [
      'Bike Registration Number',
      'Owner Details',
      'Existing Vehicle Documents'
    ],
    charge: 'Contact us for charges'
  },

  {
    id: 'car-paper-renewal',
    name: 'Car Document Renewal / RC',
    category: 'Insurance & Vehicle Services',
    description: 'Assistance with car documents and paper renewal related services.',
    requirements: [
      'Car Registration Number',
      'Owner Details',
      'Existing Vehicle Documents'
    ],
    charge: 'Contact us for charges'
  },

  {
    id: 'bike-insurance-renewal',
    name: 'Bike Insurance Renewal',
    category: 'Insurance & Vehicle Services',
    description: 'Assistance with bike insurance renewal.',
    requirements: [
      'Bike Registration Number',
      'Existing Policy Details',
      'Owner Details'
    ],
    charge: 'Contact us for charges'
  },

  {
    id: 'car-insurance-renewal',
    name: 'Car Insurance Renewal',
    category: 'Insurance & Vehicle Services',
    description: 'Assistance with car insurance renewal.',
    requirements: [
      'Car Registration Number',
      'Existing Policy Details',
      'Owner Details'
    ],
    charge: 'Contact us for charges'
  },

  {
    id: 'e-challan',
    name: 'E-Challan Services',
    category: 'Insurance & Vehicle Services',
    description: 'Assistance with online e-challan checking and related services.',
    requirements: [
      'Vehicle Number',
      'Challan Details if Available'
    ],
    charge: 'Contact us for charges'
  },


  // =====================================================
  // BUSINESS SERVICES
  // =====================================================

  {
    id: 'gst',
    name: 'GST Registration & Services',
    category: 'Business Services',
    description: 'Assistance with GST related online services.',
    requirements: [
      'Aadhaar Card',
      'PAN Card',
      'Business Details'
    ],
    charge: 'Contact us for charges'
  },

  {
    id: 'food-license',
    name: 'FSSAI Food License',
    category: 'Business Services',
    description: 'Assistance with food licence related applications.',
    requirements: [
      'Aadhaar Card',
      'Business Details',
      'Required Supporting Documents'
    ],
    charge: 'Contact us for charges'
  },


  // =====================================================
  // EDUCATION SERVICES
  // =====================================================

  {
    id: 'scholarship',
    name: 'Scholarship Services',
    category: 'Education Services',
    description: 'Assistance with online scholarship forms.',
    requirements: [
      'Aadhaar Card',
      'Marksheet',
      'Bank Details'
    ],
    charge: 'Contact us for charges'
  },

  {
    id: 'college-forms',
    name: 'College Admission Forms',
    category: 'Education Services',
    description: 'Assistance with online college admission and other college forms.',
    requirements: [
      'Student Details',
      'Educational Documents',
      'Passport Size Photo',
      'Required Documents'
    ],
    charge: 'Contact us for charges'
  },

  {
    id: 'exam-form',
    name: 'Examination Form Services',
    category: 'Education Services',
    description: 'Assistance with online examination forms and related applications.',
    requirements: [
      'Student Details',
      'Educational Details',
      'Required Documents'
    ],
    charge: 'Contact us for charges'
  },

  {
    id: 'maharaja-suhel-dev-university',
    name: 'Maharaja Suhel Dev University and other College Services',
    category: 'Education Services',
    description: 'Assistance with Maharaja Suhel Dev University online forms and related services.',
    requirements: [
      'Student Details',
      'University Details',
      'Required Educational Documents'
    ],
    charge: 'Contact us for charges'
  },


  // =====================================================
  // DOCUMENT SERVICES
  // =====================================================

  {
    id: 'lamination',
    name: 'Document Lamination',
    category: 'Document Services',
    description: 'Lamination service for documents, certificates and important papers.',
    requirements: [
      'Document to be Laminated'
    ],
    charge: 'Contact us for charges'
  },

  {
    id: 'urgent-photo',
    name: 'Urgent Photo & ID Photo Services',
    category: 'Document Services',
    description: 'Urgent passport size and document photo services.',
    requirements: [
      'Customer Presence'
    ],
    charge: 'Contact us for charges'
  },


  // =====================================================
  // ONLINE SERVICES
  // =====================================================

  {
    id: 'online-filling-form',
    name: 'Online Form Filling Services',
    category: 'Online Services',
    description: 'Assistance with filling various online forms and applications.',
    requirements: [
      'Required Application Details',
      'Required Documents',
      'Mobile Number'
    ],
    charge: 'Contact us for charges'
  },

  {
    id: 'village-camping-all-work',
    name: 'Village Camp / All Types of Services',
    category: 'Online Services',
    description: 'Assistance with various online, government and document related work.',
    requirements: [
      'Customer Details',
      'Required Documents as per Work'
    ],
    charge: 'Contact us for charges'
  }
];