import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class NavCards extends PureComponent {
  static defaultProps = {
    center: 'center',
  }

  render() {
    const { center, linkTo, src, title } = this.props;

    const imageStyles = {
      backgroundImage: `url(${src})`,
      'background-position-x': center,
    };

    return (
      <Link className="nav-card-container" style={imageStyles} to={linkTo}>
        <span className="nav-card-title">
          <span className="title">{title}</span>
        </span>
      </Link>
    )
  }
}