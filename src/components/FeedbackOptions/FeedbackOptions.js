import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = function ({
  onGoodFeedBack,
  onNeutralFeedBack,
  onBadFeedBack,
}) {
  return (
    <ul className={css.optionsList}>
      <li>
        <button
          className={css.optionsButton}
          type="button"
          onClick={onGoodFeedBack}
        >
          Good
        </button>
      </li>
      <li>
        <button
          className={css.optionsButton}
          type="button"
          onClick={onNeutralFeedBack}
        >
          Neutral
        </button>
      </li>
      <li>
        <button
          className={css.optionsButton}
          type="button"
          onClick={onBadFeedBack}
        >
          Bad
        </button>
      </li>
    </ul>
  );
};

FeedbackOptions.propTypes = {
  onGoodFeedBack: PropTypes.func.isRequired,
  onNeutralFeedBack: PropTypes.func.isRequired,
  onBadFeedBack: PropTypes.func.isRequired,
};

export default FeedbackOptions;
