import React, { Component } from 'react';

import ImageCard from './components/ImageCard';
import WebsiteHeader from './components/WebsiteHeader';

import { cards } from './data/cards';

import './stylesheets/App.css';

class App extends Component {
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
        />
      );
    })
  }

  render() {
    return (
      <div className="main-page">
        <WebsiteHeader />
        <div className="cards-container">
          <div className="cards">
            {this.renderCards()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
