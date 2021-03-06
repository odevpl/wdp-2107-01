import React from 'react';
import PropTypes from 'prop-types';
import styles from './PromotedBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';

class PromotedBox extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    name: PropTypes.string,
    price: PropTypes.number,
    promo: PropTypes.string,
    stars: PropTypes.number,
    image: PropTypes.string,
    oldPrice: PropTypes.number,
    dots: PropTypes.any,
    id: PropTypes.any,
  };

  state = {
    activePage: 0,
    fade: 'fadein',
  };

  setUpdate() {
    setTimeout(() => {
      this.setState({ fade: 'fadeout' });
    }, 2500);
  }

  render() {
    const { activePage } = this.state;
    const { fade } = this.state;
    const { dots } = this.props;
    const { id } = this.props;

    console.log(id);

    return (
      <div className={styles.root}>
        <div className={styles.photo}>
          {<div className={styles.hotDeals}>HOT DEALS</div>}
          <div className={'col-auto ' + styles.dots}>
            <ul>{dots}</ul>
          </div>
          <img
            className={`${fade} ${styles.imageLeft} image`}
            src={this.props.image}
            alt='Ups...'
            id={id}
          ></img>
          <div className={styles.buttons}>
            <Button variant='small'>
              <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
            </Button>
          </div>
        </div>
        <div className={styles.contentLeft}>
          <div className={styles.sale1}>
            <span>25</span>
            <br />
            DAYS
          </div>
          <div className={styles.sale2}>
            <span>10</span>
            <br />
            HRS
          </div>
          <div className={styles.sale3}>
            <span>45</span>
            <br />
            MIN
          </div>
          <div className={styles.sale4}>
            <span>30</span>
            <br />
            SECS
          </div>
          <h5>{this.props.name}</h5>
          <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map(i => (
              <a key={i} href='#'>
                {i <= this.props.stars ? (
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
              <FontAwesomeIcon icon={faEye}>Quick view</FontAwesomeIcon>
            </Button>
            <Button variant='outline'>
              <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
            </Button>
            <Button variant='outline'>
              <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
            </Button>
          </div>
          <div className={styles.prices}>
            <div className={styles.empty}>
              {this.props.oldPrice !== 0 && (
                <span className={styles.oldPrice}> {this.props.oldPrice} </span>
              )}
            </div>
            <div className={styles.price}>
              <Button noHover variant='small'>
                $ {this.props.price}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PromotedBox;
