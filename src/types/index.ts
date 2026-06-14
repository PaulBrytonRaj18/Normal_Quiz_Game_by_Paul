export interface Question {
  question: string;
  options: string[];
  answer: string;
}

export interface Topic {
  id: string;
  name: string;
  questions: Question[];
  icon: string;
}

export interface QuizState {
  currentQuestion: number;
  selectedAnswers: Record<number, string>;
  showResult: boolean;
  score: number;
  showAnswers: boolean;
  answeredQuestions: boolean[];
}

export type FeedbackLevel =
  | 'outstanding'
  | 'excellent'
  | 'good'
  | 'average'
  | 'poor';
