import React from 'react';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notification/Notification';

class Section extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodFeedBack = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  neutralFeedBack = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  badFeedBack = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const percentage =
      this.countTotalFeedback() === 0
        ? 0
        : Math.floor((this.state.good / this.countTotalFeedback()) * 100);
    return String(percentage) + '%';
  };

  render() {
    return (
      <section>
        <h1>{this.props.title}</h1>
        <FeedbackOptions
          onGoodFeedBack={this.goodFeedBack}
          onNeutralFeedBack={this.neutralFeedBack}
          onBadFeedBack={this.badFeedBack}
        />

        {this.countTotalFeedback() === 0 && (
          <Notification message="No feedback given" />
        )}

        {this.countTotalFeedback() > 0 && (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            totalFeedback={this.countTotalFeedback()}
            countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
          />
        )}
      </section>
    );
  }
}

export default Section;
