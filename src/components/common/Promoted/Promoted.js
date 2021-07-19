import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-flexbox-grid';
import styles from './Promoted.module.scss';
import PromotedProductBox from './PromotedProductBox.js';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
} from '@fortawesome/free-solid-svg-icons';

class Promoted extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
  };

  render() {
    const { products } = this.props;
    const { activeCategory } = this.state;
    const categoryProducts = products.filter(item => item.category === activeCategory);

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <Col xs={12} md={6} lg={4} key={categoryProducts[0].id}>
              <PromotedProductBox {...categoryProducts[0]} />
            </Col>
            <Col lg={8} className={styles.rightSide}>
              <div className={styles.rightSidePhoto}>
                <img src='images/furniture/furniture-6.jpeg' alt='promotedExample' />
                <div className={styles.rightSideStripe}>
                  <div className={styles.rightSideStripeTextBig}>
                    INDOOR <b>FURNITURE</b>
                  </div>
                  <div className={styles.rightSideStripeTextSmall}>
                    SAVE UP TO 50% OF ALL FURNITURE
                  </div>
                </div>
              </div>
              <div className={styles.buttonShop}>
                <Button className={styles.buttonShopNow} variant='outline'>
                  SHOP NOW
                </Button>
              </div>
              <div className={styles.arrows}>
                <div className={styles.arrow}>
                  <div className={styles.arrowShadow}></div>
                  <FontAwesomeIcon
                    icon={faArrowAltCircleLeft}
                    className={styles.leftArrow}
                  ></FontAwesomeIcon>
                </div>
                <div className={styles.arrow}>
                  <div className={styles.arrowShadow}></div>
                  <FontAwesomeIcon
                    icon={faArrowAltCircleRight}
                    className={styles.rightArrow}
                  ></FontAwesomeIcon>
                </div>
              </div>
            </Col>
          </div>
        </div>
      </div>
    );
  }
}

Promoted.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
};

Promoted.defaultProps = {
  categories: [],
  products: [],
};

export default Promoted;
