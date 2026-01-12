import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ErrorBoundary from './components/ErrorBoundary';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import LoadingSpinner from './components/LoadingSpinner';
import PageTitle from './components/PageTitle';
import './App.css';

// Lazy load components for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const FindWork = lazy(() => import('./pages/FindWork'));
const Hire = lazy(() => import('./pages/HireFreelancers'));

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <PageTitle />
        <ScrollToTop />
        <div className="App">
          <Navbar />
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/findwork" element={<FindWork />} />
              <Route path="/hire" element={<Hire />} />
            </Routes>
          </Suspense>
          <ScrollToTopButton />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
