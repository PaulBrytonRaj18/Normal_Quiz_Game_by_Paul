import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContextProvider';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import GamesSection from './components/GamesSection';
import Quiz from './components/Quiz';
import Footer from './components/Footer';

function App() {
  console.log('App component is rendering!'); // Diagnostic log
  
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <GamesSection />
                <Footer />
              </>
            } />
            <Route path="/quiz/:topicId" element={<Quiz />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
