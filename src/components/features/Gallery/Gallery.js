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
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { faEye, faHeart, faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import Button from '../../common/Button/Button';

class Gallery extends React.Component {
  render() {
    const { galleryProducts, selectedProduct, galleryDeal } = this.props;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={'row align-items-center justify-content-center'}>
            <div className={'col-6 ' + styles.section}>
              <div className={'col-12 ' + styles.leftBox}>
                <h3>FURNITURE GALLLERY</h3>
                <div className={styles.gallery}>
                  <div className={styles.mainBar}>
                    <Button>Featured</Button>
                    <Button className={styles.active}>Top Seller</Button>
                    <Button>Sale Off</Button>
                    <Button>Top Rated</Button>
                  </div>
                  <div className={styles.mainProduct}>
                    <div className={'col-6 ' + styles.buttonsColumn}>
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
                      <div className={styles.priceCloud}>
                        <span className={styles.newPrice}>
                          ${selectedProduct.price}
                        </span>
                        <span className={styles.oldPrice}>
                          {selectedProduct.oldPrice}
                        </span>
                      </div>
                      <div className={styles.ratingBar}>
                        <p>{selectedProduct.name}</p>
                        <div className={styles.stars}>
                          {[1, 2, 3, 4, 5].map(i => (
                            <a key={i} href='#'>
                              {i <= selectedProduct.stars ? (
                                <FontAwesomeIcon icon={faStar}>
                                  {i} stars
                                </FontAwesomeIcon>
                              ) : (
                                <FontAwesomeIcon icon={farStar}>
                                  {i} stars
                                </FontAwesomeIcon>
                              )}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                    <img src={'/images/deals/bed_1.png'} alt={'bed'} />
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
                          key={product.id}
                          className={product.selected ? styles.selected : undefined}
                          src={'/images/deals/bed_1.png'}
                          alt={'bed'}
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
