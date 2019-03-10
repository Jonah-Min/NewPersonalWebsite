import React, { PureComponent } from 'react';

import "../stylesheets/ImageCard.css";

class ImageCard extends PureComponent {
  state = {
    hovered: false,
  };

  handleHover = () => {
    this.setState({
      hovered: !this.state.hovered,
    });
  };

  handleClick = () => {
    if (this.props.link) {
      window.open(this.props.link);
    }
    if (this.props.callbackPage) {
      this.props.callback(this.props.callbackPage);
    }
  };

  render() {
    const imageStyles = {
      backgroundImage: `url(${this.props.src})`,
    };

    const imageCardClass = `image-card ${this.props.wide ? 'wide' : ''}`;
    const descriptionClass = `image-card-description ${this.state.hovered ? 'show' : 'hide'}`;
    const imageClass = `image-card-image ${this.state.hovered ? 'hover' : ''} ${this.props.bordered ? 'bordered' : ''}`;

    return (
      <div
        className={imageCardClass}
        onClick={this.handleClick}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover} >
        <div className={imageClass} style={imageStyles} >
          <div className={descriptionClass}>
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