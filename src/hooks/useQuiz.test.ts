import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useQuiz } from './useQuiz';
import type { Question } from '../types';

const mockQuestions: Question[] = [
  { question: 'Q1', options: ['A) 1', 'B) 2', 'C) 3', 'D) 4'], answer: 'A' },
  { question: 'Q2', options: ['A) x', 'B) y', 'C) z', 'D) w'], answer: 'C' },
];

describe('useQuiz', () => {
  it('initializes with correct defaults', () => {
    const { result } = renderHook(() => useQuiz(mockQuestions));

    expect(result.current.currentQuestion).toBe(0);
    expect(result.current.selectedAnswers).toEqual({});
    expect(result.current.showResult).toBe(false);
    expect(result.current.score).toBe(0);
    expect(result.current.showAnswers).toBe(false);
    expect(result.current.isAllAnswered).toBe(false);
    expect(result.current.answeredQuestions).toEqual([false, false]);
  });

  it('handles answer selection', () => {
    const { result } = renderHook(() => useQuiz(mockQuestions));

    act(() => {
      result.current.handleAnswerSelect(0, 'A');
    });

    expect(result.current.selectedAnswers).toEqual({ 0: 'A' });
  });

  it('isAllAnswered returns true when all questions answered', () => {
    const { result } = renderHook(() => useQuiz(mockQuestions));

    act(() => {
      result.current.handleAnswerSelect(0, 'A');
      result.current.handleAnswerSelect(1, 'C');
    });

    expect(result.current.isAllAnswered).toBe(true);
  });

  it('calculates score correctly', () => {
    const { result } = renderHook(() => useQuiz(mockQuestions));

    act(() => {
      result.current.handleAnswerSelect(0, 'A');
      result.current.handleAnswerSelect(1, 'C');
    });

    act(() => {
      result.current.handleSubmit();
    });

    expect(result.current.score).toBe(2);
    expect(result.current.showResult).toBe(true);
    expect(result.current.showAnswers).toBe(true);
  });

  it('calculates partial score correctly', () => {
    const { result } = renderHook(() => useQuiz(mockQuestions));

    act(() => {
      result.current.handleAnswerSelect(0, 'B');
      result.current.handleAnswerSelect(1, 'C');
    });

    act(() => {
      result.current.handleSubmit();
    });

    expect(result.current.score).toBe(1);
  });

  it('restart resets all state', () => {
    const { result } = renderHook(() => useQuiz(mockQuestions));

    act(() => {
      result.current.handleAnswerSelect(0, 'A');
      result.current.handleAnswerSelect(1, 'C');
    });

    act(() => {
      result.current.handleSubmit();
    });

    act(() => {
      result.current.handleRestart();
    });

    expect(result.current.currentQuestion).toBe(0);
    expect(result.current.selectedAnswers).toEqual({});
    expect(result.current.showResult).toBe(false);
    expect(result.current.score).toBe(0);
    expect(result.current.showAnswers).toBe(false);
  });

  it('marks question as answered via markAsAnswered', () => {
    const { result } = renderHook(() => useQuiz(mockQuestions));

    act(() => {
      result.current.markAsAnswered(0);
    });

    expect(result.current.answeredQuestions).toEqual([true, false]);
  });

  it('setCurrentQuestion changes the current question', () => {
    const { result } = renderHook(() => useQuiz(mockQuestions));

    act(() => {
      result.current.setCurrentQuestion(1);
    });

    expect(result.current.currentQuestion).toBe(1);
  });

  it('getFeedbackMessage returns correct message for each score tier', () => {
    const { result } = renderHook(() => useQuiz(mockQuestions));

    expect(result.current.getFeedbackMessage(10)).toContain('Outstanding');
    expect(result.current.getFeedbackMessage(9)).toContain('Outstanding');
    expect(result.current.getFeedbackMessage(8)).toContain('Excellent');
    expect(result.current.getFeedbackMessage(7)).toContain('Excellent');
    expect(result.current.getFeedbackMessage(6)).toContain('Good');
    expect(result.current.getFeedbackMessage(5)).toContain('Good');
    expect(result.current.getFeedbackMessage(4)).toContain('Not bad');
    expect(result.current.getFeedbackMessage(3)).toContain('Not bad');
    expect(result.current.getFeedbackMessage(2)).toContain("Don't give up");
    expect(result.current.getFeedbackMessage(1)).toContain("Don't give up");
    expect(result.current.getFeedbackMessage(0)).toContain("Don't give up");
  });
});
