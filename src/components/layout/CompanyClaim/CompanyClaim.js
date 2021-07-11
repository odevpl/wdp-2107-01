import React from 'react';
// import PropTypes from 'prop-types';

import styles from './CompanyClaim.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const CompanyClaim = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row align-items-center'>
        <div
          className={`col text-right text-md-left order-3 order-md-1 visible-xs-block ${styles.phoneNumber}`}
        >
          <p>
            <FontAwesomeIcon className={styles.icon} icon={faMobileAlt} /> 2300 - 3560 -
            222
          </p>
        </div>
        <div
          className={`col-6 col-md text-md-center order-1 order-md-2 ${styles.logo}`}
        >
          <a href='#'>
            <img src='/images/logo.png' alt='Bazar' />
          </a>
        </div>
        <div
          className={`col-6 col-md text-right order-2 order-md-3 visible-xs-block ${styles.cart}`}
        >
          <a href='#' className={styles.cartBox}>
            <div className={styles.cartIcon}>
              <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />
            </div>
            <div className={styles.cartCounter}>0</div>
          </a>
        </div>
      </div>
    </div>
  </div>
);

// CompanyClaim.propTypes = {};

export default CompanyClaim;
