import React, { PureComponent } from 'react';

import "../stylesheets/ImageCard.css";

class ImageCard extends PureComponent {
  state = {
    hovered: false,
  };

  handleClick = () => {
    window.open(this.props.link);
  };

  render() {
    const imageStyles = {
      backgroundImage: `url(${this.props.src})`,
    };

    return (
      <div
        className="image-card"
        onClick={this.handleClick}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover} >
        <div className="image-card-image" style={imageStyles} >
          <div className="image-card-description">
            <div className="title">
              {this.props.title}
            </div>
            <div className="description">
              {this.props.description}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageCard;