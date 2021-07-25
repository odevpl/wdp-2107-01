import { connect } from 'react-redux';
import Promoted from './Promoted';
import { getNew } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  products: getNew(state),
});

export default connect(mapStateToProps)(Promoted);
