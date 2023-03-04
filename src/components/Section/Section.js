import React from 'react';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';

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

  render() {
    return (
      <section>
        <h1>{this.props.title}</h1>
        <FeedbackOptions
          onGoodFeedBack={this.goodFeedBack}
          onNeutralFeedBack={this.neutralFeedBack}
          onBadFeedBack={this.badFeedBack}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
      </section>
    );
  }
}

export default Section;
