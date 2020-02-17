import React, { PureComponent } from 'react';

export default class NavCards extends PureComponent {
  render() {
    const { src, title } = this.props;

    const imageStyles = { backgroundImage: `url(${src})` };

    return (
      <span className="nav-card-container" style={imageStyles}>
        <span className="nav-card-title">
          <span className="title">{title}</span>
        </span>
      </span>
    )
  }
}