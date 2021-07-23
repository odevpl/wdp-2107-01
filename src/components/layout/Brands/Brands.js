import React from 'react';
import PropTypes from 'prop-types';
import styles from './Brands.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

class Brands extends React.Component {
  state = {
    imgNumber: 6,
    counter: 0,
    direction: 'init',
  };

  setDirection(direction) {
    this.setState({ direction: direction });
  }

  duplicateArray(brands, size) {
    // /* eslint-disable */
    // debugger;
    let final = [];
    if (size > brands) {
      const first = brands;
      const second = [];
      for (let brand of brands) {
        second.push({
          brandLogoImage: brand.brandLogoImage,
          id: brand.id + brands.length,
        });
      }
      final = first.concat(second);
    } else {
      final = brands;
    }

    return final;
  }

  displayBrands(brands, size) {
    const direction = this.state.direction;
    const readyArray = this.cutDoubleArray(brands, size, direction);
    return readyArray.map(brand => (
      <img
        id='brand'
        key={brand.brandLogoImage}
        src={brand.brandLogoImage}
        alt={brand.id}
        className={styles.brandLogoImage}
      />
    ));
  }

  cutDoubleArray(doubleArray, size, direction = 'init') {
    let readyArray = [];
    const numberOfPictures = this.calculateNumberOfPictures(size);
    const keyInArray = this.findKey(doubleArray);
    if (direction === 'right' || direction === 'init') {
      readyArray = doubleArray.slice(keyInArray, keyInArray + numberOfPictures);
    } else {
      readyArray = doubleArray.slice(keyInArray - numberOfPictures, keyInArray);
    }

    return readyArray;
  }

  calculateNumberOfPictures(size) {
    let imgNumber;
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
        imgNumber = 'error';
    }
    return imgNumber;
  }

  findKey(array) {
    let currentKey;
    const lastIndex = this.findLastIndex();
    for (let key = 0; key < array.length; key++) {
      if (array[key].id === parseInt(lastIndex)) {
        currentKey = key;
      }
    }
    return currentKey;
  }

  findLastIndex() {
    const elements = document.querySelectorAll('#brand');
    const lastChild = elements[elements.length - 1];
    let lastIndex;

    if (lastChild) {
      lastIndex = lastChild.getAttribute('alt');
    } else {
      lastIndex = 0;
    }
    return lastIndex;
  }

  render() {
    const { brands, size, updateBrands } = this.props;
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='col'>
            <div className={styles.brandsRow}>
              <div
                className={styles.arrowLeft}
                onClick={() => {
                  updateBrands(this.duplicateArray(brands, size));
                  this.setDirection('left');
                }}
              >
                <div className={styles.arrowShadow}></div>
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className={styles.leftArrow}
                ></FontAwesomeIcon>
              </div>
              <div className={`slide ${styles.brandsImages}`}>
                {this.displayBrands(brands, size)}
              </div>
              <div
                className={styles.arrowRight}
                onClick={() => updateBrands(this.duplicateArray(brands, size))}
              >
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
  updateBrands: PropTypes.func,
  brands: PropTypes.arrayOf(
    PropTypes.shape({
      brandLogoImage: PropTypes.string,
    })
  ),
};

export default Brands;
