import React from 'react';
import { useNavigate } from 'react-router-dom';
import { topics } from '../data/questions';

const GamesSection = () => {
  const navigate = useNavigate();

  const handleTopicClick = (topicId) => {
    navigate(`/quiz/${topicId}`);
  };

  return (
    <section className="games-section">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Choose Your Challenge</h2>
            <p className="lead ">
              Select any topic below to start your quiz adventure!
            </p>
          </div>
        </div>
        
        <div className="row g-4">
          {topics.map((topic) => (
            <div key={topic.id} className="col-lg-4 col-md-6 col-sm-6">
              <div 
                className="card topic-card"
                onClick={() => handleTopicClick(topic.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleTopicClick(topic.id);
                  }
                }}
                aria-label={`Start ${topic.name} quiz`}
              >
                <div className="topic-icon">{topic.icon}</div>
                <h3 className="topic-name">{topic.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
