import { connect } from 'react-redux';
import Gallery from './Gallery';
import {
  getGalleryProducts,
  getSelectedProduct,
} from '../../../redux/productsRedux.js';
import { getGalleryDeal } from '../../../redux/dealsRedux';

const mapStateToProps = state => ({
  galleryProducts: getGalleryProducts(state),
  selectedProduct: getSelectedProduct(state),
  galleryDeal: getGalleryDeal(state),
});

export default connect(mapStateToProps)(Gallery);
