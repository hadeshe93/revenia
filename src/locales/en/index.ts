import Introduction from '@/components/sections/Introduction';
import privacy from './privacy';
import terms from './terms';
import { DOMAIN } from '@/constants/biz';

const BLOG = {
  label: 'Blog',
  href: '/blog',
};
const CHANGELOG = {
  label: 'Changelog',
  href: '/changelog',
};
const FEEDBACK = {
  label: 'Feedback',
  href: 'https://docs.google.com/forms/d/e/1FAIpQLSfWPzpy4Zui4sBzZnOgQDUjHlV3yrVKd1p6XbPWTJCskPDffA/viewform?usp=header',
};

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
      blog: BLOG,
      changelog: CHANGELOG,
      feedback: FEEDBACK,
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
      trailerLink: 'https://www.youtube.com/watch?v=LRed9QAmuTM',
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
    howToPlay: {
      title: 'How to Use Our Duplicate Remover Tool',
      steps: [
        {
          title: 'Step 1: Enter Your Text',
          content: [
            'Simply paste or type the text you wish to clean into the designated input box. Our tool is ready to process your content instantly.',
          ],
          imgUrl: '',
        },
        {
          title: 'Step 2: Select Options & Submit',
          content: [
            "Choose from our powerful options like 'Ignore uppercase letters', 'Preserve leading spaces', 'Keep blank lines', or 'Sort results' to customize your cleaning process. Then, click the submit button to initiate the duplicate removal.",
          ],
          imgUrl: '',
        },
        {
          title: 'Step 3: Review & Copy Cleaned Content',
          content: [
            "Your cleaned and organized text will appear in the result box. Review the output, and then easily copy it to your clipboard for immediate use. It's that simple!",
          ],
          imgUrl: '',
        },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions about Duplicate Removal',
      questions: [
        {
          q: 'What is duplicate line removal?',
          a: [
            'Duplicate line removal is the process of identifying and eliminating identical lines of text from a given input. This helps in cleaning data, simplifying content, and improving readability by removing redundant information.',
          ],
        },
        {
          q: 'Is my data safe and private when using this tool?',
          a: [
            'Absolutely. We prioritize your privacy and security. All text processing is done locally within your browser. Your data is never sent to our servers, ensuring complete confidentiality.',
          ],
        },
        {
          q: 'Can I remove duplicates while ignoring case differences?',
          a: [
            "Yes! Our tool offers an 'Ignore uppercase letters' option. When selected, the tool treats 'TEXT' and 'text' as the same, and all output will be converted to lowercase for consistency.",
          ],
        },
        {
          q: "How does 'Preserve leading spaces' work?",
          a: [
            "This option ensures that any spaces at the beginning of a line are maintained in the cleaned output. It's particularly useful for preserving formatting in code snippets, lists, or structured data.",
          ],
        },
        {
          q: 'Will blank lines be removed automatically?',
          a: [
            "By default, blank lines might be treated as duplicates if they are identical. However, you can use our 'Keep blank lines' option to explicitly preserve them, which is great for maintaining paragraph formatting and readability.",
          ],
        },
        {
          q: 'Can I sort the results alphabetically?',
          a: [
            "Yes, you can! Simply select the 'Sort results' option, and your cleaned text will be automatically arranged in alphabetical order, making it easier to review and organize.",
          ],
        },
        {
          q: 'Is this tool compatible with mobile devices?',
          a: [
            'Yes, our website is designed with a responsive UI/UX, ensuring full compatibility and an optimal experience on both PC and mobile devices.',
          ],
        },
      ],
    },
    
  },
  privacy,
  terms,
};
