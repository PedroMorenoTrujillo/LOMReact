import { createContext } from "react";
import { QuizQuestion, StateInterface } from "../Models";

export type DataContextProps = {
    dataState: StateInterface,
    setAnswer: (answers: QuizQuestion) => void,
    setIndex: (index: number) => void,
    setScoreCorrect: (index: number) => void,
    setScoreIncorrect: (index: number) => void,
    resetState: ()=> void,
}


export const DataContext = createContext<DataContextProps>({} as DataContextProps);