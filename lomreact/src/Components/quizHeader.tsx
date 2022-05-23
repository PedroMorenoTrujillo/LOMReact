
import { useContext } from "react";
import { DataContext } from "../Context/dataContext";

const QuizHeader = ()=>{

    const { dataState } = useContext(DataContext);
    const { correct, incorrect } = dataState;

    return(
        <div className="bg-dark w-100 px-0 mx-0 text-white d-flex justify-content-around header">
            <div className="bg-success py-3 px-5">Correct: {correct}</div>
            <div className="bg-danger py-3 px-5">Incorrect: {incorrect}</div>
        </div>

    )
}

export default QuizHeader;