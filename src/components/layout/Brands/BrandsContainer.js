import { connect } from 'react-redux';
import Brands from './Brands';
import { getAll } from '../../../redux/brandsRedux.js';
import { getSize } from '../../../redux/sizeRedux';
import { updateBrands } from '../../../redux/brandsRedux.js';

const mapStateToProps = state => ({
  brands: getAll(state),
  size: getSize(state),
});

const mapDispatchToProps = dispatch => ({
  updateBrands: device => dispatch(updateBrands(device)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Brands);
