import React from 'react';
import { Link } from 'gatsby';

import NavbarStyles from './styles';

export default class Navbar extends React.Component {
  render() {
    return (
      <NavbarStyles>
        <div className="content-container">
          <div className="navbar">
            <div className="navbar-section">
              <a href="https://rahulrangnekar.com/projects">Projects</a>
              <Link className="active-navlink" to="/">
                Blog
              </Link>
            </div>
            <a className="headline" href="https://rahulrangnekar.com">
              <h1>Rahul Rangnekar</h1>
            </a>
            <div className="navbar-section">
              <a href="https://rahulrangnekar.com/about">About</a>
              <a className="pill" href="https://rahulrangnekar.com/resume">
                Resume
              </a>
            </div>
          </div>
        </div>
      </NavbarStyles>
    );
  }
}
