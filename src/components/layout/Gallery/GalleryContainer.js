import { connect } from 'react-redux';
import Gallery from './Gallery';
import { getAll } from '../../../redux/galleryRedux.js';

const mapStateToProps = state => ({
  gallery: getAll(state),
});

export default connect(mapStateToProps)(Gallery);
