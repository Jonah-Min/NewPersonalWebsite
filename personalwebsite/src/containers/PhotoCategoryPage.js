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

  get photoCategory() {
    return this.props.match.params.photoCategory;
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