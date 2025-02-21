import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    bio: 'I love cooking Italian and Asian cuisine!',
    location: 'New York, NY',
    profileImage: '/images/default-avatar.jpg',
    preferences: {
      newsletter: true,
      publicProfile: true,
      emailNotifications: true
    }
  });

  const [newImage, setNewImage] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setProfileData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: type === 'checkbox' ? checked : value
        }
      }));
    } else {
      setProfileData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle profile update logic here
    console.log('Profile updated:', profileData);
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-image-container">
          <img 
            src={newImage || profileData.profileImage} 
            alt="Profile" 
            className="profile-image"
          />
          {isEditing && (
            <div className="image-upload">
              <label htmlFor="profileImage">
                <span className="upload-icon">📷</span>
                Change Photo
              </label>
              <input
                type="file"
                id="profileImage"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: 'none' }}
              />
            </div>
          )}
        </div>
        <div className="profile-title">
          <h1>{`${profileData.firstName} ${profileData.lastName}`}</h1>
          <p className="profile-location">{profileData.location}</p>
        </div>
      </div>

      <div className="profile-content">
        <div className="profile-section">
          <div className="section-header">
            <h2>Profile Information</h2>
            {!isEditing && (
              <button 
                className="edit-button"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </button>
            )}
          </div>

          {isEditing ? (
            <form onSubmit={handleSubmit} className="profile-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={profileData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={profileData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={profileData.location}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="bio">Bio</label>
                <textarea
                  id="bio"
                  name="bio"
                  value={profileData.bio}
                  onChange={handleChange}
                  rows="4"
                />
              </div>

              <div className="preferences-section">
                <h3>Preferences</h3>
                <div className="checkbox-group">
                  <label>
                    <input
                      type="checkbox"
                      name="preferences.newsletter"
                      checked={profileData.preferences.newsletter}
                      onChange={handleChange}
                    />
                    Receive newsletter
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="preferences.publicProfile"
                      checked={profileData.preferences.publicProfile}
                      onChange={handleChange}
                    />
                    Make profile public
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="preferences.emailNotifications"
                      checked={profileData.preferences.emailNotifications}
                      onChange={handleChange}
                    />
                    Email notifications
                  </label>
                </div>
              </div>

              <div className="form-buttons">
                <button type="submit" className="save-button">
                  Save Changes
                </button>
                <button 
                  type="button" 
                  className="cancel-button"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div className="profile-info">
              <div className="info-group">
                <h3>Bio</h3>
                <p>{profileData.bio}</p>
              </div>
              <div className="info-group">
                <h3>Email</h3>
                <p>{profileData.email}</p>
              </div>
              <div className="info-group">
                <h3>Preferences</h3>
                <ul className="preferences-list">
                  <li>
                    Newsletter: {profileData.preferences.newsletter ? 'Yes' : 'No'}
                  </li>
                  <li>
                    Public Profile: {profileData.preferences.publicProfile ? 'Yes' : 'No'}
                  </li>
                  <li>
                    Email Notifications: {profileData.preferences.emailNotifications ? 'Yes' : 'No'}
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile; 