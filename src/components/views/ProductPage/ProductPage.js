import React from 'react';
import styles from './ProductPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faHeart,
  faExchangeAlt,
  faShoppingBasket,
  faEnvelope,
  faPlus,
  faMinus,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faFacebookF,
  faGooglePlusG,
  faLinkedinIn,
  faPinterestP,
} from '@fortawesome/free-brands-svg-icons';
import Button from '../../common/Button/Button';

const ProductPage = stars => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-5'>
            <div className={styles.bigSquare} />
            <div className={styles.gallery}>
              <Button variant='outline' className={styles.arrow}>
                <FontAwesomeIcon icon={faAngleLeft}>Left</FontAwesomeIcon>
              </Button>
              <div>
                <div className={styles.smallSquare} />
                <div className={styles.smallSquare} />
                <div className={styles.smallSquare} />
                <div className={styles.smallSquare} />
              </div>
              <Button variant='outline' className={styles.arrow}>
                <FontAwesomeIcon icon={faAngleRight}>Right</FontAwesomeIcon>
              </Button>
            </div>
          </div>
          <div className='col-lg-7'>
            <div className={styles.title}>
              <h3>Sunbaby Magic Bear Chair</h3>
              <Button variant='outline' className={styles.arrow}>
                <FontAwesomeIcon icon={faAngleLeft}>Left</FontAwesomeIcon>
              </Button>
              <Button variant='outline' className={styles.arrow}>
                <FontAwesomeIcon icon={faAngleRight}>Right</FontAwesomeIcon>
              </Button>
            </div>
            <div className={styles.reviews}>
              <FontAwesomeIcon className={styles.checked} icon={faStar}>
                Star
              </FontAwesomeIcon>
              <FontAwesomeIcon className={styles.checked} icon={faStar}>
                Star
              </FontAwesomeIcon>
              <FontAwesomeIcon className={styles.empty} icon={faStar}>
                Star
              </FontAwesomeIcon>
              <FontAwesomeIcon className={styles.empty} icon={faStar}>
                Star
              </FontAwesomeIcon>
              <FontAwesomeIcon className={styles.empty} icon={faStar}>
                Star
              </FontAwesomeIcon>
              <p>(0 reviews)</p>
              <p className={styles.addReview}>Add your review</p>
            </div>
            <div className={styles.price}>
              <p className={styles.oldPrice}>$350.00</p>
              <p className={styles.promoPrice}>$250.00</p>
            </div>
            <div className={styles.buttons}>
              <div>
                <Button variant='contained' className={styles.addToCart}>
                  <FontAwesomeIcon icon={faShoppingBasket} />
                  ADD TO CART
                </Button>
                <Button variant='outline' className={styles.state}>
                  <FontAwesomeIcon icon={faHeart} className>
                    Favorite
                  </FontAwesomeIcon>
                </Button>
                <Button variant='outline' className={styles.state}>
                  <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
                </Button>
                <Button variant='outline' className={styles.state}>
                  <FontAwesomeIcon icon={faEnvelope}>Email</FontAwesomeIcon>
                </Button>
              </div>
              <div className={styles.quantity}>
                <p>Quantity:</p>
                <input type='number' />
                <Button variant='outline' className={styles.state}>
                  <FontAwesomeIcon icon={faPlus}>Add one</FontAwesomeIcon>
                </Button>
                <Button variant='outline' className={styles.state}>
                  <FontAwesomeIcon icon={faMinus}>Remove one</FontAwesomeIcon>
                </Button>
              </div>
            </div>
            <div className={styles.descripion}>
              <h4>Product description</h4>
              <p>
                Mauris finibus, nulla nec pharetra vulputate, augue metus laoreet massa,
                quis mollis dolor dui non odio. Proin ut leo vitae tellus ultricies
                bibendum. Donec luctus odio id massa mollis, nec auctor nibh
                sollicitudin.
              </p>
            </div>
            <div className={styles.details}>
              <div className='row'>
                <div className='col-lg-2'>
                  <p>Availability: </p>
                  <p>Category: </p>
                </div>
                <div className='col-lg-2'>
                  <p className={styles.one}>In stock</p>
                  <p className={styles.one}>Furnitures</p>
                </div>
              </div>
            </div>
            <div className={styles.social}>
              <a className={styles.facebook} href='/#'>
                <FontAwesomeIcon className={styles.iconF} icon={faFacebookF} />
                Share
              </a>
              <a className={styles.link} href='/#'>
                <FontAwesomeIcon className={styles.iconG} icon={faGooglePlusG} />
                Google+
              </a>
              <a className={styles.link} href='/#'>
                <FontAwesomeIcon className={styles.iconT} icon={faTwitter} />
                Tweet
              </a>
              <a className={styles.link} href='/#'>
                <FontAwesomeIcon className={styles.iconP} icon={faPinterestP} />
                Pinterest
              </a>
              <a className={styles.link} href='/#'>
                <FontAwesomeIcon className={styles.iconL} icon={faLinkedinIn} />
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
