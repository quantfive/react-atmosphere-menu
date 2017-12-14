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

// Assets
import bg from './assets/img/background.jpg';

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
        var activeClass = css(!this.props.active && styles.app, this.props.active && styles.appScale);
        var propsClass = this.props.active && this.props.appClassName ? this.props.appClassName : '';
        return React.cloneElement(child, {
          className: `${classes} ${activeClass} ${propsClass}`,
        });
      } else {
        return child;
      }
    });
  }

  render() {
    return (
      <div className={css(styles.menu, this.props.active && styles.backgroundActive) + ` ${this.props.menuClassName ? this.props.menuClassName : ''}`}>
        {this.props.active
          ? <div className={css(styles.navWrapper)}>
              <Nav
                nav={this.props.nav}
                tagLine={this.props.tagLine}
                logoComponent={this.props.logoComponent}
                companyName={this.props.companyName}
                companyClassName={this.props.companyClassName}
                navItemClassName={this.props.navItemClassName}
                navLinkStyle={this.props.navLinkStyle}
                linkClassName={this.props.linkClassName}
                reactRouter={this.props.reactRouter}
                closeMenu={this.props.closeMenu}
              />
            </div>
          : null
        }
        { this.renderChildren() }
      </div>
    );
  }
}

const scaleInKeyFrames = {
  '0%': {
    transform: 'scale(1)',
  },

  '100%': {
    transform: 'scale(.65) translateY(-50%)',
  },
};


const opacityKeyframes = {
  'from': {
    opacity: .3,
  },

  'to': {
    opacity: 1,
  }
};

const absoluteKeyFrames = {
  'from': {
    position: 'absolute',
    right: '0',
  },

  'to': {
    position: 'relative',
  }
}

const scaleOutKeyFrames = {
  '0%': {
    transform: 'scale(.5) translateY(-50%)',
  },

  '100%': {
    transform: 'scale(1)',
  },
}

var styles = StyleSheet.create({
  menu: {
    position: 'relative',
    overflow: 'hidden',
  },
  backgroundActive: {
    background: `url(${bg}) no-repeat center bottom`,
    backgroundSize: 'cover',
    height: '100vh',
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
    // transition: 'all .5s ease-in-out',
    // animationName: [scaleOutKeyFrames, absoluteKeyFrames],
    // animationDuration: '1s',
  },
  appScale: {
    width: '120vw',
    minWidth: '500px',
    position: 'absolute',
    right: '-250px',
    opacity: '.9',
    boxShadow: 'rgba(0, 0, 0, 0.3) 0 0 10px 3px',
    top: '50%',
    maxHeight: '130vh',
    overflow: 'auto',
    minHeight: '400px',
    animationName: [scaleInKeyFrames, opacityKeyframes],
    animationDuration: '1s',
    // animationIterationCount: 'infinite',
    transform: 'scale(.65) translateY(-50%)',
    transformOrigin: 'top right',
    zIndex: 2,
  },
});
