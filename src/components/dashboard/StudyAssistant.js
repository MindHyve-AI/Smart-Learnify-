import React, { useState } from 'react';
import { FaRobot, FaBook, FaQuestion, FaLightbulb, FaChartPie, FaPuzzlePiece, FaPaperPlane } from 'react-icons/fa';

const StudyAssistant = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'assistant',
      text: 'Hello! I\'m your AI Study Assistant. How can I help you with your learning today?'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      sender: 'user',
      text: inputValue.trim()
    };
    
    setMessages([...messages, userMessage]);
    setInputValue('');
    setIsTyping(true);
    
    // Simulate AI response after a delay
    setTimeout(() => {
      generateResponse(inputValue.trim());
      setIsTyping(false);
    }, 1500);
  };

  const generateResponse = (query) => {
    // This is a simple simulation - in a real app, this would call an API
    let response;
    
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes('hello') || lowerQuery.includes('hi')) {
      response = 'Hello! How can I help you with your studies today?';
    } else if (lowerQuery.includes('recommend') || lowerQuery.includes('suggestion')) {
      response = 'Based on your recent activity, I recommend focusing on Machine Learning algorithms. Your recent quiz results show this is an area you could improve in.';
    } else if (lowerQuery.includes('schedule') || lowerQuery.includes('plan')) {
      response = 'I can help create a study plan. For optimal learning, try 25-minute focused sessions with 5-minute breaks. For your current goals, I suggest allocating 3 hours to AI concepts and 2 hours to programming fundamentals this week.';
    } else if (lowerQuery.includes('difficult') || lowerQuery.includes('hard') || lowerQuery.includes('stuck')) {
      response = 'I understand this concept might be challenging. Let\'s break it down into smaller parts. Which specific aspect of the topic are you struggling with?';
    } else if (lowerQuery.includes('explain') || lowerQuery.includes('what is')) {
      response = 'That\'s a great question! To explain this concept clearly: The field of artificial intelligence focuses on creating systems that can perform tasks requiring human intelligence. This includes learning, reasoning, problem-solving, perception, and language understanding.';
    } else {
      response = 'I\'m here to help with your studies. You can ask me to explain concepts, create study plans, recommend resources, or help with difficult topics!';
    }
    
    const assistantMessage = {
      id: messages.length + 2,
      sender: 'assistant',
      text: response
    };
    
    setMessages([...messages, assistantMessage]);
  };

  const handleQuickAction = (action) => {
    setInputValue(action);
  };

  return (
    <div className="study-assistant">
      <div className="assistant-header">
        <h2><FaRobot className="section-icon" /> Study Assistant</h2>
      </div>
      
      <div className="quick-actions">
        <button 
          className="quick-action-btn" 
          onClick={() => handleQuickAction('Explain neural networks')}
        >
          <FaLightbulb className="action-icon" /> Explain a concept
        </button>
        <button 
          className="quick-action-btn" 
          onClick={() => handleQuickAction('Recommend study resources for machine learning')}
        >
          <FaBook className="action-icon" /> Recommend resources
        </button>
        <button 
          className="quick-action-btn" 
          onClick={() => handleQuickAction('Create a study plan for this week')}
        >
          <FaChartPie className="action-icon" /> Create study plan
        </button>
        <button 
          className="quick-action-btn" 
          onClick={() => handleQuickAction('Help me solve this programming problem')}
        >
          <FaPuzzlePiece className="action-icon" /> Help with problem
        </button>
      </div>
      
      <div className="chat-container">
        <div className="messages-container">
          {messages.map((message) => (
            <div key={message.id} className={`message ${message.sender}`}>
              {message.sender === 'assistant' && (
                <div className="assistant-avatar">
                  <FaRobot />
                </div>
              )}
              <div className="message-content">
                {message.text}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="message assistant">
              <div className="assistant-avatar">
                <FaRobot />
              </div>
              <div className="message-content typing">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
          )}
        </div>
        
        <form className="chat-input-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="chat-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask any learning question..."
          />
          <button 
            type="submit" 
            className="send-button" 
            disabled={!inputValue.trim()}
          >
            <FaPaperPlane />
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudyAssistant; 