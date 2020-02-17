import React, { PureComponent } from 'react';

import WebsiteHeader from '../components/WebsiteHeader';

import "../stylesheets/AboutPage.css";

class AboutPage extends PureComponent {
  render() {
    return (
      <span className="about-me-container">
        <WebsiteHeader />
        <span className="website-background-image" />
        <span className="about">
          <span className="title-block">
            <span className="text">
              Hi! I'm Jonah, it's nice to meet you.
            </span>
          </span>
          <span className="description-block">
            Hello there! My name's Jonah, I'm a software engineer with a passion for art and photography.
            I'm also an avid rock climber and gamer, and I enjoy reading fantasy novels in my free time.
          </span>
        </span>
      </span>
    );
  }
}

export default AboutPage;