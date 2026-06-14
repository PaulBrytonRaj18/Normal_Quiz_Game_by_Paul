import { useState, useCallback, useMemo } from 'react';
import type { Question } from '../types';

interface UseQuizReturn {
  currentQuestion: number;
  selectedAnswers: Record<number, string>;
  showResult: boolean;
  score: number;
  showAnswers: boolean;
  answeredQuestions: boolean[];
  isAllAnswered: boolean;
  setCurrentQuestion: (index: number) => void;
  handleAnswerSelect: (questionIndex: number, answer: string) => void;
  handleSubmit: () => void;
  handleRestart: () => void;
  markAsAnswered: (idx: number) => void;
  getFeedbackMessage: (score: number) => string;
}

export const useQuiz = (questions: Question[]): UseQuizReturn => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [showAnswers, setShowAnswers] = useState<boolean>(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(
    () => Array(questions.length).fill(false),
  );

  const handleAnswerSelect = useCallback((questionIndex: number, answer: string): void => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: answer,
    }));
  }, []);

  const markAsAnswered = useCallback((idx: number): void => {
    setAnsweredQuestions((prev) =>
      prev.map((val, i) => (i === idx ? true : val)),
    );
  }, []);

  const handleSubmit = useCallback((): void => {
    let correctAnswers = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.answer) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
    setShowResult(true);
    setShowAnswers(true);
  }, [questions, selectedAnswers]);

  const handleRestart = useCallback((): void => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResult(false);
    setScore(0);
    setShowAnswers(false);
    setAnsweredQuestions(Array(questions.length).fill(false));
  }, [questions.length]);

  const isAllAnswered = useMemo(
    () => Object.keys(selectedAnswers).length === questions.length,
    [selectedAnswers, questions.length],
  );

  const getFeedbackMessage = useCallback((score: number): string => {
    if (score >= 9) return "Outstanding! You're a true expert! 🌟";
    if (score >= 7) return "Excellent work! You know your stuff! 🎉";
    if (score >= 5) return "Good job! You're on the right track! 👍";
    if (score >= 3) return "Not bad! Keep learning and improving! 📚";
    return "Don't give up! Practice makes perfect! 💪";
  }, []);

  return {
    currentQuestion,
    selectedAnswers,
    showResult,
    score,
    showAnswers,
    answeredQuestions,
    isAllAnswered,
    setCurrentQuestion,
    handleAnswerSelect,
    handleSubmit,
    handleRestart,
    markAsAnswered,
    getFeedbackMessage,
  };
};
