import { QuizQuestion } from "./questionsInterfaces";

export interface StateInterface {
    index: number,
    quizQuestions: QuizQuestion[],
    correct: number, 
    incorrect: number
}