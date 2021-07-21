import { connect } from 'react-redux';
import Brands from './Brands';
import { getAll } from '../../../redux/brandsRedux.js';

const mapStateToProps = state => ({
  brands: getAll(state),
});

export default connect(mapStateToProps)(Brands);
