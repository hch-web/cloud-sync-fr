import service1 from 'assets/SERVICE-1.png';
import service2 from 'assets/SERVICE-2.png';
import service3 from 'assets/SERVICE-3.png';
import client1 from 'assets/client-logo-1.svg';
import client2 from 'assets/client-logo-2.svg';
import client3 from 'assets/client-logo-3.svg';
import client4 from 'assets/client-logo-4.svg';
import client5 from 'assets/client-logo-5.svg';

export const servicesData = [
  {
    image: service1,
    title: 'Cloud Storage',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    image: service2,
    title: 'Web Hosting',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    image: service3,
    title: 'VBS',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
];

export const pricingPlansData = [
  {
    id: 0,
    title: 'Cloud Storage',
    plans: [
      {
        title: 'Basic',
        price: { monthly: 9.99, yearly: 15 },
        features: ['500 GB Storage', '2 Users', 'Send up to 3 GB', '1 Server'],
      },
      {
        title: 'Pro',
        price: { monthly: 19.99, yearly: 100 },
        features: ['1 TB Storage', '5 Users', 'Send up to 5 GB', '2 Server'],
      },
      {
        title: 'Business',
        price: { monthly: 29.99, yearly: 234 },
        features: ['2 TB Storage', '10 Users', 'Send up to 10 GB', '3 Server'],
      },
    ],
  },
  {
    id: 1,
    title: 'Web Hosting',
    plans: [
      {
        title: 'Basic',
        price: { monthly: 12, yearly: 112 },
        features: ['500 GB Storage', '1 Users', 'Send up to 5 GB', 'Desktop'],
      },
      {
        title: 'Pro',
        price: { monthly: 140, yearly: 380 },
        features: ['1 TB Storage', '2 Users', 'Send up to 6 GB', 'Mobile Apps'],
      },
      {
        title: 'Business',
        price: { monthly: 180, yearly: 650 },
        features: ['2 TB Storage', '5 Users', 'Send up to 20 GB', 'Desktop & Mobile Apps'],
      },
    ],
  },
  {
    id: 2,
    title: 'VBS',
    plans: [
      {
        title: 'Basic',
        price: { monthly: 112, yearly: 1020 },
        features: ['500 GB Storage', '2 Users', 'Send up to 3 GB', 'Desktop & Mobile Apps'],
      },
      {
        title: 'Pro',
        price: { monthly: 123, yearly: 2345 },
        features: ['1 TB Storage', '5 Users', 'Send up to 5 GB', 'Desktop & Mobile Apps'],
      },
      {
        title: 'Business',
        price: { monthly: 250, yearly: 4000 },
        features: ['2 TB Storage', '10 Users', 'Send up to 10 GB', 'Desktop & Mobile Apps'],
      },
    ],
  },
];

export const clientsData = [
  {
    image: client1,
  },
  {
    image: client2,
  },
  {
    image: client3,
  },
  {
    image: client4,
  },
  {
    image: client5,
  },
];

export const navLinks = [
  {
    id: 1,
    label: 'About',
    href: 'about-container',
  },
  {
    id: 2,
    label: 'Services',
    href: 'services-container',
  },
  {
    id: 3,
    label: 'Pricing',
    href: 'pricing-container',
  },
  {
    id: 4,
    label: 'Contact',
    href: 'contact-container',
  }
];
