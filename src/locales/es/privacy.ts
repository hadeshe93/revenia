import { DOMAIN, CAPITALIZED_DOMAIN } from '@/constants/biz';

export default {
  metadata: {
    title: `Política de Privacidad | ${CAPITALIZED_DOMAIN}`,
    description: `Política de Privacidad para ${CAPITALIZED_DOMAIN} - Conoce cómo manejamos tu información cuando usas nuestro servicio.`,
  },
  backToGame: 'Volver al Inicio',
  title: 'Política de Privacidad',
  sections: {
    information: {
      title: 'Información que Recopilamos',
      description:
        `${CAPITALIZED_DOMAIN} está diseñado para ser un sitio web sencillo y enfocado en la privacidad, que proporciona una comunidad amigable para que los entusiastas de los videojuegos compartan y expresen experiencias, ideas y sentimientos relacionados con los juegos de Revenia. Recopilamos datos mínimos para asegurar el correcto funcionamiento del sitio:`,
      items: [
        'Datos básicos de uso para mejorar el rendimiento del sitio',
        'Analíticas anónimas para entender cómo los visitantes interactúan con nuestro contenido',
      ],
    },
    usage: {
      title: 'Cómo Usamos tu Información',
      description: 'Los datos que recopilamos se utilizan exclusivamente para:',
      items: [
        'Mejorar el rendimiento del sitio web y la experiencia del usuario',
        'Analizar qué repeticiones son más populares o útiles para los visitantes',
        'Comprender cómo los usuarios navegan por nuestro contenido',
      ],
    },
    protection: {
      title: 'Cómo Protegemos tu Información',
      description:
        'Hemos implementado medidas de seguridad razonables para ayudar a proteger contra la pérdida, el mal uso o la alteración de la información bajo nuestro control. Priorizamos tu privacidad y solo recopilamos la información mínima necesaria para brindar nuestro servicio.',
    },
    storage: {
      title: 'Almacenamiento de Datos',
      description:
        'Utilizamos cookies y tecnologías similares para mejorar tu experiencia de navegación y recopilar datos de uso anónimos. No almacenamos información personal que pueda identificar a usuarios individuales a menos que tú la proporciones explícitamente (por ejemplo, al contactarnos por correo electrónico).',
    },
    analytics: {
      title: 'Google Analytics',
      description:
        'Utilizamos Google Analytics para monitorear y analizar el uso de nuestro servicio. Google Analytics es un servicio de análisis web ofrecido por Google que rastrea e informa el tráfico del sitio web. Google utiliza los datos recopilados para rastrear y monitorear el uso de nuestro servicio. Estos datos se comparten con otros servicios de Google. Google puede utilizar los datos recopilados para contextualizar y personalizar los anuncios de su propia red publicitaria.',
      optOut:
        'Puedes optar por no permitir que tu actividad en el servicio esté disponible para Google Analytics instalando el complemento de inhabilitación para navegadores de Google Analytics. El complemento impide que el JavaScript de Google Analytics (ga.js, analytics.js y dc.js) comparta información con Google Analytics sobre la actividad de las visitas.',
      moreInfo:
        'Para más información sobre las prácticas de privacidad de Google, visita la página web de Privacidad y Términos de Google:',
    },
    thirdParty: {
      title: 'Enlaces de Terceros',
      description: `Nuestro sitio web contiene enlaces a ${DOMAIN} y otros sitios externos. Ten en cuenta que:`,
      items: [
        'No somos responsables de las prácticas de privacidad ni del contenido de estos sitios externos',
        `Cuando haces clic en enlaces a ${DOMAIN}, puedes estar sujeto a la política de privacidad de ${DOMAIN}`,
        'Te recomendamos revisar las políticas de privacidad de cualquier sitio externo que visites a través de nuestros enlaces',
      ],
    },
    deletion: {
      title: 'Eliminación de Datos',
      description: 'Puedes limitar la recopilación de datos en cualquier momento mediante:',
      items: [
        'Usar la navegación privada o modo incógnito',
        'Borrar las cookies y el almacenamiento local de tu navegador',
        'Instalar extensiones de navegador que bloqueen el rastreo',
      ],
    },
    updates: {
      title: 'Actualizaciones de la Política de Privacidad',
      description:
        'Podemos actualizar esta política de privacidad según sea necesario para reflejar cambios en nuestras prácticas o por otras razones operativas, legales o regulatorias. Cualquier cambio se reflejará en esta página con una fecha de revisión actualizada.',
    },
    contact: {
      title: 'Contáctanos',
      description: 'Si tienes alguna pregunta sobre nuestra política de privacidad o cómo manejamos tus datos, contáctanos en:',
      email: `contacto@${DOMAIN}`,
    },
  },
  footer: {
    lastUpdated: 'Última actualización: junio de 2025',
  },
};
