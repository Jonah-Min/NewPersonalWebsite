import React, { PureComponent } from 'react';

import "../stylesheets/WebsiteHeader.css";

class WebsiteHeader extends PureComponent {
  render() {
    return (
      <div className="website-header" onClick={this.props.callback} >
        Jonah Min
      </div>
    );
  }
}

export default WebsiteHeader;