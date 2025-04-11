import React, { useState } from 'react';
import { FaRobot, FaPaperPlane, FaMicrophone, FaStop, FaExpandAlt } from 'react-icons/fa';

const LearningAssistant = () => {
  const [input, setInput] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [conversations, setConversations] = useState([
    {
      type: 'assistant',
      content: "Hello! I'm your Smart Learnify AI assistant. How can I help with your learning today?",
      timestamp: new Date().toISOString()
    }
  ]);

  const handleSendMessage = () => {
    if (input.trim() === '') return;
    
    // Add user message to conversations
    const userMessage = {
      type: 'user',
      content: input,
      timestamp: new Date().toISOString()
    };
    
    setConversations([...conversations, userMessage]);
    setInput('');
    
    // Simulate AI response (in a real app, this would call an API)
    setTimeout(() => {
      const aiResponses = {
        "help": "I can help you with course recommendations, explain difficult concepts, create practice quizzes, or provide resources for any topic you're studying.",
        "study": "Based on your learning pattern, I recommend focusing on the 'Neural Networks' module today. It aligns with your goal to master AI fundamentals by next month.",
        "explain": "Machine learning is a subset of AI that focuses on developing algorithms that allow computers to learn from and make predictions based on data.",
        "quiz": "Sure! Here's a quick question: What is the difference between supervised and unsupervised learning?",
        "tired": "I understand. Learning fatigue is common. Try taking a 15-minute break, do some stretching, or switch to a different learning method like watching a video instead of reading.",
      };
      
      // Simple keyword matching for demo purposes
      let aiResponse = "I'll need to research that further. In a complete implementation, I would connect to various AI models to provide personalized assistance.";
      
      for (const [keyword, response] of Object.entries(aiResponses)) {
        if (input.toLowerCase().includes(keyword)) {
          aiResponse = response;
          break;
        }
      }
      
      const assistantMessage = {
        type: 'assistant',
        content: aiResponse,
        timestamp: new Date().toISOString()
      };
      
      setConversations(prevConversations => [...prevConversations, assistantMessage]);
    }, 1000);
  };

  const toggleListening = () => {
    // In a real implementation, this would connect to the Web Speech API
    setIsListening(!isListening);
    if (!isListening) {
      // Simulate speech recognition
      setTimeout(() => {
        setInput("How can AI help me improve my studying?");
        setIsListening(false);
      }, 2000);
    }
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className={`learning-assistant ${isExpanded ? 'expanded' : ''}`}>
      <div className="assistant-header">
        <div className="assistant-title">
          <FaRobot className="assistant-icon" />
          <h3>Learning Assistant</h3>
        </div>
        <button 
          className="btn-icon btn-transparent" 
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label={isExpanded ? "Collapse assistant" : "Expand assistant"}
        >
          <FaExpandAlt />
        </button>
      </div>
      
      <div className="conversation-container">
        {conversations.map((message, index) => (
          <div key={index} className={`message ${message.type}`}>
            <div className="message-content">
              {message.content}
            </div>
            <div className="message-timestamp">{formatTime(message.timestamp)}</div>
          </div>
        ))}
      </div>
      
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Ask anything about your learning..."
          className="chat-input"
        />
        <div className="input-actions">
          <button 
            className={`btn-icon ${isListening ? 'listening' : ''}`} 
            onClick={toggleListening}
            aria-label={isListening ? "Stop listening" : "Start voice input"}
          >
            {isListening ? <FaStop /> : <FaMicrophone />}
          </button>
          <button 
            className="btn-icon send-btn" 
            onClick={handleSendMessage}
            disabled={input.trim() === ''}
            aria-label="Send message"
          >
            <FaPaperPlane />
          </button>
        </div>
      </div>
      
      <div className="assistant-suggestions">
        <button className="suggestion-chip" onClick={() => setInput("Help me create a study plan")}>
          Create study plan
        </button>
        <button className="suggestion-chip" onClick={() => setInput("Explain machine learning")}>
          Explain ML
        </button>
        <button className="suggestion-chip" onClick={() => setInput("Quiz me on recent topics")}>
          Quiz me
        </button>
      </div>
    </div>
  );
};

export default LearningAssistant; 