const React = require('React');
const Site = require('../../core/Site.js');
const Marked = require('../../core/Marked.js');

const Container = require('../../core/Container.js');
const GridBlock = require('../../core/Gridblock.js');

const siteConfig = require(process.cwd() + '/siteConfig.js');

class Button extends React.Component {
  render() {
    return React.createElement(
      'div',
      { className: 'pluginWrapper buttonWrapper' },
      React.createElement(
        'a',
        {
          className: 'button',
          href: this.props.href,
          target: this.props.target
        },
        this.props.children
      )
    );
  }
}

Button.defaultProps = {
  target: '_self'
};

class HomeSplash extends React.Component {
  render() {
    return React.createElement(
      'div',
      { className: 'homeContainer' },
      React.createElement(
        'div',
        { className: 'homeSplashFade' },
        React.createElement(
          'div',
          { className: 'wrapper homeWrapper' },
          React.createElement(
            'div',
            { className: 'projectLogo' },
            React.createElement('img', { src: '/test-site/img/docusaurus.svg', alt: 'Jest' })
          ),
          React.createElement(
            'div',
            { className: 'inner' },
            React.createElement(
              'h2',
              { className: 'projectTitle' },
              siteConfig.title,
              React.createElement(
                'small',
                null,
                siteConfig[this.props.language].tagline
              )
            ),
            React.createElement(
              'div',
              { className: 'section promoSection' },
              React.createElement(
                'div',
                { className: 'promoRow' },
                React.createElement(
                  'div',
                  { className: 'pluginRowBlock' },
                  React.createElement(
                    Button,
                    { href: '#try' },
                    siteConfig[this.props.language].promo.try
                  ),
                  React.createElement(
                    Button,
                    {
                      href: '/test-site/docs/' + this.props.language + '/doc1.html'
                    },
                    siteConfig[this.props.language].promo.doc1
                  ),
                  React.createElement(
                    Button,
                    {
                      href: '/test-site/docs/' + this.props.language + '/doc2.html'
                    },
                    siteConfig[this.props.language].promo.doc2
                  )
                )
              )
            )
          )
        )
      )
    );
  }
}

class Index extends React.Component {
  render() {
    let language = this.props.language;
    if (typeof language == 'undefined') {
      language = 'en';
    }
    const showcase = siteConfig.users.filter(user => {
      return user.pinned;
    }).map(user => {
      return React.createElement(
        'a',
        { href: user.infoLink },
        React.createElement('img', { src: user.image, title: user.caption })
      );
    });

    return React.createElement(
      Site,
      { language: language, config: siteConfig },
      React.createElement(HomeSplash, {
        language: language
      }),
      React.createElement(
        'div',
        { className: 'mainContainer' },
        React.createElement(
          Container,
          { padding: ['bottom', 'top'] },
          React.createElement(GridBlock, {
            align: 'center',
            contents: siteConfig[language].features,
            layout: 'fourColumn'
          })
        ),
        React.createElement(
          'div',
          {
            className: 'productShowcaseSection paddingBottom',
            style: { textAlign: 'center' } },
          React.createElement(
            'h2',
            null,
            siteConfig[language].featureCallout.title
          ),
          React.createElement(
            Marked,
            null,
            siteConfig[language].featureCallout.content
          )
        ),
        React.createElement(
          Container,
          { padding: ['bottom', 'top'], background: 'light' },
          React.createElement(GridBlock, {
            contents: [{
              content: siteConfig[language].belowFold.learn.content,
              image: '/test-site/img/docusaurus.svg',
              imageAlign: 'right',
              title: siteConfig[language].belowFold.learn.title
            }]
          })
        ),
        React.createElement(
          Container,
          { padding: ['bottom', 'top'], id: 'try' },
          React.createElement(GridBlock, {
            contents: [{
              content: siteConfig[language].belowFold.try.content,
              image: '/test-site/img/docusaurus.svg',
              imageAlign: 'left',
              title: siteConfig[language].belowFold.try.title
            }]
          })
        ),
        React.createElement(
          Container,
          { padding: ['bottom', 'top'], background: 'dark' },
          React.createElement(GridBlock, {
            contents: [{
              content: siteConfig[language].belowFold.description.content,
              image: '/test-site/img/docusaurus.svg',
              imageAlign: 'right',
              title: siteConfig[language].belowFold.description.title
            }]
          })
        ),
        React.createElement(
          'div',
          { className: 'productShowcaseSection paddingBottom' },
          React.createElement(
            'h2',
            null,
            siteConfig[language].belowFold.using.title
          ),
          React.createElement(
            'p',
            null,
            siteConfig[language].belowFold.using.content
          ),
          React.createElement(
            'div',
            { className: 'logos' },
            showcase
          ),
          React.createElement(
            'div',
            { className: 'more-users' },
            React.createElement(
              'a',
              { className: 'button', href: siteConfig.baseUrl + "users.html", target: '_self' },
              siteConfig[language].belowFold.using.button
            )
          )
        )
      )
    );
  }
}

module.exports = Index;