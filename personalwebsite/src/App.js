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

import WebsiteHeader from './components/WebsiteHeader';

import './stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div className="main-app">
        <Router>
          <WebsiteHeader />
          <Switch>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/projects">
              <ProjectsPage />
            </Route>
            <Route path="/photos">
              <PhotoPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
