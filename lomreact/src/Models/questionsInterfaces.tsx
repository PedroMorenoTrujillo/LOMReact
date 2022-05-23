export interface QuizQuestion{
    question: string,
    answers: Answers[],
    id: number,
    type: string,
    success: boolean,
    userAnswer: string,
}

export interface Answers{
    answer: string,
    correct: boolean,
    id: number
}
