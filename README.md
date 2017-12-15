# React Atmosphere Menu

[![Build Status](https://travis-ci.org/UdiliaInc/create-react-library.svg?branch=master)](https://travis-ci.org/UdiliaInc/create-react-library)
[![Dependencies](https://img.shields.io/david/udiliaInc/create-react-library.svg)]()
[![Dev Dependencies](https://img.shields.io/david/dev/udiliaInc/create-react-library.svg)]()

[![npm download][download-image]][download-url]

[download-image]: https://img.shields.io/npm/dm/react-atmosphere-menu.svg?style=flat-square
[download-url]: https://www.npmjs.com/package/react-atmosphere-menu

## Demo

http://lightninglu10.reactatmosphere.hellodeploy.com/

## Install the package
Use NPM or Yarn

```sh
yarn add react-atmosphere-menu
```

```sh
npm install --save react-atmosphere-menu
```

## Usage

1 . Require react-atmosphere-menu after installation

```js
import AtmosphereMenu from 'react-atmosphere-menu'
```

2 . Wrap react-atmosphere-menu around your app


```js
<AtmosphereMenu>
  <YOUR APP />
</AtmosphereMenu
```

3 . Customize options

```js
var nav = [
  {id: 'home', label: 'Home', path: '/'},
  {id: 'about', label: 'About', path: '/about'},
  {id: 'discover', label: 'Discover', path: '/discover'},
]
<AtmosphereMenu
  active={this.state.atmosphereActive}
  nav={nav}
  reactRouter={true}
  tagLine={"Made by"}
  companyName={"Q5"}
  closeMenu={() => this.setState({atmosphereActive: false})}>
  <YOUR APP />
</AtmosphereMenu
```

## Main Options
Option|Type	|  Description
|:---|:---|:---
 active	|  Boolean  | `true` will show the menu and `false` will hide the menu. (Required)
 nav	|  Array  | An array of objects that describe the navigation menu. Each object needs to have keys `id`, `label`, and `path`. (Required)
 reactRouter |  Boolean  | `true` if you use React Router in your project `false` if you don't.
 tagLine |  String  | Below the navigation, there will be an area for extra text. The tagline goes above the company text.
 companyName |  String  | Below the navigation, there will be an area for extra text. Here you can display your name or company or group.
 logoComponent |  Component  | Displayed in line with the `companyName`, add a component for a logo like so: `<img src={LOGO} />`.
 closeMenu |  Function  | The function that closes your atmosphere menu. Should set the variable for the `active` prop to false.
 
 ## Extra Options / Styling options
 Option|Type	|  Description
|:---|:---|:---
 appClassName	|  String  | Extra class to style your app when the menu is active.
 companyClassName	|  String  | Extra class to style the `companyName` text.
 navItemClassName |  String  | Extra class to style each Navigation item. Default: ```
 navItem: {
    marginBottom: '25px',
    opacity: '.7',

    ':hover': {
      opacity: '1',
    }
  },
  ```
 tagLine |  String  | Below the navigation, there will be an area for extra text. The tagline goes above the company text.
 companyName |  String  | Below the navigation, there will be an area for extra text. Here you can display your name or company or group.
 closeMenu |  Function  | The function that closes your atmosphere menu. Should set the variable for the `active` prop to false.

