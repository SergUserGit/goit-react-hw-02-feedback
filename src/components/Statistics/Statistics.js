import React from 'react';
import css from './Statistics.module.css';

class Statistics extends React.Component {
  render() {
    return (
      <div>
        <h2>Statistics</h2>
        <ul>
          <li>
            <h3>Good: </h3>
            <span></span>
          </li>
          <li>
            <h3>Neutral: </h3>
            <span></span>
          </li>
          <li>
            <h3>Bad: </h3>
            <span></span>
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
      </div>
    );
  }
}

export default Statistics;
