---
id: doc2
title: document number 2
layout: docs
category: First Category
permalink: docs/en/doc2.html
previous: doc1
next: doc3
---

## Docusaurus Language Files

To enable support for translations using Docusaurus, make sure you have the `languages.js` file in your website folder with the languages you wish to have for your site enabled.

Also make sure that you have `i18n/en.json` with all of the strings you wish to translate. 

Using `npm run examples` will generate these files along with the other examples Docusaurus provides.

If you only wish to support English, you should delete the `languages.js` file and the `i18n` folder.

## Strings to Translate

In the `i18n/en.json` file, you will find the strings that will be translated with Crowdin. 

### Header and Document Strings

The strings in `localized-strings` are strings that are used in the front matters of your docs and for the header navigation bar and document side bars.

Notably, the `id` of each document maps to the title of that document that you wish to be translated. Category names should be translated, as well as the text for links on the header navigation bar as specified in `siteConfig.js`.

Write the English strings that you wish to use for each these. The strings 'next' and 'previous' also get translated for the links that navigate between documents.

### Strings for Pages

In `pages-strings`, you should put the strings to be translated for each file that you include in `pages/en/` according to their file base names (please do not use the same file names for different files that need to be translated).

For example, if I have the file `pages/en/docusaurus.js` for my page `deltice.github.io/test-site/en/docusaurus.html`, I would include my strings in the following manner:

```json
"pages-strings": {
  ...
  "docusaurus": {
    "First string to translate": "First string to translate",
    "Second string to translate": "Second string to translate"
  },
  ...
}
```

This allows you to simply write your English pages using English strings, and then copy and paste any strings you want translated into this file.

## Crowdin Set-Up

First, create your project on [Crowdin](https://www.crowdin.com/). You can use [Crowdin's guides](https://support.crowdin.com/translation-process-overview/) to learn more about the translations work flow.

To automatically get the translations for your files, update the `circle.yml` file in your project directory to include steps to upload English files to be translated and download translated files using the Crowdin CLI. Here is an example `circle.yml` file:

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
      # configure git user
      - git config --global user.email "test-site-bot@users.noreply.github.com"
      - git config --global user.name "Website Deployment Script"
      - echo "machine github.com login test-site-bot password $GITHUB_TOKEN" > ~/.netrc
      # crowdin install
      - sudo apt-get install default-jre
      - wget https://artifacts.crowdin.com/repo/deb/crowdin.deb -O crowdin.deb
      - sudo dpkg -i crowdin.deb
      # translations upload/download
      - crowdin --config crowdin.yaml upload sources --auto-update -b master
      - crowdin --config crowdin.yaml download -b master
      # build and publish website
      - cd website && npm install && GIT_USER=test-site-bot npm run publish-gh-pages
```

The `crowdin` command uses a `crowdin.yaml` file that should be placed in your project directory to configure how and what files are uploaded/downloaded. Here is the an example `crowdin.yaml` file that should also work for you:

```yaml
project_identifier_env: CROWDIN_PROJECT_ID
api_key_env: CROWDIN_API_KEY
base_path: "./"
preserve_hierarchy: true

files:
  -
    source: '/docs/en/*.md'
    translation: '/docs/%locale%/%original_file_name%'
    languages_mapping: &anchor
      locale:
        'af': 'af'
        'ar': 'ar'
        'bs-BA': 'bs-BA'
        'ca': 'ca'
        'cs': 'cs'
        'da': 'da'
        'de': 'de'
        'el': 'el'
        'es-ES': 'es-ES'
        'fa': 'fa-IR'
        'fi': 'fi'
        'fr': 'fr'
        'he': 'he'
        'hu': 'hu'
        'id': 'id-ID'
        'it': 'it'
        'ja': 'ja'
        'ko': 'ko'
        'mr': 'mr-IN'
        'nl': 'nl'
        'no': 'no-NO'
        'pl': 'pl'
        'pt-BR': 'pt-BR'
        'pt-PT': 'pt-PT'
        'ro': 'ro'
        'ru': 'ru'
        'sk': 'sk-SK'
        'sr': 'sr'
        'sv-SE': 'sv-SE'
        'tr': 'tr'
        'uk': 'uk'
        'vi': 'vi'
        'zh-CN': 'zh-Hans'
        'zh-TW': 'zh-Hant'
  -
    source: '/website/i18n/en.json'
    translation: '/website/i18n/%locale%.json'
    languages_mapping: *anchor
```

Note that `CROWDIN_PROJECT_ID` and `CROWDIN_API_KEY` are environment variables set-up in Circle for your Crowdin project. They can be found in your projet settings.

Now, Circle will help you automatically get translations prior to building your website. If you wish to use crowdin on your machine locally, you can install the [Crowdin CLI tool](https://support.crowdin.com/cli-tool/) and run the same commands found in the `circle.yaml` file, making sure you actually set the `project_identifier` and `api_key`.
