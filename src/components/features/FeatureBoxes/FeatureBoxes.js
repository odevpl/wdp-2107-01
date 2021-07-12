import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  faTruck,
  faHeadphones,
  faReplyAll,
  faBullhorn,
} from '@fortawesome/free-solid-svg-icons';

import styles from './FeatureBoxes.module.scss';
import FeatureBox from '../../common/FeatureBox/FeatureBox';

const FeatureBoxes = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className='col-6 col-lg-3'>
          <Link to={'#'} className={styles.link}>
            <FeatureBox icon={faTruck} active>
              <h5>Free shipping</h5>
              <p>All orders</p>
            </FeatureBox>
          </Link>
        </div>
        <div className='col-6 col-lg-3'>
          <Link to={'#'} className={styles.link}>
            <FeatureBox icon={faHeadphones} active>
              <h5>24/7 customer</h5>
              <p>support</p>
            </FeatureBox>
          </Link>
        </div>
        <div className='col-6 col-lg-3'>
          <Link to={'/'} className={styles.link}>
            <FeatureBox icon={faReplyAll} active>
              <h5>Money back</h5>
              <p>guarantee</p>
            </FeatureBox>
          </Link>
        </div>
        <div className='col-6 col-lg-3'>
          <Link to={'/'} className={styles.link}>
            <FeatureBox icon={faBullhorn} active>
              <h5>Member discount</h5>
              <p>First order</p>
            </FeatureBox>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

FeatureBoxes.propTypes = {
  children: PropTypes.node,
};

export default FeatureBoxes;
