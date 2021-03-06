import { useContext } from "react";
import { Link } from "react-router-dom";
import QuizHeader from "../Components/quizHeader";
import { DataContext } from "../Context/dataContext";

const ResumeQuiz = ()=>{

    const { dataState, resetState } = useContext(DataContext);
    const { quizQuestions, correct, incorrect } = dataState;

    const resetGame = ()=> resetState();

    return (
        <>
            <QuizHeader />
            {
                correct > incorrect
                ? <div className="bg-success p-4 rounded my-3">
                     <span>NOS SALVAMOS!!!</span>
                    </div>
                : <div className="bg-danger p-4 rounded my-3">
                    <span>FIN DE LA HUMANIDAD!!!</span>
                </div>
            }
            
            <div className="row d-flex justify-content-center bg-dark rounded text-white resumeGame mx-auto">
                
                    {
                        quizQuestions.map(question =>{ 
                            return (
                                <div key={question.id} className="my-3">
                                    <div>Pregunta {question.id}</div>
                                    <div>
                                        {
                                            question.success 
                                            ? <span>Tu respuesta fue la correcta: <span className="text-success fw-bold">{question.userAnswer}</span></span>
                                            : <span>Tu respuesta fue erronea: <span className="text-danger">{question.userAnswer}</span></span>
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                    <Link to={'/'} type="button" className="btn btn-light px-5 fw-bold my-4 w-auto" onClick={()=>resetGame()}>Volver a intentarlo</Link>
            </div>
            
        </>
    )
}

export default ResumeQuiz;