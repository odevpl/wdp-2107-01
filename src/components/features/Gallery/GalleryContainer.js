import { connect } from 'react-redux';
import Gallery from './Gallery';
import {
  getGalleryProducts,
  getSelectedProduct,
} from '../../../redux/productsRedux.js';
import { getActives, setActive } from '../../../redux/galleryRedux';

import { getGalleryDeal } from '../../../redux/dealsRedux';

const mapStateToProps = state => ({
  galleryProducts: getGalleryProducts(state),
  selectedProduct: getSelectedProduct(state),
  galleryDeal: getGalleryDeal(state),
  actives: getActives(state),
});

const mapDispatcherToProps = dispatcher => ({
  setActive: payload => dispatcher(setActive(payload)),
});

export default connect(mapStateToProps, mapDispatcherToProps)(Gallery);
