/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Deals.module.scss';

class Deals extends React.Component {
  render() {
    const { mainDeal, topDeal, bottomDeal } = this.props;
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row  align-items-center justify-content-center'>
            <div className={`col-sm-12 col-md-6 ${styles.section}`}>
              <div className={`col-12 ${styles.mainDeal}`}>
                <img src={mainDeal.firstImage} alt={mainDeal.name} />
                <div className={`col-12 ${styles.shadowBox}`}>
                  <div className={`col-12 ${styles.mainDescription}`}>
                    <h3 className={styles.mainText}>
                      {mainDeal.name.slice(0, 10)}
                      <span>{mainDeal.name.slice(10, 15)}</span>
                    </h3>
                    <h2>
                      <span className={styles.mainNumber}>
                        {mainDeal.name.slice(16, 20)}
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className={`col-sm-12 col-md-6 ${styles.section}`}>
              <div className={`col-12 ${styles.deal}`}>
                <div className={styles.topBox}>
                  <img
                    className={styles.leftImg}
                    src={topDeal.firstImage}
                    alt={topDeal.name}
                  />
                  <div className={styles.topBoxDescription}>
                    <h2>
                      <span className={styles.bold}>{topDeal.name.slice(0, 6)}</span>
                      <span className={styles.light}>{topDeal.name.slice(6, 12)}</span>
                      <span className={styles.topSmallText}>
                        {topDeal.name.slice(12, 23)}
                      </span>
                    </h2>
                    <h2 className={styles.topBoxNumber}>
                      {topDeal.name.slice(23, 32)}
                    </h2>
                  </div>
                  <img
                    className={styles.rightImg}
                    src={topDeal.secondImage}
                    alt={topDeal.name}
                  />
                </div>
              </div>
              <div className={`col-12 ${styles.deal}`}>
                <div className={styles.bottomBox}>
                  <img
                    className={styles.bottomImg}
                    src={bottomDeal.firstImage}
                    alt={bottomDeal.name}
                  />
                  <div className={styles.bottomBoxDescription}>
                    <h3>
                      <span className={styles.bold}>{bottomDeal.name.slice(0, 7)}</span>
                      <span className={styles.light}>
                        {bottomDeal.name.slice(7, 19)}
                      </span>
                    </h3>
                    <h5>{bottomDeal.name.slice(19, 43)}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Deals.propTypes = {
  mainDeal: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string,
      firstImage: PropTypes.string,
      secondImage: PropTypes.string,
    })
  ),
  topDeal: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string,
      firstImage: PropTypes.string,
      secondImage: PropTypes.string,
    })
  ),
  bottomDeal: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string,
      firstImage: PropTypes.string,
      secondImage: PropTypes.string,
    })
  ),
};

export default Deals;
