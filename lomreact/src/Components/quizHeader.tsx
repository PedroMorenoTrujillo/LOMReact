import { useState } from "react";
import { QuizResults } from "../Models";

const QuizHeader = ()=>{

    const [result, setResult] = useState<QuizResults>({correct: 0, incorrect: 0})

    return(
        <div className="bg-dark w-100 px-0 mx-0 text-white d-flex justify-content-around header">
            <div className="bg-success py-3 px-5">Correct: {result.correct}</div>
            <div className="bg-danger py-3 px-5">Incorrect: {result.incorrect}</div>
        </div>

    )
}

export default QuizHeader;