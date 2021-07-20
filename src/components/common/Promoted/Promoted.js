import React from 'react';
import PropTypes from 'prop-types';
import styles from './Promoted.module.scss';
import PromotedBox from '../../common/Promoted/PromotedBox';
import PromotedBox2 from '../../common/Promoted/PromotedBox2';

class Promoted extends React.Component {
  state = {
    productHotDealsLeft: 3,
    productHotDealsRight: 16,
  };

  render() {
    const { products } = this.props;
    const { productHotDealsLeft } = this.state;
    const { productHotDealsRight } = this.state;

    return (
      <div className={styles.root2}>
        <div className='container'>
          <div className='row'>
            {products.slice(productHotDealsLeft, productHotDealsLeft + 1).map(item => (
              <div key={item.id} className='col-4'>
                <PromotedBox {...item} />
              </div>
            ))}
            {products
              .slice(productHotDealsRight, productHotDealsRight + 1)
              .map(item => (
                <div key={item.id} className='col-8'>
                  <PromotedBox2 {...item} />
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

Promoted.propTypes = {
  children: PropTypes.node,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
};

export default Promoted;
