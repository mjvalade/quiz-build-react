import React from 'react';
import Answers from './Answers';

const Question = (props) => {
  const { id, title, answers } = props;

  return(
    <section className="questions" key={id}>
      <h2 className="question-title">
        {title}
      </h2>

      {answers.map((answers, id) =>
        <Answers
          key={id}
          answers={answers}
        />
      )}
    </section>
  );
};

export default Question;
