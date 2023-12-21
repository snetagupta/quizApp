import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <h1>Welcome to the Quiz App</h1>
      <p>Test your knowledge with our exciting quizzes!</p>
      <button className="btn" onClick={() => navigate("/questions")}>Start Quiz</button>
    </div>
  );
};

export default Home;
