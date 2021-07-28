import React from 'react';
import PropTypes from 'prop-types';

import styles from './Stars.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

class Stars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      hoveredStar: 0,
    };
  }
  static propTypes = {
    stars: PropTypes.number,
    customStars: PropTypes.number,
    id: PropTypes.string,
    setCustomStars: PropTypes.func,
  };
  setLocalStorage = (id, starNb) => {
    let stars = JSON.parse(localStorage.getItem('stars')) || {};
    stars = { ...stars, [id]: starNb };
    localStorage.setItem(`stars`, JSON.stringify(stars));
  };
  getLocalStars = id => {
    const localStars = JSON.parse(localStorage.getItem('stars'));
    return localStars ? localStars[id] : null;
  };
  handleMouseOver = starLink => {
    const starNb = starLink.getAttribute('data-star-nb');
    this.setState({ hover: true, hoveredStar: starNb });
  };

  handleMouseLeave = () => {
    this.setState({ hover: false });
  };

  handleClick = starLink => {
    const id = this.props.id;
    const starNb = parseInt(starLink.getAttribute('data-star-nb'));
    this.props.setCustomStars({ id, starNb });
    this.setLocalStorage(id, starNb);
  };

  render = () => {
    let { id, stars, customStars } = this.props;
    customStars = this.getLocalStars(id) || customStars;
    stars = customStars ? customStars : stars;
    stars = this.state.hover ? this.state.hoveredStar : stars;
    return (
      <div className={styles.root}>
        <div
          className={
            customStars || this.state.hover
              ? styles.stars + ' ' + styles.stars_customStars
              : styles.stars
          }
        >
          {[1, 2, 3, 4, 5].map(i => (
            <p
              onClick={e => this.handleClick(e.currentTarget)}
              onMouseOver={e => this.handleMouseOver(e.currentTarget)}
              onMouseLeave={() => this.handleMouseLeave()}
              data-star-nb={i}
              key={i}
            >
              {i <= stars ? (
                <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
              )}
            </p>
          ))}
        </div>
      </div>
    );
  };
}
export default Stars;
