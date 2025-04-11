import React from 'react';
import { FaCheckCircle, FaBrain, FaCalendarDay, FaBolt, FaLightbulb } from 'react-icons/fa';

const TodaysFocus = () => {
  // Mock data - In a real app, this would come from API
  const todayTopics = [
    {
      id: 1,
      title: "Neural Networks Architecture",
      estimatedTime: 45,
      priority: "high",
      completed: false,
      subject: "Machine Learning"
    },
    {
      id: 2, 
      title: "Supervised vs Unsupervised Learning",
      estimatedTime: 30,
      priority: "medium",
      completed: true,
      subject: "Machine Learning"
    },
    {
      id: 3,
      title: "Data Preprocessing Techniques",
      estimatedTime: 60,
      priority: "high",
      completed: false,
      subject: "Data Science"
    }
  ];
  
  const dailyGoal = {
    total: 180, // minutes
    completed: 95, // minutes
  };

  const calculateProgress = () => {
    return Math.min(100, Math.round((dailyGoal.completed / dailyGoal.total) * 100));
  };

  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    
    if (hours > 0) {
      return `${hours}h ${mins > 0 ? mins + 'm' : ''}`;
    }
    return `${mins}m`;
  };

  const renderPriorityIndicator = (priority) => {
    let className = "priority-indicator ";
    
    switch (priority) {
      case "high":
        className += "high";
        break;
      case "medium":
        className += "medium";
        break;
      default:
        className += "low";
    }
    
    return <span className={className}></span>;
  };
  
  return (
    <div className="todays-focus">
      <div className="section-header">
        <h2><FaCalendarDay className="section-icon" /> Today's Focus</h2>
      </div>
      
      <div className="daily-goal-tracker">
        <div className="goal-info">
          <div className="goal-title">
            <FaBolt className="goal-icon" />
            <h3>Daily Study Goal</h3>
          </div>
          <p>{formatTime(dailyGoal.completed)} of {formatTime(dailyGoal.total)}</p>
        </div>
        
        <div className="progress-container">
          <div 
            className="progress-bar" 
            style={{ width: `${calculateProgress()}%` }}
          ></div>
        </div>
        
        <div className="progress-percentage">
          {calculateProgress()}%
        </div>
      </div>
      
      <div className="recommended-topics">
        <h3><FaLightbulb className="list-icon" /> Recommended Topics</h3>
        
        <ul className="topic-list">
          {todayTopics.map((topic) => (
            <li key={topic.id} className={`topic-item ${topic.completed ? 'completed' : ''}`}>
              <div className="topic-checkbox">
                {topic.completed ? (
                  <FaCheckCircle className="check-icon completed" />
                ) : (
                  <div className="check-circle"></div>
                )}
              </div>
              
              <div className="topic-content">
                <div className="topic-header">
                  {renderPriorityIndicator(topic.priority)}
                  <h4 className="topic-title">{topic.title}</h4>
                </div>
                <div className="topic-details">
                  <span className="topic-subject">{topic.subject}</span>
                  <span className="topic-time">{formatTime(topic.estimatedTime)}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="focus-tip">
        <FaBrain className="tip-icon" />
        <p>Focusing on neural networks today will help you understand the upcoming deep learning concepts more effectively.</p>
      </div>
    </div>
  );
};

export default TodaysFocus; 