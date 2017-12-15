import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../Menu';
import { StyleSheetTestUtils } from 'aphrodite';

describe('Menu test suite', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('Menu renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Menu />, div);
  });

  it('Menu renders with nav', () => {
    const div = document.createElement('div');
    var nav = [
      {label: 'Home', path: '/'},
      {label: 'Discover', path: '/discover'},
      {label: 'Review', path: '/review'},
    ]
    ReactDOM.render(<Menu nav={nav} />, div);
  });

  it('Menu renders with backgroundImage', () => {
    const div = document.createElement('div');
    var nav = [
      {label: 'Home', path: '/'},
      {label: 'Discover', path: '/discover'},
      {label: 'Review', path: '/review'},
    ]
    ReactDOM.render(<Menu nav={nav} backgroundImage={'#000'} />, div);
  });
})
