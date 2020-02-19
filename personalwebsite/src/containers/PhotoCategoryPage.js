import React, { PureComponent } from 'react';

import { photos } from '../data/photography';

import '../stylesheets/photoCategoryPage.css';

export default class PhotoCategoryPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: -1,
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.keyPressHandler, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyPressHandler, false);
  }

  get photoCategory() {
    return this.props.match.params.photoCategory;
  }

  keyPressHandler = e => {
    switch (e.keyCode) {
      case 27:
        this.closeImageOverlay();
        break;
      case 39:
        this.openNextImage();
        break;
      case 37:
        this.openPrevImage();
        break;
      default:
        break;
    }
  }

  closeImageOverlay = () => {
    this.setState({ selectedImageIndex: -1 });
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

  onImageClick = index => {
    this.setState({ selectedImageIndex: index });
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
    const title = photos[this.photoCategory].title;
    const selectedImage = photos[this.photoCategory].photos[selectedImageIndex];
    const imageSelected = selectedImageIndex > -1;
    const overlayClass = `image-overlay ${imageSelected ? 'show' : ''}`;
    const photosClass = `photo-category-container ${imageSelected ? 'no-scroll' : ''}`;
    const overlayStyle = imageSelected > -1
      ? { backgroundImage: `url(/images/photography/${this.photoCategory}/${selectedImage}` }
      : {};

    return (
      <div className={photosClass}>
        <div className={overlayClass} style={overlayStyle} />
        <span className="title">{title}</span>
        <div className="images-container">
          {this.renderImages()}
        </div>
      </div>
    );
  }

}