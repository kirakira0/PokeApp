import React from 'react';

const Display = ({ questions }) => {
    const questionlist = questions.map(questions => {
      return (
        <div className="Display" key={questions.id}>
          <div>
            {questions.id}. {questions.content}
          </div>
          <div>{questions.img}</div>
          <div>
            <button>{questions.answers[0].content}</button>
          </div>
          <div>
            <button>{questions.answers[1].content}</button>
          </div>
          <div>
            <button>{questions.answers[2].content}</button>
          </div>
        </div>
      );
    });
    return <div className="questions-list">{questionlist}</div>;
  };
  
  export default Display;