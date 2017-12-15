import React from 'react';
import ReactDOM from 'react-dom';
import Nav from '../components/Nav';
import { StyleSheetTestUtils } from 'aphrodite';

describe('Nav test suite', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('Nav renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Nav />, div);
  });

  it('Nav renders with nav prop', () => {
    const div = document.createElement('div');
    var nav = [
      {label: 'Home', path: '/'},
      {label: 'Discover', path: '/discover'},
      {label: 'Review', path: '/review'},
    ]
    ReactDOM.render(<Nav nav={nav} />, div);
  });

  it('Nav renders with nav component', () => {
    const div = document.createElement('div');
    var nav = [
      {label: 'Home', path: '/', component: <a key="home" href="/"> Home </a>},
      {label: 'Discover', path: '/discover', component: <a key="discover" href="/discover"> Discover </a>},
      {label: 'Review', path: '/review', component: <a key="review" href="/review"> Review </a>},
    ]
    ReactDOM.render(<Nav nav={nav} />, div);
  });

  it('Nav renders with other props', () => {
    const div = document.createElement('div');
    var nav = [
      {label: 'Home', path: '/', component: <a key="home" href="/"> Home </a>},
      {label: 'Discover', path: '/discover', component: <a key="discover" href="/discover"> Discover </a>},
      {label: 'Review', path: '/review', component: <a key="review" href="/review"> Review </a>},
    ]
    ReactDOM.render(<Nav nav={nav} tagLine={'hello'} companyName={'hello company'} logoComponent={'hello dear'} />, div);
  });
})

