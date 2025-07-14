import privacy from './privacy';
import terms from './terms';
import about from './about';
import media from './media';
import { DOMAIN } from '@/constants/biz';

const TITLE = 'Revenia: Um Jogo Mexicano de Terror e Sobrevivência';
const DESCRIPTION =
  'Explore o mundo sombrio de Revenia, um jogo de terror e sobrevivência em terceira pessoa inspirado no folclore mexicano. Este é um site comunitário para fãs de Revenia.';

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
    note: 'Nota',
    content: 'Completamente não oficial, fan site',
  },
  layout: {
    brand: {
      name: 'Revenia',
      description: DESCRIPTION,
    },
    nav: {
      media: {
        label: 'Mídia',
        href: '/media',
      },
      about: {
        label: 'Sobre',
        href: '/about',
      },
    },
    footer: {
      language: 'Idioma',
      privacyPolicy: 'Política de Privacidade',
      termsOfService: 'Termos de Serviço',
      aboutUs: 'Sobre Nós',
      contact: `contato@${DOMAIN}`,
      addToChrome: 'Adicionar ao Chrome',
      co2Consumption: '<PLACEHOLDER>WEIGHT</PLACEHOLDER> de CO₂/visualização',
      comparedToOtherPages: 'Mais limpo que <PLACEHOLDER>PERCENTAGE</PLACEHOLDER> das páginas testadas',
      copyright: {
        domain: DOMAIN,
        year: 2025,
        text: 'Todos os direitos reservados',
        buildWith: 'Desenvolvido com Next.js',
      },
      disclaimer: 'Aviso: Este site é contribuído por entusiastas do jogo. Revenia.net não é afiliado ao jogo oficial Revenia ou Kulkatto.',
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
      description: 'Um jogo mexicano de terror e sobrevivência que te mergulha em uma vila esquecida envolta em névoa, superstição e uma escuridão ancestral.',
      downloadButton: 'Baixar Demo (Beta)',
      downloadLink: 'https://kulkatto.itch.io/revenia-cyp',
      trailerButton: 'Assistir Trailer',
      trailerLink: 'https://www.youtube.com/watch?v=KP2opBOkT9I&t=8s',
      screenshots: [
        {
          imgUrl: '/imgs/screenshots/revenia-1.jpg',
          alt: 'A vila está envolta em névoa',
        },
        {
          imgUrl: '/imgs/screenshots/revenia-2.jpg',
          alt: 'Prepare-se para entrar na vila',
        },
        {
          imgUrl: '/imgs/screenshots/revenia-3.jpg',
          alt: 'Entre na vila',
        },
      ],
    },
    examples: {
      titlePrefix: 'Experimente o',
      title: 'Medo',
      contents: [{
        title: 'Exploração',
        description: 'Explore uma seção da vila sombria, descobrindo seus segredos obscuros e símbolos proibidos.',
        imgUrl: '/assets/icons/game.svg',
      }, {
        title: 'Sobrevivência & Combate',
        description: 'Enfrente inimigos menores e uma ameaça principal formidável enquanto gerencia recursos e cria itens.',
        imgUrl: '/assets/icons/team.svg',
      }, {
        title: 'Folclore Mexicano',
        description: 'Mergulhe na autêntica mitologia mexicana e tradições culturais entrelaçadas na experiência de terror.',
        imgUrl: '/assets/icons/play.svg',
      }]
    },
    Introduction: {
      titlePrefix: 'Sobre',
      title: 'Revenia',
      contents: [
        'Nas profundezas de uma vila esquecida, coberta por névoa, superstição e abandono, uma mulher retorna após anos de ausência. A terra que ela conhecia parece possuída por uma escuridão latente, tecida entre lendas locais, símbolos proibidos e ruínas marcadas pelo tempo. Algo antigo despertou... e não está disposto a ser ignorado.',
        'Revenia é uma experiência narrativa em terceira pessoa que combina exploração, elementos de terror, sobrevivência e mitologia mexicana. Esta demo-beta permite que você experimente as primeiras seções do jogo após o prólogo.',
      ],
      ctaText: 'Saiba Mais Sobre o Jogo',
      ctaLink: 'https://kulkatto.itch.io/revenia-cyp',
    },
    systemRequirements: {
      titlePrefix: 'Requisitos Mínimos do',
      title: 'Sistema',
      contents: [
        {
          label: 'SO',
          content: 'Windows 10 ou superior (64-bit)'
        },
        {
          label: 'Processador',
          content: 'Intel® Core™ i5-4460 / AMD FX™-6300'
        },
        {
          label: 'Memória',
          content: '8 GB RAM'
        },
        {
          label: 'Gráficos',
          content: 'NVIDIA® GeForce® GTX 760 / AMD Radeon™ R7 260x (2GB VRAM)'
        },
        {
          label: 'DirectX',
          content: 'Versão 11'
        },
        {
          label: 'Armazenamento',
          content: '11 GB de espaço disponível'
        },
      ],
    },
    features: {
      titlePrefix: 'Recursos da',
      title: 'Demo',
      contents: [
        {
          label: '',
          content: 'Exploração em uma seção da vila',
        },
        {
          label: '',
          content: 'Introdução aos sistemas de sobrevivência e combate',
        },
        {
          label: '',
          content: 'Inimigos menores e uma ameaça principal',
        },
        {
          label: '',
          content: 'Criação, cura e recursos naturais',
        },
        {
          label: '',
          content: 'Atmosfera cuidadosamente elaborada',
        },
        {
          label: '',
          content: 'Duração: 15-20 minutos',
        },
      ],
    },
    socialMedia: {
      titlePrefix: 'Conecte-se nas',
      title: 'Redes Sociais',
      description: 'Fique por dentro das últimas notícias, atualizações de desenvolvimento, bastidores e eventos da comunidade.',
      contents: [
        {
          title: 'TikTok',
          description: `Siga-nos para vídeos curtos e envolventes, diários de desenvolvimento e atualizações rápidas sobre o progresso de Revenia.`,
          imgUrl: '/assets/icons/tiktok.svg',
          linkText: 'Siga',
          linkUrl: 'https://www.tiktok.com/@reveniaproject',
        },
        {
          title: 'Instagram',
          description: `Explore artes conceituais, designs de ambientes e inspirações artísticas por trás de Revenia.`,
          imgUrl: '/assets/icons/instagram.svg',
          linkText: 'Siga',
          linkUrl: 'https://www.instagram.com/kulkattostudio/',
        },
        {
          title: 'Youtube',
          description: `Assista aos trailers mais recentes, diários de desenvolvimento e bastidores de Revenia.`,
          imgUrl: '/assets/icons/youtube.svg',
          linkText: 'Assista',
          linkUrl: 'https://www.youtube.com/@kulkatto',
        },
        {
          title: 'Discord',
          description: `Junte-se à nossa comunidade para discutir o jogo, compartilhar suas ideias e receber as últimas atualizações.`,
          imgUrl: '/assets/icons/discord.svg',
          linkText: 'Junte-se',
          linkUrl: 'https://discord.gg/wmsK3tazt4',
        },
      ]
    },
    cta: {
      titlePrefix: 'Pronto para enfrentar a',
      title: 'Escuridão',
      titleSuffix: '?',
      description: [
        'Baixe a demo gratuita e experimente o primeiro vislumbre deste jogo mexicano de terror e sobrevivência.',
      ],
      buttonText: 'Baixar Demo (Beta)',
      buttonLink: 'https://kulkatto.itch.io/revenia-cyp',
      buttonIcon: '/assets/icons/download.svg',
      buttonIconAlt: 'Baixar Demo (Beta)',
    },
    faq: {
      title: 'Perguntas Frequentes',
      questions: [
        {
          q: 'Quem está desenvolvendo Revenia?',
          a: [
            'Revenia está sendo desenvolvido de forma independente por um único criador, Kulkatto. Este projeto é um testemunho de paixão e dedicação, com cada aspecto do jogo, da programação à arte e música, meticulosamente criado por uma única pessoa.',
          ],
        },
        {
          q: 'Que tipo de jogo é Revenia?',
          a: [
            'Revenia é principalmente uma experiência narrativa em terceira pessoa que pertence ao gênero de terror e sobrevivência. Apresenta elementos de exploração, combate, criação de itens e gerenciamento de recursos, tudo ambientado em um mundo profundamente atmosférico inspirado no folclore mexicano.',
          ],
        },
        {
          q: 'Qual é a história de fundo de Revenia?',
          a: [
            `Em Revenia, você joga como uma mulher que retorna à sua vila ancestral após muitos anos. Esta vila, antes familiar, agora está envolta em névoa, superstição e um abandono inquietante. A própria terra parece possuída por uma escuridão latente, com lendas antigas, símbolos proibidos e ruínas marcadas pelo tempo que sugerem a existência de uma entidade ancestral que despertou e exige reconhecimento. A narrativa é uma descida a uma realidade onde cada sombra guarda um segredo e cada som pode ser o último, explorando a conexão da protagonista com esta terra amaldiçoada e seu passado sombrio.`,
          ],
        },
        {
          q: 'Qual é o maior destaque deste jogo?',
          a: [
            `Revenia não busca impressionar com espetáculos técnicos ou visuais. Sua força está nos detalhes, nas atmosferas e na tensão que surge de um ambiente cuidadosamente construído. É profundamente inspirado no folclore, mitos, lendas e nas feridas abertas da memória coletiva mexicana.`,
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
