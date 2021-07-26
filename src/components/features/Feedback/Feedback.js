import React from 'react';
import PropTypes from 'prop-types';
import styles from './Feedback.module.scss';
import Swipeable from '../../common/Swipeable/Swipeable.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

class Feedback extends React.Component {
  state = {
    activePage: 0,
    visible: true,
    isFading: false,
  };

  changeActivePage(newPage) {
    this.setState({ activePage: newPage });
  }

  handlePageChange(newPage) {
    this.setState({ isFading: true });
    setTimeout(() => {
      this.setState({ activePage: newPage });
    }, 500);
    setTimeout(() => {
      this.setState({ isFading: false });
    }, 500);
  }

  render() {
    const { feedbacks } = this.props;
    const { activePage, isFading } = this.state;
    const dots = [];

    for (let i = 0; i < feedbacks.length; i++) {
      dots.push(
        <li key={i}>
          <div
            className={i === activePage ? styles.active : ''}
            onClick={() => this.handlePageChange(i)}
          >
            {i}
          </div>
        </li>
      );
    }

    const rightAction = () => {
      const newPage = activePage - 1;
      if (newPage >= 0) {
        this.setState({ activePage: newPage });
      }
    };

    const leftAction = () => {
      const newPage = activePage + 1;
      if (newPage < feedbacks.length) {
        this.setState({ activePage: newPage });
      }
    };

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>Client Feedback</h3>
              </div>
              <div className={'col ' + styles.menu} />
              <div className={'col-auto ' + styles.dots}>
                <ul> {dots} </ul>
              </div>
            </div>
          </div>
          <Swipeable leftAction={leftAction} rightAction={rightAction}>
            <div
              className={
                'row ' +
                styles.feedbackLine +
                (isFading ? ' ' + styles.fadeout : ' ' + styles.fadein)
              }
            >
              {feedbacks.slice(activePage * 1, (activePage + 1) * 1).map(feedback => (
                <div key={feedback.id}>
                  <div className={styles.icon}>
                    <FontAwesomeIcon icon={faQuoteRight} />
                  </div>
                  <div className={styles.opinion}>{feedback.opinion}</div>
                  <div className={'flex-column' + styles.clientsData}>
                    <img
                      className={styles.client_image}
                      src={feedback.client_image}
                      alt=''
                    />
                    <div className={styles.client_nameAndType}>
                      {feedback.client_type}
                      <div className={styles.client_name}>{feedback.client_name}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Swipeable>
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  children: PropTypes.node,
  feedbacks: PropTypes.array,
};

export default Feedback;
