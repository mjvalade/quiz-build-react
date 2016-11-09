import React, { Component } from 'react';
import axios from 'axios';
import Question from './Question';

class Quiz extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  componentDidMount() {
    this.getQuizzes();
  }

  getQuizzes() {
    axios.get('/quizzes')
      .then((response) => {
        this.setState({
          quizzes: response.data.quizzes
        });
      })
      .catch((error) => {
        console.log(error);
    });
  }

  findScore() {
    axios.post('/scores', {
      "score": 5
    })
    .then((response) => {
      this.setState({
        scoreResult: response.data.score
      });
    })
    .catch((error) => {
      console.log('Error', error);
    });
  }

  render() {
    return (
      this.state.quizzes ?
        <div className="quiz-container">
          <section className="quiz-container">
            <h1 className="quiz-title"
              key={this.state.quizzes[0].id}
            >{this.state.quizzes[0].title}</h1>
            <p>
              {/* total score */}
            </p>
            <input
              type="button"
              value="Submit Score"
              onClick={(e) => this.findScore()}
            />
            <p>
              {this.state.scoreResult}
            </p>
          </section>
          <section>
            {this.state.quizzes[0].questions.map(questions =>
              <Question
                className="questions"
                key={questions.id}
                id={questions.id}
                title={questions.title}
                answers={questions.answers}
              /> )}
          </section>
        </div>
      : <h1>No Quizzes</h1>
    );
  }
}

export default Quiz;
