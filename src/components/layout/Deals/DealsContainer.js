import { connect } from 'react-redux';
import Deals from './Deals';
import { getMainDeal, getTopDeal, getBottomDeal } from '../../../redux/dealsRedux.js';

const mapStateToProps = state => ({
  mainDeal: getMainDeal(state),
  topDeal: getTopDeal(state),
  bottomDeal: getBottomDeal(state),
});

export default connect(mapStateToProps)(Deals);
