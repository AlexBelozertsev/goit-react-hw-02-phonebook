import React from 'react';
import style from './Feedback.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={style.Feedback__bar}>
    {Object.keys(options).map(key => (
      <button key={key} type="button" onClick={onLeaveFeedback}>
        {key[0].toUpperCase() + key.slice(1).toLowerCase()}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
