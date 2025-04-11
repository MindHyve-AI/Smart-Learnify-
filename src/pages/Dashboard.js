import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import TodaysFocus from '../components/dashboard/TodaysFocus';
import GoalTracker from '../components/dashboard/GoalTracker';
import PerformanceAnalytics from '../components/dashboard/PerformanceAnalytics';
import StudyAssistant from '../components/dashboard/StudyAssistant';
import { FaChartBar, FaClock, FaFire } from 'react-icons/fa';

const Dashboard = () => {
  const { currentUser } = useAuth();

  return (
    <div className="container">
      <div className="dashboard-header">
        <h1>Welcome, {currentUser?.firstName || 'User'}</h1>
        <p className="dashboard-subtitle">Your AI learning assistant is ready</p>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-icon">
            <div className="pulse-container">
              <span className="pulse-dot"></span>
            </div>
          </div>
          <div className="stat-content">
            <h3 className="stat-value">75%</h3>
            <p className="stat-label">Learning Progress</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <div className="streak-icon"></div>
          </div>
          <div className="stat-content">
            <h3 className="stat-value">7 Days</h3>
            <p className="stat-label">Current Streak</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <div className="points-icon"></div>
          </div>
          <div className="stat-content">
            <h3 className="stat-value">1250</h3>
            <p className="stat-label">Knowledge Points</p>
          </div>
        </div>
      </div>

      {/* New Today's Focus Section */}
      <div className="dashboard-section">
        <TodaysFocus />
      </div>

      {/* New Goal Tracker Section */}
      <div className="dashboard-section">
        <GoalTracker />
      </div>

      {/* New Performance Analytics Section */}
      <div className="dashboard-section">
        <PerformanceAnalytics />
      </div>

      {/* New Study Assistant Section */}
      <div className="dashboard-section">
        <StudyAssistant />
      </div>

      <div className="dashboard-section">
        <h2>Recommended Courses</h2>
        <div className="courses-grid">
          <div className="course-card">
            <div className="course-header">
              <span className="course-badge">Recommended</span>
              <span className="course-level">Beginner</span>
            </div>
            <h3 className="course-title">Introduction to AI</h3>
            <p className="course-description">
              Learn the fundamentals of artificial intelligence and machine learning.
            </p>
            <div className="course-meta">
              <span className="course-duration">8 modules • 4 hours</span>
              <button className="btn btn-primary">Start Learning</button>
            </div>
          </div>

          <div className="course-card">
            <div className="course-header">
              <span className="course-badge">Popular</span>
              <span className="course-level">Intermediate</span>
            </div>
            <h3 className="course-title">Data Science Essentials</h3>
            <p className="course-description">
              Master the essential skills in data analysis and visualization.
            </p>
            <div className="course-meta">
              <span className="course-duration">12 modules • 6 hours</span>
              <button className="btn btn-primary">Start Learning</button>
            </div>
          </div>

          <div className="course-card">
            <div className="course-header">
              <span className="course-badge">New</span>
              <span className="course-level">Advanced</span>
            </div>
            <h3 className="course-title">Neural Networks Deep Dive</h3>
            <p className="course-description">
              Advanced concepts in neural networks and deep learning architectures.
            </p>
            <div className="course-meta">
              <span className="course-duration">15 modules • 8 hours</span>
              <button className="btn btn-primary">Start Learning</button>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-section">
        <h2>Continue Learning</h2>
        <div className="progress-cards">
          <div className="progress-card">
            <div className="progress-info">
              <h3 className="progress-title">Machine Learning Basics</h3>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '65%' }}></div>
              </div>
              <div className="progress-details">
                <span className="progress-percent">65% complete</span>
                <span className="progress-module">Module 6/10</span>
              </div>
            </div>
            <button className="btn btn-secondary">Resume</button>
          </div>

          <div className="progress-card">
            <div className="progress-info">
              <h3 className="progress-title">Python for Data Analysis</h3>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '30%' }}></div>
              </div>
              <div className="progress-details">
                <span className="progress-percent">30% complete</span>
                <span className="progress-module">Module 3/12</span>
              </div>
            </div>
            <button className="btn btn-secondary">Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 