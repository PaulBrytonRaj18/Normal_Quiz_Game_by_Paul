const LoadingSkeleton = () => {
  return (
    <div className="quiz-container">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="quiz-header">
              <div className="skeleton-text skeleton-title" />
            </div>

            <div className="question-number-indicator-wrapper">
              <div className="question-number-indicator">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} className="skeleton-circle" />
                ))}
              </div>
            </div>

            <div className="skeleton-progress" />

            <div className="question-card" style={{ background: 'rgba(30,30,30,0.7)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '1.25rem', padding: '2rem' }}>
              <div className="skeleton-text skeleton-number" />
              <div className="skeleton-text skeleton-question" />
              <div className="skeleton-text skeleton-question skeleton-question-short" />

              <div style={{ marginTop: '1.5rem' }}>
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="skeleton-option" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
