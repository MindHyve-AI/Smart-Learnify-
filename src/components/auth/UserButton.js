import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { useAuth } from '../../contexts/AuthContext';

const UserButton = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { currentUser, signOut, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      setShowDropdown(false);
      navigate('/');
    } catch (error) {
      console.error('Failed to sign out', error);
    }
  };
  
  // Get user initials for avatar fallback
  const getInitials = () => {
    if (!currentUser) return 'U';
    return `${currentUser.firstName ? currentUser.firstName[0].toUpperCase() : ''}${currentUser.lastName ? currentUser.lastName[0].toUpperCase() : ''}`;
  };

  return (
    <div className="user-button-container">
      <button 
        className="user-button" 
        onClick={toggleDropdown}
        aria-label="User menu"
      >
        {isAuthenticated ? (
          <div 
            className="user-avatar"
            style={
              currentUser.profilePicture 
              ? { 
                  backgroundImage: `url(${currentUser.profilePicture})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                } 
              : {}
            }
          >
            {!currentUser.profilePicture && getInitials()}
          </div>
        ) : (
          <FaUser />
        )}
      </button>
      
      {showDropdown && (
        <div className="user-dropdown">
          {isAuthenticated ? (
            <>
              <div className="dropdown-user-info">
                <div 
                  className="dropdown-user-avatar"
                  style={
                    currentUser.profilePicture 
                    ? { 
                        backgroundImage: `url(${currentUser.profilePicture})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      } 
                    : {}
                  }
                >
                  {!currentUser.profilePicture && getInitials()}
                </div>
                <div className="dropdown-user-details">
                  <div className="dropdown-user-name">
                    {currentUser.firstName} {currentUser.lastName}
                  </div>
                  <div className="dropdown-user-email">
                    {currentUser.email}
                  </div>
                </div>
              </div>
              <Link to="/profile" className="dropdown-item" onClick={() => setShowDropdown(false)}>
                Profile
              </Link>
              <Link to="/dashboard" className="dropdown-item" onClick={() => setShowDropdown(false)}>
                Dashboard
              </Link>
              <Link to="/settings" className="dropdown-item" onClick={() => setShowDropdown(false)}>
                Settings
              </Link>
              <button 
                className="dropdown-item logout-button" 
                onClick={handleSignOut}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="dropdown-item" onClick={() => setShowDropdown(false)}>
                Sign In
              </Link>
              <Link to="/register" className="dropdown-item" onClick={() => setShowDropdown(false)}>
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default UserButton; 