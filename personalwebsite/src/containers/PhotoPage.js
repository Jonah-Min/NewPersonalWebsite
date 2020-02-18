import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import { photos } from '../data/photography';

import "../stylesheets/photoPage.css";

class AboutPage extends PureComponent {
  static state = {
    currentCategory: null,
  };

  onCategorySelect = category => {
    this.setState({ currentCategory: category });
  }

  renderPhotoCards() {
    return Object.keys(photos).reduce((acc, photoCategory, index) => {
      const { thumbnail, title } = photos[photoCategory];
      const imgStyles = { backgroundImage: `url(images/photography/${photoCategory}/${thumbnail})` };

      acc.push(
        <Link
          className="photo-card"
          to={`/photos/${photoCategory}`}>
          <div className="title">{title}</div>
          <div className="photo" key={index} style={imgStyles} />
        </Link>
      );

      return acc;
    }, []);
  }

  render() {
    return (
      <div className="photo-container">
        {this.renderPhotoCards()}
      </div>
    );
  }
}

export default AboutPage;