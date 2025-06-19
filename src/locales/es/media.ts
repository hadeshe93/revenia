const TITLE = 'Centro de Medios de Revenia: Videos, Tráilers y Contenido de Fans';
const DESCRIPTION = '¡Sumérgete en el centro de medios de Revenia! Explora emocionantes videos de jugabilidad, tráilers cautivadores y contenido de fans para el juego mexicano de terror y supervivencia.';

export default {
  metadata: {
    title: TITLE,
    description: DESCRIPTION,
  },
  introduction: {
    titlePrefix: 'Revenia',
    title: 'Centro de Medios',
    description: 'Videos, Jugabilidad y Tráilers',
    contents: [
      `Bienvenido al centro de medios comunitario de Revenia: Conjuros y Presagios, el escalofriante juego mexicano de terror y supervivencia desarrollado por Kulkatto. Aquí puedes sumergirte en la atmósfera aterradora del juego, presenciar jugabilidad intensa y descubrir la mezcla única de terror, supervivencia y rico folclore mexicano que define a Revenia.`,
    ],
  },
  youtube: {
    titlePrefix: 'Destacado',
    title: 'Jugabilidad',
    titleSuffix: 'y Tráilers Oficiales',
    description: '',
    contents: [
      {
        title: 'Demo Oficial de Jugabilidad (Beta)',
        remark: 'Canal Oficial de Kulkatto',
        description: 'Descubre la última demo jugable que muestra mecánicas, diseño de niveles y elementos atmosféricos creados por Kulkatto.',
        embedUrl: 'https://www.youtube.com/embed/KP2opBOkT9I?si=MuPWsIrmHJ4cUykC',
      },
      {
        title: 'El Silent Hill Mexicano',
        remark: 'Canal de la Comunidad',
        description: 'Descubre por qué muchos llaman a Revenia "El Silent Hill Mexicano" por su horror psicológico y atmósfera inquietante.',
        embedUrl: 'https://www.youtube.com/embed/uHheV-O7edE?si=mXjHrsbBESNL7I57',
      },
      {
        title: 'Jugabilidad Completa - Sin Comentarios',
        remark: 'Canal de la Comunidad',
        description: 'Sumérgete completamente en los sonidos y paisajes de Revenia sin interrupciones.',
        embedUrl: 'https://www.youtube.com/embed/IedoDQLhLYM?si=bWDSE0l5ryLvbqKz',
      },
      {
        title: 'Terror desde México',
        remark: 'Canal de la Comunidad',
        description: 'Explora el terror único arraigado en la cultura y el folclore mexicano que hace especial a Revenia.',
        embedUrl: 'https://www.youtube.com/embed/oEAbr6tEUbk?si=B-9-lAGXh9RKH9xr',
      },
      {
        title: 'Survival Horror en PC',
        remark: 'Canal de la Comunidad',
        description: 'Resumen completo que cubre gestión de recursos, encuentros de combate y exploración.',
        embedUrl: 'https://www.youtube.com/embed/LRed9QAmuTM?si=1AFTHJWsb4-esb9L',
      },
      {
        title: '¿Resident Evil México?',
        remark: 'Canal de la Comunidad',
        description: 'Reacciones de la comunidad y comparaciones con títulos de terror conocidos con un giro mexicano.',
        embedUrl: 'https://www.youtube.com/embed/zKAoAoR0UCA?si=A_l3jBJ6OVt-P_fb',
      },
    ],
  },
  tiktok: {
    titlePrefix: 'Comunidad',
    title: 'Destacado',
    titleSuffix: ': Videos Cortos',
    description: '',
    contents: [{
      title: 'TikTok Oficial',
      remark: '@reveniaproject',
      description: 'El contenido más reciente en formato corto directamente del desarrollador.',
      embedUrl: 'https://www.tiktok.com/@reveniaproject',
    }, {
      title: '¿Ya lo jugaste?',
      remark: '@reveniaproject',
      description: 'Revenia: Videojuego de terror ambientado en el Estado de México.',
      embedUrl: 'https://www.tiktok.com/@antirshadow/video/7515980990825712903',
    }, {
      title: '¿Silent Hill Mexicano?',
      remark: '@eluniversalmx',
      description: `¿Silent Hill Mexicano? Demo lanzada de 'Revenia', un videojuego de terror ambientado en México`,
      embedUrl: 'https://www.tiktok.com/@eluniversalmx/video/7517463407755332920',
    }, {
      title: 'Terror desde México',
      remark: '@soyelmarck',
      description: 'Destacando los elementos únicos de terror mexicano.',
      embedUrl: 'https://www.tiktok.com/@soyelmarck/video/7515108833279134984',
    }],
  },
  cta: {
    titlePrefix: '¿Listo para enfrentar la',
    title: 'Oscuridad',
    titleSuffix: '?',
    description: [
      'Después de explorar el fascinante contenido multimedia de Revenia, ¿estás listo para adentrarte tú mismo en el pueblo olvidado? Descarga la demo gratuita y experimenta el primer vistazo a este juego mexicano de terror y supervivencia.',
    ],
    buttonText: 'Descargar Demo (Beta)',
    buttonLink: 'https://kulkatto.itch.io/revenia-cyp',
    buttonIcon: '/assets/icons/download.svg',
    buttonIconAlt: 'Descargar Demo (Beta)',
  },
};
