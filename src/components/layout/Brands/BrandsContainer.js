import { connect } from 'react-redux';
import Brands from './Brands';
import { getAll } from '../../../redux/brandsRedux.js';
import { getSize } from '../../../redux/sizeRedux';

const mapStateToProps = state => ({
  brands: getAll(state),
  size: getSize(state),
});

export default connect(mapStateToProps)(Brands);
