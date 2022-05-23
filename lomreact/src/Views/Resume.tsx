import { useContext } from "react";
import QuizHeader from "../Components/quizHeader";
import { DataContext } from "../Context/dataContext";

const ResumeQuiz = ()=>{

    const { dataState } = useContext(DataContext);
    const { quizQuestions } = dataState;


    return (
        <>
            <QuizHeader />
            <div className="row d-flex justify-content-center bg-dark rounded text-white">
                
                    {
                        quizQuestions.map(question =>{ 
                            return (
                                <div key={question.id} className="my-3">
                                    <div>Pregunta {question.id}</div>
                                    <div>
                                        {
                                            question.success 
                                            ? <span>Tu respuesta fue la correcta: <span className="text-success fw-bold">{question.userAnswer}</span></span>
                                            : null
                                        }
                                        {
                                            !question.success 
                                            ? <span>Tu respuesta fue erronea: <span className="text-danger">{question.userAnswer}</span></span>
                                            : null
                                        }
                                        
                                        
                                    </div>
                                </div>
                            )
                        
                        })
                    }
                    

            
        
            </div>
        </>
    )
}

export default ResumeQuiz;