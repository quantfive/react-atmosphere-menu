import React from 'react';
import Menu from '../lib';

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
    return (
      <div style={{height: '100vw', height: '100vh'}}>
        <Menu active={this.state.active} nav={nav} tagLine={"Learn more here"} companyName={'Lunyr'}>
          <div className={css(styles.helloWorld)}>
            Hello World!

            <button onClick={() => this.setState({active: !this.state.active})}>
              NavBar
            </button>
          </div>
        </Menu>
      </div>
    );
  }
}

var styles = StyleSheet.create({
  helloWorld: {
    fontSize: '50px',
    background: '#fff',
    padding: '50px',
    height: '100%',
    width: '100%',
  }
});

export default App;
