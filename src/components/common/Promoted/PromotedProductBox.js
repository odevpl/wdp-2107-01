import React from 'react';
import PropTypes from 'prop-types';
import styles from './PromotedProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart, faEye } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';

const PromotedProductBox = ({ name, price, hotDeals, stars, image, oldPrice }) => (
  <div className={styles.root}>
    <div className={styles.photo}>
      <img src={image} alt={'coming soon'} className={styles.image} />
      {hotDeals && (
        <div className={styles.hotDeals}>
          {hotDeals}
          <div className={styles.dots}>
            <a>1</a>
            <a>2</a>
            <a>3</a>
          </div>
          <div className={styles.buttons}>
            <Button variant='small'>
              <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
            </Button>
          </div>
          <div className={styles.circles}>
            <div className={styles.circle}>
              <div className={styles.circleText}>
                <h5>25</h5>
                <h6>DAYS</h6>
              </div>
            </div>
            <div className={styles.circle}>
              <div className={styles.circleText}>
                <h5>10</h5>
                <h6>HRS</h6>
              </div>
            </div>
            <div className={styles.circle}>
              <div className={styles.circleText}>
                <h5>45</h5>
                <h6>MINS</h6>
              </div>
            </div>
            <div className={styles.circle}>
              <div className={styles.circleText}>
                <h5>30</h5>
                <h6>SECS</h6>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    <div className={styles.content}>
      <h5>{name}</h5>
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
    <div className={styles.line}></div>
    <div className={styles.actions}>
      <div className={styles.outlines}>
        <Button variant='outline'>
          <FontAwesomeIcon icon={faEye}>Enlarge</FontAwesomeIcon>
        </Button>
        <Button variant='outline'>
          <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
        </Button>
        <Button variant='outline'>
          <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
        </Button>
      </div>
      <div className={styles.price}>
        {oldPrice ? <div className={styles.oldPrice}>$ {oldPrice}</div> : ''}
        <Button noHover variant='small'>
          $ {price}
        </Button>
      </div>
    </div>
  </div>
);

PromotedProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  hotDeals: PropTypes.string,
  stars: PropTypes.number,
  oldPrice: PropTypes.number,
  image: PropTypes.string,
};

export default PromotedProductBox;
