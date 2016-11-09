import React from 'react';
import Answer from './Answer';

const Question = (props) => {
  const { id, title, answers } = props;

  return(
    <section className="questions" key={id}>
      <h2 className="question-title">
        {title}
      </h2>
      <form>
        {answers.map((answers, i) =>
          <Answer
            key={i}
            id={id}
            answers={answers}
          />
        )}
      </form>
    </section>
  );
};

export default Question;
