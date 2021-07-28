import React from 'react';
import PropTypes from 'prop-types';
import styles from './PromotedBox2.module.scss';
import Button from '../Button/Button';

const PromotedBox2 = ({ image, fade }) => (
  <div className={styles.root}>
    <div className={styles.photo}>
      <img className={`${styles.image} ${fade}`} src={image} alt='Ups...'></img>
      <div className={styles.buttons}>
        <Button className={styles.buttonCenter}>SHOP NOW</Button>
      </div>

      <div className={styles.content}>
        <h1>
          INDOOR<span> FURNITURE</span>
        </h1>
        <p>SAVE UP TO 50% OF ALL FURNITURE</p>
      </div>
    </div>
  </div>
);

PromotedBox2.propTypes = {
  children: PropTypes.node,
  image: PropTypes.string,
  fade: PropTypes.string,
};

export default PromotedBox2;
