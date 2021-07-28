import React from 'react';
import PropTypes from 'prop-types';
import Stars from '../../features/Stars/StarsContainer';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const ProductBox = ({
  name,
  price,
  promo,
  stars,
  customStars,
  image,
  id,
  favorite,
  compare,
  countProductToCompare,
  addToCompare,
  toggleFavourite,
  handlePopupClick,
  handleFavoriteClick,
  handleCompareClick,
  handleAddClick,
}) => (
  <div className={styles.root}>
    <div className={styles.photo}>
      <Link to={`/product/${name}`}>
        <img className={styles.image} src={image} alt={name} />
      </Link>
      {promo && <div className={styles.sale}>{promo}</div>}
      <div className={styles.buttons}>
        <Button noJump onClick={() => handlePopupClick(id)} variant='small'>
          Quick View
        </Button>
        <Button onClick={() => handleAddClick(id)} variant='small'>
          <FontAwesomeIcon icon={faShoppingBasket} /> ADD TO CART
        </Button>
      </div>
    </div>
    <div className={styles.content}>
      <Link to={`/product/${name}`}>
        <h5>{name}</h5>
      </Link>
      <Stars id={id} customStars={customStars} stars={stars} />
    </div>
    <div className={styles.line} />
    <div className={styles.actions}>
      <div className={styles.outlines}>
        <Button
          className={favorite ? styles.selected : styles.state}
          onClick={() => handleFavoriteClick(id, favorite)}
          variant='outline'
        >
          <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
        </Button>
        <Button
          className={compare ? styles.selected : styles.state}
          onClick={() => handleCompareClick(id, compare)}
          variant='outline'
        >
          <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
        </Button>
      </div>
      <div className={styles.price}>
        <Button className={styles.priceBtn} noHover variant='small'>
          $ {price}
        </Button>
      </div>
    </div>
    <div className={styles.price_old}>
      Old price:<span> $ 60</span>
    </div>
  </div>
);

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  customStars: PropTypes.number,
  image: PropTypes.node,

  id: PropTypes.string,
  handleFavoriteClick: PropTypes.func,
  favorite: PropTypes.bool,
  compare: PropTypes.bool,
  handlePopupClick: PropTypes.func,
  handleCompareClick: PropTypes.func,
  handleAddClick: PropTypes.func,
};

export default ProductBox;
