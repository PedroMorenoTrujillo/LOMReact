import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Context/dataContext";
import { Answers, QuizQuestion } from "../Models";

interface Props {
    quizQuestion: QuizQuestion
}

const Quizcontainer = ({quizQuestion}: Props)=>{

    const { setAnswer, setIndex, setScoreCorrect, setScoreIncorrect } = useContext(DataContext);
    const [showAnswerCorrect, setShowAnswerCorrect] = useState<boolean>(false);
    const [showAnswerIncorrect, setShowAnswerIncorrect] = useState<boolean>(false);
    const [activeNextButton, setActiveNextButton] = useState<boolean>(false);
    const [incorrectAnswer, setIncorrectAnswer] = useState<string>('')
    const [inputTextValue, setInputTextValue] = useState<string>('')
    const correctAnswer: string = 'La respuesta es correcta';
    const incorrectString: string = 'La respuesta es incorrecta. La respuesta correcta es: '

    const answerQuestion = (answer: Answers, type: string): void => {
        resetValues();
        setActiveNextButton(true);
        if(type === 'select'){
            checkSelect(answer);
        }else{
            checkInput(answer)
        }
        setAnswer(quizQuestion);
    }

    const checkSelect = (answer: Answers): void =>{
        if(answer.correct){
          setShowAnswerCorrect(true);
          quizQuestion.success = true;
          quizQuestion.userAnswer = answer.answer
          setScoreCorrect(1)
        }else{
          quizQuestion.userAnswer = answer.answer;
          let correct = quizQuestion.answers.find(answer => answer.correct)
          setIncorrectAnswer(correct?.answer ?? '');
          setShowAnswerIncorrect(true);
          setScoreIncorrect(1)
        }
      }
    
    const checkInput = (answer: Answers): void => {
        if(inputTextValue?.toLowerCase() === answer.answer.toLowerCase()){
            setShowAnswerCorrect(true);
            quizQuestion.success = true;
            quizQuestion.userAnswer = answer.answer
            setScoreCorrect(1)
        }else{
          let correct = quizQuestion.answers.find(answer => answer.correct)
          setIncorrectAnswer(correct?.answer ?? '');
          setShowAnswerIncorrect(true);
          setScoreIncorrect(1)
          quizQuestion.userAnswer = inputTextValue === '' ? 'No respondiste': inputTextValue;
        }
      }

    const nextQuestion = () => {
        setIndex(quizQuestion.id);
        setActiveNextButton(false);
        setInputTextValue('');
        resetValues()
    }

    const resetValues = ()=>{
        setShowAnswerCorrect(false);
        setShowAnswerIncorrect(false);
        setIncorrectAnswer('');
    }

    return (
        <>
            <div className="row bg-dark rounded text-white mt-5 centerContainer mx-auto">
                <div className="questionNumber my-3">Pregunta {quizQuestion.id}</div>
                <div>
                    <h5>{quizQuestion.question}</h5>
                    <div className="d-flex flex-wrap justify-content-center py-3">
                        {
                            quizQuestion.type === 'select' 
                            ?                               
                                quizQuestion.answers.map(answer => 
                                    <button type="button"
                                        className="btn btn-primary my-3 w-75 fw-bold"
                                        key={answer.id}
                                        onClick={()=> answerQuestion(answer, quizQuestion.type)}
                                        disabled={showAnswerCorrect || showAnswerIncorrect}
                                        >{answer.answer}
                                        </button>
                                )
                                
                            : <>
                                <input type="text"
                                    value={inputTextValue}
                                    onChange={(e) => setInputTextValue(e.target.value)} /><button type="button"
                                        className="btn btn-primary my-3 w-75 fw-bold"
                                        onClick={() => answerQuestion(quizQuestion.answers[0], quizQuestion.type)}
                                        disabled={activeNextButton}>
                                        Comprobar!!</button>
                                </>
                        }
                        {
                            showAnswerCorrect
                                ? <span className="showAnswerQuestion text-success fw-bold">{correctAnswer}</span>
                                : null
                        }
                        {
                            showAnswerIncorrect
                                ? <span className="showAnswerQuestion incorrect">{incorrectString}<span className="text-danger fw-bold">{incorrectAnswer}</span></span>
                                : null
                        }
                    </div>

                </div>
            </div>
            {
               quizQuestion.id < 10 && activeNextButton
               ? <button type="button" className="btn btn-light px-5 fw-bold mt-2 mb-4" onClick={()=>nextQuestion()}>Siguiente!!</button> : null 
            }
            {
               quizQuestion.id === 10 && activeNextButton
               ? <Link type="button" className="btn btn-light px-5 fw-bold mt-2 mb-4" to={'/resume'}>Ver Resultados!!</Link> : null 
            }
            
        </>
    )
}

export default Quizcontainer;

