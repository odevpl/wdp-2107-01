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
            <div className={styles.BoxProdList}>
              <h4>Here will be product list</h4>
              <p>
                Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab
                illo inventore veritatis et quasi architecto beatae vitae dicta sunt,
                explicabo.{' '}
              </p>
            </div>
          </div>
          <div className='col-3'>
            <div className={styles.BoxFilters}>
              <h4>FILTERS</h4>
            </div>
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
