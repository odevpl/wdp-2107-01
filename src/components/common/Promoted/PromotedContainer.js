import { connect } from 'react-redux';
import Promoted from './Promoted';
import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
});

export default connect(mapStateToProps)(Promoted);
