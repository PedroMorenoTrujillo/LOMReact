import { useReducer } from "react"
import { QuizQuestion, quizQuestions, StateInterface } from "../Models"
import { DataContext } from "./dataContext"
import { DataReducer } from "./dataReducer"

interface Props{
    children: JSX.Element | JSX.Element[]
}


const INITIAL_STATE: StateInterface = {
    index: 0,
    quizQuestions: quizQuestions,
    correct: 0, 
    incorrect: 0,
}

export const DataProvider = ({children}: Props)=>{

    const [dataState, dispatch] = useReducer(DataReducer, INITIAL_STATE)

    const setAnswer = (answer: QuizQuestion)=> {
        dispatch({type: 'addAnswer', payload: answer })
    }

    const setIndex = (index: number)=> {
        dispatch({type: 'addIndex', payload: index })
    }

    const setScoreCorrect = (numb: number)=> {
        dispatch({type: 'addScoreCorrect', payload: numb })
    }

    const setScoreIncorrect = (numb: number)=> {
        dispatch({type: 'addScoreIncorrect', payload: numb })
    }

    const resetState = () =>{
        dispatch({type: 'resetState', payload: INITIAL_STATE})
    }

    return (
        <DataContext.Provider value={{
            dataState,
            setAnswer,
            setIndex,
            setScoreCorrect,
            setScoreIncorrect,
            resetState,
        }}>
            {children}
        </DataContext.Provider>
    )
}