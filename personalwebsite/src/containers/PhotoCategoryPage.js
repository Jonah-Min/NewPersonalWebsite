import React, { PureComponent } from 'react';

import { photos } from '../data/photography';

import '../stylesheets/photoCategoryPage.css';

export default class PhotoCategoryPage extends PureComponent {
  get photoCategory() {
    return this.props.match.params.photoCategory;
  }

  renderImages() {
    const images = photos[this.photoCategory].photos;

    return images.map((image, index) => {
      const imgStyles = {
        backgroundImage: `url(/images/photography/${this.photoCategory}/${image})`
      };

      return (
        <div key={index} className="image-card">
          <div className="image" style={imgStyles} />
        </div>
      );
    })
  }

  render() {
    const title = photos[this.photoCategory].title;

    return (
      <div className="photo-category-container">
        <span className="title">{title}</span>
        <div className="images-container">
          {this.renderImages()}
        </div>
      </div>
    );
  }
}