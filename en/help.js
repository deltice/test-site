const React = require('React');
const Site = require('../../core/Site.js');

const Container = require('../../core/Container.js');
const GridBlock = require('../../core/Gridblock.js');

const siteConfig = require(process.cwd() + '/siteConfig.js');

class Help extends React.Component {
  render() {
    const supportLinks = [siteConfig[this.props.language].support.browse, siteConfig[this.props.language].support.join];

    return React.createElement(
      Site,
      { section: 'support', language: this.props.language, config: siteConfig },
      React.createElement(
        'div',
        { className: 'docMainWrapper wrapper' },
        React.createElement(
          Container,
          { className: 'mainContainer documentContainer postContainer' },
          React.createElement(
            'div',
            { className: 'post' },
            React.createElement(
              'header',
              { className: 'postHeader' },
              React.createElement(
                'h2',
                null,
                siteConfig[this.props.language].support.header.title
              )
            ),
            React.createElement(
              'p',
              null,
              siteConfig[this.props.language].support.header.content
            ),
            React.createElement(GridBlock, { contents: supportLinks, layout: 'threeColumn' })
          )
        )
      )
    );
  }
}

Help.defaultProps = {
  language: 'en'
};

module.exports = Help;