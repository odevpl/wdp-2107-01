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

  // sliceArray(brands, size) {
  //   const currentLastImg = this.findLastIndex();
  //   const leftToDisplay = brands.length-currentLastImg;
  //   // if (leftToDisplay < size) {
  //   // }
  //   const array = brands.slice(currentLastImg, currentLastImg+size);
  //   return array;
  // }

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

  findLastIndex() {
    // /* eslint-disable */
    // debugger;
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

  findKey(array) {
    let currentKey;
    const lastIndex = this.findLastIndex();
    for (let key = 0; key < array.length; key++) {
      if (array[key].id === parseInt(lastIndex)) {
        currentKey = key;
      }
      console.log(array[key]);
    }
    return currentKey;
  }

  duplicateArray(brands, size) {
    const first = brands;
    const second = [];
    let final = [];
    for (let brand of brands) {
      second.push({
        brandLogoImage: brand.brandLogoImage,
        id: brand.id + brands.length,
      });
    }
    final = first.concat(second);
    return final;
  }

  // cutArraytoSize(array, size) {
  //   const length = this.calculateNumberOfPictures({size});
  //   const lastPhoto = this.findLastIndex();

  // }

  cutDoubleArray(doubleArray, size, direction = 'left') {
    const numberOfPictures = this.calculateNumberOfPictures(size);
    const keyInArray = this.findKey(doubleArray);
    let readyArray = doubleArray.slice(keyInArray, keyInArray + numberOfPictures);
    // za duzo razy sie updateuje  - dispatch it and bring back as brands
    return readyArray;
  }

  displayBrands(brands, size) {
    const readyArray = this.cutDoubleArray(brands, size);
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

  arrowClick(brands, size, direction) {}

  render() {
    const { brands, size, updateBrands } = this.props;
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='col'>
            <div className={styles.brandsRow}>
              <div
                className={styles.arrowLeft}
                onClick={() =>
                  this.arrowClick(
                    updateBrands(this.duplicateArray(brands)),
                    size,
                    'left'
                  )
                }
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
                onClick={() =>
                  this.arrowClick(
                    updateBrands(this.duplicateArray(brands)),
                    size,
                    'right'
                  )
                }
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
