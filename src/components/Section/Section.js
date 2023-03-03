import React from 'react';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';

class Section extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <section>
        <h1>{this.props.title}</h1>
        <FeedbackOptions />
        <Statistics />
      </section>
    );
  }
}

export default Section;
