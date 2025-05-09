import React, { PureComponent } from 'react';
import { isMobile } from "react-device-detect";

import { photos } from '../data/photography';

import '../stylesheets/photoCategoryPage.css';
import ImageOverlay from '../components/ImageOverlay';

export default class PhotoCategoryPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: -1,
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  get photoCategory() {
    return this.props.match.params.photoCategory;
  }

  openNextImage = () => {
    const { selectedImageIndex } = this.state;
    if (
      selectedImageIndex >= 0
      && selectedImageIndex < photos[this.photoCategory].photos.length - 1) {
      this.setState({ selectedImageIndex: selectedImageIndex + 1 });
    }
  }

  openPrevImage = () => {
    const { selectedImageIndex } = this.state;
    if (
      selectedImageIndex > 0
      && selectedImageIndex < photos[this.photoCategory].photos.length) {
      this.setState({ selectedImageIndex: selectedImageIndex - 1 });
    }
  }

  closeImageOverlay = () => {
    this.setState({ selectedImageIndex: -1 });
  }

  onImageClick = index => {
    const photoCategory = photos[this.photoCategory];
    const selectedImage = photoCategory.photos[index];
    const imageUrl = `/images/photography/${this.photoCategory}/${selectedImage}`;

    if (!isMobile) {
      this.setState({ selectedImageIndex: index });
    } else {
      window.location = imageUrl;
    }
  }

  renderImages() {
    const images = photos[this.photoCategory].photos;

    return images.map((image, index) => {
      const imgStyles = {
        backgroundImage: `url(/images/photography/${this.photoCategory}/${image})`
      };

      return (
        <div key={index} className="image-card" onClick={() => this.onImageClick(index)}>
          <div className="image" style={imgStyles} />
        </div>
      );
    })
  }

  render() {
    const { selectedImageIndex } = this.state;
    const photoCategory = photos[this.photoCategory];
    const { title, description } = photoCategory;
    const selectedImage = photoCategory.photos[selectedImageIndex];
    const imageSelected = selectedImageIndex > -1;
    const imageUrl = `/images/photography/${this.photoCategory}/${selectedImage}`;
    const photosClass = `photo-category-container ${imageSelected ? 'no-scroll' : ''}`;

    return (
      <div className={photosClass}>
        {imageSelected && (
          <ImageOverlay
            alt={selectedImage}
            imageUrl={imageUrl}
            openNextImage={this.openNextImage}
            openPrevImage={this.openPrevImage}
            closeImageOverlay={this.closeImageOverlay} />
        )}
        <span className="title">{title}</span>
        <span className="description">{description}</span>
        <div className="images-container">
          {this.renderImages()}
        </div>
      </div>
    );
  }

}