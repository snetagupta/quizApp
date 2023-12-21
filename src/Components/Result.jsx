import React from 'react';
import { useNavigate } from 'react-router-dom';


const Result = ({questions}) => {
  const navigate = useNavigate()
    let skipped = questions.filter(que => que.status === "skip").length
    let right = questions.filter(que => que.status === true).length
    let wrong = questions.filter(que => que.status === false).length
    console.log(skipped,right,wrong)

  return (

    <div>
         <p className="result">{`Skipped questions: ${skipped}`}</p>
         <p className="result">{`Right Answer: ${right}`}</p>
         <p className="result">{`Wrong Answer: ${wrong}`}</p>
    <button className="btn" onClick={()=> navigate("/")}>Home</button>
    </div>
  )
}

export default Result;