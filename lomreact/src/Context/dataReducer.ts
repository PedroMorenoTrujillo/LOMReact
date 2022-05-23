import { quizQuestions } from './../Models/quizQuestions';
import { QuizQuestion } from './../Models/questionsInterfaces';
import { StateInterface } from './../Models/stateInterface';

type DataAction = 
    | { type: 'addIndex', payload: number }
    | { type: 'addAnswer', payload: QuizQuestion }

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
    
        default:
            return state
    }
}