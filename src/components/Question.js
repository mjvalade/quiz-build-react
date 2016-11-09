import React, { Component } from 'react';
import Answer from './Answer';

class Question extends Component {
  constructor() {
    super();
    this.state = {
      selectedScore: null
    };
  }


  render() {
    const { id, title, answers } = this.props;

    return(
      <section className="questions" key={id}>
        <h2 className="question-title">
          {title}
        </h2>
        <form>
          {answers.map((answer, i) =>
            <Answer
              key={i}
              id={id}
              answer={answer}
              handleClick={(score) => this.setState({selectedScore: score})}
            />
          )}
        </form>
      </section>
    );
  }
};

export default Question;
