import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 hero-content">
            <h1 className="display-4 fw-bold mb-4">
              Challenge Your Knowledge!
            </h1>
            <p className="lead mb-4">
              Test your skills across 9 exciting topics. From technology to sports, 
              cinema to space - discover how much you really know!
            </p>
            <p className="h5 mb-0">
              🎯 10 Questions per Topic • ⚡ Instant Results • 🏆 Fun & Engaging
            </p>
          </div>
          <div className="col-lg-6 text-center">
            <div className="hero-illustration">
              <div style={{ fontSize: '8rem', opacity: 0.8 }}>
                🧠
              </div>
              <div style={{ fontSize: '6rem', opacity: 0.6, marginTop: '-2rem' }}>
                🎮
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
