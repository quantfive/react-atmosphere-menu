import React from 'react';
import Menu from '../lib';
import Reactagram from './007-reactagram/src/App';
import Watermark from './Watermark';

// NPM Modules
import { StyleSheet, css } from 'aphrodite';

var nav = [
  {label: 'Home', path: '/'},
  {label: 'Discover', path: '/discover'},
  {label: 'Review', path: '/review'},
]

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    }
  }

  render() {
    var location = window.location.pathname;
    return (
      <div style={{height: '100vw', height: '100vh'}}>
        <Menu
          onClick={() => this.setState({active: false})}
          active={this.state.active}
          nav={nav}
          tagLine={"Created By"}
          appClassName={css(styles.appClass)}
          companyName={<a style={{textDecoration: 'none', color: '#fff'}} target="_blank" href="https://www.quantfive.org">Q5</a>}
          navClassName={css(styles.robotoMono)}>
          <div className={css(styles.app)}>
            <div className={css(styles.helloWorld)}>
              <i className={css(styles.hamburgerIcon) + " fa fa-bars"} aria-hidden="true" onClick={() => this.setState({active: !this.state.active})}></i>
              React Atmosphere Menu by Q5

              <div className={css(styles.path)}>
                path: { location }
              </div>
            </div>
            <Reactagram onClick={() => this.setState({active: false})}/>
          </div>
        </Menu>
        <Watermark />
      </div>
    );
  }
}

var styles = StyleSheet.create({
  appClass: {
    height: '900px',
  },
  app: {
    minHeight: '100vh',
    fontFamily: "'Roboto Mono', monospace",
  },
  robotoMono: {
    fontFamily: "'Roboto Mono', monospace"
  },
  helloWorld: {
    fontSize: '14px',
    background: 'rgba(0, 0, 0, .3)',
    width: '100%',
    color: '#fff',
    position: 'absolute',
    zIndex: '99999',
    display: 'flex',
    alignItems: 'center',
  },
  hamburgerIcon: {
    cursor: 'pointer',
    height: '100%',
    padding: '20px 20px',
  },
  path: {
    marginLeft: '50px',
  },
});

export default App;
