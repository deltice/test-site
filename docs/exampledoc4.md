---
id: doc4
title: Other Document
---

A large part of site configuration is done by editing the `siteConfig.js` file.

## User Showcase

The `users` array is used to store objects for each project/user that you want to show on your site. Currently this field is used by example the `pages/en/index.js` and `pages/en/users.js` files provided. Each user object should have `caption`, `image`, `infoLink`, and `pinned` fields. The `caption` is the text showed when someone hovers over the `image` of that user, and the `infoLink` is where clicking the image will bring someon. The `pinned` field determines whether or not it shows up on the `index` page.

Currently this `users` array is used only by the `index.js` and `users.js` example files. If you do not wish to have a users page or show users on the `index` page, you may remove this section.

## siteConfig Fields

The `siteConfig` object contains the bulk of the configuration settings for your website.

### Mandatory Fields

`title` - Title for your website.

`tagline` - Tagline for your website.  

`url` - url for your site.

`baseUrl` - baseUrl for your site.

`projectName` - Project name.

`editUrl` - url for editing docs, usage example: `editUrl + 'en/doc1.md'`

`headerLinksInternal` - Header links for targets on this site. `'LANGUAGE'` will be replaced by whatever language the page is for, for example, `'en'`.

`headerLinksExternal` - Header links for targets outside this site.

`headerIcon` - url for icon used in header navigation bar.

`favicon` - url for site favicon.

`colors` - Simple color configurations for the site. `primaryColor` is the color used the header navigation bar and sidebars. `secondaryColor` is the color seen in the second row of the header navigation bar when the site window is narrow (including on mobile). `prismColor` is the color used in the background of syntax highlighting for code in documentation. It is recommended to be the same color as `primaryColor` in `rgba` form with an alpha value of `0.03`.

### Optional Fields

`users` - The `users` array mentioned earlier.

`disableHeaderTitle` - An option to disable showing the title in the header next to the header icon. Exclude this field to keep the header as normal, otherwise set to `true`.

`footerIcon` - url for a footer icon. Currently used in the `core/Footer.js` file provided as an example, but it can be removed from that file.

`recruitingLink` - url for the `Help Translate` tab of language selection when languages besides English are enabled. Include this if you are using translations.

`algolia` - Information for Algolia search integration. If this field is excluded, the search bar will not appear in the header.

`gaTrackingId` - Google Analytics tracking ID to track page views.

## Example siteConfig.js with all fields

```
const users = [
  {
    caption: "User1",
    image: "/test-site/img/docusaurus.svg",
    infoLink: "https://www.example.com",
    pinned: true
  }
];

const siteConfig = {
  title: "Docusaurus",
  tagline: "Generate websites!",
  url: "https://deltice.github.io",
// url: "https://www.example.com",
  baseUrl: "/test-site/",
// baseUrl: "/",
  projectName: "docusaurus",
  editUrl: "https://github.com/deltice/test-site/edit/master/docs/",
  headerLinksInternal: [
    {
      section: "docs",
      href: "/test-site/docs/LANGUAGE/doc1.html",
      text: "Docs"
    },
    { section: "api", href: "/test-site/docs/LANGUAGE/doc4.html", text: "API" },
    { section: "help", href: "/test-site/LANGUAGE/help.html", text: "Help" },
    { section: "blog", href: "/test-site/blog", text: "Blog" }
  ],
// headerLinksInternal: [],
  headerLinksExternal: [
    {
      section: "github",
      href: "https://github.com/deltice/test-site",
      text: "GitHub"
    }
  ],
// headerLinksExternal: [],
  headerIcon: "img/docusaurus.svg",
  favicon: "img/favicon.png",
  colors: {
    primaryColor: "#2E8555",
    secondaryColor: "#205C3B",
    prismColor:
      "rgba(46, 133, 85, 0.03)"
  },


  users,
  disableHeaderTitle: true,
  footerIcon: "img/docusaurus.svg",
  recruitingLink:
    "https://crowdin.com/project/docusaurus",
  algolia: {
    apiKey:
      "0f9f28b9ab9efae89810921a351753b5",
    indexName: "github"
  }
  gaTrackingId: "U-A2352" 
};

module.exports = siteConfig;

```

