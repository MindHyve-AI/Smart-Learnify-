import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { updateUserProfile } from '../services/api';

const Profile = () => {
  const { currentUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const fileInputRef = useRef(null);
  
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    profilePicture: '',
    // We don't include password in the form for security reasons
  });
  
  // Initialize form with current user data
  useEffect(() => {
    if (currentUser) {
      setFormData({
        firstName: currentUser.firstName || '',
        lastName: currentUser.lastName || '',
        email: currentUser.email || '',
        profilePicture: currentUser.profilePicture || '',
      });
    }
  }, [currentUser]);
  
  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle file input change for profile picture
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (!validTypes.includes(file.type)) {
      setError('Please select a valid image file (JPEG, PNG, or GIF)');
      return;
    }
    
    // Validate file size - limit to 500KB to avoid MongoDB size issues
    if (file.size > 500 * 1024) {
      setError('Image size is too large. Please select an image under 500KB');
      return;
    }
    
    // Convert file to base64 string for storage
    const reader = new FileReader();
    reader.onloadend = () => {
      try {
        setFormData(prev => ({
          ...prev,
          profilePicture: reader.result
        }));
      } catch (err) {
        console.error('Error processing image:', err);
        setError('Failed to process image. Please try another file.');
      }
    };
    reader.onerror = () => {
      setError('Failed to read image file. Please try again.');
    };
    reader.readAsDataURL(file);
  };
  
  // Trigger file input click
  const handlePictureClick = () => {
    fileInputRef.current.click();
  };
  
  // Toggle edit mode
  const toggleEdit = () => {
    setIsEditing(!isEditing);
    // Reset messages when toggling
    setError('');
    setSuccess('');
    
    // Reset form to current user data when canceling edit
    if (isEditing && currentUser) {
      setFormData({
        firstName: currentUser.firstName || '',
        lastName: currentUser.lastName || '',
        email: currentUser.email || '',
        profilePicture: currentUser.profilePicture || '',
      });
    }
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    
    try {
      console.log('Updating profile with data:', {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        profilePicture: formData.profilePicture ? '(picture data present)' : '(no picture)'
      });
      
      // Use the real API to update the profile
      const result = await updateUserProfile(null, {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email, // needed to identify the user
        profilePicture: formData.profilePicture,
      });
      
      console.log('Profile update successful:', result);
      setSuccess('Profile updated successfully');
      setIsEditing(false);
      
      // Update the currentUser in local storage to reflect changes
      // In a real app with proper state management, this would be handled differently
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser) {
        storedUser.firstName = formData.firstName;
        storedUser.lastName = formData.lastName;
        storedUser.profilePicture = formData.profilePicture;
        localStorage.setItem('user', JSON.stringify(storedUser));
        
        // Force a page reload to update the UI with new user info
        // In a real app, you would update the AuthContext state instead
        window.location.reload();
      }
    } catch (err) {
      console.error('Error updating profile:', err);
      setError('Failed to update profile: ' + (err.message || 'Unknown error'));
    } finally {
      setLoading(false);
    }
  };
  
  // Get initials for default avatar
  const getInitials = () => {
    if (!currentUser) return 'U';
    return `${currentUser.firstName ? currentUser.firstName[0].toUpperCase() : ''}${currentUser.lastName ? currentUser.lastName[0].toUpperCase() : ''}`;
  };
  
  if (!currentUser) {
    return <div className="loading-container">Loading user data...</div>;
  }
  
  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>User Profile</h1>
        <div className="profile-actions">
          {!isEditing ? (
            <button 
              className="btn btn-secondary" 
              onClick={toggleEdit}
            >
              Edit Profile
            </button>
          ) : (
            <button 
              className="btn btn-outline" 
              onClick={toggleEdit}
            >
              Cancel
            </button>
          )}
        </div>
      </div>
      
      {error && <div className="alert alert-error">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}
      
      <div className="profile-card">
        <div className="profile-picture-container">
          {isEditing ? (
            <>
              <div 
                className="profile-picture editable" 
                onClick={handlePictureClick}
                style={{ 
                  backgroundImage: formData.profilePicture ? `url(${formData.profilePicture})` : 'none' 
                }}
              >
                {!formData.profilePicture && getInitials()}
                <div className="profile-picture-overlay">
                  <span>Change</span>
                </div>
              </div>
              <input 
                type="file" 
                ref={fileInputRef} 
                style={{ display: 'none' }} 
                onChange={handleFileChange}
                accept="image/jpeg, image/png, image/gif"
              />
              <p className="profile-picture-hint">Click to upload a profile picture</p>
            </>
          ) : (
            <div 
              className="profile-picture" 
              style={{ 
                backgroundImage: currentUser.profilePicture ? `url(${currentUser.profilePicture})` : 'none' 
              }}
            >
              {!currentUser.profilePicture && getInitials()}
            </div>
          )}
        </div>
        
        {isEditing ? (
          <form onSubmit={handleSubmit} className="profile-form">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="input-field"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="input-field"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="input-field"
                value={formData.email}
                onChange={handleChange}
                disabled // Email shouldn't be changeable
              />
              <p className="input-hint">Email cannot be changed</p>
            </div>
            
            <div className="form-actions">
              <button 
                type="submit" 
                className="btn btn-primary" 
                disabled={loading}
              >
                {loading ? 'Updating...' : 'Save Changes'}
              </button>
            </div>
          </form>
        ) : (
          <div className="profile-info">
            <div className="info-group">
              <h3>Personal Information</h3>
              <div className="info-row">
                <span className="info-label">First Name:</span>
                <span className="info-value">{currentUser.firstName}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Last Name:</span>
                <span className="info-value">{currentUser.lastName || 'Not provided'}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Email:</span>
                <span className="info-value">{currentUser.email}</span>
              </div>
            </div>
            
            <div className="info-group">
              <h3>Account Information</h3>
              <div className="info-row">
                <span className="info-label">Account ID:</span>
                <span className="info-value">{currentUser.id}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Created:</span>
                <span className="info-value">
                  {new Date(currentUser.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile; 