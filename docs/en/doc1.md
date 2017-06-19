---
id: doc1
title: Docusaurus
layout: docs
category: Docusaurus
permalink: docs/en/doc1.html
next: doc2
---

## Getting Started

In your project repo, make sure you have a `docs` folder containing all of your documentation files written in markdown. Create a `website` folder inside which you will install and run docusaurus.

Install Docusaurus using `npm`:

```
cd website
npm install --save-dev docusaurus
```

In your `package.json` file, add the following scripts for docusaurus:

```json
"scripts": {
  "docusaurus-start": "docusaurus-start",
  "docusaurus-build": "docusaurus-build",
  "docusaurus-publish": "docusaurus-publish",
  "docusaurus-examples": "docusaurus-examples"
}
```

To create example files for configuration, run `docusaurus-examples` using npm:

```
npm run docusaurus-examples
```

This will create the following files in your website folder:

```
core/Footer.js
example-docs/doc1.md
example-docs/doc2.md
example-docs/doc3.md
example-docs/exampledoc4.md
example-docs/exampledoc5.md
i18n/en.js
src/en/help.js
src/en/index.js
src/en/users.js
languages.js
siteConfig.js
```

`docusaurus-examples` will not overwrite any existing files of the same name in your website folder.

## Configuration

The provided example files contain configurations for an example project `deltice/test-site` and the documents in `example-docs/`. These are provided for your reference to help you configure your project. Documents in `example-docs/` are provided for your reference for how to write markdown files, including necessary front matter information, and are not necessary while all other generated files are needed to build and publish your website.

First, configure the siteConfig.js file which has comments guiding you through what needs to be done and how each configuration affects your website.

Then, configure the publishConfig.js file which has the information needed to publish your project to gh-pages.

Keep languages.js as is with just English enabled. Enter English strings for your website in i18n/en.js manually. In future updates, these files will be used by docusaurus to support translations/localization.

Next, customize core/Footer.js which will serve as the footer for each page on your website.

Include your own top-level pages as React components in `src/en/`. Any `.js` files at `src/en/` will be copied to `src/` as well, so `your-site/index.html` will be the same as `your-site/en/index.html`. Three pages are provided for your reference and to use as templates if you so desire. They also contain examples of React components that are available for your use. Currently, if you want to add other React components to a file, you must include all of it inside that file due to how `require` paths are currently set-up. This may be changed in future updates.

All images and other files you wish to include should be placed inside the `src` folder. Currently, docusaurus will attempt to compile any `.js` files into React pages if it is not in `src/js/`.

## Using Docusaurus

### Run the Server

To run your website locally run the script:

```
npm run docusaurus-start
```

This will start a server hosting your website locally at `localhost:3000`. This server will ignore any occurences `siteConfig.baseUrl` in URLs, e.g. `localhost:3000/your-site/index.html` will be the same as `localhost:3000/index.html`. Any changes to configured files will be reflected by refreshing the page, i.e. the server does not need to be restarted to show changes.


### Build Static Pages

To create a static build of your website, run the script:

```
npm run docusaurus-build
```

This will generate `.html` files from all of your docs and other pages included in `src`. This allows you to check whether or not all your files are being generated correctly. The build folder is inside Docusaurus's directory inside `node_modules`.

### Publishing Your Website

Use CircleCI to publish your website whenever your project repo is updated. Configure your circle.yml file in your project repo to run commands to publish to GitHub Pages. An example is shown here:

```yaml
machine:
  node:
    version: 6.10.3
  npm:
    version: 3.10.10

test:
  override:
    - "true"

deployment:
  website:
    branch: master
    commands:
      - git config --global user.email "test-site-bot@users.noreply.github.com"
      - git config --global user.name "Website Deployment Script"
      - echo "machine github.com login test-site-bot password $GITHUB_TOKEN" > ~/.netrc
      - cd website && GIT_USER=test-site-bot npm run docusaurus-publish
```

Note that a GitHub user `test-site-bot` was created to use just for publishing. Make sure to give your Git user push permissions for your project and to set a GITHUB_TOKEN environment variable in Circle if you choose to publish this way.

If you wish to manually publish your website with the `docusaurus-publish` script, run the following example command with the appropriate variables for your project:

```
DEPLOY_USER=deltice GIT_USER=test-site-bot CIRCLE_PROJECT_USERNAME=deltice CIRCLE_PROJECT_REPONAME=test-site npm run docusaurus-publish
```
