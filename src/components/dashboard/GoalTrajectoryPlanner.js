import React, { useState } from 'react';
import { FaFlag, FaStar, FaCheckCircle, FaRegCircle, FaAngleRight, FaCalendarAlt, FaChartLine } from 'react-icons/fa';

const GoalTrajectoryPlanner = () => {
  const [activeGoal, setActiveGoal] = useState(0);
  
  // Mock goals data - in a real app this would come from an API/database
  const goals = [
    {
      id: 1,
      title: "Master React Fundamentals",
      description: "Build a solid foundation in React including components, state, props, and hooks",
      deadline: "June 15, 2025",
      progress: 65,
      milestones: [
        { id: 1, title: "Understand JSX and components", completed: true },
        { id: 2, title: "Master state and props", completed: true },
        { id: 3, title: "Learn hooks (useState, useEffect, etc.)", completed: true },
        { id: 4, title: "Build a simple React app from scratch", completed: false },
        { id: 5, title: "Implement context API for state management", completed: false }
      ],
      recommendations: [
        "Complete the 'React Hooks in Depth' course",
        "Practice by refactoring your project to use custom hooks"
      ],
      resources: [
        { title: "Official React Documentation", link: "#" },
        { title: "React Hooks Tutorial", link: "#" }
      ]
    },
    {
      id: 2,
      title: "Learn Node.js Backend",
      description: "Develop server-side applications with Node.js, Express, and MongoDB",
      deadline: "August 30, 2025",
      progress: 35,
      milestones: [
        { id: 1, title: "Set up a basic Express server", completed: true },
        { id: 2, title: "Create RESTful API endpoints", completed: true },
        { id: 3, title: "Connect to MongoDB database", completed: false },
        { id: 4, title: "Implement user authentication", completed: false },
        { id: 5, title: "Deploy a full-stack application", completed: false }
      ],
      recommendations: [
        "Focus on MongoDB aggregation pipeline next",
        "Consider learning about WebSockets for real-time features"
      ],
      resources: [
        { title: "Node.js & Express Course", link: "#" },
        { title: "MongoDB University Free Courses", link: "#" }
      ]
    },
    {
      id: 3,
      title: "Full Stack Capstone Project",
      description: "Build a complete web application integrating all learned technologies",
      deadline: "December 10, 2025",
      progress: 10,
      milestones: [
        { id: 1, title: "Define project requirements and user stories", completed: true },
        { id: 2, title: "Design database schema", completed: false },
        { id: 3, title: "Develop backend API", completed: false },
        { id: 4, title: "Create frontend UI", completed: false },
        { id: 5, title: "Deploy and present project", completed: false }
      ],
      recommendations: [
        "Start with a clear architectural design",
        "Consider implementing CI/CD for your deployment process"
      ],
      resources: [
        { title: "System Design Fundamentals", link: "#" },
        { title: "Project Management for Developers", link: "#" }
      ]
    }
  ];
  
  // Function to generate timeline based on goal progress
  const generateTimeline = (goal) => {
    const milestoneCount = goal.milestones.length;
    const completedCount = goal.milestones.filter(m => m.completed).length;
    const nextMilestone = goal.milestones.find(m => !m.completed);
    
    return (
      <div className="goal-timeline">
        <div className="timeline-progress" style={{ width: `${goal.progress}%` }}></div>
        <div className="timeline-markers">
          {goal.milestones.map((milestone, index) => (
            <div 
              key={milestone.id} 
              className={`timeline-marker ${milestone.completed ? 'completed' : ''}`}
              style={{ left: `${(index / (milestoneCount - 1)) * 100}%` }}
              title={milestone.title}
            >
              {milestone.completed ? <FaCheckCircle /> : <FaRegCircle />}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  return (
    <div className="goal-trajectory-planner">
      <div className="planner-header">
        <h3><FaFlag /> Goal Trajectory Planner</h3>
        <button className="add-goal-btn">+ New Goal</button>
      </div>
      
      <div className="goals-container">
        <div className="goals-list">
          {goals.map((goal, index) => (
            <div 
              key={goal.id}
              className={`goal-item ${index === activeGoal ? 'active' : ''}`}
              onClick={() => setActiveGoal(index)}
            >
              <div className="goal-item-header">
                <h4>{goal.title}</h4>
                <span className="goal-progress">{goal.progress}%</span>
              </div>
              <div className="goal-item-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${goal.progress}%` }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="goal-details">
          {goals[activeGoal] && (
            <>
              <div className="goal-detail-header">
                <h3>{goals[activeGoal].title}</h3>
                <div className="goal-deadline">
                  <FaCalendarAlt />
                  <span>Due by {goals[activeGoal].deadline}</span>
                </div>
              </div>
              
              <p className="goal-description">{goals[activeGoal].description}</p>
              
              <div className="goal-trajectory">
                <h4><FaChartLine /> Learning Trajectory</h4>
                {generateTimeline(goals[activeGoal])}
              </div>
              
              <div className="goal-milestones">
                <h4>Milestones</h4>
                <ul>
                  {goals[activeGoal].milestones.map(milestone => (
                    <li 
                      key={milestone.id} 
                      className={milestone.completed ? 'completed' : ''}
                    >
                      {milestone.completed ? <FaCheckCircle /> : <FaRegCircle />}
                      <span>{milestone.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="goal-recommendations">
                <h4><FaStar /> AI Recommendations</h4>
                <ul>
                  {goals[activeGoal].recommendations.map((rec, index) => (
                    <li key={index}>
                      <FaAngleRight />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="goal-resources">
                <h4>Recommended Resources</h4>
                <ul>
                  {goals[activeGoal].resources.map((resource, index) => (
                    <li key={index}>
                      <a href={resource.link}>{resource.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default GoalTrajectoryPlanner; 