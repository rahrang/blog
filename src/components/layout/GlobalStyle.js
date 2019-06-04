import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ::selection {
    color: ${props => props.theme.colors.textColor};
    background-color: ${props => props.theme.colors.linkHoverColor};
  }

  ::-moz-selection {
    color: ${props => props.theme.colors.textColor};
    background-color: ${props => props.theme.colors.linkHoverColor};
  }

  body {
    background-color: ${props => props.theme.colors.bgColor};
    font-family: 'system-ui';
    margin: 0;
    padding: 0;

    /* TODO: add font, flex styles */

    .page-container {
      margin-top: 2rem;
      padding-left: 2rem;
      padding-right: 2rem;
    }

    .content-container {
      max-width: ${props => props.theme.contentWidth};
      margin-left: auto;
      margin-right: auto;
    }

    h1, h2, h3, h4 {
      color: ${props => props.theme.colors.headingColor};
    }

    p {
      color: ${props => props.theme.colors.textColor};
      line-height: 1.75rem;
    }

    a {
      color: ${props => props.theme.colors.linkColor};
      text-decoration: none;

      &:hover {
        color: ${props => props.theme.colors.linkHoverColor};
      }
    }
  }
`;
