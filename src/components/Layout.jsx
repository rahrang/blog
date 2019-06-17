import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';

import {
  GlobalStyle,
  getInitialTheme,
  getTheme,
  setTheme,
  Navbar,
  Footer,
  SwitchThemeButton,
} from '@rahrang/frame';

import '../styles/normalize.scss';
import SEO from './seo';

class Layout extends React.Component {
  state = {
    themeKey: getInitialTheme(),
  };

  switchTheme = newThemeKey => {
    this.setState({ themeKey: newThemeKey });
    setTheme(newThemeKey);
  };

  render() {
    const { children } = this.props;
    const { themeKey } = this.state;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <React.Fragment>
            <SEO title={data.site.siteMetadata.title} />
            <ThemeProvider theme={getTheme(themeKey)}>
              <React.Fragment>
                <GlobalStyle />
                <div>
                  <SwitchThemeButton
                    onClick={this.switchTheme}
                    currThemeKey={themeKey}
                  />
                  <Navbar />
                  <div className="content-container page-container">
                    {children}
                  </div>
                  <Footer />
                </div>
              </React.Fragment>
            </ThemeProvider>
          </React.Fragment>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
