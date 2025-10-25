import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { topics } from '../data/questions';

const Quiz = () => {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const topic = topics.find(t => t.id === topicId);
  const questions = topic?.questions || [];

  useEffect(() => {
    if (!topic) {
      navigate('/');
    }
  }, [topic, navigate]);

  const handleAnswerSelect = (questionIndex, answer) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionIndex]: answer
    }));
  };

  const [answeredQuestions, setAnsweredQuestions] = useState(Array(questions.length).fill(false));

  const markAsAnswered = (idx) => {
    setAnsweredQuestions(prev =>
      prev.map((val, i) => i === idx ? true : val)
    );
  };

  const handleSubmit = () => {
    let correctAnswers = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.answer) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
    setShowResult(true);
    setShowAnswers(true);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResult(false);
    setScore(0);
    setShowAnswers(false);
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  const getFeedbackMessage = (score) => {
    if (score >= 9) return "Outstanding! You're a true expert! 🌟";
    if (score >= 7) return "Excellent work! You know your stuff! 🎉";
    if (score >= 5) return "Good job! You're on the right track! 👍";
    if (score >= 3) return "Not bad! Keep learning and improving! 📚";
    return "Don't give up! Practice makes perfect! 💪";
  };

  const isAllAnswered = Object.keys(selectedAnswers).length === questions.length;

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
                <div className="d-flex gap-3 justify-content-center mt-4">
                  <button className="btn btn-primary" onClick={handleRestart}>
                    Try Again
                  </button>
                  <button className="btn btn-secondary" onClick={handleBackToHome}>
                    Back to Topics
                  </button>
                  
                </div>
                <div className="correct-answers">
                    <h4><br />Correct Answers:</h4>
                    <ul>
                      {questions.map((q, index) => (
                        <li key={index}>
                          Question {index + 1}: {q.question} Correct Answer: {q.options[q.options.findIndex(option => option.includes(q.answer))]} <hr/>
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
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="mb-0">{topic.name} Quiz</h2>
            </div>

           

<div className="question-number-indicator">
  {Array.from({ length: questions.length }).map((_, idx) => (
    <div
      key={idx}
      className={`question-number-indicator-item${answeredQuestions[idx] ? 'answered' : 'not-answered'}`}
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


            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
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
                  const optionLetter = option.split(')')[0];
                  const isSelected = selectedAnswers[currentQuestion] === optionLetter;
                  const isCorrect = optionLetter === questions[currentQuestion].answer;
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
                      onClick={() => handleAnswerSelect(currentQuestion, optionLetter)}
                      disabled={showAnswers}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
            
            <div className="d-flex justify-content-between">
              <button
                className="btn btn-outline-primary"
                onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                disabled={currentQuestion === 0}
              >
                ← Previous
              </button>
              
              {currentQuestion < questions.length - 1 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => setCurrentQuestion(currentQuestion + 1)}
                >
                  Next →
                </button>
              ) : (
                <button
                  className="btn btn-success"
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
