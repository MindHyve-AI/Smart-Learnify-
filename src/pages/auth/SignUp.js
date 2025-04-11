import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { signUp } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    // Validation
    if (!firstName || !email || !password || !confirmPassword) {
      setError('Please fill in all required fields');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    
    try {
      setLoading(true);
      await signUp(email, password, firstName, lastName);
      navigate('/dashboard');
    } catch (err) {
      if (err.message.includes('User already exists')) {
        setError('An account with this email already exists');
      } else {
        setError('Failed to create account: ' + (err.message || 'Unknown error'));
      }
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Create New Identity</h2>
          <p className="auth-subtitle">Join Smart Learnify to unlock your potential</p>
        </div>
        
        {error && <div className="auth-error">{error}</div>}
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-row">
            <div className="input-group">
              <label htmlFor="firstName">First Name*</label>
              <input
                id="firstName"
                type="text"
                className="input-field"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                required
              />
            </div>
            
            <div className="input-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                type="text"
                className="input-field"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
              />
            </div>
          </div>
          
          <div className="input-group">
            <label htmlFor="email">Email*</label>
            <input
              id="email"
              type="email"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              required
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Password*</label>
            <input
              id="password"
              type="password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
            <p className="input-hint">Minimum 6 characters</p>
          </div>
          
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password*</label>
            <input
              id="confirmPassword"
              type="password"
              className="input-field"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          
          <div className="auth-terms">
            By creating an account, you agree to our <Link to="/terms" className="auth-link">Terms of Service</Link> and <Link to="/privacy" className="auth-link">Privacy Policy</Link>.
          </div>
          
          <div className="auth-actions">
            <button 
              type="submit" 
              className="btn btn-primary auth-submit" 
              disabled={loading}
            >
              {loading ? 'Creating Identity...' : 'Create Identity'}
            </button>
          </div>
          
          <div className="auth-links">
            <div className="auth-divider">
              <span>Already have an account?</span>
            </div>
            <Link to="/login" className="btn btn-secondary">
              Neural Link
            </Link>
          </div>
        </form>
      </div>
      
      <div className="auth-decoration">
        <div className="auth-glow"></div>
      </div>
    </div>
  );
};

export default SignUp; 