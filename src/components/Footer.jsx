import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h5 className="mb-3">FeelingBored Quiz Game</h5>
            <p className="mb-2">
              Created with ❤️ by Paul Bryton Raj
            </p>
            <p className="mb-3">
              A fun and engaging way to test your knowledge across various topics
            </p>
            <div className="d-flex justify-content-center gap-4">
              <a href="mailto:paulbrytonraj18@gmail.com" className="text-decoration-none">
                📧 Contact
              </a>
              <a href="https://github.com/PaulBrytonRaj18" className="text-decoration-none" target="_blank" rel="noopener noreferrer">
                🐙 GitHub
              </a>
              <a href="https://linkedin.com/in/paul-bryton-raj" className="text-decoration-none" target="_blank" rel="noopener noreferrer">
                💼 LinkedIn
              </a>
            </div>
            <hr className="my-3" />
            <p className="small mb-0">
              © 2024 FeelingBored. Built with React & Bootstrap.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
