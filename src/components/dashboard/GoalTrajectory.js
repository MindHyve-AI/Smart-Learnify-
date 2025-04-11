import React, { useState } from 'react';
import { FaFlag, FaTrophy, FaLock, FaCheck, FaArrowRight } from 'react-icons/fa';

const GoalTrajectory = () => {
  const [selectedGoal, setSelectedGoal] = useState('ai-mastery');
  const [currentMilestone, setCurrentMilestone] = useState(2); // 0-indexed, milestone 3 is active
  
  const goals = [
    { id: 'ai-mastery', name: 'AI Mastery', icon: '🤖', timeframe: '6 months' },
    { id: 'data-science', name: 'Data Science', icon: '📊', timeframe: '4 months' },
    { id: 'web-development', name: 'Web Development', icon: '🌐', timeframe: '3 months' },
  ];
  
  const milestones = {
    'ai-mastery': [
      { id: 1, name: 'AI Fundamentals', complete: true, description: 'Learn the basic concepts and history of AI' },
      { id: 2, name: 'Machine Learning Basics', complete: true, description: 'Understand supervised and unsupervised learning' },
      { id: 3, name: 'Neural Networks', complete: false, description: 'Master the architecture and training of neural networks', active: true },
      { id: 4, name: 'Deep Learning', complete: false, description: 'Explore CNN, RNN, and transformer architectures' },
      { id: 5, name: 'Advanced AI Applications', complete: false, description: 'Build complete AI solutions with advanced techniques' },
    ],
    'data-science': [
      { id: 1, name: 'Data Collection', complete: true, description: 'Learn methods for gathering and cleaning data' },
      { id: 2, name: 'Exploratory Analysis', complete: false, description: 'Visualize and analyze datasets', active: true },
      { id: 3, name: 'Statistical Methods', complete: false, description: 'Apply statistical techniques to extract insights' },
      { id: 4, name: 'Predictive Modeling', complete: false, description: 'Build models to predict outcomes from data' },
    ],
    'web-development': [
      { id: 1, name: 'HTML & CSS', complete: true, description: 'Master the fundamentals of web markup and styling' },
      { id: 2, name: 'JavaScript', complete: false, description: 'Learn programming for interactive web experiences', active: true },
      { id: 3, name: 'Frontend Frameworks', complete: false, description: 'Build applications with React or Angular' },
      { id: 4, name: 'Backend Development', complete: false, description: 'Create APIs and server-side applications' },
      { id: 5, name: 'Full Stack Deployment', complete: false, description: 'Deploy complete web applications' },
    ]
  };
  
  const activeMilestones = milestones[selectedGoal] || [];
  
  // Calculate overall progress percentage
  const completedCount = activeMilestones.filter(m => m.complete).length;
  const totalCount = activeMilestones.length;
  const progressPercentage = Math.round((completedCount / totalCount) * 100);
  
  const handleGoalClick = (goalId) => {
    setSelectedGoal(goalId);
  };
  
  const renderMilestoneStatus = (milestone, index) => {
    if (milestone.complete) {
      return <div className="milestone-status completed"><FaCheck /></div>;
    } else if (index === currentMilestone) {
      return <div className="milestone-status active"></div>;
    } else {
      return <div className="milestone-status locked"><FaLock /></div>;
    }
  };
  
  return (
    <div className="goal-trajectory">
      <h3><FaFlag /> Goal Trajectory Plan</h3>
      
      <div className="goal-selection">
        {goals.map((goal) => (
          <button 
            key={goal.id}
            className={`goal-tab ${selectedGoal === goal.id ? 'active' : ''}`}
            onClick={() => handleGoalClick(goal.id)}
          >
            <span className="goal-icon">{goal.icon}</span>
            <span className="goal-name">{goal.name}</span>
          </button>
        ))}
      </div>
      
      <div className="goal-details">
        <div className="goal-header">
          <h4>{goals.find(g => g.id === selectedGoal)?.name}</h4>
          <div className="goal-progress">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <span className="progress-text">{progressPercentage}% Complete</span>
          </div>
          <div className="goal-timeframe">
            Estimated completion: {goals.find(g => g.id === selectedGoal)?.timeframe}
          </div>
        </div>
        
        <div className="milestone-timeline">
          {activeMilestones.map((milestone, index) => (
            <div 
              key={milestone.id}
              className={`milestone ${milestone.complete ? 'completed' : ''} ${milestone.active ? 'active' : ''}`}
            >
              {renderMilestoneStatus(milestone, index)}
              <div className="milestone-content">
                <h5>{milestone.name}</h5>
                <p>{milestone.description}</p>
                {milestone.active && (
                  <button className="btn-primary btn-sm">Continue Learning <FaArrowRight /></button>
                )}
              </div>
              {index < activeMilestones.length - 1 && (
                <div className={`connector ${milestone.complete ? 'completed' : ''}`}></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="goal-actions">
          <button className="btn-outline btn-sm">Adjust Timeline</button>
          <button className="btn-outline btn-sm">Add Custom Milestone</button>
          {progressPercentage === 100 && (
            <button className="btn-success btn-sm">
              <FaTrophy /> Claim Completion Badge
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default GoalTrajectory; 