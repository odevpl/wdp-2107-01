import React from 'react';
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
                        <span className={styles.newPrice}>$120.00</span>
                        <span className={styles.oldPrice}>$160.00</span>
                      </div>
                      <div className={styles.ratingBar}>
                        <p>Product Name</p>
                        <div className={styles.rating}>
                          <Button>
                            <FontAwesomeIcon className={styles.checked} icon={faStar} />
                          </Button>
                          <Button>
                            <FontAwesomeIcon className={styles.checked} icon={faStar} />
                          </Button>
                          <Button>
                            <FontAwesomeIcon className={styles.empty} icon={farStar} />
                          </Button>
                          <Button>
                            <FontAwesomeIcon className={styles.empty} icon={farStar} />
                          </Button>
                          <Button>
                            <FontAwesomeIcon className={styles.empty} icon={farStar} />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <img src={'/images/deals/bed_1.png'} alt={'bed'}></img>
                  </div>
                  <div className={styles.productGallery}>
                    <div className={styles.arrowLeft}>
                      <div className={styles.arrowShadow}></div>
                      <FontAwesomeIcon
                        icon={faChevronLeft}
                        className={styles.leftArrow}
                      ></FontAwesomeIcon>
                    </div>
                    <Button className={styles.smallProduct}>
                      <img
                        className={styles.selected}
                        src={'/images/deals/bed_1.png'}
                        alt={'bed'}
                      ></img>
                    </Button>
                    <Button className={styles.smallProduct}>
                      <img src={'/images/deals/bed_1.png'} alt={'bed'}></img>
                    </Button>
                    <Button className={styles.smallProduct}>
                      <img src={'/images/deals/bed_1.png'} alt={'bed'}></img>
                    </Button>
                    <Button className={styles.smallProduct}>
                      <img src={'/images/deals/bed_1.png'} alt={'bed'}></img>
                    </Button>
                    <Button className={styles.smallProduct}>
                      <img src={'/images/deals/bed_1.png'} alt={'bed'}></img>
                    </Button>
                    <Button className={styles.smallProduct}>
                      <img src={'/images/deals/bed_1.png'} alt={'bed'}></img>
                    </Button>
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
                    <span>FROM</span> $50.80
                  </h1>
                  <h1 className={styles.productType}>Bedroom Bed</h1>
                  <Button className={styles.productButton}>SHOP NOW</Button>
                </div>
                <img src={'/images/deals/bed_1.png'} alt={'bed'}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
