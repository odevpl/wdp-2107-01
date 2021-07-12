import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductSearch.module.scss';

const ProductSearch = () => (
  <form action='' className={styles.root}>
    <div className={styles.category}>
      <FontAwesomeIcon className={styles.icon} icon={faListUl} />
      <ul className={styles.parentUl}>
        <li>Select a category</li>
        <li>
          Bed
          <ul className={styles.childUl}>
            <li>Ottoman</li>
            <li>Futon</li>
            <li>Frame</li>
            <li>Box</li>
          </ul>
        </li>
        <li>
          Chair
          <ul className={styles.childUl}>
            <li>Ottoman</li>
            <li>Futon</li>
            <li>Frame</li>
            <li>Box</li>
          </ul>
        </li>
        <li>
          Sofa
          <ul className={styles.childUl}>
            <li>Ottoman</li>
            <li>Futon</li>
            <li>Frame</li>
            <li>Box</li>
          </ul>
        </li>
        <li>
          Table
          <ul className={styles.childUl}>
            <li>Ottoman</li>
            <li>Futon</li>
            <li>Frame</li>
            <li>Box</li>
          </ul>
        </li>
        <li>
          Dining
          <ul className={styles.childUl}>
            <li>Ottoman</li>
            <li>Futon</li>
            <li>Frame</li>
            <li>Box</li>
          </ul>
        </li>
      </ul>
      <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
    </div>
    <div className={styles.searchField}>
      <input placeholder='Search products...' type='text' />
      <button>
        <FontAwesomeIcon className={styles.icon} icon={faSearch} />
      </button>
    </div>
  </form>
);

ProductSearch.propTypes = {
  children: PropTypes.node,
};

export default ProductSearch;
