import React, { Component } from 'react';

import ImageCard from './components/ImageCard';
import AboutPage from './components/AboutPage';
import PhotoPage from './components/PhotoPage';
import WebsiteHeader from './components/WebsiteHeader';

import { cards } from './data/cards';

import './stylesheets/App.css';

class App extends Component {
  state = {
    currentPage: localStorage.getItem('currentPage') || "home",
  };

  changePage = page => {
    this.setState({ currentPage: page });
    localStorage.setItem('currentPage', page);
  };

  renderCards() {
    return cards.map(card => {
      return (
        <ImageCard
          key={card.title}
          src={card.imageSrc}
          title={card.title}
          description={card.description}
          wide={card.wide}
          link={card.link}
          bordered={card.bordered}
          callback={this.changePage}
          callbackPage={card.callbackPage}
        />
      );
    })
  }

  renderCardsContainer() {
    return (
      <div className="cards-container">
        <div className="cards">
          {this.renderCards()}
        </div>
      </div>
    );
  }

  renderAboutPage() {
    return (
      <AboutPage callback={this.changePage} />
    );
  }

  renderPhotoPage() {
    return (
      <PhotoPage callback={this.changePage} />
    );
  }

  render() {
    const { currentPage } = this.state;
    var pageJSX = null;

    if (currentPage === "home") {
      pageJSX = this.renderCardsContainer();
    } else if (currentPage === "about") {
      pageJSX = this.renderAboutPage();
    } else if (currentPage === "photo") {
      pageJSX = this.renderPhotoPage();
    }

    return (
      <div className="main-page">
        <WebsiteHeader callback={() => this.changePage('home')} />
        {pageJSX}
      </div>
    );
  }
}

export default App;
