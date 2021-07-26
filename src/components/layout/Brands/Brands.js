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
    activePage: 0,
  };

  async setDirection(dir) {
    // /* eslint-disable */
    // debugger;
    await this.setState({ direction: dir });
  }

  // displayBrands(brands, picNubmer) {

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

  render() {
    const { brands, size } = this.props;
    const { activePage } = this.state;

    const rightAction = () => {
      const newPage = activePage + 1;
      if (newPage < pagesCount) {
        this.setState({ activePage: newPage });
      }
    };

    const leftAction = () => {
      const newPage = activePage - 1;
      if (newPage >= 0) {
        this.setState({ activePage: newPage });
      }
    };
    let picNubmer = this.calculateNumberOfPictures(size);
    let numOfPics = document.querySelectorAll('#brand').length;

    const pagesCount = Math.ceil(brands.length / picNubmer);

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='col'>
            <div className={styles.brandsRow}>
              <div className={styles.arrowLeft} onClick={() => leftAction()}>
                <div className={styles.arrowShadow}></div>
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className={styles.leftArrow}
                ></FontAwesomeIcon>
              </div>
              <div className={`slide ${styles.brandsImages}`}>
                {picNubmer !== numOfPics ? this.setState({ activePage: 0 }) : ''}
                {brands
                  .slice(
                    this.state.activePage * picNubmer,
                    (this.state.activePage + 1) * picNubmer
                  )
                  .map(brand => (
                    <img
                      id='brand'
                      key={brand.brandLogoImage}
                      src={brand.brandLogoImage}
                      alt={brand.id}
                      className={styles.brandLogoImage}
                    />
                  ))}
              </div>
              <div className={styles.arrowRight} onClick={() => rightAction()}>
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
