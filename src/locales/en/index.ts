import privacy from './privacy';
import terms from './terms';
import { DOMAIN } from '@/constants/biz';

const TITLE = 'Revenia: A Mexican Horror Survival Game | Community Hub';
const DESCRIPTION =
  'Explore the dark world of Revenia, a third-person horror survival game inspired by Mexican folklore. This is a community-driven website for fans of Revenia.';

export default {
  metadata: {
    title: TITLE,
    description: DESCRIPTION,
    og: {
      title: TITLE,
      description: DESCRIPTION,
    },
  },
  layout: {
    brand: {
      name: 'Revenia',
      description: DESCRIPTION,
    },
    nav: {
    },
    footer: {
      language: 'Language',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      aboutUs: 'About Us',
      contact: `contact@${DOMAIN}`,
      addToChrome: 'Add to Chrome',
      co2Consumption: '<PLACEHOLDER>WEIGHT</PLACEHOLDER> of CO₂/view',
      comparedToOtherPages: 'Cleaner than <PLACEHOLDER>PERCENTAGE</PLACEHOLDER> of pages tested',
      copyright: {
        domain: DOMAIN,
        year: 2025,
        text: 'All rights reserved',
        buildWith: 'Built with Next.js',
      },
      resources: {
        title: 'Resources',
        links: [],
      },
    },
  },
  home: {
    hero: {
      title: 'REVENIA',
      subtitle: 'Conjuros y Presagios',
      description: 'A Mexican horror survival game that plunges you into a forgotten village shrouded in mist, superstition, and ancient darkness.',
      downloadButton: 'Download Demo(Beta)',
      downloadLink: 'https://kulkatto.itch.io/revenia-cyp',
      trailerButton: 'Watch Trailer',
      trailerLink: 'https://www.youtube.com/watch?v=KP2opBOkT9I&t=8s',
    },
    examples: {
      titlePrefix: 'Experience the',
      title: 'Fear',
      contents: [{
        title: 'Exploration',
        description: 'Traverse a section of the eerie village, uncovering its dark secrets and forbidden symbols.',
        imgUrl: '/assets/icons/game.svg',
      }, {
        title: 'Survival & Combat',
        description: 'Face minor enemies and a formidable major threat while managing resources and crafting items.',
        imgUrl: '/assets/icons/team.svg',
      }, {
        title: 'Mexican Folklore',
        description: 'Immerse yourself in authentic Mexican mythology and cultural traditions woven into the horror experience.',
        imgUrl: '/assets/icons/play.svg',
      }]
    },
    Introduction: {
      titlePrefix: 'About',
      title: 'Revenia',
      contents: [
        'In the depths of a forgotten village, covered by mist, superstition, and abandonment, a woman returns after years of absence. The land she once knew seems possessed by a latent darkness, woven between local legends, forbidden symbols, and ruins marked by time. Something ancient has awakened... and it is not willing to be ignored.',
        'Revenia is a third-person narrative experience that combines exploration, horror elements, survival, and Mexican mythology. This demo-beta allows you to experience the first sections of the game after the prologue.',
      ],
      ctaText: 'Learn More About the Game',
      ctaLink: 'https://kulkatto.itch.io/revenia-cyp',
    },
    systemRequirements: {
      titlePrefix: 'Minimum System',
      title: 'Requirements',
      contents: [
        {
          label: 'OS',
          content: 'Windows 10 or higher (64-bit)'
        },
        {
          label: 'Processor',
          content: 'Intel® Core™ i5-4460 / AMD FX™-6300'
        },
        {
          label: 'Memory',
          content: '8 GB RAM'
        },
        {
          label: 'Graphics',
          content: 'NVIDIA® GeForce® GTX 760 / AMD Radeon™ R7 260x (2GB VRAM)'
        },
        {
          label: 'DirectX',
          content: 'Version 11'
        },
        {
          label: 'Storage',
          content: '11 GB available space'
        },
      ],
    },
    features: {
      titlePrefix: 'Demo',
      title: 'Features',
      contents: [
        {
          label: '',
          content: 'Exploration in a section of the village',
        },
        {
          label: '',
          content: 'Introduction to survival and combat systems',
        },
        {
          label: '',
          content: 'Minor enemies and one major threat',
        },
        {
          label: '',
          content: 'Crafting, healing, and natural resources',
        },
        {
          label: '',
          content: 'Carefully crafted atmosphere',
        },
        {
          label: '',
          content: 'Duration: 15-20 minutes',
        },
      ],
    },
    cta: {
      titlePrefix: 'Ready to Face the',
      title: 'Darkness',
      titleSuffix: '?',
      description: 'Download the free demo and experience the first glimpse of this unique Mexican horror survival game.',
      buttonText: 'Download Demo Now',
      buttonLink: '/download',
    },
  },
  privacy,
  terms,
};
