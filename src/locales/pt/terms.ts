import { DOMAIN, CAPITALIZED_DOMAIN } from '@/constants/biz';

export default {
  metadata: {
    title: `Termos de Serviço | ${CAPITALIZED_DOMAIN}`,
    description: `Termos de Serviço para ${CAPITALIZED_DOMAIN} - Conheça as regras e condições que regem o uso do nosso site.`,
  },
  backToGame: 'Voltar para a Página Inicial',
  title: 'Termos de Serviço',
  descriptions: [
    'Última atualização: junho de 2025',
    'Por favor, leia estes termos e condições cuidadosamente antes de usar nosso serviço.',
  ],
  sections: {
    acceptance: {
      title: 'Aceitação dos Termos',
      description:
        `Ao acessar e usar ${DOMAIN}, você concorda em estar vinculado a estes Termos de Serviço e à nossa Política de Privacidade. Se você não concorda com qualquer parte destes termos, por favor, não utilize nosso site.`,
    },
    description: {
      title: 'Descrição do Serviço',
      description:
        `${CAPITALIZED_DOMAIN} oferece uma ferramenta online gratuita que ajuda os usuários a remover itens duplicados de um texto. O serviço é fornecido "como está" e reservamo-nos o direito de modificar, suspender ou encerrar a qualquer momento sem aviso prévio.`,
    },
    usage: {
      title: 'Diretrizes de Uso',
      description: `Ao usar ${DOMAIN}, você concorda em:`,
      items: [
        'Usar o site apenas para fins legais',
        'Não tentar hackear, interromper ou danificar o site de qualquer forma',
        'Não usar o site para assediar, abusar ou ameaçar outros',
        'Não se passar por qualquer pessoa ou entidade',
        'Não usar o site para qualquer finalidade comercial sem nosso consentimento expresso',
        'Não usar o site para atividades relacionadas a jogos de azar, sejam comerciais ou não comerciais',
        'Não usar o site para conteúdo pornográfico, violento, politicamente sensível ou de outra natureza inadequada',
        'Não usar o site para promover ou participar de atividades ilegais',
        'Não usar o site de forma que viole quaisquer leis ou regulamentos aplicáveis',
      ],
    },
    intellectualProperty: {
      title: 'Propriedade Intelectual',
      description:
        `Todo o conteúdo em ${DOMAIN}, incluindo textos, gráficos, logotipos e software, é propriedade de ${CAPITALIZED_DOMAIN} e protegido por leis internacionais de direitos autorais. Você não pode reproduzir, modificar, distribuir ou criar obras derivadas de qualquer parte do site sem nossa permissão por escrito.`,
    },
    disclaimer: {
      title: 'Isenção de Garantias',
      description:
        `${CAPITALIZED_DOMAIN} é fornecido "como está" e "conforme disponível". Não oferecemos garantias, expressas ou implícitas, quanto à precisão, confiabilidade ou disponibilidade do site. O uso do serviço é por sua conta e risco. Este site é contribuído por entusiastas de jogos. Revenia.net não é afiliado ao jogo oficial Revenia ou Kulkatto.`,
    },
    limitation: {
      title: 'Limitação de Responsabilidade',
      description:
        `Em nenhuma circunstância o ${DOMAIN} será responsável por quaisquer danos diretos, indiretos, incidentais, especiais ou consequenciais decorrentes ou relacionados ao uso do ${DOMAIN}, mesmo que avisado da possibilidade de tais danos.`,
    },
    indemnification: {
      title: 'Indenização',
      description:
        `Você concorda em indenizar e isentar o ${DOMAIN} de quaisquer reivindicações, perdas, responsabilidades, danos, custos e despesas (incluindo honorários advocatícios razoáveis) decorrentes do seu uso do site ou violação destes Termos de Serviço.`,
    },
    changes: {
      title: 'Alterações nos Termos de Serviço',
      description:
        `Reservamo-nos o direito de atualizar ou modificar estes Termos de Serviço a qualquer momento sem aviso prévio. O uso continuado do ${DOMAIN} após quaisquer alterações constitui sua aceitação dos novos termos.`,
    },
    contact: {
      title: 'Fale Conosco',
      description: 'Se você tiver alguma dúvida sobre estes Termos de Serviço, entre em contato conosco em:',
      email: `contato@${DOMAIN}`,
    },
  },
  footer: {
  },
};
