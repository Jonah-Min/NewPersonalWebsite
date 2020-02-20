import React, { PureComponent } from 'react';

import ImageCard from '../components/ImageCard';
import { projects } from '../data/projects';

import '../stylesheets/projectsPage.css';

export default class ProjectsPage extends PureComponent {
  renderProjects() {
    return projects.map((project, index) => {
      const { title, description, imageSrc, link } = project;
      return (
        <ImageCard
          key={index}
          src={imageSrc}
          title={title}
          description={description}
          link={link}
        />
      );
    })
  }

  render() {
    return (
      <span className="projects-container">
        <span className="title">Projects</span>
        <span className="title-desc">
          When I get the chance I like to create fun projects in various
          different technologies and languages. Here are some of my favorites.
        </span>
        <span className="projects-list">
          {this.renderProjects()}
        </span>
      </span>
    );
  }
}