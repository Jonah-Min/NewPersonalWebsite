import React, { PureComponent } from 'react';

export default class ImageOverlay extends PureComponent {

  render() {
    const { selectedImageIndex, imageIndex, images } = this.props;

    if (selectedImageIndex === -1) return null;

    const image = images[selectedImageIndex];
    const overlayStyle = selectedImageIndex > -1
      ? { backgroundImage: `url(/images/photography/${this.photoCategory}/${selectedImage}` }
      : {};

    return <div className="image-overlay" />
  }
}