import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Brands.module.scss';

const Brands = () => {
  return (
    <div className={styles.root}>
      <div className='container pb-3'>
        <div className='row '>
          <div className='col-12 justify-content-between'>
            <div className={styles.brands}>
              <h5>BRANDS</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
