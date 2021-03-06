const fs = require("fs");

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: "User1",
    image: "/test-site/img/docusaurus.svg",
    infoLink: "https://www.example.com",
    pinned: true
  }
];

const siteConfig = {
  title: "Test Site" /* title for your website */,
  url: "https://deltice.github.io" /* your github url */,
  baseUrl: "/test-site/" /* base url for your project */,
  projectName: "test-site",
  users,
  /* base url for editing docs, usage example: editUrl + 'en/doc1.md' */
  editUrl: "https://github.com/deltice/test-site/edit/master/docs/",
  /* header links for links on this site, 'LANGUAGE' will be replaced by whatever
     language the page is for, ex: 'en' */
  headerLinksInternal: [
    {
      section: "docs",
      href: "/test-site/docs/doc1.html",
      text: "Docs"
    },
    { section: "api", href: "/test-site/docs/doc4.html", text: "API" },
    { section: "help", href: "/test-site/help.html", text: "Help" },
    { section: "blog", href: "/test-site/blog", text: "Blog" }
  ],
  /* header links for links outside the site */
  headerLinksExternal: [
    {
      section: "github",
      href: "https://github.com/deltice/test-site",
      text: "GitHub"
    },
    {
      section: "test",
      href: "https://www.google.com/",
      text: "Testing"
    }
  ],
  /* path to images for header/footer */
  headerIcon: "img/docusaurus.svg",
  footerIcon: "img/docusaurus.svg",
  favicon: "img/favicon.png",
  /* colors for website */
  colors: {
    primaryColor: "#2E8555",
    secondaryColor: "#205C3B",
    prismColor:
      "rgba(46, 133, 85, 0.03)" /* primaryColor in rgba form, with 0.03 alpha */
  },
  tagline: "My Tagline",
  recruitingLink:
    "https://crowdin.com/project/test-site" /* translation site "help translate" link */,
  /* remove this section to disable search bar */
  algolia: {
    apiKey:
      "833906d7486e4059359fa58823c4ef56" /* use your search-only api key */,
    indexName: "jest"
  },
  /* remove this to disable google analytics tracking */
  gaTrackingId: "",
  disableHeaderTitle: true,
  externalLinkTarget: "_blank"
};

module.exports = siteConfig;
