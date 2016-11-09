import React from 'react';

const Answers = (props) => {
  const { id, answers } = props;

  return(
    <article className="answers">
      <input
        type="radio"
        key={id}
        value={answers.title}
      /> {answers.title}
    </article>
  );
};

export default Answers;
