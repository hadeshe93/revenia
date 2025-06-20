import { DOMAIN, CAPITALIZED_DOMAIN } from '@/constants/biz';

export default {
  metadata: {
    title: `Términos de Servicio | ${CAPITALIZED_DOMAIN}`,
    description: `Términos de Servicio para ${CAPITALIZED_DOMAIN} - Conoce las reglas y condiciones que rigen el uso de nuestro sitio web.`,
  },
  backToGame: 'Volver al Inicio',
  title: 'Términos de Servicio',
  descriptions: [
    'Última actualización: junio de 2025',
    'Por favor, lee estos términos y condiciones cuidadosamente antes de usar nuestro servicio.',
  ],
  sections: {
    acceptance: {
      title: 'Aceptación de los Términos',
      description:
        `Al acceder y utilizar ${DOMAIN}, aceptas estar sujeto a estos Términos de Servicio y a nuestra Política de Privacidad. Si no estás de acuerdo con alguna parte de estos términos, por favor no utilices nuestro sitio web.`,
    },
    description: {
      title: 'Descripción del Servicio',
      description:
        `${CAPITALIZED_DOMAIN} proporciona una herramienta en línea gratuita que ayuda a los usuarios a eliminar elementos duplicados de un texto. El servicio se proporciona "tal cual" y nos reservamos el derecho de modificar, suspender o terminarlo en cualquier momento sin previo aviso.`,
    },
    usage: {
      title: 'Directrices de Uso',
      description: `Al utilizar ${DOMAIN}, aceptas:`,
      items: [
        'Utilizar el sitio web solo para fines legales',
        'No intentar hackear, interrumpir o dañar el sitio web de ninguna manera',
        'No utilizar el sitio web para acosar, abusar o amenazar a otros',
        'No suplantar a ninguna persona o entidad',
        'No utilizar el sitio web para ningún propósito comercial sin nuestro consentimiento expreso',
        'No utilizar el sitio web para actividades relacionadas con apuestas, ya sean comerciales o no comerciales',
        'No utilizar el sitio web para contenido pornográfico, violento, políticamente sensible o de otra índole inapropiada',
        'No utilizar el sitio web para promover o participar en actividades ilegales',
        'No utilizar el sitio web de manera que viole cualquier ley o regulación aplicable',
      ],
    },
    intellectualProperty: {
      title: 'Propiedad Intelectual',
      description:
        `Todo el contenido en ${DOMAIN}, incluyendo textos, gráficos, logotipos y software, es propiedad de ${CAPITALIZED_DOMAIN} y está protegido por leyes internacionales de derechos de autor. No puedes reproducir, modificar, distribuir o crear obras derivadas de ninguna parte del sitio web sin nuestro permiso por escrito.`,
    },
    disclaimer: {
      title: 'Exención de Garantías',
      description:
        `${CAPITALIZED_DOMAIN} se proporciona "tal cual" y "según disponibilidad". No ofrecemos garantías, expresas o implícitas, sobre la exactitud, fiabilidad o disponibilidad del sitio web. El uso del servicio es bajo tu propio riesgo. Este sitio web es contribuido por entusiastas del juego. Revenia.net no está afiliado con el juego oficial de Revenia o Kulkatto.`,
    },
    limitation: {
      title: 'Limitación de Responsabilidad',
      description:
        `En ningún caso ${DOMAIN} será responsable de ningún daño directo, indirecto, incidental, especial o consecuente que surja de o en conexión con tu uso de ${DOMAIN}, incluso si se ha advertido de la posibilidad de tales daños.`,
    },
    indemnification: {
      title: 'Indemnización',
      description:
        `Aceptas indemnizar y eximir de responsabilidad a ${DOMAIN} de cualquier reclamación, pérdida, responsabilidad, daño, costo y gasto (incluidos los honorarios razonables de abogados) que surjan de tu uso del sitio web o de la violación de estos Términos de Servicio.`,
    },
    changes: {
      title: 'Cambios en los Términos de Servicio',
      description:
        `Nos reservamos el derecho de actualizar o modificar estos Términos de Servicio en cualquier momento sin previo aviso. Tu uso continuado de ${DOMAIN} después de cualquier cambio constituye tu aceptación de los nuevos términos.`,
    },
    contact: {
      title: 'Contáctanos',
      description: 'Si tienes alguna pregunta sobre estos Términos de Servicio, contáctanos en:',
      email: `contacto@${DOMAIN}`,
    },
  },
  footer: {
  },
};
