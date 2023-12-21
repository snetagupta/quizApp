import React,{useState} from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import Result from './Components/Result';
import Questions from './Components/Questions';
import questionsDB from './Data';


const App = () => {
  const [questions, setQuestions] = useState(questionsDB)
  return (
    <Router>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/questions" element={<Questions questions = {questions} setQuestions = {setQuestions} />} />
       <Route path="/result" element={<Result questions = {questions} setQuestions = {setQuestions} />}/>
      </Routes>
    </Router>
  )
}

export default App