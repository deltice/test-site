const users = [
  {
    caption: 'User1',
    image: '/test-site/img/docusaurus.svg',
    infoLink: 'https://www.example.com',
    pinned: true,
  },
]

const siteConfig = {
  title: 'Test Site',
  url: 'https://deltice.github.io',
  baseUrl: '/test-site/',
  repo: '',
  users,
  editUrl: '',
  headerLinksInternal: [
    {
      section: 'docs',
      href: '/test-site/docs/LANGUAGE/doc1.html',
      text: 'Docs',
    },
    {section: 'api', href: '/test-site/docs/LANGUAGE/doc2.html', text: 'API'},
    {section: 'help', href: '/test-site/LANGUAGE/help.html', text: 'Help'},
  ],
  headerLinksExternal: [
    {
      section: 'github',
      href: 'https://github.com/deltice/test-site',
      text: 'GitHub',
    },
  ],
  headerIcon: 'img/docusaurus.svg',
  footerIcon: 'img/docusaurus.svg',
  docsSidebarDefaults: {
    layout: 'docs',
    root: '/test-site/docs/en/doc1.html',
    title: 'Docs',
  },
};

const languages = require('./languages.js');

const enabledLanguages = [];
languages.filter(lang => lang.enabled).map(lang => {
  enabledLanguages.push(lang);
});

siteConfig['languages'] = enabledLanguages;

siteConfig['en'] = require('./i18n/en.js');

/* INJECT LOCALIZED FILES BEGIN */
/* INJECT LOCALIZED FILES END */

module.exports = siteConfig;