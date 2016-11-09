import React from 'react';

const Answer = (props) => {
  const { id, answers } = props;

  return(
    <article className="answers">
      <label>
        <input
          type="radio"
          id={id}
          name={id}
          value={answers.score}
        />
        {answers.title}
      </label>
    </article>
  );
};

export default Answer;