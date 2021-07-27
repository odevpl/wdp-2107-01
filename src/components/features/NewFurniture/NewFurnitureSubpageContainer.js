import { connect } from 'react-redux';

import NewFurnitureSubpage from './NewFurnitureSubpage';

import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew } from '../../../redux/productsRedux.js';

const mapStateToProps = actionButton => ({
  categories: getAll(actionButton),
  products: getNew(actionButton),
});

export default connect(mapStateToProps)(NewFurnitureSubpage);
