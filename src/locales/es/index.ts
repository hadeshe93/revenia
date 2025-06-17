import privacy from './privacy';
import terms from './terms';
import { DOMAIN } from '@/constants/biz';

const TITLE = 'Revenia: Un juego de terror y supervivencia mexicano | Centro de la comunidad';
const DESCRIPTION =
  'Explora el oscuro mundo de Revenia, un juego de terror y supervivencia en tercera persona inspirado en el folclore mexicano. Este es un sitio web impulsado por la comunidad para los fans de Revenia.';

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
      language: 'Idioma',
      privacyPolicy: 'Política de Privacidad',
      termsOfService: 'Términos de Servicio',
      aboutUs: 'Sobre Nosotros',
      contact: `contacto@${DOMAIN}`,
      addToChrome: 'Añadir a Chrome',
      co2Consumption: '<PLACEHOLDER>WEIGHT</PLACEHOLDER> de CO₂/vista',
      comparedToOtherPages: 'Más limpio que el <PLACEHOLDER>PERCENTAGE</PLACEHOLDER> de las páginas analizadas',
      copyright: {
        domain: DOMAIN,
        year: 2025,
        text: 'Todos los derechos reservados',
        buildWith: 'Desarrollado con Next.js',
      },
      resources: {
        title: 'Recursos',
        links: [],
      },
    },
  },
  home: {
    hero: {
      title: 'REVENIA',
      subtitle: 'Conjuros y Presagios',
      description: 'Un juego mexicano de terror y supervivencia que te sumerge en un pueblo olvidado envuelto en niebla, superstición y una oscuridad ancestral.',
      downloadButton: 'Descargar Demo (Beta)',
      downloadLink: 'https://kulkatto.itch.io/revenia-cyp',
      trailerButton: 'Ver Tráiler',
      trailerLink: 'https://www.youtube.com/watch?v=KP2opBOkT9I&t=8s',
    },
    examples: {
      titlePrefix: 'Experimenta el',
      title: 'Miedo',
      contents: [{
        title: 'Exploración',
        description: 'Recorre una sección del pueblo tenebroso, descubriendo sus oscuros secretos y símbolos prohibidos.',
        imgUrl: '/assets/icons/game.svg',
      }, {
        title: 'Supervivencia y Combate',
        description: 'Enfréntate a enemigos menores y a una amenaza principal formidable mientras gestionas recursos y fabricas objetos.',
        imgUrl: '/assets/icons/team.svg',
      }, {
        title: 'Folclore Mexicano',
        description: 'Sumérgete en la auténtica mitología mexicana y tradiciones culturales entretejidas en la experiencia de terror.',
        imgUrl: '/assets/icons/play.svg',
      }]
    },
    Introduction: {
      titlePrefix: 'Acerca de',
      title: 'Revenia',
      contents: [
        'En las profundidades de un pueblo olvidado, cubierto por la niebla, la superstición y el abandono, una mujer regresa tras años de ausencia. La tierra que una vez conoció parece poseída por una oscuridad latente, tejida entre leyendas locales, símbolos prohibidos y ruinas marcadas por el tiempo. Algo antiguo ha despertado... y no está dispuesto a ser ignorado.',
        'Revenia es una experiencia narrativa en tercera persona que combina exploración, elementos de terror, supervivencia y mitología mexicana. Esta demo-beta te permite experimentar las primeras secciones del juego después del prólogo.',
      ],
      ctaText: 'Conoce más sobre el juego',
      ctaLink: 'https://kulkatto.itch.io/revenia-cyp',
    },
    systemRequirements: {
      titlePrefix: 'Requisitos Mínimos del',
      title: 'Sistema',
      contents: [
        {
          label: 'SO',
          content: 'Windows 10 o superior (64-bit)'
        },
        {
          label: 'Procesador',
          content: 'Intel® Core™ i5-4460 / AMD FX™-6300'
        },
        {
          label: 'Memoria',
          content: '8 GB RAM'
        },
        {
          label: 'Gráficos',
          content: 'NVIDIA® GeForce® GTX 760 / AMD Radeon™ R7 260x (2GB VRAM)'
        },
        {
          label: 'DirectX',
          content: 'Versión 11'
        },
        {
          label: 'Almacenamiento',
          content: '11 GB de espacio disponible'
        },
      ],
    },
    features: {
      titlePrefix: 'Características de la',
      title: 'Demo',
      contents: [
        {
          label: '',
          content: 'Exploración en una sección del pueblo',
        },
        {
          label: '',
          content: 'Introducción a los sistemas de supervivencia y combate',
        },
        {
          label: '',
          content: 'Enemigos menores y una amenaza principal',
        },
        {
          label: '',
          content: 'Creación de objetos, curación y recursos naturales',
        },
        {
          label: '',
          content: 'Atmósfera cuidadosamente diseñada',
        },
        {
          label: '',
          content: 'Duración: 15-20 minutos',
        },
      ],
    },
    socialMedia: {
      titlePrefix: 'Conéctate en',
      title: 'Redes Sociales',
      description: 'Mantente al día con las últimas noticias, actualizaciones de desarrollo, miradas detrás de cámaras y eventos de la comunidad.',
      contents: [
        {
          title: 'TikTok',
          description: `Síguenos para ver videos cortos y atractivos, diarios de desarrollo y actualizaciones rápidas sobre el progreso de Revenia.`,
          imgUrl: '/assets/icons/tiktok.svg',
          linkText: 'Síguenos',
          linkUrl: 'https://www.tiktok.com/@reveniaproject',
        },
        {
          title: 'Instagram',
          description: `Explora arte conceptual, diseños de entornos e inspiraciones artísticas detrás de Revenia.`,
          imgUrl: '/assets/icons/instagram.svg',
          linkText: 'Síguenos',
          linkUrl: 'https://www.instagram.com/kulkattostudio/',
        },
      ]
    },
    cta: {
      titlePrefix: '¿Listo para enfrentar la',
      title: 'Oscuridad',
      titleSuffix: '?',
      description: 'Descarga la demo gratuita y experimenta el primer vistazo a este juego mexicano de terror y supervivencia.',
      buttonText: 'Descargar Demo Ahora',
      buttonLink: '/download',
    },
    faq: {
      title: 'Preguntas Frecuentes',
      questions: [
        {
          q: '¿Quién está desarrollando Revenia?',
          a: [
            'Revenia está siendo desarrollado de forma independiente por un solo creador, Kulkatto. Este proyecto es un testimonio de pasión y dedicación, con cada aspecto del juego, desde la programación hasta el arte y la música, meticulosamente creado por una sola persona.',
          ],
        },
        {
          q: '¿Qué tipo de juego es Revenia?',
          a: [
            'Revenia es principalmente una experiencia narrativa en tercera persona que pertenece al género de terror y supervivencia. Presenta elementos de exploración, combate, creación de objetos y gestión de recursos, todo ambientado en un mundo profundamente atmosférico inspirado en el folclore mexicano.',
          ],
        },
        {
          q: '¿Cuál es la historia de fondo de Revenia?',
          a: [
            `En Revenia, juegas como una mujer que regresa a su pueblo ancestral después de muchos años. Este pueblo, antes familiar, ahora está envuelto en niebla, superstición y un abandono inquietante. La tierra misma parece poseída por una oscuridad latente, con leyendas antiguas, símbolos prohibidos y ruinas marcadas por el tiempo que insinúan la existencia de una entidad ancestral que ha despertado y exige ser reconocida. La narrativa es un descenso a una realidad donde cada sombra guarda un secreto y cada sonido podría ser el último, explorando la conexión de la protagonista con esta tierra maldita y su oscuro pasado.`,
          ],
        },
        {
          q: '¿Cuál es el mayor atractivo de este juego?',
          a: [
            `Revenia no busca impresionar con espectáculos técnicos o visuales. Su fuerza radica en los detalles, las atmósferas y la tensión que surge de un entorno cuidadosamente construido. Está profundamente inspirado en el folclore, los mitos, las leyendas y las heridas abiertas de la memoria colectiva mexicana.`,
          ],
        },
      ],
    },
  },
  // privacy,
  // terms,
};
