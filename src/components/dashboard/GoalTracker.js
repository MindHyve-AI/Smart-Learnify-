import React, { useState } from 'react';
import { FaChartLine, FaFlag, FaTrophy, FaPlus } from 'react-icons/fa';

const GoalTracker = () => {
  const [showGoalForm, setShowGoalForm] = useState(false);
  const [goalTitle, setGoalTitle] = useState('');
  const [goalDeadline, setGoalDeadline] = useState('');
  const [goalType, setGoalType] = useState('course');
  
  // Example goals - in a real app these would come from the database
  const [goals, setGoals] = useState([
    {
      id: 1,
      title: 'Complete Data Science Fundamentals',
      progress: 65,
      deadline: '2023-06-15',
      milestones: [
        { id: 1, title: 'Python Basics', completed: true },
        { id: 2, title: 'Data Visualization', completed: true },
        { id: 3, title: 'Statistical Analysis', completed: false },
        { id: 4, title: 'Machine Learning Intro', completed: false }
      ],
      type: 'course'
    },
    {
      id: 2,
      title: 'Pass MDCAT Biology Exam',
      progress: 40,
      deadline: '2023-07-20',
      milestones: [
        { id: 1, title: 'Cell Biology', completed: true },
        { id: 2, title: 'Genetics', completed: false },
        { id: 3, title: 'Human Physiology', completed: false },
        { id: 4, title: 'Ecology', completed: false }
      ],
      type: 'exam'
    }
  ]);

  const handleAddGoal = (e) => {
    e.preventDefault();
    
    if (!goalTitle || !goalDeadline) return;
    
    const newGoal = {
      id: Date.now(),
      title: goalTitle,
      progress: 0,
      deadline: goalDeadline,
      milestones: [],
      type: goalType
    };
    
    setGoals([...goals, newGoal]);
    setGoalTitle('');
    setGoalDeadline('');
    setShowGoalForm(false);
  };
  
  // Calculate days remaining
  const getDaysRemaining = (deadline) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };
  
  // Format deadline date
  const formatDeadline = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="goal-tracker">
      <div className="tracker-header">
        <h2><FaChartLine className="section-icon" /> Goal Trajectory Plan</h2>
        <button 
          className="btn btn-primary btn-sm"
          onClick={() => setShowGoalForm(!showGoalForm)}
        >
          {showGoalForm ? 'Cancel' : <><FaPlus /> Add Goal</>}
        </button>
      </div>
      
      {showGoalForm && (
        <div className="goal-form-container">
          <form onSubmit={handleAddGoal} className="goal-form">
            <div className="form-group">
              <label htmlFor="goalTitle">Goal Title</label>
              <input
                type="text"
                id="goalTitle"
                className="input-field"
                placeholder="e.g., Master Python Programming"
                value={goalTitle}
                onChange={(e) => setGoalTitle(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="goalType">Goal Type</label>
              <select
                id="goalType"
                className="input-field"
                value={goalType}
                onChange={(e) => setGoalType(e.target.value)}
              >
                <option value="course">Course Completion</option>
                <option value="exam">Exam Preparation</option>
                <option value="skill">Skill Acquisition</option>
                <option value="project">Project Completion</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="goalDeadline">Target Date</label>
              <input
                type="date"
                id="goalDeadline"
                className="input-field"
                value={goalDeadline}
                onChange={(e) => setGoalDeadline(e.target.value)}
                required
              />
            </div>
            
            <div className="form-actions">
              <button type="submit" className="btn btn-primary">
                Create Goal
              </button>
            </div>
          </form>
        </div>
      )}
      
      <div className="goals-container">
        {goals.map((goal) => (
          <div key={goal.id} className="goal-card">
            <div className="goal-card-header">
              <div className="goal-type-badge">{goal.type}</div>
              <div className="goal-deadline">
                Due: {formatDeadline(goal.deadline)}
                <span className="days-remaining">
                  {getDaysRemaining(goal.deadline)} days left
                </span>
              </div>
            </div>
            
            <h3 className="goal-title">{goal.title}</h3>
            
            <div className="goal-progress">
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${goal.progress}%` }}
                ></div>
                <div className="progress-marker" style={{ left: '25%' }}>
                  <div className="marker-dot"></div>
                  <span className="marker-label">25%</span>
                </div>
                <div className="progress-marker" style={{ left: '50%' }}>
                  <div className="marker-dot"></div>
                  <span className="marker-label">50%</span>
                </div>
                <div className="progress-marker" style={{ left: '75%' }}>
                  <div className="marker-dot"></div>
                  <span className="marker-label">75%</span>
                </div>
                <div className="progress-marker" style={{ left: '100%' }}>
                  <div className="marker-dot completed"></div>
                  <span className="marker-label">
                    <FaTrophy className="trophy-icon" />
                  </span>
                </div>
              </div>
              <div className="progress-percentage">{goal.progress}% Complete</div>
            </div>
            
            <div className="goal-milestones">
              <h4>Milestones</h4>
              <ul className="milestone-list">
                {goal.milestones.map((milestone) => (
                  <li 
                    key={milestone.id} 
                    className={milestone.completed ? 'completed' : ''}
                  >
                    <span className="milestone-checkbox">
                      {milestone.completed ? '✓' : '○'}
                    </span>
                    <span className="milestone-title">{milestone.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoalTracker; 