import PropTypes from 'prop-types';

const Notification = function ({ message }) {
  return (
    <>
      <h2>Statistics</h2>
      <h3>{message}</h3>
    </>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
