import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import '../App.css';

const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Transform Your Learning Journey with <span className="highlight">AI</span></h1>
          <p className="hero-subtitle">
            Experience adaptive learning powered by cutting-edge artificial intelligence.
            Smart Learnify personalizes your educational experience for maximum efficiency and retention.
          </p>
          <div className="cta-buttons">
            {!isAuthenticated ? (
              <>
                <Link to="/register" className="btn btn-primary">
                  Get Started
                </Link>
                <Link to="/login" className="btn btn-secondary">
                  Sign In
                </Link>
              </>
            ) : (
              <Link to="/dashboard" className="btn btn-primary">
                Go to Dashboard
              </Link>
            )}
          </div>
        </div>
        <div className="hero-image">
          {/* This could be replaced with an actual image */}
          <div className="ai-visualization"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Powered by Advanced AI</h2>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🧠</div>
            <h3>Adaptive Learning</h3>
            <p>Our neural networks analyze your learning patterns to customize content delivery specifically for you.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Neural Assessment</h3>
            <p>AI-driven assessments that evaluate not just what you know, but how you learn and where you can improve.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">📈</div>
            <h3>Smart Progress Tracking</h3>
            <p>Visualize your learning journey with detailed analytics and AI-generated insights.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Join thousands of learners evolving with AI</h2>
        <p>Start your enhanced learning experience today</p>
        {!isAuthenticated ? (
          <Link to="/register" className="btn btn-primary btn-large">
            Begin Your Journey
          </Link>
        ) : (
          <Link to="/dashboard" className="btn btn-primary btn-large">
            Continue Learning
          </Link>
        )}
      </section>
    </div>
  );
};

export default Home; 