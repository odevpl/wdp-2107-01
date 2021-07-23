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

  duplicateArray(brands) {
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

  cutDoubleArray(doubleArray, size, direction = 'left') {
    const numberOfPictures = this.calculateNumberOfPictures(size);
    let lastDisplayedPhoto = this.findLastIndex();
    if (direction === 'right') {
      lastDisplayedPhoto = -numberOfPictures;
    }
    let readyArray = doubleArray.slice(
      lastDisplayedPhoto,
      lastDisplayedPhoto + numberOfPictures
    );
    console.log(lastDisplayedPhoto);
    return readyArray;
  }

  displayBrands(brands, size) {
    // /* eslint-disable */
    // debugger;
    const doubleArray = this.duplicateArray(brands);
    const readyArray = this.cutDoubleArray(doubleArray, size);
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

  arrowClick(direction) {
    const lastChild = this.findLastIndex();
    console.log(lastChild, direction);
  }

  render() {
    const { brands, size } = this.props;
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='col'>
            <div className={styles.brandsRow}>
              <div className={styles.arrowLeft} onClick={() => this.arrowClick('left')}>
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
                onClick={() => this.arrowClick('right')}
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
  brands: PropTypes.arrayOf(
    PropTypes.shape({
      brandLogoImage: PropTypes.string,
    })
  ),
};

export default Brands;
