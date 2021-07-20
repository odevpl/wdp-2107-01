import { connect } from 'react-redux';
import Stars from './Stars';
import { setCustomStars } from '../../../redux/productsRedux.js';

const mapDispatcherToProps = dispatcher => ({
  setCustomStars: payload => dispatcher(setCustomStars(payload)),
});

export default connect(null, mapDispatcherToProps)(Stars);
