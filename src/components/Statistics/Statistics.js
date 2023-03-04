import css from './Statistics.module.css';

const Statistics = function ({ good, neutral, bad }) {
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
        <li>
          <h3>Total: </h3>
          <span></span>
        </li>
        <li>
          <h3>Positive feedback: </h3>
          <span></span>
        </li>
      </ul>
    </>
  );
};

export default Statistics;
