import React from 'react';
import PropTypes from 'prop-types';
import styles from './Feedback.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

class Feedback extends React.Component {
  render() {
    const { feedbacks } = this.props;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                {feedbacks.map(feedback => (
                  <div key={feedback.title} className={styles.title}>
                    {feedback.title}
                  </div>
                ))}
              </div>
              <div className={styles.headingEmpty}></div>
              <div className={'col-auto ' + styles.dots}>
                <ul>
                  <li>
                    <a>1</a>
                    <a>2</a>
                    <a>3</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faQuoteRight} />
          </div>
          <div className={styles.content}>
            <div className={styles.sign}>
              {feedbacks.map(feedback => (
                <div key={feedback.sign}>{feedback.sign}</div>
              ))}
            </div>
            <div className={styles.opinion}>
              {feedbacks.map(feedback => (
                <div key={feedback.opinion}>{feedback.opinion}</div>
              ))}
            </div>
            <div className={styles.clientsData}>
              <div>
                {feedbacks.map(feedback => (
                  <img
                    key={feedback.client_image}
                    src={feedback.client_image}
                    alt={'client_image'}
                    className={styles.client_image}
                  />
                ))}
              </div>
              <div className={styles.client_nameAndType}>
                <div className={styles.client_name}>
                  {feedbacks.map(feedback => (
                    <div key={feedback.client_name}>{feedback.client_name}</div>
                  ))}
                </div>
                <div className={styles.client_type}>
                  {feedbacks.map(feedback => (
                    <div key={feedback.client_type}>{feedback.client_type}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  feedbacks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      sign: PropTypes.string,
      opinion: PropTypes.string,
      client_image: PropTypes.string,
      client_name: PropTypes.string,
      client_type: PropTypes.string,
    })
  ),
};

export default Feedback;
