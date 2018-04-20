import React, { PureComponent } from 'react';
import './App.css';

import AboutMePage from './components/AboutMePage';
import ProjectsPage from './components/ProjectsPage';
import ExperiencePage from './components/ExperiencePage';
import PhotosPage from './components/PhotosPage';
import Homepage from './components/Homepage';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      openAboutMe: false,
      openProjects: false,
      openExperience: false,
      openPhotos: false,
      openHomepage: true, 
    }
  }

  resetState = () => {
    this.setState({
      openAboutMe: false,
      openProjects: false,
      openExperience: false,
      openPhotos: false,
      openHomepage: false, 
    });
  }

  openAboutMe = () => {
    this.resetState();
    this.setState({
      openAboutMe: true,
    });
  }

  openProjects = () => {
    this.resetState();
    this.setState({
      openProjects: true,
    });
  }

  openExperience = () => {
    this.resetState();
    this.setState({
      openExperience: true,
    });
  }

  openPhotos = () => {
    this.resetState();
    this.setState({
      openPhotos: true,
    });
  }

  renderNavigation() {
    return (
      <nav className="nav-link-container">
        <a className="nav-link" onClick={this.openAboutMe}>About Me</a>
        <a className="nav-link" onClick={this.openProjects}>Personal Projects</a>
        <a className="nav-link" onClick={this.openExperience}>Experience</a>
        <a className="nav-link" onClick={this.openPhotos}>Photos and Art</a>
      </nav>
    );
  }

  renderCurrentPage() {
    const { 
      openAboutMe,
      openProjects,
      openExperience,
      openPhotos,
      openHomepage,
    } = this.state;

    if (openAboutMe) {
      return <AboutMePage />;
    }
    if (openProjects) {
      return <ProjectsPage />;
    }
    if (openExperience) {
      return <ExperiencePage />;
    }
    if (openPhotos) {
      return <PhotosPage />;
    }
    if (openHomepage) {
      return <Homepage />;
    }
  }

  render() {
    return (
      <div className="homepage-container">
        {this.renderNavigation()}
        {this.renderCurrentPage()}
      </div>
    );
  }
}

export default App;
