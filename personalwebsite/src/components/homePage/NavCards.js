import React, { PureComponent } from 'react';

export default class NavCards extends PureComponent {
  render() {
    const { src, title } = this.props;

    const imageStyles = {
      backgroundImage: `url(${src})`,
    };

    return (
      <div className="nav-card-container">
        {title}
        <div style={imageStyles} />
      </div>
    )
  }
}