import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSkeleton from './components/LoadingSkeleton';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import GamesSection from './components/GamesSection';
import Footer from './components/Footer';

const Quiz = lazy(() => import('./components/Quiz'));

function App() {
  return (
    <Router>
      <ErrorBoundary>
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
            <Route path="/quiz/:topicId" element={
              <Suspense fallback={<LoadingSkeleton />}>
                <Quiz />
              </Suspense>
            } />
          </Routes>
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
