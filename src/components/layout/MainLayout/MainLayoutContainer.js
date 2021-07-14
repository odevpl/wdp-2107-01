import MainLayout from './MainLayout';
import { connect } from 'react-redux';

import { changeDevice } from '../../../redux/sizeRedux';


const mapDispatchToProps = dispatch => ({
  changeDevice: device => dispatch(changeDevice(device)),
});

export default connect(null, mapDispatchToProps)(MainLayout);
