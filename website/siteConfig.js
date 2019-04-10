/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'Caio Oliveira',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://avatars1.githubusercontent.com/u/23109243?s=400&v=4',
    infoLink: 'https://www.github.com/caiooliv',
    pinned: true,
    role: 'Product Owner',
  },
  {
    caption: 'Lucas Macêdo',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://avatars2.githubusercontent.com/u/19879482?s=400&v=4',
    infoLink: 'https://www.github.com/lukassxp',
    pinned: true,
    role: 'Arquiteto de Software',
  },
  {
    caption: 'Lucas Siqueira',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://avatars1.githubusercontent.com/u/23382026?s=400&v=4',
    infoLink: 'https://www.github.com/lucassiqz',
    pinned: true,
    role: 'Scrum Master',
  },
  {
    caption: 'Matheus Nascimento',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://avatars1.githubusercontent.com/u/31085700?s=400&v=4',
    infoLink: 'https://www.github.com/matheus-rn',
    pinned: true,
    role: 'DevOps',
  },
  {
    caption: 'João Pedro',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://avatars0.githubusercontent.com/u/31708472?s=400&v=4',
    infoLink: 'https://www.github.com/jpcirqueira',
    pinned: true,
    role: 'Desenvolvedor',
  },
  {
    caption: 'Lucas Alexandre',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://avatars0.githubusercontent.com/u/44438409?s=400&v=4',
    infoLink: 'https://www.github.com/lucasA27',
    pinned: true,
    role: 'Desenvolvedor',
  },
  {
    caption: 'Matheus de Cristo',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://avatars1.githubusercontent.com/u/44438591?s=400&v=4',
    infoLink: 'https://www.github.com/MatheusEstanislau',
    pinned: true,
    role: 'Desenvolvedor',
  },
  {
    caption: 'Moacir Júnior',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://avatars3.githubusercontent.com/u/48539765?s=400&v=4',
    infoLink: 'https://www.github.com/MoacirMSJ',
    pinned: true,
    role: 'Desenvolvedor',
  },
  {
    caption: 'Renan Cristyan',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://avatars1.githubusercontent.com/u/39436190?s=400&v=4',
    infoLink: 'https://www.github.com/RCristyan',
    pinned: true,
    role: 'Desenvolvedor',
  },
];

const siteConfig = {
  title: '+Monitoria', // Title for your website.
  tagline: '',
  url: 'https://fga-eps-mds.github.io', // Your website URL
  baseUrl: '/2019.1-MaisMonitoria/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: '2019.1-MaisMonitoria',
  organizationName: 'fga-eps-mds',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'doc-richpicture', label: 'Requisitos'},
    {doc: 'doc-tap', label: 'Docs'},
    {doc: 'sprint0-planning', label: 'Sprints'},
  //  {page: 'help', label: 'Help'},
  ],

  docsSideNavCollapsible: true,

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/LOGO_NOVA.png',
  footerIcon: 'img/LOGO_NOVA.png',
  favicon: 'img/LOGO_NOVA.png',

  /* Colors for website */
  colors: {
    primaryColor: '#1DA1F2',
    secondaryColor: '#0E4C72',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} +Monitoria`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
