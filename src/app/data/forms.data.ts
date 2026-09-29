export interface FormField {
  name: string;

  label: string;

  type:
  | 'text'
  | 'tel'
  | 'email'
  | 'date'
  | 'number'
  | 'textarea'
  | 'select';

  placeholder?: string;

  required?: boolean;

  options?: string[];
}

export interface ServiceForm {
  serviceId: string;

  fields: FormField[];
}


// =====================================================
// COMMON REUSABLE FIELDS
// =====================================================

const fullNameField: FormField = {
  name: 'fullName',
  label: 'Full Name',
  type: 'text',
  placeholder: 'Enter your full name',
  required: true
};

const mobileField: FormField = {
  name: 'mobile',
  label: 'Mobile Number',
  type: 'tel',
  placeholder: 'Enter 10-digit mobile number',
  required: true
};

const aadhaarField: FormField = {
  name: 'aadhaar',
  label: 'Aadhaar Number',
  type: 'text',
  placeholder: 'Enter 12-digit Aadhaar number',
  required: true
};


// =====================================================
// SERVICE FORMS
// =====================================================

export const SERVICE_FORMS: ServiceForm[] = [

  // ===================================================
  // PAN CARD
  // ===================================================

  {
    serviceId: 'pan-card',

    fields: [
      fullNameField,

      mobileField,

      {
        name: 'dateOfBirth',
        label: 'Date of Birth',
        type: 'date',
        required: true
      }
    ]
  },


  // ===================================================
  // AADHAAR
  // ===================================================

  {
    serviceId: 'aadhaar',

    fields: [
      fullNameField,

      mobileField,

      aadhaarField,

      {
        name: 'serviceRequired',
        label: 'What Aadhaar service do you need?',
        type: 'select',

        options: [
          'New Aadhaar',
          'Address Correction',
          'Mobile Number Update',
          'Date of Birth Correction',
          'Photo Update',
          'Other Correction'
        ],

        required: true
      },

      {
        name: 'details',
        label: 'Additional Details',
        type: 'textarea',
        placeholder: 'Tell us what you want to change or update',
        required: false
      }
    ]
  },


  // ===================================================
  // PASSPORT
  // ===================================================

  {
    serviceId: 'passport',

    fields: [
      fullNameField,

      mobileField,

      {
        name: 'dateOfBirth',
        label: 'Date of Birth',
        type: 'date',
        required: true
      },

      aadhaarField,

      {
        name: 'details',
        label: 'Additional Details',
        type: 'textarea',
        placeholder: 'Enter any additional information',
        required: false
      }
    ]
  },


  // ===================================================
  // DRIVING LICENCE
  // ===================================================

  {
    serviceId: 'driving-license',

    fields: [
      fullNameField,

      mobileField,

      {
        name: 'dateOfBirth',
        label: 'Date of Birth',
        type: 'date',
        required: true
      },

      {
        name: 'serviceRequired',
        label: 'Driving Licence Service',
        type: 'select',

        options: [
          'New Driving Licence',
          'Learner Licence',
          'Licence Renewal',
          'Address Change',
          'Duplicate Licence',
          'Other'
        ],

        required: true
      },

      {
        name: 'details',
        label: 'Additional Details',
        type: 'textarea',
        placeholder: 'Enter additional details',
        required: false
      }
    ]
  },


  // ===================================================
  // NIWAS PRAMAN PATRA
  // ===================================================

  {
    serviceId: 'niwas-certificate',

    fields: [
      fullNameField,

      mobileField,

      aadhaarField,

      {
        name: 'address',
        label: 'Current Address',
        type: 'textarea',
        placeholder: 'Enter your complete address',
        required: true
      }
    ]
  },


  // ===================================================
  // AAY PRAMAN PATRA
  // ===================================================

  {
    serviceId: 'income-certificate',

    fields: [
      fullNameField,

      mobileField,

      aadhaarField,

      {
        name: 'occupation',
        label: 'Occupation',
        type: 'text',
        placeholder: 'Enter your occupation',
        required: true
      },

      {
        name: 'address',
        label: 'Current Address',
        type: 'textarea',
        placeholder: 'Enter your complete address',
        required: true
      }
    ]
  },


  // ===================================================
  // JATI PRAMAN PATRA
  // ===================================================

  {
    serviceId: 'caste-certificate',

    fields: [
      fullNameField,

      mobileField,

      aadhaarField,

      {
        name: 'category',
        label: 'Category',
        type: 'select',

        options: [
          'SC',
          'ST',
          'OBC',
          'Other'
        ],

        required: true
      },

      {
        name: 'details',
        label: 'Additional Details',
        type: 'textarea',
        placeholder: 'Enter additional details',
        required: false
      }
    ]
  },


  // ===================================================
  // SCHOLARSHIP
  // ===================================================

  {
    serviceId: 'scholarship',

    fields: [
      {
        name: 'fullName',
        label: 'Student Full Name',
        type: 'text',
        placeholder: 'Enter student name',
        required: true
      },

      mobileField,

      aadhaarField,

      {
        name: 'course',
        label: 'Course / Class',
        type: 'text',
        placeholder: 'Enter course or class',
        required: true
      },

      {
        name: 'details',
        label: 'Additional Details',
        type: 'textarea',
        placeholder: 'Enter scholarship details',
        required: false
      }
    ]
  },


  // ===================================================
  // AYUSHMAN CARD
  // ===================================================

  {
    serviceId: 'ayushman-card',

    fields: [
      fullNameField,

      mobileField,

      aadhaarField,

      {
        name: 'familyDetails',
        label: 'Family Details',
        type: 'textarea',
        placeholder: 'Enter family related details',
        required: true
      }
    ]
  },


  // ===================================================
  // GST SERVICES
  // ===================================================

  {
    serviceId: 'gst',

    fields: [
      {
        name: 'fullName',
        label: 'Applicant Name',
        type: 'text',
        placeholder: 'Enter applicant name',
        required: true
      },

      mobileField,

      {
        name: 'pan',
        label: 'PAN Number',
        type: 'text',
        placeholder: 'Enter PAN number',
        required: true
      },

      {
        name: 'businessName',
        label: 'Business Name',
        type: 'text',
        placeholder: 'Enter business name',
        required: true
      },

      {
        name: 'businessDetails',
        label: 'Business Details',
        type: 'textarea',
        placeholder: 'Enter business details',
        required: true
      }
    ]
  },


  // ===================================================
  // FOOD LICENCE
  // ===================================================

  {
    serviceId: 'food-license',

    fields: [
      {
        name: 'fullName',
        label: 'Applicant Name',
        type: 'text',
        placeholder: 'Enter applicant name',
        required: true
      },

      mobileField,

      {
        name: 'businessName',
        label: 'Business Name',
        type: 'text',
        placeholder: 'Enter business name',
        required: true
      },

      {
        name: 'businessType',
        label: 'Business Type',
        type: 'text',
        placeholder: 'Enter type of food business',
        required: true
      },

      {
        name: 'address',
        label: 'Business Address',
        type: 'textarea',
        placeholder: 'Enter complete business address',
        required: true
      }
    ]
  },


  // ===================================================
  // TRAIN TICKET
  // ===================================================

  {
    serviceId: 'train-ticket',

    fields: [
      {
        name: 'fullName',
        label: 'Passenger Name',
        type: 'text',
        placeholder: 'Enter passenger name',
        required: true
      },

      mobileField,

      {
        name: 'from',
        label: 'From',
        type: 'text',
        placeholder: 'Enter boarding station',
        required: true
      },

      {
        name: 'to',
        label: 'To',
        type: 'text',
        placeholder: 'Enter destination',
        required: true
      },

      {
        name: 'travelDate',
        label: 'Travel Date',
        type: 'date',
        required: true
      },

      {
        name: 'passengers',
        label: 'Number of Passengers',
        type: 'number',
        placeholder: 'Enter number of passengers',
        required: true
      },

      {
        name: 'details',
        label: 'Additional Details',
        type: 'textarea',
        placeholder: 'Enter passenger or travel details',
        required: false
      }
    ]
  },


  // ===================================================
  // FLIGHT TICKET
  // ===================================================

  {
    serviceId: 'flight-ticket',

    fields: [
      {
        name: 'fullName',
        label: 'Passenger Name',
        type: 'text',
        placeholder: 'Enter passenger name',
        required: true
      },

      mobileField,

      {
        name: 'from',
        label: 'From',
        type: 'text',
        placeholder: 'Enter departure city/airport',
        required: true
      },

      {
        name: 'to',
        label: 'To',
        type: 'text',
        placeholder: 'Enter destination city/airport',
        required: true
      },

      {
        name: 'travelDate',
        label: 'Travel Date',
        type: 'date',
        required: true
      },

      {
        name: 'passengers',
        label: 'Number of Passengers',
        type: 'number',
        placeholder: 'Enter number of passengers',
        required: true
      },

      {
        name: 'details',
        label: 'Additional Details',
        type: 'textarea',
        placeholder: 'Enter travel requirements',
        required: false
      }
    ]
  },


  // ===================================================
  // BUS TICKET
  // ===================================================

  {
    serviceId: 'bus-ticket',

    fields: [
      {
        name: 'fullName',
        label: 'Passenger Name',
        type: 'text',
        placeholder: 'Enter passenger name',
        required: true
      },

      mobileField,

      {
        name: 'from',
        label: 'From',
        type: 'text',
        placeholder: 'Enter boarding location',
        required: true
      },

      {
        name: 'to',
        label: 'To',
        type: 'text',
        placeholder: 'Enter destination',
        required: true
      },

      {
        name: 'travelDate',
        label: 'Travel Date',
        type: 'date',
        required: true
      },

      {
        name: 'passengers',
        label: 'Number of Passengers',
        type: 'number',
        placeholder: 'Enter number of passengers',
        required: true
      },

      {
        name: 'details',
        label: 'Additional Details',
        type: 'textarea',
        placeholder: 'Enter passenger or travel details',
        required: false
      }
    ]
  },


  // ===================================================
  // LAMINATION
  // ===================================================

  {
    serviceId: 'lamination',

    fields: [
      fullNameField,

      mobileField,

      {
        name: 'documentType',
        label: 'Document Type',
        type: 'text',
        placeholder: 'Enter document type',
        required: true
      }
    ]
  },


  // ===================================================
  // TOUR & TRAVEL
  // ===================================================

  {
    serviceId: 'tour-travel',

    fields: [
      fullNameField,

      mobileField,

      {
        name: 'destination',
        label: 'Travel Destination',
        type: 'text',
        placeholder: 'Enter destination',
        required: true
      },

      {
        name: 'travelDate',
        label: 'Travel Date',
        type: 'date',
        required: true
      },

      {
        name: 'passengers',
        label: 'Number of Travellers',
        type: 'number',
        placeholder: 'Enter number of travellers',
        required: true
      },

      {
        name: 'details',
        label: 'Travel Requirements',
        type: 'textarea',
        placeholder: 'Enter your travel requirements',
        required: false
      }
    ]
  },


  // ===================================================
  // HAJJ & UMRAH
  // ===================================================

  {
    serviceId: 'hajj-umrah',

    fields: [
      fullNameField,

      mobileField,

      {
        name: 'travelType',
        label: 'Travel Type',
        type: 'select',

        options: [
          'Hajj',
          'Umrah'
        ],

        required: true
      },

      {
        name: 'numberOfTravellers',
        label: 'Number of Travellers',
        type: 'number',
        placeholder: 'Enter number of travellers',
        required: true
      },

      {
        name: 'preferredDate',
        label: 'Preferred Travel Date',
        type: 'date',
        required: true
      },

      {
        name: 'passportStatus',
        label: 'Passport Status',
        type: 'select',

        options: [
          'Passport Available',
          'Passport Applied',
          'Passport Not Available'
        ],

        required: true
      },

      {
        name: 'details',
        label: 'Travel Requirements / Additional Details',
        type: 'textarea',
        placeholder: 'Enter your travel requirements or any additional details',
        required: false
      }
    ]
  },


  // ===================================================
  // E-CHALLAN
  // ===================================================

  {
    serviceId: 'e-challan',

    fields: [
      fullNameField,

      mobileField,

      {
        name: 'vehicleNumber',
        label: 'Vehicle Number',
        type: 'text',
        placeholder: 'Enter vehicle number',
        required: true
      },

      {
        name: 'challanNumber',
        label: 'Challan Number',
        type: 'text',
        placeholder: 'Enter challan number if available',
        required: false
      },

      {
        name: 'details',
        label: 'Additional Details',
        type: 'textarea',
        placeholder: 'Enter additional details',
        required: false
      }
    ]
  },


  // ===================================================
  // ELECTRICITY BILL
  // ===================================================

  {
    serviceId: 'electricity-bill',

    fields: [
      fullNameField,

      mobileField,

      {
        name: 'consumerNumber',
        label: 'Consumer Number',
        type: 'text',
        placeholder: 'Enter electricity consumer number',
        required: true
      },

      {
        name: 'details',
        label: 'Additional Details',
        type: 'textarea',
        placeholder: 'Enter any additional details',
        required: false
      }
    ]
  },


  // ===================================================
  // GOVERNMENT SCHEMES
  // ===================================================

  {
    serviceId: 'government-schemes',

    fields: [
      fullNameField,

      mobileField,

      aadhaarField,

      {
        name: 'schemeName',
        label: 'Scheme Name',
        type: 'text',
        placeholder: 'Enter government scheme name',
        required: true
      },

      {
        name: 'details',
        label: 'Additional Details',
        type: 'textarea',
        placeholder: 'Enter scheme related details',
        required: false
      }
    ]
  },


  // ===================================================
  // COLLEGE FORMS
  // ===================================================

  {
    serviceId: 'college-forms',

    fields: [
      {
        name: 'fullName',
        label: 'Student Full Name',
        type: 'text',
        placeholder: 'Enter student name',
        required: true
      },

      mobileField,

      aadhaarField,

      {
        name: 'collegeName',
        label: 'College Name',
        type: 'text',
        placeholder: 'Enter college name',
        required: true
      },

      {
        name: 'course',
        label: 'Course',
        type: 'text',
        placeholder: 'Enter course',
        required: true
      }
    ]
  },


  // ===================================================
  // EXAM FORM
  // ===================================================

  {
    serviceId: 'exam-form',

    fields: [
      {
        name: 'fullName',
        label: 'Student Full Name',
        type: 'text',
        placeholder: 'Enter student name',
        required: true
      },

      mobileField,

      {
        name: 'course',
        label: 'Course / Class',
        type: 'text',
        placeholder: 'Enter course or class',
        required: true
      },

      {
        name: 'examName',
        label: 'Exam Name',
        type: 'text',
        placeholder: 'Enter exam name',
        required: true
      },

      {
        name: 'details',
        label: 'Additional Details',
        type: 'textarea',
        placeholder: 'Enter exam related details',
        required: false
      }
    ]
  },


  // ===================================================
  // VOTER ID
  // ===================================================

  {
    serviceId: 'voter-id',

    fields: [
      fullNameField,

      mobileField,

      aadhaarField,

      {
        name: 'dateOfBirth',
        label: 'Date of Birth',
        type: 'date',
        required: true
      },

      {
        name: 'address',
        label: 'Current Address',
        type: 'textarea',
        placeholder: 'Enter complete address',
        required: true
      }
    ]
  },


  // ===================================================
  // URGENT PHOTO
  // ===================================================

  {
    serviceId: 'urgent-photo',

    fields: [
      fullNameField,

      mobileField,

      {
        name: 'photoType',
        label: 'Photo Type',
        type: 'select',

        options: [
          'Passport Size Photo',
          'Visa Photo',
          'ID Card Photo',
          'Other'
        ],

        required: true
      },

      {
        name: 'copies',
        label: 'Number of Copies',
        type: 'number',
        placeholder: 'Enter number of copies',
        required: true
      }
    ]
  },


  // ===================================================
  // VIDHWA PENSION
  // ===================================================

  {
    serviceId: 'vidhwa-pension',

    fields: [
      fullNameField,

      mobileField,

      aadhaarField,

      {
        name: 'bankDetails',
        label: 'Bank Account Details',
        type: 'text',
        placeholder: 'Enter bank account details',
        required: true
      }
    ]
  },


  // ===================================================
  // VRIDHA PENSION
  // ===================================================

  {
    serviceId: 'vridha-pension',

    fields: [
      fullNameField,

      mobileField,

      aadhaarField,

      {
        name: 'dateOfBirth',
        label: 'Date of Birth',
        type: 'date',
        required: true
      },

      {
        name: 'bankDetails',
        label: 'Bank Account Details',
        type: 'text',
        placeholder: 'Enter bank account details',
        required: true
      }
    ]
  },


  // ===================================================
  // GAMCA
  // ===================================================

  {
    serviceId: 'gamca',

    fields: [
      fullNameField,

      mobileField,

      {
        name: 'passportNumber',
        label: 'Passport Number',
        type: 'text',
        placeholder: 'Enter passport number',
        required: true
      },

      {
        name: 'country',
        label: 'Destination Country',
        type: 'text',
        placeholder: 'Enter destination country',
        required: true
      }
    ]
  },


  // ===================================================
  // CAR BOOKING
  // ===================================================

  {
    serviceId: 'car-booking',

    fields: [
      {
        name: 'fullName',
        label: 'Passenger Name',
        type: 'text',
        placeholder: 'Enter passenger name',
        required: true
      },

      mobileField,

      {
        name: 'pickupLocation',
        label: 'Pickup Location',
        type: 'text',
        placeholder: 'Enter pickup location',
        required: true
      },

      {
        name: 'destination',
        label: 'Destination',
        type: 'text',
        placeholder: 'Enter destination',
        required: true
      },

      {
        name: 'travelDate',
        label: 'Travel Date',
        type: 'date',
        required: true
      },

      {
        name: 'passengers',
        label: 'Number of Passengers',
        type: 'number',
        placeholder: 'Enter number of passengers',
        required: true
      },

      {
        name: 'details',
        label: 'Additional Details',
        type: 'textarea',
        placeholder: 'Enter any additional travel requirements',
        required: false
      }
    ]
  },


  // ===================================================
  // VIKLANG PENSION
  // ===================================================

  {
    serviceId: 'viklang-pension',

    fields: [
      fullNameField,

      mobileField,

      aadhaarField,

      {
        name: 'disabilityDetails',
        label: 'Disability Details',
        type: 'textarea',
        placeholder: 'Enter disability related details',
        required: true
      }
    ]
  },


  // ===================================================
  // KHATAUNI / KHET KI NAKAL
  // ===================================================

  {
    serviceId: 'khatauni-khet-nakal',

    fields: [
      fullNameField,

      mobileField,

      {
        name: 'ownerName',
        label: 'Land Owner Name',
        type: 'text',
        placeholder: 'Enter land owner name',
        required: true
      },

      {
        name: 'gataNumber',
        label: 'Khata / Gata Number',
        type: 'text',
        placeholder: 'Enter Khata or Gata number',
        required: true
      },

      {
        name: 'village',
        label: 'Village',
        type: 'text',
        placeholder: 'Enter village name',
        required: true
      },

      {
        name: 'details',
        label: 'Additional Land Details',
        type: 'textarea',
        placeholder: 'Enter additional land details',
        required: false
      }
    ]
  },


  // ===================================================
  // ONLINE FILLING FORM
  // ===================================================

  {
    serviceId: 'online-filling-form',

    fields: [
      fullNameField,

      mobileField,

      {
        name: 'formName',
        label: 'Form / Application Name',
        type: 'text',
        placeholder: 'Enter form name',
        required: true
      },

      {
        name: 'details',
        label: 'Application Details',
        type: 'textarea',
        placeholder: 'Enter details about the form you want to fill',
        required: true
      }
    ]
  },


  // ===================================================
  // VILLAGE CAMPING / ALL TYPES OF WORK
  // ===================================================

  {
    serviceId: 'village-camping-all-work',

    fields: [
      fullNameField,

      mobileField,

      {
        name: 'workType',
        label: 'Type of Work',
        type: 'text',
        placeholder: 'Enter the work you need',
        required: true
      },

      {
        name: 'details',
        label: 'Work Details',
        type: 'textarea',
        placeholder: 'Explain what work you need',
        required: true
      }
    ]
  },


  // ===================================================
  // MAHARAJA SUHEL DEV UNIVERSITY
  // ===================================================

  {
    serviceId: 'maharaja-suhel-dev-university',

    fields: [
      {
        name: 'fullName',
        label: 'Student Full Name',
        type: 'text',
        placeholder: 'Enter student name',
        required: true
      },

      mobileField,

      {
        name: 'universityService',
        label: 'University Service',
        type: 'select',

        options: [
          'Admission Form',
          'Exam Form',
          'Enrollment',
          'Result Related Service',
          'Scholarship',
          'Migration',
          'Other'
        ],

        required: true
      },

      {
        name: 'course',
        label: 'Course',
        type: 'text',
        placeholder: 'Enter course name',
        required: true
      },

      {
        name: 'details',
        label: 'Additional Details',
        type: 'textarea',
        placeholder: 'Enter university related details',
        required: false
      }
    ]
  },


  // ===================================================
  // VISA SERVICES
  // ===================================================

  {
    serviceId: 'visa-services',

    fields: [
      fullNameField,

      mobileField,

      {
        name: 'passportNumber',
        label: 'Passport Number',
        type: 'text',
        placeholder: 'Enter passport number',
        required: true
      },

      {
        name: 'country',
        label: 'Destination Country',
        type: 'text',
        placeholder: 'Enter destination country',
        required: true
      },

      {
        name: 'visaType',
        label: 'Visa Type',
        type: 'select',

        options: [
          'Tourist Visa',
          'Business Visa',
          'Student Visa',
          'Work Visa',
          'Other'
        ],

        required: true
      },

      {
        name: 'travelDate',
        label: 'Expected Travel Date',
        type: 'date',
        required: false
      }
    ]
  },


  // ===================================================
  // LIFE INSURANCE
  // ===================================================

  {
    serviceId: 'life-insurance',

    fields: [
      fullNameField,

      mobileField,

      {
        name: 'dateOfBirth',
        label: 'Date of Birth',
        type: 'date',
        required: true
      },

      {
        name: 'occupation',
        label: 'Occupation',
        type: 'text',
        placeholder: 'Enter your occupation',
        required: true
      },

      {
        name: 'insuranceRequirement',
        label: 'Insurance Requirement',
        type: 'textarea',
        placeholder: 'Tell us about your insurance requirement',
        required: true
      }
    ]
  },


  // ===================================================
  // INSURANCE POLICY
  // ===================================================

  {
    serviceId: 'insurance-policy',

    fields: [
      fullNameField,

      mobileField,

      {
        name: 'policyType',
        label: 'Policy Type',
        type: 'select',

        options: [
          'Life Insurance',
          'Health Insurance',
          'Vehicle Insurance',
          'Travel Insurance',
          'Other'
        ],

        required: true
      },

      {
        name: 'policyDetails',
        label: 'Policy Details',
        type: 'textarea',
        placeholder: 'Enter your insurance requirement or existing policy details',
        required: true
      }
    ]
  },


  // ===================================================
  // BIKE PAPER RENEWAL
  // ===================================================

  {
    serviceId: 'bike-paper-renewal',

    fields: [
      fullNameField,

      mobileField,

      {
        name: 'vehicleNumber',
        label: 'Bike Number',
        type: 'text',
        placeholder: 'Enter bike registration number',
        required: true
      },

      {
        name: 'expiryDate',
        label: 'Paper Expiry Date',
        type: 'date',
        required: false
      },

      {
        name: 'details',
        label: 'Vehicle Details',
        type: 'textarea',
        placeholder: 'Enter any additional vehicle details',
        required: false
      }
    ]
  },


  // ===================================================
  // CAR PAPER RENEWAL
  // ===================================================

  {
    serviceId: 'car-paper-renewal',

    fields: [
      fullNameField,

      mobileField,

      {
        name: 'vehicleNumber',
        label: 'Car Number',
        type: 'text',
        placeholder: 'Enter car registration number',
        required: true
      },

      {
        name: 'expiryDate',
        label: 'Paper Expiry Date',
        type: 'date',
        required: false
      },

      {
        name: 'details',
        label: 'Vehicle Details',
        type: 'textarea',
        placeholder: 'Enter any additional vehicle details',
        required: false
      }
    ]
  },


  // ===================================================
  // BIKE INSURANCE RENEWAL
  // ===================================================

  {
    serviceId: 'bike-insurance-renewal',

    fields: [
      fullNameField,

      mobileField,

      {
        name: 'vehicleNumber',
        label: 'Bike Number',
        type: 'text',
        placeholder: 'Enter bike registration number',
        required: true
      },

      {
        name: 'policyExpiryDate',
        label: 'Policy Expiry Date',
        type: 'date',
        required: false
      },

      {
        name: 'details',
        label: 'Additional Details',
        type: 'textarea',
        placeholder: 'Enter insurance related details',
        required: false
      }
    ]
  },


  // ===================================================
  // CAR INSURANCE RENEWAL
  // ===================================================

  {
    serviceId: 'car-insurance-renewal',

    fields: [
      fullNameField,

      mobileField,

      {
        name: 'vehicleNumber',
        label: 'Car Number',
        type: 'text',
        placeholder: 'Enter car registration number',
        required: true
      },

      {
        name: 'policyExpiryDate',
        label: 'Policy Expiry Date',
        type: 'date',
        required: false
      },

      {
        name: 'details',
        label: 'Additional Details',
        type: 'textarea',
        placeholder: 'Enter insurance related details',
        required: false
      }
    ]
  },


  // ===================================================
  // HOTEL BOOKING
  // ===================================================

  {
    serviceId: 'hotel-booking',

    fields: [
      fullNameField,

      mobileField,

      {
        name: 'destination',
        label: 'Destination',
        type: 'text',
        placeholder: 'Enter city or destination',
        required: true
      },

      {
        name: 'checkIn',
        label: 'Check-in Date',
        type: 'date',
        required: true
      },

      {
        name: 'checkOut',
        label: 'Check-out Date',
        type: 'date',
        required: true
      },

      {
        name: 'guests',
        label: 'Number of Guests',
        type: 'number',
        placeholder: 'Enter number of guests',
        required: true
      },

      {
        name: 'rooms',
        label: 'Number of Rooms',
        type: 'number',
        placeholder: 'Enter number of rooms',
        required: true
      },

      {
        name: 'details',
        label: 'Hotel Requirements',
        type: 'textarea',
        placeholder: 'Enter any hotel preferences or requirements',
        required: false
      }
    ]
  },


  // ===================================================
  // TRAVEL INSURANCE
  // ===================================================

  {
    serviceId: 'travel-insurance',

    fields: [
      fullNameField,

      mobileField,

      {
        name: 'destination',
        label: 'Travel Destination',
        type: 'text',
        placeholder: 'Enter destination country',
        required: true
      },

      {
        name: 'travelDate',
        label: 'Travel Date',
        type: 'date',
        required: true
      },

      {
        name: 'returnDate',
        label: 'Return Date',
        type: 'date',
        required: true
      },

      {
        name: 'travellers',
        label: 'Number of Travellers',
        type: 'number',
        placeholder: 'Enter number of travellers',
        required: true
      },

      {
        name: 'details',
        label: 'Insurance Requirements',
        type: 'textarea',
        placeholder: 'Enter your travel insurance requirements',
        required: false
      }
    ]
  },


  // ===================================================
  // HOLIDAY PACKAGES
  // ===================================================

  {
    serviceId: 'holiday-packages',

    fields: [
      fullNameField,

      mobileField,

      {
        name: 'destination',
        label: 'Holiday Destination',
        type: 'text',
        placeholder: 'Enter destination',
        required: true
      },

      {
        name: 'travelDate',
        label: 'Travel Date',
        type: 'date',
        required: true
      },

      {
        name: 'numberOfTravellers',
        label: 'Number of Travellers',
        type: 'number',
        placeholder: 'Enter number of travellers',
        required: true
      },

      {
        name: 'budget',
        label: 'Approximate Budget',
        type: 'number',
        placeholder: 'Enter approximate budget',
        required: false
      },

      {
        name: 'details',
        label: 'Holiday Requirements',
        type: 'textarea',
        placeholder: 'Tell us about your holiday requirements',
        required: false
      }
    ]
  },


  // ===================================================
  // RATION CARD
  // ===================================================

  {
    serviceId: 'ration-card',

    fields: [
      fullNameField,

      mobileField,

      aadhaarField,

      {
        name: 'familyMembers',
        label: 'Number of Family Members',
        type: 'number',
        placeholder: 'Enter number of family members',
        required: true
      },

      {
        name: 'address',
        label: 'Current Address',
        type: 'textarea',
        placeholder: 'Enter your complete address',
        required: true
      },

      {
        name: 'details',
        label: 'Additional Details',
        type: 'textarea',
        placeholder: 'Enter any additional details',
        required: false
      }
    ]
  },


  // ===================================================
  // BIRTH CERTIFICATE
  // ===================================================

  {
    serviceId: 'birth-certificate',

    fields: [
      fullNameField,

      mobileField,

      {
        name: 'childName',
        label: 'Child Name',
        type: 'text',
        placeholder: 'Enter child name',
        required: true
      },

      {
        name: 'dateOfBirth',
        label: 'Date of Birth',
        type: 'date',
        required: true
      },

      {
        name: 'fatherName',
        label: 'Father Name',
        type: 'text',
        placeholder: 'Enter father name',
        required: true
      },

      {
        name: 'motherName',
        label: 'Mother Name',
        type: 'text',
        placeholder: 'Enter mother name',
        required: true
      },

      {
        name: 'placeOfBirth',
        label: 'Place of Birth',
        type: 'text',
        placeholder: 'Enter place of birth',
        required: true
      }
    ]
  },


  // ===================================================
  // DEATH CERTIFICATE
  // ===================================================

  {
    serviceId: 'death-certificate',

    fields: [
      fullNameField,

      mobileField,

      {
        name: 'deceasedName',
        label: 'Deceased Person Name',
        type: 'text',
        placeholder: 'Enter deceased person name',
        required: true
      },

      {
        name: 'dateOfDeath',
        label: 'Date of Death',
        type: 'date',
        required: true
      },

      {
        name: 'placeOfDeath',
        label: 'Place of Death',
        type: 'text',
        placeholder: 'Enter place of death',
        required: true
      },

      {
        name: 'relation',
        label: 'Your Relation With Deceased',
        type: 'text',
        placeholder: 'Enter your relation',
        required: true
      },

      {
        name: 'details',
        label: 'Additional Details',
        type: 'textarea',
        placeholder: 'Enter any additional details',
        required: false
      }
    ]
  }

];