// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: "Owl's Nest Wiki",
  tagline: "Radical Cobblemon Trainers Campaign",
  favicon: 'img/favicon.png',

  url: 'https://wiki.mottameister.xyz',
  baseUrl: '/',

  organizationName: 'mottameister',
  projectName: 'owls-nest-wiki',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  

  headTags: [
  {
    tagName: 'meta',
    attributes: {
      property: 'og:image',
      content: 'https://wiki.mottameister.xyz/img/social-card.png',
    },
  },
  {
    tagName: 'meta',
    attributes: {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
  },
],

  themeConfig: {
    
  metadata: [
  { name: 'keywords', content: 'Cobblemon, Minecraft Pokemon mod, VGC battles, Cobblemon trainers, Radical Cobblemon Trainers' },
  { name: 'description', content: "Owl's Nest is a competitive Cobblemon campaign featuring structured progression, VGC-style battles, and custom trainers." },
  ],
    image: 'img/social-card.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Owl's Nest Wiki",
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/mottameister/owls-nest-wiki',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: "Owl's Nest Wiki",
              to: '/',
            },
            {
              label: 'Download',
              to: '/download',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.com/invite/TcSFAXGr6a',
            },
            {
              label: 'X',
              href: 'https://x.com/mottameister',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/mottameister/owls-nest-wiki',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MottaMeister. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};



export default config;
