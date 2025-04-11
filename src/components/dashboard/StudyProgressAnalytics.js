import React, { useState } from 'react';
import { FaChartLine, FaCalendarAlt, FaClock, FaBook, FaMedal, FaTrophy, FaLightbulb } from 'react-icons/fa';

const StudyProgressAnalytics = () => {
  const [timeRange, setTimeRange] = useState('week'); // 'week', 'month', 'year'
  
  // Mock data - would come from API in a real implementation
  const analyticsData = {
    week: {
      studyTime: 12.5, // hours
      lessonsCompleted: 8,
      quizScores: [85, 90, 78, 92],
      strengths: ['Data Structures', 'Python Syntax'],
      areasToImprove: ['Algorithms', 'Database Design'],
      streakDays: 5,
      totalPoints: 860,
      dailyProgress: [
        { day: 'Mon', hours: 2.5, lessons: 2 },
        { day: 'Tue', hours: 1.5, lessons: 1 },
        { day: 'Wed', hours: 3.0, lessons: 2 },
        { day: 'Thu', hours: 2.0, lessons: 1 },
        { day: 'Fri', hours: 2.5, lessons: 2 },
        { day: 'Sat', hours: 1.0, lessons: 0 },
        { day: 'Sun', hours: 0, lessons: 0 },
      ]
    },
    month: {
      studyTime: 42.5,
      lessonsCompleted: 32,
      quizScores: [85, 90, 78, 92, 88, 76, 94, 81],
      strengths: ['Data Structures', 'Python Syntax', 'Web Development'],
      areasToImprove: ['Algorithms', 'Database Design', 'Security Concepts'],
      streakDays: 18,
      totalPoints: 3240,
      dailyProgress: [] // Simplified for this example
    },
    year: {
      studyTime: 520,
      lessonsCompleted: 385,
      quizScores: [85, 88, 90, 92, 86, 89, 91, 87, 84, 90, 93, 95],
      strengths: ['Data Structures', 'Python Syntax', 'Web Development', 'Cloud Computing'],
      areasToImprove: ['Algorithms', 'Database Design', 'Security Concepts', 'Mobile Development'],
      streakDays: 120, // longest streak
      totalPoints: 38500,
      dailyProgress: [] // Simplified for this example
    }
  };
  
  const data = analyticsData[timeRange];
  
  // Calculate average quiz score
  const avgQuizScore = data.quizScores.reduce((sum, score) => sum + score, 0) / data.quizScores.length;
  
  // Calculate max possible progress bar height
  const maxBarHeight = 100; // pixels
  const maxHoursInDay = 5; // for scaling

  const handleTimeRangeChange = (range) => {
    setTimeRange(range);
  };
  
  return (
    <div className="study-progress-analytics">
      <h3><FaChartLine /> Study Progress Analytics</h3>
      
      <div className="time-range-selector">
        <button 
          className={`time-btn ${timeRange === 'week' ? 'active' : ''}`}
          onClick={() => handleTimeRangeChange('week')}
        >
          This Week
        </button>
        <button 
          className={`time-btn ${timeRange === 'month' ? 'active' : ''}`}
          onClick={() => handleTimeRangeChange('month')}
        >
          This Month
        </button>
        <button 
          className={`time-btn ${timeRange === 'year' ? 'active' : ''}`}
          onClick={() => handleTimeRangeChange('year')}
        >
          This Year
        </button>
      </div>
      
      <div className="analytics-grid">
        <div className="analytics-card summary-card">
          <div className="analytics-value">{data.studyTime}h</div>
          <div className="analytics-label"><FaClock /> Total Study Time</div>
        </div>
        
        <div className="analytics-card summary-card">
          <div className="analytics-value">{data.lessonsCompleted}</div>
          <div className="analytics-label"><FaBook /> Lessons Completed</div>
        </div>
        
        <div className="analytics-card summary-card">
          <div className="analytics-value">{Math.round(avgQuizScore)}%</div>
          <div className="analytics-label"><FaMedal /> Avg. Quiz Score</div>
        </div>
        
        <div className="analytics-card summary-card">
          <div className="analytics-value">{data.streakDays} days</div>
          <div className="analytics-label"><FaTrophy /> Learning Streak</div>
        </div>
      </div>
      
      {timeRange === 'week' && (
        <div className="daily-progress-chart">
          <h4><FaCalendarAlt /> Daily Progress</h4>
          <div className="chart-container">
            {data.dailyProgress.map((day) => (
              <div key={day.day} className="day-column">
                <div className="bar-container">
                  <div 
                    className="progress-bar" 
                    style={{ 
                      height: `${(day.hours / maxHoursInDay) * maxBarHeight}px`,
                      backgroundColor: day.lessons > 0 ? 'var(--ai-primary)' : 'var(--ai-secondary)'
                    }}
                  ></div>
                </div>
                <div className="day-label">{day.day}</div>
                <div className="hours-label">{day.hours}h</div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="insights-container">
        <h4><FaLightbulb /> AI-Generated Insights</h4>
        
        <div className="insights-grid">
          <div className="insight-card strengths">
            <h5>Your Strengths</h5>
            <ul>
              {data.strengths.map((strength, index) => (
                <li key={index}>{strength}</li>
              ))}
            </ul>
          </div>
          
          <div className="insight-card improvements">
            <h5>Areas to Improve</h5>
            <ul>
              {data.areasToImprove.map((area, index) => (
                <li key={index}>{area}</li>
              ))}
            </ul>
          </div>
          
          <div className="insight-card recommendations">
            <h5>Recommended Next Steps</h5>
            <ol>
              <li>Focus on Algorithm challenges (matches your improvement area)</li>
              <li>Maintain your daily study streak for optimal learning</li>
              <li>Consider reviewing Database Design concepts</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyProgressAnalytics; 