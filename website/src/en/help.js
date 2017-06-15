"use strict";

const React = require('react');
const Site = require('../../core/Site.js');

const Container = require('../../core/Container.js');
const GridBlock = require('../../core/Gridblock.js');

const siteConfig = require(process.cwd() + '/siteConfig.js');

class Help extends React.Component {
  render() {
    const supportLinks = [
      siteConfig[this.props.language].support.browse,
      siteConfig[this.props.language].support.join,
    ];

    return (
      <Site section="support" language={this.props.language} config={siteConfig}>
        <div className="docMainWrapper wrapper">
          <Container className="mainContainer documentContainer postContainer">
            <div className="post">
              <header className="postHeader">
                <h2>{siteConfig[this.props.language].support.header.title}</h2>
              </header>
              <p>
                {siteConfig[this.props.language].support.header.content}
              </p>
              <GridBlock contents={supportLinks} layout="threeColumn" />
            </div>
          </Container>
        </div>
      </Site>
    );
  }
}

Help.defaultProps = {
  language: 'en',
};

module.exports = Help;
