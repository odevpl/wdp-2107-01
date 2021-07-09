import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import {
  getAll,
  getCountProductToCompare,
  addToCompare,
} from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: getAll(state),
  countProductToCompare: () => getCountProductToCompare(state),
});

const mapDispatchToProps = dispatch => ({
  addToCompare: id => dispatch(addToCompare(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
