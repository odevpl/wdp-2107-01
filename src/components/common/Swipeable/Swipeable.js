import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Swipeable = ({ leftAction, rightAction, children }) => {
  const [touchStart, setTouchStart] = useState(0);

  const handleTouchStart = event => {
    setTouchStart(event.touches[0].clientX);
  };

  const handleTouchEnd = event => {
    if (touchStart - event.changedTouches[0].clientX > 0) {
      // left move detected
      leftAction();
    } else {
      // right swipe detected
      rightAction();
    }
  };

  return (
    <div
      onTouchStart={event => handleTouchStart(event)}
      onTouchEnd={event => handleTouchEnd(event)}
    >
      {children}
    </div>
  );
};

Swipeable.propTypes = {
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
  children: PropTypes.node,
  mouseEvents: PropTypes.bool,
};

export default Swipeable;
