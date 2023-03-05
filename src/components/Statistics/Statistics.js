import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = function ({
  good,
  neutral,
  bad,
  totalFeedback,
  countPositiveFeedbackPercentage,
}) {
  return (
    <>
      <h2>Statistics</h2>
      <ul className={css.statisticList}>
        <li className={css.statisticItem}>
          <h3>Good: </h3>
          <span>{good}</span>
        </li>
        <li className={css.statisticItem}>
          <h3>Neutral: </h3>
          <span>{neutral}</span>
        </li>
        <li className={css.statisticItem}>
          <h3>Bad: </h3>
          <span>{bad}</span>
        </li>
        <li className={css.statisticItem}>
          <h3>Total: </h3>
          <span>{totalFeedback}</span>
        </li>
        <li className={css.statisticItem}>
          <h3>Positive feedback: </h3>
          <span>{countPositiveFeedbackPercentage}</span>
        </li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  totalFeedback: PropTypes.number,
  countPositiveFeedbackPercentage: PropTypes.string,
};

export default Statistics;
