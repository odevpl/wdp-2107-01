import React from 'react';
import styles from './Banner.module.scss';

const Banner = () => (
  <div className='container'>
    <div className='row'>
      <div className='col-12'>
        <div className={styles.banner}>
          <div className={styles.bannerContent}>
            <h1>
              <span>BANNER</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Banner;
