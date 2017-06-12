const siteConfig = {
  title: 'My Test Site',
  url: 'https://deltice.github.io',
  baseUrl: '/test-site/',
  repo: '',
  editUrl: '',
  headerLinksInternal: [
    {
      section: 'docs',
      href: '/test-site/docs/LANGUAGE/doc1.html',
      text: 'Docs',
    },
    {section: 'api', href: '/test-site/docs/LANGUAGE/doc2.html', text: 'API'},
  ],
  headerLinksExternal: [
    {
      section: 'github',
      href: 'https://github.com/deltice/test-site',
      text: 'GitHub',
    },
  ],
  headerIcon: '',
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