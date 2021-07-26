import React from 'react';
import PropTypes from 'prop-types';
import styles from './Promoted.module.scss';
import PromotedBox from '../../common/Promoted/PromotedBox';
import PromotedBox2 from '../../common/Promoted/PromotedBox2';
import Button from '../Button/Button';

class Promoted extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productHotDealsLeft: 0,
      productHotDealsRight: 1,
      fade: 'fadein',
      activePage: 0,
      clicked: false,
    };
  }

  componentDidUpdate() {
    const maxPic = this.props.products.length - 1;
    let number = this.state.productHotDealsLeft;

    if (number === maxPic) {
      number = 1;
    }
    if (!this.state.clicked) {
      setTimeout(() => {
        this.setState({ productHotDealsLeft: number + 1 });
      }, 3000);
    } else {
      setTimeout(() => this.setState({ clicked: false }), 10000);
    }
  }

  checkPicLength() {}

  changePic(e, value, direction) {
    e.preventDefault();
    this.setState({ fade: 'fadeout' });
    let number = parseInt(value);
    const firstPic = 0;
    const lastPic = this.props.products.length - 1;
    const nextPic = number + direction;
    if (nextPic > 0 && nextPic < lastPic) {
      setTimeout(() => {
        this.setState({ productHotDealsRight: number + direction });
        this.setState({ fade: 'fadein' });
      }, 500);
    }
  }

  render() {
    const { products } = this.props;
    const { productHotDealsLeft } = this.state;
    const { productHotDealsRight } = this.state;
    const { fade } = this.state;
    const { activePage } = this.state;
    const dots = [];

    for (let i = 0; i < 3; i++) {
      dots.push(
        <li>
          <a
            className={i === activePage && styles.active}
            onClick={() => this.setState({ clicked: true })}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <div className={styles.root2}>
        <div className='container'>
          <div className='row'>
            {products.slice(productHotDealsLeft, productHotDealsLeft + 1).map(item => (
              <div key={item.id} className='col-4'>
                <PromotedBox {...item} dots={dots} />
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
