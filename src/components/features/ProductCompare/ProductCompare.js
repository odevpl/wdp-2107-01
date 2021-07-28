import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductCompare.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
const ProductCompare = ({ products, removeFromCompare }) => {
  if (products.length === 0) return null;
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-10'>
            <div className={'row ' + styles.rowWrapper}>
              {products.map(product => {
                return (
                  <div key={product.id} className={'col-3 ' + styles.colWrapper}>
                    <div className={styles.imageWrapper}>
                      <img
                        className={styles.image}
                        src={product.image}
                        alt={product.name}
                      ></img>
                    </div>
                    <div className={styles.tag}>
                      <span className={styles.text}>{product.name}</span>
                      <span>
                        ${product.price}
                        <FontAwesomeIcon icon={product.favourite ? farHeart : faHeart}>
                          Favorite
                        </FontAwesomeIcon>
                      </span>
                    </div>
                    <div
                      onClick={() => {
                        removeFromCompare(product.id);
                      }}
                      className={styles.close}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={'col-2 ' + styles.btnWrapper}>
            <Button className={styles.btn} variant={'outline'}>
              Compare
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
ProductCompare.propTypes = {
  products: PropTypes.array,
  removeFromCompare: PropTypes.func,
};

export default ProductCompare;
