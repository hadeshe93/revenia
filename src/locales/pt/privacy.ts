import { DOMAIN, CAPITALIZED_DOMAIN } from '@/constants/biz';

export default {
  metadata: {
    title: `Política de Privacidade | ${CAPITALIZED_DOMAIN}`,
    description: `Política de Privacidade para ${CAPITALIZED_DOMAIN} - Saiba como lidamos com suas informações ao usar nosso serviço.`,
  },
  backToGame: 'Voltar para a Página Inicial',
  title: 'Política de Privacidade',
  sections: {
    information: {
      title: 'Informações que Coletamos',
      description:
        `${CAPITALIZED_DOMAIN} foi projetado para ser um site simples e focado em privacidade, que oferece uma comunidade amigável para entusiastas de jogos compartilharem e trocarem experiências, ideias e sentimentos relacionados aos jogos Revenia. Coletamos dados mínimos para garantir o funcionamento adequado do site:`,
      items: [
        'Dados básicos de uso para melhorar o desempenho do site',
        'Análises anônimas para entender como os visitantes interagem com nosso conteúdo',
      ],
    },
    usage: {
      title: 'Como Usamos Suas Informações',
      description: 'Os dados que coletamos são usados exclusivamente para:',
      items: [
        'Melhorar o desempenho do site e a experiência do usuário',
        'Analisar quais replays são mais populares ou úteis para os visitantes',
        'Compreender como os usuários navegam pelo nosso conteúdo',
      ],
    },
    protection: {
      title: 'Como Protegemos Suas Informações',
      description:
        'Implementamos medidas de segurança razoáveis para ajudar a proteger contra perda, uso indevido ou alteração das informações sob nosso controle. Priorizamos sua privacidade e coletamos apenas o mínimo de informações necessário para fornecer nosso serviço.',
    },
    storage: {
      title: 'Armazenamento de Dados',
      description:
        'Usamos cookies e tecnologias semelhantes para melhorar sua experiência de navegação e coletar dados de uso anônimos. Não armazenamos informações pessoais que possam identificar usuários individuais, a menos que você as forneça explicitamente (como ao nos contatar por e-mail).',
    },
    analytics: {
      title: 'Google Analytics',
      description:
        'Usamos o Google Analytics para monitorar e analisar o uso do nosso serviço. O Google Analytics é um serviço de análise web oferecido pelo Google que rastreia e relata o tráfego do site. O Google usa os dados coletados para rastrear e monitorar o uso do nosso serviço. Esses dados são compartilhados com outros serviços do Google. O Google pode usar os dados coletados para contextualizar e personalizar os anúncios de sua própria rede de publicidade.',
      optOut:
        'Você pode optar por não disponibilizar sua atividade no serviço ao Google Analytics instalando o complemento de desativação do Google Analytics para navegador. O complemento impede que o JavaScript do Google Analytics (ga.js, analytics.js e dc.js) compartilhe informações com o Google Analytics sobre a atividade das visitas.',
      moreInfo:
        'Para mais informações sobre as práticas de privacidade do Google, visite a página de Privacidade e Termos do Google:',
    },
    thirdParty: {
      title: 'Links de Terceiros',
      description: `Nosso site contém links para ${DOMAIN} e outros sites externos. Observe que:`,
      items: [
        'Não somos responsáveis pelas práticas de privacidade ou pelo conteúdo desses sites externos',
        `Ao clicar em links para ${DOMAIN}, você pode estar sujeito à política de privacidade de ${DOMAIN}`,
        'Recomendamos que você revise as políticas de privacidade de quaisquer sites externos que visitar por meio de nossos links',
      ],
    },
    deletion: {
      title: 'Exclusão de Dados',
      description: 'Você pode limitar a coleta de dados a qualquer momento por meio de:',
      items: [
        'Usar navegação privada ou modo anônimo',
        'Limpar os cookies e o armazenamento local do seu navegador',
        'Instalar extensões de navegador que bloqueiem rastreamento',
      ],
    },
    updates: {
      title: 'Atualizações da Política de Privacidade',
      description:
        'Podemos atualizar esta política de privacidade conforme necessário para refletir mudanças em nossas práticas ou por outros motivos operacionais, legais ou regulatórios. Quaisquer alterações serão refletidas nesta página com uma data de revisão atualizada.',
    },
    contact: {
      title: 'Fale Conosco',
      description: 'Se você tiver alguma dúvida sobre nossa política de privacidade ou como lidamos com seus dados, entre em contato conosco em:',
      email: `contato@${DOMAIN}`,
    },
  },
  footer: {
    lastUpdated: 'Última atualização: junho de 2025',
  },
};
