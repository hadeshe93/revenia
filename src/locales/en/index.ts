import privacy from './privacy';
import terms from './terms';
import about from './about';
import media from './media';
import { DOMAIN } from '@/constants/biz';

const TITLE = 'Revenia: A Mexican Horror Survival Game';
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
  note: {
    note: 'Note',
    content: 'Completely a fan site, unofficial',
  },
  layout: {
    brand: {
      name: 'Revenia',
      description: DESCRIPTION,
    },
    nav: {
      media: {
        label: 'Media',
        href: '/media',
      },
      about: {
        label: 'About',
        href: '/about',
      },
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
      disclaimer: 'Disclaimer: This website is contributed by game enthusiasts. Revenia.net is not affiliated with official Revenia game or Kulkatto.',
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
      screenshots: [
        {
          imgUrl: '/imgs/screenshots/revenia-1.jpg',
          alt: 'The village is shrouded in mist',
        },
        {
          imgUrl: '/imgs/screenshots/revenia-2.jpg',
          alt: 'Prepare to enter the village',
        },
        {
          imgUrl: '/imgs/screenshots/revenia-3.jpg',
          alt: 'Enter the village',
        },
      ],
      note: {
        note: 'Note',
        content: 'Completely unofficial fan site',
      },
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
    socialMedia: {
      titlePrefix: 'Connect on',
      title: 'Social Media',
      description: 'Stay up-to-date with the latest news, development updates, behind-the-scenes glimpses, and community events.',
      contents: [
        {
          title: 'TikTok',
          description: `Follow us for short, engaging videos, development diaries, and quick updates on Revenia's progress.`,
          imgUrl: '/assets/icons/tiktok.svg',
          linkText: 'Follow',
          linkUrl: 'https://www.tiktok.com/@reveniaproject',
        },
        {
          title: 'Instagram',
          description: `Explore concept art, environmental designs, and artistic inspirations behind Revenia.`,
          imgUrl: '/assets/icons/instagram.svg',
          linkText: 'Follow',
          linkUrl: 'https://www.instagram.com/kulkattostudio/',
        },
        {
          title: 'Youtube',
          description: `Watch the latest trailers, development diaries, and behind-the-scenes looks at Revenia.`,
          imgUrl: '/assets/icons/youtube.svg',
          linkText: 'Watch',
          linkUrl: 'https://www.youtube.com/@kulkatto',
        },
        {
          title: 'Discord',
          description: `Join our community to discuss the game, share your thoughts, and get the latest updates.`,
          imgUrl: '/assets/icons/discord.svg',
          linkText: 'Join',
          linkUrl: 'https://discord.gg/wmsK3tazt4',
        },
      ]
    },
    cta: {
      titlePrefix: 'Ready to Face the',
      title: 'Darkness',
      titleSuffix: '?',
      description: [
        'Download the free demo and experience the first glimpse of this unique Mexican horror survival game.',
      ],
      buttonText: 'Download Demo(Beta)',
      buttonLink: 'https://kulkatto.itch.io/revenia-cyp',
      buttonIcon: '/assets/icons/download.svg',
      buttonIconAlt: 'Download Demo(Beta)',
    },
    faq: {
      title: 'FAQ',
      questions: [
        {
          q: 'Who is developing Revenia?',
          a: [
            'Revenia is being developed independently by a single creator, Kulkatto. This project is a testament to passion and dedication, with every aspect of the game, from programming to art and music, meticulously crafted by one individual.',
          ],
        },
        {
          q: 'What kind of game is Revenia?',
          a: [
            'Revenia is primarily a third-person narrative experience that falls into the horror survival genre. It features elements of exploration, combat, crafting, and resource management, all set within a deeply atmospheric world inspired by Mexican folklore.',
          ],
        },
        {
          q: 'What is the story background of Revenia?',
          a: [
            `In Revenia, you play as a woman returning to her ancestral village after many years. This village, once familiar, is now shrouded in mist, superstition, and an unsettling abandonment. The land itself seems possessed by a latent darkness, with ancient legends, forbidden symbols, and time-worn ruins hinting at an ancient entity that has awakened and demands recognition. The narrative is a descent into a reality where every shadow holds a secret and every sound could be your last, exploring the protagonist's connection to this cursed land and its dark past.`,
          ],
        },
        {
          q: 'What is the biggest highlight of this game?',
          a: [
            `Revenia does not seek to impress with technical or visual spectacle. It draws its strength from details, atmospheres, and the tension that arises from a carefully crafted setting. It is deeply inspired by folklore, myths, legends, and the open wounds of Mexican collective memory.`,
          ],
        },
      ],
    },
  },
  about,
  media,
  privacy,
  terms,
};
