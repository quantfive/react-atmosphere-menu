/***
 * The Nav component for navigation
 * @patr -- patrick@quantfive.org
 */

import React from 'react';

// NPM Modules
import { StyleSheet, css } from 'aphrodite';
import { fadeInLeft } from 'react-animations';

export default class Nav extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var navItems = this.props.nav ? this.props.nav : [];
    let nav = navItems.map((navItem, index) => {
      if (navItem.component) {
        return navItem.component;
      } else {
        var active = window.location.pathname === navItem.path;
        return (
          <div key={`react_atmosphere_nav_item_${index}`} className={css(styles.navItem, this.props.navItemClassName, active && styles.activeLink)} style={this.props.navItemStyle}>
            <a href={navItem.path} className={css(styles.linkStyle, this.props.linkClassName)} style={this.props.navLinkStyle}>
              { navItem.label }
            </a>
          </div>
        );
      }
    });
    return (
      <div className={css(styles.nav, styles.fadeInLeft)}>
        { nav }
        <div className={css(styles.tagLine)}>
          { this.props.tagLine }
        </div>
        <div className={css(styles.company)}>
          {this.props.logoComponent
            ? <div className={css(styles.logo)}>
                { this.props.logoComponent }
              </div>
            : null
          }
          <div className={css(styles.companyName) + ` ${this.props.companyClassName ? this.props.companyClassName : ''}`}>
            { this.props.companyName }
          </div>
        </div>
      </div>
    );
  }
}

var styles = StyleSheet.create({
  nav: {

  },
  navItem: {
    marginBottom: '25px',
    opacity: '.7',

    ':hover': {
      opacity: '1',
    }
  },
  tagLine: {
    color: 'rgba(255, 255, 255, 0.5)',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    fontSize: '12px',
    marginTop: '40px',
  },
  company: {
    display: 'flex',
    marginTop: '10px',
    alignItems: 'center',
  },
  logo: {
    marginRight: '10px',
  },
  companyName: {
    color: '#fff',
    letterSpacing: '1px',
    fontSize: '23px',
  },
  fadeInLeft: {
    animationName: fadeInLeft,
    animationDuration: '1s',
  },
  activeLink: {
    opacity: '1',
  },
  linkStyle: {
    textDecoration: 'none',
    color: '#fff',
    fontWeight: '300',

    '@media only screen and (min-width: 768px)': {
      fontSize: '2em',
    },

    '@media only screen and (min-width: 1440px)': {
      fontSize: '2.5em',
    }
  },
});
