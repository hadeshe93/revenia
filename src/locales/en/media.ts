const TITLE = 'Revenia Media Hub: Gameplay Videos, Trailers & Fan Content';
const DESCRIPTION = 'Dive into the Revenia media hub! Explore thrilling gameplay videos, captivating trailers, and engaging fan content for the Mexican horror survival game.';

export default {
  metadata: {
    title: TITLE,
    description: DESCRIPTION,
  },
  introduction: {
    titlePrefix: 'Revenia',
    title: 'Media Hub',
    description: 'Videos, Gameplay & Trailers',
    contents: [
      `Welcome to the community media hub for Revenia: Conjuros y Presagios, the chilling Mexican horror survival game developed by Kulkatto. Here, you can immerse yourself in the game's terrifying atmosphere, witness intense gameplay, and get a glimpse into the unique blend of horror, survival, and rich Mexican folklore that defines Revenia.`,
    ],
  },
  youtube: {
    titlePrefix: 'Featured',
    title: 'Gameplay',
    titleSuffix: '& Official Trailers',
    description: '',
    contents: [
      {
        title: 'Official Gameplay Demo (Beta)',
        remark: 'Kulkatto Official Channel',
        description: 'Witness the latest playable demo showcasing mechanics, level design, and atmospheric elements crafted by Kulkatto.',
        embedUrl: 'https://www.youtube.com/embed/KP2opBOkT9I?si=MuPWsIrmHJ4cUykC',
      },
      {
        title: 'The Mexican Silent Hill',
        remark: 'Community Channel',
        description: 'Discover why many are calling Revenia "The Mexican Silent Hill" with its psychological horror and unsettling atmosphere.',
        embedUrl: 'https://www.youtube.com/embed/uHheV-O7edE?si=mXjHrsbBESNL7I57',
      },
      {
        title: 'Full Gameplay - No Commentary',
        remark: 'Community Channel',
        description: 'Immerse yourself completely in the sounds and sights of Revenia without interruption.',
        embedUrl: 'https://www.youtube.com/embed/IedoDQLhLYM?si=bWDSE0l5ryLvbqKz',
      },
      {
        title: 'Terror from Mexico',
        remark: 'Community Channel',
        description: 'Explore the unique terror rooted in Mexican culture and folklore that makes Revenia special.',
        embedUrl: 'https://www.youtube.com/embed/oEAbr6tEUbk?si=B-9-lAGXh9RKH9xr',
      },
      {
        title: 'Survival Horror on PC',
        remark: 'Community Channel',
        description: 'Comprehensive overview covering resource management, combat encounters, and exploration.',
        embedUrl: 'https://www.youtube.com/embed/LRed9QAmuTM?si=1AFTHJWsb4-esb9L',
      },
      {
        title: 'Resident Evil Mexico?',
        remark: 'Community Channel',
        description: 'Community reactions and comparisons to well-known horror titles with a Mexican twist.',
        embedUrl: 'https://www.youtube.com/embed/zKAoAoR0UCA?si=A_l3jBJ6OVt-P_fb',
      },
    ],
  },
  tiktok: {
    titlePrefix: 'Community',
    title: 'Spotlight',
    titleSuffix: ': Short Form Videos',
    description: '',
    contents: [{
      title: 'Official TikTok',
      remark: '@reveniaproject',
      description: 'Latest short-form content directly from the developer.',
      embedUrl: 'https://www.tiktok.com/@reveniaproject',
    }, {
      title: 'Have You Played?',
      remark: '@reveniaproject',
      description: 'Revenia: Horror Video Game Set in the State of Mexico.',
      embedUrl: 'https://www.tiktok.com/@antirshadow/video/7515980990825712903',
    }, {
      title: 'Mexican Silent Hill?',
      remark: '@eluniversalmx',
      description: `Mexican Silent Hill? Demo released for 'Revenia,' a horror video game set in Mexico`,
      embedUrl: 'https://www.tiktok.com/@eluniversalmx/video/7517463407755332920',
    }, {
      title: 'Terror from Mexico',
      remark: '@soyelmarck',
      description: 'Highlighting unique Mexican horror elements.',
      embedUrl: 'https://www.tiktok.com/@soyelmarck/video/7515108833279134984',
    }],
  },
  cta: {
    titlePrefix: 'Ready to Face the',
    title: 'Darkness',
    titleSuffix: '?',
    description: [
      'After exploring the compelling media of Revenia, are you ready to step into the forgotten village yourself? Download the free demo and experience the first glimpse of this unique Mexican horror survival game.',
    ],
    buttonText: 'Download Demo(Beta)',
    buttonLink: 'https://kulkatto.itch.io/revenia-cyp',
    buttonIcon: '/assets/icons/download.svg',
    buttonIconAlt: 'Download Demo(Beta)',
  },
};

