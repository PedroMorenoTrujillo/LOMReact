import { createContext } from "react";
import { QuizQuestion, StateInterface } from "../Models";

export type DataContextProps = {
    dataState: StateInterface,
    setAnswer: (answers: QuizQuestion) => void,
    setIndex: (index: number) => void
}


export const DataContext = createContext<DataContextProps>({} as DataContextProps);