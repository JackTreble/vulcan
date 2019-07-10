// The buildInfo constant is generated by sbt. Do not edit directly.
const buildInfo = { organization: 'com.ovoenergy', coreModuleName: 'vulcan', genericModuleName: 'vulcan-generic', enumeratumModuleName: 'vulcan-enumeratum', refinedModuleName: 'vulcan-refined', latestVersion: '0.2.0-M2', scalaMinorVersion: '2.12', scalaPublishVersions: '2.12 and 2.13' };

const repoUrl = "https://github.com/ovotech/vulcan";

const apiUrl = `/vulcan/api/vulcan/index.html`

// See https://docusaurus.io/docs/site-config for available options.
const siteConfig = {
  title: 'Vulcan',
  tagline: 'Functional Avro for Scala',
  url: 'https://ovotech.github.io/vulcan',
  baseUrl: '/vulcan/',

  customDocsPath: 'docs/target/mdoc',

  projectName: 'vulcan',
  organizationName: 'ovotech',

  headerLinks: [
    { href: apiUrl, label: 'API Docs' },
    { doc: 'overview', label: 'Documentation' },
    { href: repoUrl, label: "GitHub" }
  ],

  headerIcon: 'img/vulcan.white.svg',
  titleIcon: 'img/vulcan.svg',
  favicon: 'img/favicon.png',

  colors: {
    primaryColor: '#122932',
    secondaryColor: '#153243',
  },

  copyright: `Copyright © 2019 OVO Energy Limited.`,

  highlight: { theme: 'github' },

  onPageNav: 'separate',

  separateCss: ["api"],

  cleanUrl: true,

  repoUrl,

  buildInfo,

  apiUrl
};

module.exports = siteConfig;
