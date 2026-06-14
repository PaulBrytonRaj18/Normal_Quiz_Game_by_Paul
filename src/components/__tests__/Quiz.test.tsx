import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Quiz from '../Quiz';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => vi.fn(),
  };
});

const renderQuiz = (topicId: string) =>
  render(
    <MemoryRouter initialEntries={[`/quiz/${topicId}`]}>
      <Routes>
        <Route path="/quiz/:topicId" element={<Quiz />} />
      </Routes>
    </MemoryRouter>
  );

describe('Quiz', () => {
  it('shows topic not found for invalid topicId', () => {
    renderQuiz('invalid-topic');
    expect(screen.getByText('Topic not found')).toBeInTheDocument();
    expect(screen.getByText('Back to Home')).toBeInTheDocument();
  });

  it('renders quiz title for valid topic', () => {
    renderQuiz('cricket');
    expect(screen.getByText('Cricket Quiz')).toBeInTheDocument();
  });

  it('renders the first question', () => {
    renderQuiz('technology');
    expect(screen.getByText('Question 1 of 10')).toBeInTheDocument();
    expect(screen.getByText('What does HTTP stand for?')).toBeInTheDocument();
  });

  it('navigates to next question on Next click', async () => {
    const user = userEvent.setup();
    renderQuiz('technology');

    await user.click(screen.getByText('Next →'));
    expect(screen.getByText('Question 2 of 10')).toBeInTheDocument();
  });

  it('disables Previous button on first question', () => {
    renderQuiz('football');
    expect(screen.getByText('← Previous')).toBeDisabled();
  });

  it('Submit is disabled until all questions answered', async () => {
    const user = userEvent.setup();
    renderQuiz('space');

    for (let i = 0; i < 9; i++) {
      await user.click(screen.getByText('Next →'));
    }

    const submitBtn = screen.getByText('Submit Quiz');
    expect(submitBtn).toBeDisabled();
  });

  it('shows score after quiz submission', async () => {
    const user = userEvent.setup();
    renderQuiz('football');

    for (let i = 0; i < 9; i++) {
      const options = screen.getAllByRole('button', { name: /^[A-D]\) / });
      await user.click(options[0]);
      await user.click(screen.getByText('Next →'));
    }

    const options = screen.getAllByRole('button', { name: /^[A-D]\) / });
    await user.click(options[0]);
    await user.click(screen.getByText('Submit Quiz'));

    expect(screen.getByText(/Quiz Complete/)).toBeInTheDocument();
    expect(screen.getByText(/\/10/)).toBeInTheDocument();
  });
});
