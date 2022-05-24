import { quizQuestions } from './../Models/quizQuestions';
import { QuizQuestion } from './../Models/questionsInterfaces';
import { StateInterface } from './../Models/stateInterface';
import { act } from 'react-dom/test-utils';

type DataAction = 
    | { type: 'addIndex', payload: number }
    | { type: 'addAnswer', payload: QuizQuestion }
    | { type: 'addScoreCorrect', payload: number }
    | { type: 'addScoreIncorrect', payload: number }
    | { type: 'resetState', payload: StateInterface }

export const DataReducer = (state: StateInterface, action: DataAction): StateInterface =>{
    switch(action.type){
        case 'addIndex':
            return{
                ...state,
                index: action.payload
            }
            break;
        case 'addAnswer':
            return{
                ...state,
                quizQuestions: [...quizQuestions, quizQuestions[state.index] = action.payload],
            }
            break;
        case 'addScoreCorrect':
            return{
                ...state,
                correct: state.correct + action.payload
            }
            break;
        case 'addScoreIncorrect':
            return{
                ...state,
                incorrect: state.incorrect + action.payload
            }
            break;
        case 'resetState':
            return action.payload
            break;
        default:
            return state
    }
}