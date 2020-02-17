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
          <NavCards center="30%" linkTo="/projects" src="/images/league.jpg" title="Projects" />
          <NavCards center="36%" linkTo="/photos" src="/images/Seattle_Street.jpg" title="Photos" />
          <NavCards linkTo="/art" src="/images/penguin.png" title="Art" />
          <NavCards center="80%" linkTo="/contact" src="/images/selfPortrait.png" title="Contact me" />
        </span>
      </span>
    );
  }
}