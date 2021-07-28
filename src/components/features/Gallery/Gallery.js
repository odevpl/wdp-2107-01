/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
  faExchangeAlt,
  faShoppingBasket,
  // faStar,
} from '@fortawesome/free-solid-svg-icons';
import {
  faEye,
  faHeart,
  //faStar as farStar,
} from '@fortawesome/free-regular-svg-icons';
import Button from '../../common/Button/Button';
import Stars from '../Stars/Stars';
//import Carousel from 'react-elastic-carousel';

class Gallery extends React.Component {
  state = {
    imgNumber: 6,
    counter: 0,
    activeTab: 'topSeller',
    tabSwitchingStyle: 'fadeIn',
    productSwitchingStyle: 'fadeIn',
  };

  handleTabChange(newTab) {
    this.setState({ tabSwitchingStyle: styles.fadeOut });
    setTimeout(() => {
      this.setState({ activeTab: newTab, tabSwitchingStyle: styles.fadeIn });
    }, 1000);
  }

  handlePickProduct(id, tab) {
    this.setState({ productSwitchingStyle: styles.fadeOut });
    setTimeout(() => {
      this.setState({ productSwitchingStyle: styles.fadeIn });
      this.props.setActive({ id, tab });
    }, 1000);
  }

  calculateNumberOfPictures(size) {
    let imgNumber;
    switch (size) {
      case 'lg':
        imgNumber = 6;
        break;
      case 'md':
        imgNumber = 4;
        break;
      case 'sm':
        imgNumber = 3;
        break;
      case 'xs':
        imgNumber = 2;
        break;
      default:
        imgNumber = 'error';
    }
    return imgNumber;
  }

  render() {
    const { galleryProducts, galleryDeal } = this.props;
    const { actives } = this.props;
    const { activeTab, tabSwitchingStyle, productSwitchingStyle } = this.state;
    const activeProduct = actives[activeTab];

    const tabs = [
      { id: 'featured', name: 'FEATURED' },
      { id: 'topSeller', name: 'TOP SELLER' },
      { id: 'saleOff', name: 'SALE OFF' },
      { id: 'topRated', name: 'TOP RATED' },
    ];

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={'row align-items-center justify-content-center'}>
            <div className={'col-6 ' + styles.section}>
              <div className={'col-12 ' + styles.leftBox}>
                <h3>FURNITURE GALLLERY</h3>
                <div className={styles.gallery}>
                  <div className={styles.tabs}>
                    <ul>
                      {tabs.map(tab => (
                        <li
                          key={tab.id}
                          className={tab.id === activeTab ? styles.active : ''}
                        >
                          <Button noJump onClick={() => this.handleTabChange(tab.id)}>
                            {tab.name}
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={tabSwitchingStyle}>
                    <div className={styles.mainProduct + ' ' + productSwitchingStyle}>
                      <div key={activeProduct.image} className={styles.img}>
                        <img alt={activeProduct.name} src={activeProduct.image} />
                      </div>
                      <div className={'col-6 ' + styles.actions}>
                        <Button variant='outline' className={styles.actionButton}>
                          <FontAwesomeIcon icon={faHeart} />
                        </Button>
                        <Button variant='outline' className={styles.actionButton}>
                          <FontAwesomeIcon icon={faExchangeAlt} />
                        </Button>
                        <Button variant='outline' className={styles.actionButton}>
                          <FontAwesomeIcon icon={faEye} />
                        </Button>
                        <Button variant='outline' className={styles.actionButton}>
                          <FontAwesomeIcon icon={faShoppingBasket} />
                        </Button>
                      </div>
                      <div className={'col-6 ' + styles.infoColumn}>
                        <div key={activeProduct.id} className={styles.priceCloud}>
                          <span key={activeProduct.price} className={styles.newPrice}>
                            ${activeProduct.price}
                          </span>
                          <span
                            key={activeProduct.oldPrice}
                            className={styles.oldPrice}
                          >
                            ${activeProduct.oldPrice}
                          </span>
                        </div>
                        <div key={activeProduct.details} className={styles.ratingBar}>
                          <p key={activeProduct.name}>{activeProduct.name}</p>
                          <Stars
                            id={activeProduct.id}
                            customStars={activeProduct.customStars}
                            stars={activeProduct.stars}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.productGallery}>
                    <div className={styles.arrowLeft}>
                      <div className={styles.arrowShadow}></div>
                      <FontAwesomeIcon
                        icon={faChevronLeft}
                        className={styles.leftArrow}
                      ></FontAwesomeIcon>
                    </div>
                    {galleryProducts.map(product => (
                      <Button key={product.id} className={styles.smallProduct}>
                        <img
                          src={product.image}
                          className={
                            product.id === activeProduct.id ? styles.active : styles.img
                          }
                          alt=''
                        />
                      </Button>
                    ))}
                    <div className={styles.arrowRight}>
                      <div className={styles.arrowShadow}></div>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className={styles.rightArrow}
                      ></FontAwesomeIcon>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={'col-6 ' + styles.section}>
              <div className={'col-12 ' + styles.rightBox}>
                <div className={styles.productDescription}>
                  <h1 className={styles.productPrice}>
                    <span>{galleryDeal.name.slice(0, 4)}</span>
                    {galleryDeal.name.slice(4, 11)}
                  </h1>
                  <h1 className={styles.productType}>
                    {galleryDeal.name.slice(11, 23)}
                  </h1>
                  <Button className={styles.productButton}>SHOP NOW</Button>
                </div>
                <img src={galleryDeal.firstImage} alt={galleryDeal.name}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Gallery.propTypes = {
  galleryProducts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      selected: PropTypes.bool,
    })
  ),
  selectedProduct: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
      oldPrice: PropTypes.string,
      selected: PropTypes.bool,
      stars: PropTypes.number,
    })
  ),
  galleryDeal: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string,
      firstImage: PropTypes.string,
      secondImage: PropTypes.string,
    })
  ),
};

export default Gallery;
