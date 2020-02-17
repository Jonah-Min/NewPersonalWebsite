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
          <NavCards src="/images/hubspot2.jpg" title="About" />
          <NavCards src="/images/hubspot2.jpg" title="Projects" />
          <NavCards src="/images/hubspot2.jpg" title="Photos" />
          <NavCards src="/images/hubspot2.jpg" title="Art" />
          <NavCards src="/images/hubspot2.jpg" title="Contact me" />
        </span>
      </span>
    );
  }
}