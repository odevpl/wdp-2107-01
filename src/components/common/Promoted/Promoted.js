import React from 'react';
import PropTypes from 'prop-types';
import styles from './Promoted.module.scss';
import PromotedBox from '../../common/Promoted/PromotedBox';
import PromotedBox2 from '../../common/Promoted/PromotedBox2';
import Button from '../Button/Button';

class Promoted extends React.Component {
  state = {
    productHotDealsLeft: 7,
    productHotDealsRight: 6,
    fade: 'fadein',
  };

  // componentDidMount(){
  //   setTimeout(() => {
  //     this.setState({productHotDealsLeft: })
  //   },3000);
  // }

  changePic(e, value, direction) {
    e.preventDefault();
    this.setState({ fade: 'fadeout' });
    let number = parseInt(value);
    setTimeout(() => {
      this.setState({ productHotDealsRight: number + direction });
      this.setState({ fade: 'fadein' });
    }, 500);
  }

  render() {
    const { products } = this.props;
    const { productHotDealsLeft } = this.state;
    const { productHotDealsRight } = this.state;
    const { fade } = this.state;

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
                  <PromotedBox2 fade={fade} {...item} />
                  <div className={styles.actions}>
                    <Button
                      className={styles.buttonSliderLeft}
                      variant='buttonLeft'
                      onClick={e =>
                        this.changePic(e, this.state.productHotDealsRight, -1)
                      }
                    >
                      {'<'}
                    </Button>
                    <Button
                      className={styles.buttonSliderRight}
                      variant='buttonRight'
                      onClick={e =>
                        this.changePic(e, this.state.productHotDealsRight, +1)
                      }
                    >
                      {'>'}
                    </Button>
                  </div>
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
