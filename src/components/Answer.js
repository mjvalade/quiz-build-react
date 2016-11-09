import React from 'react';

const Answer = (props) => {
  const { id, answer } = props;

  return(
    <article className="answers">
      <label>
        <input
          type="radio"
          name={id}
          value={answer.score}
          onClick={(e) => props.handleClick(answer.score)}
        />
        {answer.title}
      </label>
    </article>
  );
};

export default Answer;
