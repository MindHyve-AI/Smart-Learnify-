import React, { useState } from 'react';
import { FaRobot, FaLightbulb, FaPaperPlane, FaSpinner, FaVolumeUp, FaVolumeOff } from 'react-icons/fa';

const AILearningAssistant = () => {
  const [inputValue, setInputValue] = useState('');
  const [conversation, setConversation] = useState([
    { 
      role: 'assistant', 
      content: "Hi there! I'm your AI Learning Assistant. How can I help with your studies today?" 
    }
  ]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  
  // Quick action suggestions
  const suggestions = [
    "Explain recursion with examples",
    "What are good resources for learning React?",
    "Help me review database indexing",
    "Create a study plan for this week"
  ];
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  
  const handleSendMessage = (message = inputValue) => {
    if (!message.trim()) return;
    
    // Add user message to conversation
    const updatedConversation = [
      ...conversation,
      { role: 'user', content: message }
    ];
    setConversation(updatedConversation);
    setInputValue('');
    setIsProcessing(true);
    
    // Simulate AI response (would connect to a real API in production)
    setTimeout(() => {
      let response = '';
      
      // Simple response logic based on keywords
      if (message.toLowerCase().includes('explain') || message.toLowerCase().includes('what')) {
        response = "Great question! Let me explain that concept. In a real implementation, I would provide a detailed explanation about " + message.toLowerCase().replace('explain', '').replace('what is', '').replace('?', '') + " with examples and diagrams when helpful.";
      } else if (message.toLowerCase().includes('resource') || message.toLowerCase().includes('learn')) {
        response = "I'd recommend these resources for learning that topic: 1) Official documentation, 2) Interactive tutorials on platforms like Codecademy or freeCodeCamp, 3) YouTube channels like Traversy Media or The Net Ninja, and 4) Project-based learning with real applications.";
      } else if (message.toLowerCase().includes('review')) {
        response = "Let's review that topic together! I'll create a series of questions to test your understanding, provide examples to illustrate key concepts, and suggest exercises to reinforce your learning. We'll focus on both theoretical understanding and practical applications.";
      } else if (message.toLowerCase().includes('plan') || message.toLowerCase().includes('schedule')) {
        response = "I'll help you create a customized study plan! Based on your learning goals and available time, we can structure your week with specific topics, resources, and practice exercises. Would you like me to break it down by day or subject area?";
      } else {
        response = "I understand you're asking about " + message + ". In a full implementation, I would analyze your question using NLP and provide a helpful, accurate response with examples and resources. Is there a specific aspect of this topic you'd like me to focus on?";
      }
      
      setConversation([...updatedConversation, { role: 'assistant', content: response }]);
      setIsProcessing(false);
      
      // Text-to-speech implementation would go here for voiceEnabled
    }, 1500);
  };
  
  const handleSuggestionClick = (suggestion) => {
    handleSendMessage(suggestion);
  };
  
  const toggleVoice = () => {
    setVoiceEnabled(!voiceEnabled);
  };
  
  return (
    <div className="ai-learning-assistant">
      <div className="assistant-header">
        <h3><FaRobot /> AI Learning Assistant</h3>
        <button 
          className={`voice-toggle ${voiceEnabled ? 'voice-enabled' : ''}`}
          onClick={toggleVoice}
          aria-label={voiceEnabled ? "Disable voice responses" : "Enable voice responses"}
        >
          {voiceEnabled ? <FaVolumeUp /> : <FaVolumeOff />}
        </button>
      </div>
      
      <div className="conversation-container">
        {conversation.map((message, index) => (
          <div key={index} className={`message ${message.role}`}>
            {message.role === 'assistant' && <span className="assistant-icon"><FaRobot /></span>}
            <div className="message-content">{message.content}</div>
          </div>
        ))}
        
        {isProcessing && (
          <div className="message assistant processing">
            <span className="assistant-icon"><FaRobot /></span>
            <div className="message-content">
              <FaSpinner className="spinner" /> Thinking...
            </div>
          </div>
        )}
      </div>
      
      <div className="suggestions-container">
        <div className="suggestions-label"><FaLightbulb /> Quick actions:</div>
        <div className="suggestions-list">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              className="suggestion-btn"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
      
      <div className="input-container">
        <input
          type="text"
          className="assistant-input"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Ask me anything about your studies..."
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button 
          className="send-btn" 
          onClick={() => handleSendMessage()}
          disabled={!inputValue.trim() || isProcessing}
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default AILearningAssistant; 