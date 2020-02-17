import React, { PureComponent } from 'react';

export default class NavCards extends PureComponent {
  render() {
    const { src, title } = this.props;

    const imageStyles = {
      backgroundImage: `url('/images/hubspot2.jpg')`,
    };

    return (
      <div className="nav-card-container" style={imageStyles}>
        {title}
      </div>
    )
  }
}