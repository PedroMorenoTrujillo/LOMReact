import { useContext } from "react";
import Quizcontainer from "../Components/quizContainer";
import QuizHeader from "../Components/quizHeader";
import { DataContext } from "../Context/dataContext";

const Quiz = ()=>{

    const { dataState, setIndex } = useContext(DataContext);
    const{ index, quizQuestions } = dataState;

    


    return (
        <>
            <QuizHeader />
            <Quizcontainer quizQuestion={quizQuestions[index]} />
        </>
    )
}

export default Quiz;


