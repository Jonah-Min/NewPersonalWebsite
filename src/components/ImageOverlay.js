import React, { PureComponent } from 'react';

export default class ImageOverlay extends PureComponent {
  componentDidMount() {
    document.addEventListener("keydown", this.keyPressHandler, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyPressHandler, false);
  }

  keyPressHandler = e => {
    switch (e.keyCode) {
      case 27:
        this.props.closeImageOverlay();
        break;
      case 39:
        this.props.openNextImage();
        break;
      case 37:
        this.props.openPrevImage();
        break;
      default:
        break;
    }
  }

  render() {
    const { alt, closeImageOverlay, imageUrl } = this.props;

    return (
      <div className="image-overlay" onClick={closeImageOverlay} >
        <img alt={alt}
          className="image"
          src={imageUrl}
          onClick={e => e.stopPropagation()} />
      </div>
    );
  }
}
