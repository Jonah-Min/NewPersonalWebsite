import React, { PureComponent } from 'react';

import WebsiteHeader from '../components/WebsiteHeader';
import NavCards from '../components/homePage/NavCards';

import '../stylesheets/homePage.css';

export default class HomePage extends PureComponent {
  render() {
    return (
      <span className="home-page-container">
        <WebsiteHeader />
        <span className="home-page-body">
          <NavCards title="About" />
          <NavCards title="Photos" />
          <NavCards title="Art" />
          <NavCards title="Projects" />
          <NavCards title="Contact me" />
        </span>
      </span>
    );
  }
}