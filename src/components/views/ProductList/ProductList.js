import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
import Banner from '../../features/Banner/Banner';
import Brands from '../../features/Brands/Brands';

const ProductList = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <Banner />
        <div className='row'>
          <div className='col-lg-9'>
            <h4>Product List</h4>
          </div>
          <div className={'col-3'}>
            <div className='col-3'>FILTERS</div>
          </div>
          <div className='col-12'>
            <Brands />
          </div>
        </div>
      </div>
    </div>
  );
};

// ProductList.propTypes = {};

export default ProductList;
