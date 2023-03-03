import React from 'react';
import css from './FeedbackOptions.module.css';

class FeedbackOptions extends React.Component {
  render() {
    return (
      <ul className={css.optionsList}>
        <li>
          <button className={css.optionsButton} type="button">
            Good
          </button>
        </li>
        <li>
          <button className={css.optionsButton} type="button">
            Neutral
          </button>
        </li>
        <li>
          <button className={css.optionsButton} type="button">
            Bad
          </button>
        </li>
      </ul>
    );
  }
}

export default FeedbackOptions;
