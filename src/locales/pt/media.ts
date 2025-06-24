const TITLE = 'Central de Mídia Revenia: Vídeos de Gameplay, Trailers e Conteúdo de Fãs';
const DESCRIPTION = 'Mergulhe na central de mídia de Revenia! Explore vídeos emocionantes de gameplay, trailers cativantes e conteúdo de fãs para o jogo mexicano de terror e sobrevivência.';

export default {
  metadata: {
    title: TITLE,
    description: DESCRIPTION,
  },
  introduction: {
    titlePrefix: 'Revenia',
    title: 'Central de Mídia',
    description: 'Vídeos, Gameplay & Trailers',
    contents: [
      `Bem-vindo à central de mídia comunitária de Revenia: Conjuros y Presagios, o arrepiante jogo mexicano de terror e sobrevivência desenvolvido por Kulkatto. Aqui, você pode se envolver na atmosfera aterrorizante do jogo, assistir a gameplays intensos e conhecer a mistura única de terror, sobrevivência e rico folclore mexicano que define Revenia.`,
    ],
  },
  youtube: {
    titlePrefix: 'Destaque',
    title: 'Gameplay',
    titleSuffix: 'e Trailers Oficiais',
    description: '',
    contents: [
      {
        title: 'Demo Oficial de Gameplay (Beta)',
        remark: 'Canal Oficial Kulkatto',
        description: 'Veja a mais recente demo jogável mostrando mecânicas, design de níveis e elementos atmosféricos criados por Kulkatto.',
        embedUrl: 'https://www.youtube.com/embed/KP2opBOkT9I?si=MuPWsIrmHJ4cUykC',
      },
      {
        title: 'O Silent Hill Mexicano',
        remark: 'Canal da Comunidade',
        description: 'Descubra por que muitos estão chamando Revenia de "O Silent Hill Mexicano" com seu terror psicológico e atmosfera perturbadora.',
        embedUrl: 'https://www.youtube.com/embed/uHheV-O7edE?si=mXjHrsbBESNL7I57',
      },
      {
        title: 'Gameplay Completo - Sem Comentários',
        remark: 'Canal da Comunidade',
        description: 'Mergulhe completamente nos sons e visuais de Revenia sem interrupções.',
        embedUrl: 'https://www.youtube.com/embed/IedoDQLhLYM?si=bWDSE0l5ryLvbqKz',
      },
      {
        title: 'Terror do México',
        remark: 'Canal da Comunidade',
        description: 'Explore o terror único enraizado na cultura e folclore mexicano que torna Revenia especial.',
        embedUrl: 'https://www.youtube.com/embed/oEAbr6tEUbk?si=B-9-lAGXh9RKH9xr',
      },
      {
        title: 'Survival Horror no PC',
        remark: 'Canal da Comunidade',
        description: 'Visão geral abrangente cobrindo gerenciamento de recursos, combates e exploração.',
        embedUrl: 'https://www.youtube.com/embed/LRed9QAmuTM?si=1AFTHJWsb4-esb9L',
      },
      {
        title: 'Resident Evil México?',
        remark: 'Canal da Comunidade',
        description: 'Reações da comunidade e comparações com títulos de terror conhecidos com um toque mexicano.',
        embedUrl: 'https://www.youtube.com/embed/zKAoAoR0UCA?si=A_l3jBJ6OVt-P_fb',
      },
    ],
  },
  tiktok: {
    titlePrefix: 'Comunidade',
    title: 'Destaque',
    titleSuffix: ': Vídeos Curtos',
    description: '',
    contents: [{
      title: 'TikTok Oficial',
      remark: '@reveniaproject',
      description: 'Conteúdo mais recente em formato curto diretamente do desenvolvedor.',
      embedUrl: 'https://www.tiktok.com/@reveniaproject',
    }, {
      title: 'Você já jogou?',
      remark: '@reveniaproject',
      description: 'Revenia: Jogo de terror ambientado no Estado do México.',
      embedUrl: 'https://www.tiktok.com/@antirshadow/video/7515980990825712903',
    }, {
      title: 'Silent Hill Mexicano?',
      remark: '@eluniversalmx',
      description: `Silent Hill Mexicano? Demo lançada de 'Revenia', um jogo de terror ambientado no México`,
      embedUrl: 'https://www.tiktok.com/@eluniversalmx/video/7517463407755332920',
    }, {
      title: 'Terror do México',
      remark: '@soyelmarck',
      description: 'Destaque para elementos únicos do terror mexicano.',
      embedUrl: 'https://www.tiktok.com/@soyelmarck/video/7515108833279134984',
    }],
  },
  cta: {
    titlePrefix: 'Pronto para enfrentar a',
    title: 'Escuridão',
    titleSuffix: '?',
    description: [
      'Depois de explorar a mídia envolvente de Revenia, você está pronto para entrar na vila esquecida? Baixe a demo gratuita e experimente o primeiro vislumbre deste jogo mexicano de terror e sobrevivência.',
    ],
    buttonText: 'Baixar Demo (Beta)',
    buttonLink: 'https://kulkatto.itch.io/revenia-cyp',
    buttonIcon: '/assets/icons/download.svg',
    buttonIconAlt: 'Baixar Demo (Beta)',
  },
};
