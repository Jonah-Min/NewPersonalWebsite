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
          <NavCards linkTo="/about" src="/images/hubspot2.jpg" title="About" />
          <NavCards linkTo="/projects" src="/images/hubspot2.jpg" title="Projects" />
          <NavCards linkTo="/photos" src="/images/hubspot2.jpg" title="Photos" />
          <NavCards linkTo="/art" src="/images/hubspot2.jpg" title="Art" />
          <NavCards linkTo="/contact" src="/images/hubspot2.jpg" title="Contact me" />
        </span>
      </span>
    );
  }
}