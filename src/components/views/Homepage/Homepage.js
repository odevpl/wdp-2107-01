import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';

import ProductCompare from '../../features/ProductCompare/ProductCompareContainer';
import Deals from '../../layout/Deals/DealsContainer';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <Deals />
    <NewFurniture />
    <ProductCompare />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
