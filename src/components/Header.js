import React from 'react';
import { Link } from 'react-router-dom';
import UserButton from './auth/UserButton';
import ThemeToggle from './ui/ThemeToggle';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="app-header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-text">SmartLearnify</span>
          <span className="logo-highlight">AI</span>
        </Link>
        
        <nav className="main-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            {isAuthenticated ? (
              <>
                <li className="nav-item">
                  <Link to="/dashboard" className="nav-link">Dashboard</Link>
                </li>
                <li className="nav-item">
                  <Link to="/profile" className="nav-link">Profile</Link>
                </li>
                <li className="nav-item">
                  <button onClick={logout} className="nav-link logout-btn">Sign Out</button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">Sign In</Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link sign-up">Sign Up</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
        
        <div className="header-actions">
          <ThemeToggle />
          <UserButton />
        </div>
      </div>
    </header>
  );
};

export default Header; 