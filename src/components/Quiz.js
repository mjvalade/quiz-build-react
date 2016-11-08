import React, { Component } from 'react';
import axios from 'axios';

class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      quizzes: [],
      questions: []
    };
  }

  getQuizzes() {
    return axios.get('/quizzes', {
    })
      .then((response) => {
        this.setState({
          quizzes: response.data.quizzes,
          questions: response.data.quizzes[0].questions
        });
      }).catch(function() {
        console.log('get request failed');
      });
  }

  componentDidMount() {
    this.getQuizzes();
  }

  renderQuizTitle(state) {
    return state.map(quiz =>
      <section className="quiz-title" key={quiz.id}>
        <h1>{quiz.title}</h1>
      </section>
    )
  }

  renderQuestions(state) {
    return state.map(questions =>
      <section className="questions" key={questions.id}>
        <h2 className="question-title">
          {questions.title}
        </h2>
        <article className="answers-container">
          {questions.answers.map((answers, i) =>
            <div className="answers">
              <input
                type="radio"
                key={i}
                value={answers.title}
              /> {answers.title}
            </div>
          )}
            </article>
      </section>
    )
  }

  render() {
    return(
      <div className="quiz-container">
        <section>{this.renderQuizTitle(this.state.quizzes)}</section>
        <section>{this.renderQuestions(this.state.questions)}</section>
      </div>
    );
  }
}

export default Quiz;
