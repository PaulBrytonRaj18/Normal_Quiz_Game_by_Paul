const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 hero-content">
            <div className="rcb-badge">
              <span className="rcb-badge-dot"></span>
              Royal Challenge awaits
            </div>
            <h1 className="display-4 fw-bold mb-4">
              Test Your <span className="rcb-highlight">Knowledge</span>
              <br />
              Like a Champion
            </h1>
            <p className="lead mb-4">
              Step into the arena. From technology to sports, cinema to space — 
              conquer 9 thrilling topics and prove you have what it takes to be a challenger.
            </p>
            <div className="hero-features">
              <span className="hero-feature">🎯 10 Questions per Topic</span>
              <span className="hero-feature">⚡ Instant Results</span>
              <span className="hero-feature">🏆 Leader of the Pack</span>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <div className="hero-illustration">
              <div className="hero-emoji hero-emoji-large">
                🏏
              </div>
              <div className="hero-emoji hero-emoji-small">
                👑
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
