import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import ProductCompare from '../../features/ProductCompare/ProductCompareContainer';
import Feedback from '../../layout/Feedback/FeedbackContainer';
import Deals from '../../layout/Deals/DealsContainer';
import Brands from '../../layout/Brands/BrandsContainer';
import Promoted from '../../common/Promoted/PromotedContainer';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <Deals />
    <NewFurniture />
    <ProductCompare />
    <Feedback />
    <Brands />
    <Promoted />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
