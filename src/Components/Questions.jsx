import React, { useState } from "react";
import Question from "./Question";
import { useNavigate } from "react-router-dom";


export function Questions({questions,setQuestions}) {
    const navigate = useNavigate()
  const handleSubmit = () => {
    navigate("/result")
  };
  
  return (
    <div className="App">
      {questions.map((question) => (
        <Question question={question} key={question.id} setQuestions={setQuestions} questions={questions}/>
      ))}
      <button className="btn" onClick={handleSubmit}>Submit</button>
      
    </div>
  );
}
export default Questions;