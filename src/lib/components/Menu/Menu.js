/***
 * The main menu wrapper which takes your project as a child
 * @patr -- patrick@quantfive.org
 */

import React from 'react';

// Components
import Nav from './components/Nav';

// NPM Modules
import { StyleSheet, css } from 'aphrodite';
import { fadeInRight } from 'react-animations';

export default class Menu extends React.Component {

  constructor(props) {
    super(props);
  }

  /***
   * Renders the app, normally if the menu isn't active otherwise scaled
   */
  renderChildren = () => {
    return React.Children.map(this.props.children, (child, index) => {
      if (index === 0) {
        var classes = child.props.className;
        var newClass = css(styles.app, this.props.active && styles.appScale, this.props.active && this.props.appStyle);
        return React.cloneElement(child, {
          className: `${classes} ${newClass}`,
        });
      } else {
        return child;
      }
    });
  }

  render() {
    return (
      <div className={css(styles.menu)}>
        {this.props.active
          ? <div className={css(styles.navWrapper)}>
              <Nav nav={this.props.nav} />
            </div>
          : null
        }
        { this.renderChildren() }
      </div>
    );
  }
}

var styles = StyleSheet.create({
  menu: {
    background: '#aaa',
    height: '100vh',
    minWidth: '100vw',
    minHeight: '500px',
  },
  navWrapper: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',

    '@media only screen and (min-width: 768px)': {
      paddingLeft: '100px',
    },

    '@media only screen and (min-width: 1024px)': {
      paddingLeft: '150px',
    },

    '@media only screen and (min-width: 1440px)': {
      paddingLeft: '200px',
    }
  },
  fadeInRight: {
    animationName: fadeInRight,
    animationDuration: '1s',
  },
  app: {
    transition: 'all .5s ease-in-out',
  },
  appScale: {
    position: 'absolute',
    right: '0px',
    opacity: '.9',
    boxShadow: 'rgba(0, 0, 0, 0.3) 0 0 10px 3px',
    top: '50%',
    transform: 'scale(.5) translateY(-50%)',
    transformOrigin: 'top right',
    zIndex: 2,
  },
});
