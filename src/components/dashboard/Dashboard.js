import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import TodaysFocus from './TodaysFocus';
import GoalTrajectoryPlanner from './GoalTrajectoryPlanner';
import StudyProgressAnalytics from './StudyProgressAnalytics';
import AILearningAssistant from './AILearningAssistant';
import { FaChartLine, FaRobot, FaCalendarDay, FaFlag } from 'react-icons/fa';

const Dashboard = () => {
  const { currentUser } = useAuth();

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome, {currentUser?.displayName || 'Learner'}</h1>
        <p>Your AI-powered learning environment is ready to accelerate your progress.</p>
      </div>

      <div className="dashboard-layout">
        <div className="main-column">
          <section className="dashboard-section">
            <div className="section-header">
              <h2><FaCalendarDay /> Today's Focus</h2>
            </div>
            <TodaysFocus />
          </section>

          <section className="dashboard-section">
            <div className="section-header">
              <h2><FaFlag /> Goal Trajectory</h2>
            </div>
            <GoalTrajectoryPlanner />
          </section>

          <section className="dashboard-section">
            <div className="section-header">
              <h2><FaChartLine /> Learning Analytics</h2>
            </div>
            <StudyProgressAnalytics />
          </section>
        </div>

        <div className="side-column">
          <section className="dashboard-section full-height">
            <div className="section-header">
              <h2><FaRobot /> AI Learning Assistant</h2>
            </div>
            <AILearningAssistant />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 