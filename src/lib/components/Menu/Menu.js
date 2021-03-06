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

    this.state = {
      zoomOut: false,
    }
  }

  /***
   * Renders the app, normally if the menu isn't active otherwise scaled
   */
  renderChildren = () => {
    return React.Children.map(this.props.children, (child, index) => {
      if (index === 0) {
        var classes = child.props.className;
        var zoomOutFrames = this.props.zoomOutFrames ? this.props.zoomOutFrames : styles.zoomOut;
        var activeClass = css(!this.props.active && styles.app, this.props.active && styles.appScale, this.state.zoomOut && zoomOutFrames);
        var propsClass = this.props.active && !this.state.zoomOut && this.props.appClassName ? this.props.appClassName : '';
        return React.cloneElement(child, {
          className: `${classes} ${activeClass} ${propsClass}`,
        });
      } else {
        return child;
      }
    });
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (!nextProps.active && this.props.active) {
      var zoomOutDuration = this.props.zoomOutDuration ? this.props.zoomOutDuration * 1000 : 500;
      this.setState({
        zoomOut: true,
      });
      setTimeout(() => {
        this.setState({
          zoomOut: false,
        })
      }, zoomOutDuration)
    }
  }

  render() {
    var backgroundStyle = this.props.backgroundImage
      ? {
          background: this.props.backgroundImage
        }
      : null
    return (
      <div
        className={css(styles.menu, ((this.props.active || this.state.zoomOut) && styles.backgroundActive)) + ` ${this.props.menuClassName ? this.props.menuClassName : ''}`}
        style={backgroundStyle}>
        {this.props.active || this.state.zoomOut
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
                navClassName={this.props.navClassName}
              />
            </div>
          : null
        }
        { this.renderChildren() }
      </div>
    );
  }
}

const SCALE = .8; // the scale amount

const scaleInKeyFrames = {
  '0%': {
    position: 'absolute',
    transform: 'scale(1)',
    top: '0',
  },

  '100%': {
    position: 'absolute',
    right: '-250px',
    top: '50%',
    transform: `scale(${SCALE}) translateY(-50%)`,
  },
};

const opacityKeyframes = {
  'from': {
    opacity: 1,
  },

  'to': {
    opacity: .9,
  }
};

const zoomOutKeyFrames = {
  'from': {
    width: '100vw',
    minWidth: '500px',
    position: 'absolute',
    right: '-250px',
    opacity: '.9',
    boxShadow: 'rgba(0, 0, 0, 0.3) 0 0 10px 3px',
    top: '50%',
    maxHeight: '100vh',
    overflow: 'auto',
    minHeight: '600px',
    transform: `scale(${SCALE}) translateY(-50%)`,
    transformOrigin: 'right top',
    zIndex: 2,
  },

  'to': {
    position: 'absolute',
    transform: 'scale(1)',
    top: '0',
    right: '0px',
    width: '100vw',
    minHeight: '600px',
    maxHeight: '100vh',
    minWidth: '500px',
    overflow: 'auto',
    opacity: 1,
  }
}

var styles = StyleSheet.create({
  menu: {
    position: 'relative',
    overflow: 'hidden',
  },
  zoomOut: {
    animationName: [zoomOutKeyFrames],
    animationDuration: '.5s',
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
    animationDuration: '.5s',
  },
  app: {
    // transition: 'all 1s ease-in-out',
    // animationName: [absoluteKeyFrames],
    // animationDuration: '1s',
  },
  appScale: {
    width: '100vw',
    minWidth: '500px',
    position: 'absolute',
    right: '-250px',
    opacity: '.9',
    boxShadow: 'rgba(0, 0, 0, 0.3) 0 0 10px 3px',
    top: '50%',
    maxHeight: '100vh',
    overflow: 'auto',
    minHeight: '600px',
    animationName: [scaleInKeyFrames, opacityKeyframes],
    animationDuration: '.5s',
    // animationTimingFunction: 'linear',
    // animationIterationCount: 'infinite',
    transform: `scale(${SCALE}) translateY(-50%)`,
    transformOrigin: 'right top',
    zIndex: 2,
  },
});
