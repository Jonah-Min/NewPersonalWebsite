import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import HomePage from './containers/HomePage';
import AboutPage from './containers/AboutPage';
import PhotoPage from './containers/PhotoPage';
import ProjectsPage from './containers/ProjectsPage';
import PhotoCategoryPage from './containers/PhotoCategoryPage';
import ArtPage from './containers/ArtPage';
import ContactPage from './containers/ContactPage';

import WebsiteHeader from './components/WebsiteHeader';

import './stylesheets/app.css';

class App extends Component {
  render() {
    return (
      <div className="main-app">
        <Router>
          <WebsiteHeader />
          <Switch>
            <Route path="/about" component={AboutPage} />
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/photos/:photoCategory" component={PhotoCategoryPage} />
            <Route path="/photos" component={PhotoPage} />
            <Route path="/art" component={ArtPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
