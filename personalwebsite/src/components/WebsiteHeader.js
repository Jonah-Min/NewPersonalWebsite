import React, { PureComponent } from 'react';

import { Link } from 'react-router-dom';

import "../stylesheets/WebsiteHeader.css";

class WebsiteHeader extends PureComponent {
  render() {
    return (
      <Link to="/">
        <div className="website-header" onClick={this.props.callback} >
          <span className="name">Jonah Min</span>
          <span className="subtext">software engineer | photographer | artist</span>
        </div>
      </Link>
    );
  }
}

export default WebsiteHeader;