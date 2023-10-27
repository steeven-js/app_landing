// NAVIGATION
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Accueil' },
  { href: '/#Features', key: 'features', label: 'Fonctionnalités' },
  { href: '/#Download', key: 'download', label: 'Téléchargement' },
  { href: 'https://steeven-jacques.vercel.app/contact', key: 'contact_us', label: 'Me contacter', target: '_blank' },
];

// CAMP SECTION
export const PEOPLE_URL = [
  '/person-1.png',
  '/person-2.png',
  '/person-3.png',
  '/person-4.png',
];

// FEATURES SECTION
export const FEATURES = [
  {
    title: 'Base de données',
    icon: '/map.svg',
    variant: 'green',
    description:
      'Explorez une vaste bibliothèque de plantes médicinales locales et régionales, chacune accompagnée de descriptions détaillées, de leurs bienfaits médicaux, de leurs modes de préparation et de leurs utilisations traditionnelles. Une ressource complète pour les amoureux des plantes médicinales.',
  },
  {
    title: 'Recherche avancée',
    icon: '/calendar.svg',
    variant: 'green',
    description:
      "Trouvez facilement la plante médicinale dont vous avez besoin grâce à notre fonction de recherche avancée. Filtrez les résultats en fonction de critères spécifiques tels que les affections traitées, les méthodes de préparation, et bien plus encore, pour une recherche précise.",
  },
  {
    title: 'Conseils d\'utilisation personnalisés',
    icon: '/tech.svg',
    variant: 'green',
    description:
      'Recevez des recommandations personnalisées basées sur vos besoins de santé individuels. Notre application vous guide pour choisir les plantes médicinales appropriées en fonction de vos préférences et de vos conditions de santé, vous aidant ainsi à optimiser votre bien-être.',
  },
  {
    title: 'Liste de fournisseurs locaux',
    icon: '/location.svg',
    variant: 'orange',
    description:
      'Localisez rapidement des fournisseurs de confiance pour acheter les plantes médicinales dont vous avez besoin. Notre liste de fournisseurs locaux vous met en contact avec des sources authentiques à proximité, vous permettant de soutenir les commerçants locaux tout en accédant à des produits de qualité.',
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: 'A propos de l\'application',
    links: [
      {
        label: 'Comment ça marche ?',
        url: '/',
      },
      {
        label: 'Services',
        url: '/#Features',
      },
    ],
  },
  {
    title: 'A propos de moi',
    links: [
      {
        label: 'Mon portfolio',
        url: '/https://steeven-jacques.vercel.app',
      },
      {
        label: 'Mon CV',
        url: 'https://firebasestorage.googleapis.com/v0/b/steeven-portfolio.appspot.com/o/CV%20Jacques%20Steeven_compressed.pdf?alt=media&token=82b6934f-e38c-4e12-8201-3c559341f0a1',
        target: '_blank',
      },
      {
        label: 'Mes projets',
        url: 'https://steeven-jacques.vercel.app/projects',
        target: '_blank',
      },
      {
        label: 'Mes articles',
        url: 'https://steeven-jacques.vercel.app/blog',
        target: '_blank',
      },
    ],
  },
];


export const FOOTER_CONTACT_INFO = {
  title: 'Me contacter',
  links: [
    {href: 'https://steeven-jacques.vercel.app/contact', label: 'Email', value: 'jacques.steeven@gmail', target: '_blank' },
    {href: '/', label: 'Portable', value: '+596 696 30 76 31' },
  ],
};

export const SOCIALS = {
  title: 'Social',
  links: [
    '/facebook.svg',
    '/instagram.svg',
    '/twitter.svg',
    '/youtube.svg',
  ],
};
