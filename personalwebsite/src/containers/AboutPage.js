import React, { PureComponent } from 'react';

import "../stylesheets/AboutPage.css";

class AboutPage extends PureComponent {
  render() {
    return (
      <span className="about-me-container">
        <span className="website-background-image" />
        <span className="about">
          <span className="title-block">
            <span className="text">
              Hello there! I'm Jonah, it's nice to meet you.
            </span>
          </span>
          <span className="description-block">
            I'm a software engineer with a passion for art and photography.
            I'm also an avid rock climber and gamer, and I enjoy reading fantasy novels in my free time.
            Continue scrolling to learn more!
          </span>
        </span>
        <span className="professional">
          <span className="image" />
          <span className="description">
            <span className="title-block">
              <span className="text">
                What I do
              </span>
            </span>
            <span className="description-block">
              I have around two and a half years of software development experience, working in companies
              such as HubSpot, Rue La La, and UPenn. I'm also someone who likes to excersize my creative brain
              in both my art and my photography.
            </span>
          </span>
        </span>
      </span>
    );
  }
}

export default AboutPage;