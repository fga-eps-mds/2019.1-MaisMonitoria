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
    image: '/teste/img/Caio.jpg',
    infoLink: 'https://www.github.com/caiooliv',
    pinned: true,
    papel: 'EPS',
  },

  {
    caption: 'Lucas Macêdo',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/teste/img/Lucas_Macedo.jpeg',
    infoLink: 'https://www.github.com/caiooliv',
    pinned: true,
    papel: 'EPS',
  },

  {
    caption: 'Lucas Siqueira',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/teste/img/Lucas_siqueira.jpeg',
    infoLink: 'https://www.github.com/caiooliv',
    pinned: true,
    papel: 'EPS',
  },

  {
    caption: 'Matheus Nascimento',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/teste/img/Matheus_Rodrigues.jpeg',
    infoLink: 'https://www.github.com/caiooliv',
    pinned: true,
    papel: 'EPS',
  },

  {
    caption: 'João Pedro',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/teste/img/Joao.jpeg',
    infoLink: 'https://www.github.com/caiooliv',
    pinned: true,
    papel: 'MDS',
  },
  {
    caption: 'Lucas Alexandre',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/teste/img/Lucas_Alexandre.jpeg',
    infoLink: 'https://www.github.com/caiooliv',
    pinned: true,
    papel: 'MDS',
  },
  {
    caption: 'Matheus de Cristo',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/teste/img/cristo.jpg',
    infoLink: 'https://www.github.com/caiooliv',
    pinned: true,
    papel: 'MDS',
  },
  {
    caption: 'Moacir Júnior',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/teste/img/Moacir.jpeg',
    infoLink: 'https://www.github.com/caiooliv',
    pinned: true,
    papel: 'MDS',
  },

  {
    caption: 'Renan',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/teste/img/Lucas_Alexandre.jpeg',
    infoLink: 'https://www.github.com/caiooliv',
    pinned: true,
    papel: 'MDS',
  },


];

const siteConfig = {
  title: 'Hora da hora', // Title for your website.
  tagline: '',
  url: 'https://fga-eps-mds.github.io', // Your website URL
  baseUrl: '/2019.1-Hora-Da-Hora/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'teste',
  organizationName: 'caiooliv',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'Instrospecção', label: 'Documetnos'},
    {doc: 'Instrospecção', label: 'Sprints'},
    
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/docusaurus.svg',
  footerIcon: 'img/docusaurus.svg',
  favicon: 'img/favicon.png',

  /* Colors for website */
  colors: {
    primaryColor: '#1da1f2',
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
  copyright: `Copyright © ${new Date().getFullYear()} Your Name or Your Company Name`,

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
