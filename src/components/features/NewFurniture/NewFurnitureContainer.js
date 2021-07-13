import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew } from '../../../redux/productsRedux.js';

const mapStateToProps = actionButton => ({
  categories: getAll(actionButton),
  products: getNew(actionButton),
});

export default connect(mapStateToProps)(NewFurniture);
