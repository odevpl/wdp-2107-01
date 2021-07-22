import React from 'react';
import PropTypes from 'prop-types';
import styles from './Brands.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

class Brands extends React.Component {
  state = {
    imgNumber: 6,
    counter: 0,
  };

  calculateParamsForSlice(size) {
    let imgNumber = 1;
    switch (size) {
      case 'lg':
        imgNumber = 6;
        break;
      case 'md':
        imgNumber = 4;
        break;
      case 'sm':
        imgNumber = 3;
        break;
      case 'xs':
        imgNumber = 2;
        break;
      default:
        imgNumber = 1;
    }

    return imgNumber;
  }

  sliceArray(brands, size) {
    const array = brands.slice(this.state.counter, this.calculateParamsForSlice(size));
    return array;
  }

  displayBrands(brands, size) {
    const array = this.sliceArray(brands, size);
    return array.map(brand => (
      <img
        key={brand.brandLogoImage}
        src={brand.brandLogoImage}
        alt={'brand'}
        className={styles.brandLogoImage}
      />
    ));
  }

  render() {
    const { brands, size } = this.props;
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='col'>
            <div className={styles.brandsRow}>
              <div className={styles.arrowLeft}>
                <div className={styles.arrowShadow}></div>
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className={styles.leftArrow}
                ></FontAwesomeIcon>
              </div>
              <div className={`slide ${styles.brandsImages}`}>
                {this.displayBrands(brands, size)}
              </div>
              <div className={styles.arrowRight}>
                <div className={styles.arrowShadow}></div>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className={styles.rightArrow}
                ></FontAwesomeIcon>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Brands.propTypes = {
  size: PropTypes.any,
  brands: PropTypes.arrayOf(
    PropTypes.shape({
      brandLogoImage: PropTypes.string,
    })
  ),
};

export default Brands;
