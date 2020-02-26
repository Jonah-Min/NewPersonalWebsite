import React, { PureComponent } from 'react';
import { isMobile } from "react-device-detect";

import Art from '../data/art';

import '../stylesheets/artPage.css';
import ImageOverlay from '../components/ImageOverlay';

export default class ArtPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: -1,
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  openNextImage = () => {
    const { selectedImageIndex } = this.state;
    if (
      selectedImageIndex >= 0
      && selectedImageIndex < Art.length - 1) {
      this.setState({ selectedImageIndex: selectedImageIndex + 1 });
    }
  }

  openPrevImage = () => {
    const { selectedImageIndex } = this.state;
    if (
      selectedImageIndex > 0
      && selectedImageIndex < Art.length) {
      this.setState({ selectedImageIndex: selectedImageIndex - 1 });
    }
  }

  closeImageOverlay = () => {
    this.setState({ selectedImageIndex: -1 });
  }

  onImageClick = index => {
    const selectedImage = Art[index];
    const imageUrl = `/images/personalArt/${selectedImage}`;
    if (!isMobile) {
      this.setState({ selectedImageIndex: index });
    } else {
      window.location = imageUrl;
    }
  }

  renderImages() {
    return Art.map((image, index) => {
      const imgStyles = {
        backgroundImage: `url(/images/personalArt/${image})`
      };

      return (
        <div key={index} className="art-card" onClick={() => this.onImageClick(index)}>
          <div className="art" style={imgStyles} />
        </div>
      );
    })
  }

  render() {
    const { selectedImageIndex } = this.state;
    const selectedImage = Art[selectedImageIndex];
    const imageSelected = selectedImageIndex > -1;
    const imageUrl = `/images/personalArt/${selectedImage}`;
    const artClass = `art-container ${imageSelected ? 'no-scroll' : ''}`;

    return (
      <div className={artClass}>
        {imageSelected && (
          <ImageOverlay
            alt={selectedImage}
            imageUrl={imageUrl}
            openNextImage={this.openNextImage}
            openPrevImage={this.openPrevImage}
            closeImageOverlay={this.closeImageOverlay} />
        )}
        <span className="title">Personal Art</span>
        <span className="description">
          Here is a collection of my art, sketches, doodles, and studies.
          There's really no order to the chaos other than putting my favorite images at the front.
          Be warned that there is some nude drawings as I do study figure drawing.
        </span>
        <div className="images-container">
          {this.renderImages()}
        </div>
      </div>
    );
  }

}