import React from "react";
import Answers from "./Answers";

const Questions = ({ questions }) => {
  const questionlist = questions.map(questions => {
    return (
      <div className="Questions" key={questions.id}>
        <div>
          {questions.id}. {questions.content}
        </div>
        <div>{questions.img}</div>
        <div />
      </div>
    );
  });
  return <div className="questions-list">{questionlist}</div>;
};

export default Questions;
