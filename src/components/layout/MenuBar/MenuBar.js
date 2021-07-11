import React from 'react';
import PropTypes from 'prop-types';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';
import { Link } from 'react-router-dom';

const MenuBar = ({ children }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row align-items-center'>
        <div className='col'>
          <ProductSearch />
        </div>
        <div className={'col-auto ' + styles.menu}>
          <ul>
            <li>
              <Link to={'/'} className={styles.active}>
                Home
              </Link>
            </li>
            <li>
              <Link to={'/shop/furniture'}>Furniture</Link>
            </li>
            <li>
              <Link to={'/shop/chair'}>Chair</Link>
            </li>
            <li>
              <Link to={'/shop/table'}>Table</Link>
            </li>
            <li>
              <Link to={'/shop/sofa'}>Sofa</Link>
            </li>
            <li>
              <Link to={'/shop/bedroom'}>Bedroom</Link>
            </li>
            <li>
              <Link to={'/blog'}>Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
