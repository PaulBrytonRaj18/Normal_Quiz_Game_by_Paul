const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h5 className="mb-3">
              <span className="text-danger">Feeling</span>
              <span className="text-warning">Bored</span>
              <span style={{ color: 'var(--rcb-gold)', marginLeft: '0.25rem' }}>Quiz</span>
            </h5>
            <p className="mb-2">
              Created with ❤️ by Paul Bryton Raj
            </p>
            <p className="mb-3">
              Play like a champion. Challenge yourself across every topic.
            </p>
            <div className="footer-links">
              <a href="mailto:paulbrytonraj18@gmail.com" className="footer-link">
                📧 Contact
              </a>
              <a href="https://github.com/PaulBrytonRaj18" className="footer-link" target="_blank" rel="noopener noreferrer">
                🐙 GitHub
              </a>
              <a href="https://linkedin.com/in/paul-bryton-raj" className="footer-link" target="_blank" rel="noopener noreferrer">
                💼 LinkedIn
              </a>
            </div>
            <hr className="my-3" />
            <p className="small mb-0">
              &copy; {currentYear} FeelingBored. Built with React & Bootstrap. RCB inspired.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
