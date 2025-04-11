import React from 'react';
import { FaChartBar, FaRegClock, FaFire, FaArrowUp, FaArrowDown } from 'react-icons/fa';

const PerformanceAnalytics = () => {
  // Example performance data - in a real app, this would come from the database
  const subjects = [
    {
      id: 1,
      name: 'Mathematics',
      mastery: 78,
      trend: 'up',
      concepts: [
        { id: 1, name: 'Algebra', mastery: 85 },
        { id: 2, name: 'Calculus', mastery: 72 },
        { id: 3, name: 'Geometry', mastery: 65 },
        { id: 4, name: 'Statistics', mastery: 90 }
      ],
      timeSpent: 24 // hours
    },
    {
      id: 2,
      name: 'Physics',
      mastery: 65,
      trend: 'up',
      concepts: [
        { id: 1, name: 'Mechanics', mastery: 75 },
        { id: 2, name: 'Thermodynamics', mastery: 60 },
        { id: 3, name: 'Electromagnetics', mastery: 45 },
        { id: 4, name: 'Quantum Mechanics', mastery: 30 }
      ],
      timeSpent: 18 // hours
    },
    {
      id: 3,
      name: 'Biology',
      mastery: 82,
      trend: 'down',
      concepts: [
        { id: 1, name: 'Cell Biology', mastery: 90 },
        { id: 2, name: 'Genetics', mastery: 85 },
        { id: 3, name: 'Ecology', mastery: 75 },
        { id: 4, name: 'Evolution', mastery: 78 }
      ],
      timeSpent: 22 // hours
    }
  ];
  
  const strengthsAndWeaknesses = [
    { id: 1, type: 'strength', concept: 'Statistical Analysis', subject: 'Mathematics' },
    { id: 2, type: 'strength', concept: 'Cell Biology', subject: 'Biology' },
    { id: 3, type: 'weakness', concept: 'Electromagnetics', subject: 'Physics' },
    { id: 4, type: 'weakness', concept: 'Quantum Mechanics', subject: 'Physics' }
  ];
  
  const totalStudyTime = subjects.reduce((acc, subject) => acc + subject.timeSpent, 0);
  
  // Function to determine color based on mastery level
  const getMasteryColor = (mastery) => {
    if (mastery >= 80) return 'high-mastery';
    if (mastery >= 60) return 'medium-mastery';
    return 'low-mastery';
  };

  return (
    <div className="performance-analytics">
      <div className="analytics-header">
        <h2><FaChartBar className="section-icon" /> Performance Tracker</h2>
      </div>
      
      <div className="analytics-overview">
        <div className="overview-card">
          <div className="overview-icon">
            <FaFire />
          </div>
          <div className="overview-details">
            <h3>Overall Mastery</h3>
            <div className="overview-value">
              {Math.round(subjects.reduce((acc, subject) => acc + subject.mastery, 0) / subjects.length)}%
            </div>
          </div>
        </div>
        
        <div className="overview-card">
          <div className="overview-icon">
            <FaRegClock />
          </div>
          <div className="overview-details">
            <h3>Total Study Time</h3>
            <div className="overview-value">{totalStudyTime} hours</div>
          </div>
        </div>
      </div>
      
      <div className="subjects-mastery">
        <h3>Subject Mastery</h3>
        {subjects.map((subject) => (
          <div key={subject.id} className="subject-card">
            <div className="subject-header">
              <h4>{subject.name}</h4>
              <div className="subject-trend">
                {subject.trend === 'up' ? (
                  <FaArrowUp className="trend-up" />
                ) : (
                  <FaArrowDown className="trend-down" />
                )}
              </div>
            </div>
            
            <div className="subject-mastery-bar">
              <div 
                className={`mastery-fill ${getMasteryColor(subject.mastery)}`}
                style={{ width: `${subject.mastery}%` }}
              ></div>
              <span className="mastery-percentage">{subject.mastery}%</span>
            </div>
            
            <div className="concept-mastery">
              {subject.concepts.map((concept) => (
                <div key={concept.id} className="concept-item">
                  <div className="concept-name">{concept.name}</div>
                  <div className="concept-progress">
                    <div 
                      className={`concept-progress-fill ${getMasteryColor(concept.mastery)}`} 
                      style={{ width: `${concept.mastery}%` }}
                    ></div>
                    <span className="concept-percentage">{concept.mastery}%</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="subject-time">
              <FaRegClock className="time-icon" />
              <span>{subject.timeSpent} hours</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="strengths-weaknesses">
        <h3>Strengths & Areas for Improvement</h3>
        <div className="sw-container">
          <div className="sw-column">
            <h4>Strengths</h4>
            <ul className="sw-list">
              {strengthsAndWeaknesses
                .filter(item => item.type === 'strength')
                .map(item => (
                  <li key={item.id} className="strength-item">
                    <strong>{item.concept}</strong>
                    <span className="sw-subject">{item.subject}</span>
                  </li>
                ))
              }
            </ul>
          </div>
          
          <div className="sw-column">
            <h4>Areas for Improvement</h4>
            <ul className="sw-list">
              {strengthsAndWeaknesses
                .filter(item => item.type === 'weakness')
                .map(item => (
                  <li key={item.id} className="weakness-item">
                    <strong>{item.concept}</strong>
                    <span className="sw-subject">{item.subject}</span>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceAnalytics; 