export const COLORS = {
  primary: '#0D49CD', // Super Blue
  action: '#3AD2FF',  // Psychedelic Aqua
  text: '#333333',    // Dark Gray
  bg: '#F9F9F9',      // Light Gray
};

export const LOGO_URL = 'https://lh3.googleusercontent.com/d/1837fEh1D-5nM94fUeES3ldp3A8OpSokg';

export const SERVICES = [
  {
    id: 'mattress',
    title: 'Mattress Cleaning',
    description: 'Dust mite and allergen focus for a healthier sleep.',
    price: 'From RM150',
    icon: 'Bed',
    image: 'https://lh3.googleusercontent.com/d/1aox3sVNT3A2ng0WRMhhDO1Fdc-ms8zsH',
  },
  {
    id: 'sofa',
    title: 'Sofa Cleaning',
    description: 'Specialized tracks for Fabric and Leather upholstery.',
    price: 'From RM120',
    icon: 'Armchair',
    image: 'https://lh3.googleusercontent.com/d/1mihf8YH6_ZrypGBGnlMswhJCvEzY4Qcb',
  },
  {
    id: 'car-seat',
    title: 'Car Seat Cleaning',
    description: 'Interior sanitization and odor removal for your vehicle.',
    price: 'From RM80',
    icon: 'Car',
    image: 'https://lh3.googleusercontent.com/d/1nF1FCx-D5wv2-PXy5z807saXY3qKl9am',
  },
  {
    id: 'curtain',
    title: 'Curtain Steam Cleaning',
    description: 'On-site steam cleaning without dismantling.',
    price: 'From RM100',
    icon: 'Wind',
    image: 'https://lh3.googleusercontent.com/d/1fEW3tYJj42TKajnCsz3N12HT0-wfu65J',
  },
  {
    id: 'carpet',
    title: 'Carpet Extraction',
    description: 'Deep extraction for home rugs and office carpets.',
    price: 'From RM1.50/sqft',
    icon: 'Waves',
    image: 'https://lh3.googleusercontent.com/d/1aS8s_ScBV6GMikA0FfwzMtJQ_DCY0G1Q',
  },
];

export const PACKAGES = [
  {
    title: 'Healthy Home Bundle',
    description: '1x Mattress + 1x Sofa',
    discount: 'Save 15%',
    tag: 'Best Seller',
  },
  {
    title: 'Living Room Refresh',
    description: 'Sofa + Carpet + Curtains',
    discount: 'Value Deal',
    tag: 'Popular',
  },
  {
    title: 'New Move-In',
    description: 'Whole-house fabric sanitization',
    discount: 'Custom Quote',
    tag: 'Essential',
  },
];

export const WHATSAPP_NUMBER = '601162638228'; // Updated contact number
export const WHATSAPP_LINK = (message: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
