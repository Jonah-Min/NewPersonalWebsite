import React, { PureComponent } from 'react';

import "../stylesheets/PhotoPage.css";

class AboutPage extends PureComponent {
  render() {
    return (
      <div className="about-me-container">
        <div class="header">
          <div onClick={() => this.props.callback("home")} >
            Back to Home
          </div>
        </div>
        <div className="website-background-image"></div>
        <div className="about-who half">
          <div className="who-header">WHO AM I?</div>
        </div>
        <div className="about-what half">
          <div className="what-header">WHAT DO I DO?</div>
        </div>
        <div className="sase-image"></div>
        <div className="about-sase full">
          <div className="sase-header">INVOLVEMENT IN SASE</div>
        </div>
        <div className="about-personal half">
          <div className="personal-header">INVOLVEMENT IN SASE</div>
        </div>
        <div className="personal-drawing half"></div>
      </div>
    );
  }
}

export default AboutPage;