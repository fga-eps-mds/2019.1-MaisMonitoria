/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [];

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
  favicon: 'img/Logo_com_fundo.png',

  /* Colors for website */
  colors: {
    primaryColor: '#3387BE',
    secondaryColor: '#004F79',
  },

  /* Custom fonts for website */
  
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
  
  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} +Monitoria`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    'https://buttons.github.io/buttons.js',
    "js/vendor/jquery-2.2.4.min.js",
    {src:"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js",
      integrity:"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q",
    },
    "js/easing.min.js",
    "js/hoverIntent.js",
    "js/superfish.min.js",
    "js/vendor/bootstrap.min.js",
    "js/jquery.ajaxchimp.min.js",
    "js/jquery.magnific-popup.min.js",
    "js/owl.carousel.min.js",
    "js/owl-carousel-thumb.min.js",
    "js/jquery.sticky.js",
    "js/jquery.nice-select.min.js",
    "js/parallax.min.js",
    "js/waypoints.min.js",
    "js/wow.min.js",
    "js/jquery.counterup.min.js",
    "js/mail-script.js",
    "js/main.js",
  ],
	
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
