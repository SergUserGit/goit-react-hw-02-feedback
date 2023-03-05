import PropTypes from 'prop-types';
import css from './Notification.module.css';

const Notification = function ({ message }) {
  return (
    <>
      <h2 className={css.notificationTitle}>Statistics</h2>
      <h3 className={css.notificationMessage}>{message}</h3>
    </>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
