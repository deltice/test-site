const React = require('React');
const Site = require('../../core/Site.js');

const Container = require('../../core/Container.js');

const siteConfig = require(process.cwd() + '/siteConfig.js');

class Users extends React.Component {
  render() {
    const showcase = siteConfig.users.map(user => {
      return React.createElement(
        'a',
        { href: user.infoLink },
        React.createElement('img', { src: user.image, title: user.caption })
      );
    });

    return React.createElement(
      Site,
      { language: this.props.language, config: siteConfig },
      React.createElement(
        'div',
        { className: 'mainContainer' },
        React.createElement(
          Container,
          { padding: ['bottom', 'top'] },
          React.createElement(
            'div',
            { className: 'showcaseSection' },
            React.createElement(
              'div',
              { className: 'prose' },
              React.createElement(
                'h1',
                null,
                siteConfig[this.props.language].using.header.title
              ),
              React.createElement(
                'p',
                null,
                siteConfig[this.props.language].using.header.content
              )
            ),
            React.createElement(
              'div',
              { className: 'logos' },
              showcase
            ),
            React.createElement(
              'p',
              null,
              siteConfig[this.props.language].using.prompt
            ),
            React.createElement(
              'a',
              {
                href: 'https://github.com/deltice/test-site/edit/master/website/siteConfig.js',
                className: 'button'
              },
              siteConfig[this.props.language].using.prompt_cta
            )
          )
        )
      )
    );
  }
}

Users.defaultProps = {
  language: 'en'
};

module.exports = Users;