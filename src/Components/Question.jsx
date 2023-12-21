import React from "react";

const Question = ({ question, setQuestions, questions }) => {
  
  const handleAnswer = (option,id) => {
    if (option === question.answer) {
      setQuestions(questions.map(que=> que.id === id ? {...que,status : true} : que ))  
    } else {
      setQuestions(questions.map(que=> que.id === id ? {...que,status : false} : que ))
    }
   
  };
  return (
    <div>
      <h3>{question.question}</h3>
      <ol>
        {question.options.map((option, i) => (
          <li key={i}>
          <input type="radio"  name={question.id} id={option} onClick={() => handleAnswer(option, question.id)}  />
          <label htmlFor={option}>{option}</label>
          </li> 

        ))}
      </ol>
    </div>
  );
};

export default Question;