import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { topics } from '../data/questions';
import { useQuiz } from '../hooks/useQuiz';

const Quiz = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const navigate = useNavigate();

  const topic = topics.find((t) => t.id === topicId);
  const questions = topic?.questions ?? [];

  const {
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
  } = useQuiz(questions);

  useEffect(() => {
    if (!topic) {
      navigate('/');
    }
  }, [topic, navigate]);

  const handleBackToHome = (): void => {
    navigate('/');
  };

  if (!topic) {
    return (
      <div className="container text-center py-5">
        <h2>Topic not found</h2>
        <button className="btn btn-primary" onClick={handleBackToHome}>
          Back to Home
        </button>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="quiz-container">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="result-modal">
                <h2 className="mb-4">Quiz Complete!</h2>
                <div className="score-display">{score}/10</div>
                <p className="feedback-message">{getFeedbackMessage(score)}</p>
                <div className="result-buttons">
                  <button className="btn btn-primary result-btn" onClick={handleRestart}>
                    Try Again
                  </button>
                  <button
                    className="btn btn-secondary result-btn"
                    onClick={handleBackToHome}
                  >
                    Back to Topics
                  </button>
                </div>
              </div>
              <br />
              <div className="correct-answer">
                <div className="correct-answers">
                  <h4>
                    <br />
                    Correct Answers:
                  </h4>
                  <ul className="list-group">
                    {questions.map((q, index) => (
                      <li key={index} className="list-group-item">
                        Question {index + 1}: {q.question} <hr /> Correct
                        Answer:{' '}
                        {
                          q.options[
                            q.options.findIndex((option) =>
                              option.includes(q.answer),
                            )
                          ]
                        }
                      </li>
                    ))}
                  </ul>
                </div>
                <h4 className="mt-4">Hope you enjoyed the quiz!</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="quiz-header">
              <h2 className="quiz-title">{topic.name} Quiz</h2>
            </div>

            <div className="question-number-indicator-wrapper">
              <div className="question-number-indicator">
                {Array.from({ length: questions.length }).map((_, idx) => (
                  <div
                    key={idx}
                    className={`question-number-indicator-item ${answeredQuestions[idx] ? 'answered' : 'not-answered'}`}
                  >
                    <button
                      onClick={() => {
                        setCurrentQuestion(idx);
                        markAsAnswered(idx);
                      }}
                      className="question-number-btn"
                      aria-current={currentQuestion === idx}
                    >
                      {idx + 1}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                }}
              />
            </div>

            <div className="question-card">
              <div className="question-number">
                Question {currentQuestion + 1} of {questions.length}
              </div>
              <h3 className="question-text">
                {questions[currentQuestion]?.question}
              </h3>

              <div className="options-container">
                {questions[currentQuestion]?.options.map((option, index) => {
                  const optionLetter = option.split(')')[0] as string;
                  const isSelected =
                    selectedAnswers[currentQuestion] === optionLetter;
                  const isCorrect =
                    optionLetter === questions[currentQuestion]?.answer;
                  const isIncorrect = isSelected && !isCorrect;

                  let buttonClass = 'option-button';
                  if (showAnswers) {
                    if (isCorrect) buttonClass += ' correct';
                    if (isIncorrect) buttonClass += ' incorrect';
                  } else if (isSelected) {
                    buttonClass += ' selected';
                  }

                  return (
                    <button
                      key={index}
                      className={buttonClass}
                      onClick={() =>
                        handleAnswerSelect(currentQuestion, optionLetter)
                      }
                      disabled={showAnswers}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="quiz-navigation">
              <button
                className="btn btn-outline-primary quiz-nav-btn"
                onClick={() =>
                  setCurrentQuestion(Math.max(0, currentQuestion - 1))
                }
                disabled={currentQuestion === 0}
              >
                ← Previous
              </button>

              {currentQuestion < questions.length - 1 ? (
                <button
                  className="btn btn-primary quiz-nav-btn"
                  onClick={() => setCurrentQuestion(currentQuestion + 1)}
                >
                  Next →
                </button>
              ) : (
                <button
                  className="btn btn-success quiz-nav-btn"
                  onClick={handleSubmit}
                  disabled={!isAllAnswered}
                >
                  Submit Quiz
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
