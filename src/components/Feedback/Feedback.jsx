import React, { useState } from 'react';

import Statistics from '../Statistic/Statistic';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';

import css from './Feedback.module.css';

export const Feedback = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleChange = type => {
    setFeedback(prevState => ({ ...prevState, [type]: prevState[type] + 1 }));
  };

  const { good, neutral, bad } = feedback;

  return (
    <div className={css.statistic_body}>
      <h1 className={css.statistic_title}>Please leave feedback</h1>
      <FeedbackOptions FeedbackChoice={handleChange} />
      <h2 className={css.statistic_body}>Statistic</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};
