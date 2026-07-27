export const COLORS = {
  primary: '#0D49CD', // Super Blue
  action: '#3AD2FF',  // Psychedelic Aqua
  text: '#333333',    // Dark Gray
  bg: '#F9F9F9',      // Light Gray
};

export const LOGO_URL = 'https://lh3.googleusercontent.com/d/1GNCdlg3aO2ZMbeyc-xSuVEb889AOuSqG';



export const SERVICES = [
  {
    id: 'mattress',
    title: 'Mattress Cleaning',
    description: 'Deep UV sterilization & high-powered extraction eliminating dust mites, bacteria, and allergens for clinical-grade sleep hygiene.',
    price: 'From RM150',
    icon: 'Bed',
    image: 'https://lh3.googleusercontent.com/d/1aox3sVNT3A2ng0WRMhhDO1Fdc-ms8zsH',
  },
  {
    id: 'sofa',
    title: 'Sofa Cleaning',
    description: 'Specialized deep shampooing and stain extraction restoring both fabric and genuine leather upholstery to pristine condition.',
    price: 'From RM55',
    icon: 'Armchair',
    image: 'https://lh3.googleusercontent.com/d/1mihf8YH6_ZrypGBGnlMswhJCvEzY4Qcb',
  },
  {
    id: 'car-seat',
    title: 'Car Interior Cleaning',
    description: 'Intensive stain removal, antibacterial sanitization, and odor elimination for all vehicle interiors and upholstery.',
    price: 'From RM140',
    icon: 'Car',
    image: 'https://lh3.googleusercontent.com/d/1nF1FCx-D5wv2-PXy5z807saXY3qKl9am',
  },
  {
    id: 'curtain',
    title: 'Curtain Cleaning',
    description: 'Hassle-free on-site high-temperature steam sanitization and dust removal without dismantling or taking down your drapes.',
    price: 'From RM100',
    icon: 'Wind',
    image: 'https://lh3.googleusercontent.com/d/1fEW3tYJj42TKajnCsz3N12HT0-wfu65J',
  },
  {
    id: 'carpet',
    title: 'Carpet Cleaning',
    description: 'Industrial-grade deep water extraction and sanitization reviving home rugs, Persian carpets, and heavy-duty office carpets.',
    price: 'From RM1.50/sqft',
    icon: 'Waves',
    image: 'https://lh3.googleusercontent.com/d/1aS8s_ScBV6GMikA0FfwzMtJQ_DCY0G1Q',
  },
  {
    id: 'hood-hob',
    title: 'Kitchen Hood & Hob Cleaning',
    description: 'Professional degreasing, carbon removal, and complete sanitization for your kitchen stovetop, exhaust ventilation, and filters.',
    price: 'From RM180',
    icon: 'CookingPot',
    image: 'https://lh3.googleusercontent.com/d/1Gesd4i2XwHHtWBGWnVOzOcMdZTOm4aDP',
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
