import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
  faHeart as farHeart,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const ProductBox = ({
  id,
  name,
  price,
  promo,
  stars,
  image,
  oldPrice,
  favourite,
  compare,
  countProductToCompare,
  addToCompare,
  toggleFavourite,
}) => (
  <div className={styles.root}>
    <div className={styles.photo}>
      <Link to={`/product/${name}`}>
        {promo && <div className={styles.sale}>{promo}</div>}
        <img className={styles.image} src={image} alt={name} />
      </Link>
      <div className={styles.buttons}>
        <Button variant='small'>Quick View</Button>
        <Button variant='small'>
          <FontAwesomeIcon icon={faShoppingBasket} /> ADD TO CART
        </Button>
      </div>
    </div>
    <div className={styles.content}>
      <Link to={`/product/${id}`}>
        <h5>{name}</h5>
      </Link>
      <div className={styles.stars}>
        {[1, 2, 3, 4, 5].map(i => (
          <a key={i} href='#'>
            {i <= stars ? (
              <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
            )}
          </a>
        ))}
      </div>
    </div>
    <div className={styles.line} />
    <div className={styles.actions}>
      <div className='outlines'>
        <Button
          className={favourite ? styles.active : undefined}
          variant='outline'
          onClick={event => {
            event.preventDefault();
            toggleFavourite(id);
          }}
        >
          <FontAwesomeIcon icon={favourite ? farHeart : faHeart}>
            Favorite
          </FontAwesomeIcon>
        </Button>
        <Button
          className={compare ? styles.active : undefined}
          variant='outline'
          onClick={event => {
            event.preventDefault();
            if (countProductToCompare() < 4) {
              addToCompare(id);
            }
          }}
        >
          <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
        </Button>
      </div>
      <div className={styles.price}>
        <div className={styles.oldPrice}>{oldPrice}</div>
        <Button noHover variant='small'>
          $ {price}
        </Button>
      </div>
    </div>
  </div>
);

ProductBox.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  image: PropTypes.string,
  favourite: PropTypes.bool,
  compare: PropTypes.bool,
  oldPrice: PropTypes.number,
  addToCompare: PropTypes.func,
  countProductToCompare: PropTypes.func,
  toggleFavourite: PropTypes.func,
};

export default ProductBox;
