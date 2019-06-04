import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';

import '../../styles/normalize.scss';
import SEO from '../seo';
import { getInitialTheme, getTheme, setTheme } from '../../util/theme';
import GlobalStyle from './GlobalStyle';
import LayoutStyles from './styles';
import Navbar from '../Navbar';
// import Footer from 'components/Footer';
import SwitchTheme from '../SwitchTheme';

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
                <LayoutStyles>
                  <SwitchTheme
                    onClick={this.switchTheme}
                    currThemeKey={themeKey}
                  />
                  <Navbar />
                  <div className="content-container page-container">
                    {children}
                  </div>
                </LayoutStyles>
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
