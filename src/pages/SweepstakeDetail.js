import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './SweepstakeDetail.css';

const SweepstakeDetail = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    agreeToRules: false,
    agreeToEmails: false
  });

  // Mock data - in real app, fetch this from API
  const sweepstakes = {
    1: {
      title: "Win a KitchenAid Stand Mixer",
      description: "Enter for a chance to win a KitchenAid Professional 5™ Plus Series 5 Quart Bowl-Lift Stand Mixer",
      image: "https://placehold.co/800x400/E33D26/ffffff?text=KitchenAid+Mixer",
      endDate: "March 31, 2024",
      prize: "$499.99",
      entries: 1,
      frequency: "Daily",
      rules: [
        "No purchase necessary to enter or win",
        "Must be 18 years or older",
        "Open to legal residents of the 50 United States",
        "Void where prohibited",
        "One entry per person per day",
        "Winner will be selected at random"
      ],
      prizeDetails: [
        "1 KitchenAid Professional 5™ Plus Series 5 Quart Bowl-Lift Stand Mixer",
        "Color options available to winner",
        "Includes standard attachments",
        "1-year warranty"
      ]
    },
    // Add other sweepstakes here...
  };

  const currentSweepstake = sweepstakes[id];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreeToRules) {
      toast.error('You must agree to the Official Rules to enter');
      return;
    }
    
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    toast.success('Thank you for entering!');
  };

  if (!currentSweepstake) {
    return <div>Sweepstake not found</div>;
  }

  return (
    <div className="sweepstake-detail-container">
      <div className="sweepstake-detail-header">
        <Link to="/sweepstakes" className="back-link">← Back to Sweepstakes</Link>
        <h1>{currentSweepstake.title}</h1>
        <p className="end-date">Entry Period Ends: {currentSweepstake.endDate}</p>
      </div>

      <div className="sweepstake-detail-content">
        <div className="prize-section">
          <img src={currentSweepstake.image} alt={currentSweepstake.title} />
          <div className="prize-info">
            <div className="prize-value">Prize Value: {currentSweepstake.prize}</div>
            <p className="prize-description">{currentSweepstake.description}</p>
            <div className="prize-details">
              <h3>Prize Details:</h3>
              <ul>
                {currentSweepstake.prizeDetails.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="entry-form-section">
          <h2>Enter to Win</h2>
          <form onSubmit={handleSubmit} className="entry-form">
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group full-width">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="zipCode">ZIP Code</label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="checkbox-section">
              <div className="checkbox-group required">
                <input
                  type="checkbox"
                  id="agreeToRules"
                  name="agreeToRules"
                  checked={formData.agreeToRules}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="agreeToRules">
                  I have read and agree to the <Link to="/sweepstakes/rules" target="_blank">Official Rules</Link>
                </label>
              </div>

              <div className="checkbox-group">
                <input
                  type="checkbox"
                  id="agreeToEmails"
                  name="agreeToEmails"
                  checked={formData.agreeToEmails}
                  onChange={handleInputChange}
                />
                <label htmlFor="agreeToEmails">
                  Yes! I would like to receive emails about future sweepstakes and special offers
                </label>
              </div>
            </div>

            <button type="submit" className="submit-button">Enter Now</button>
          </form>
        </div>

        <div className="rules-section">
          <h3>Official Rules Summary</h3>
          <ul>
            {currentSweepstake.rules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
          <Link to="/sweepstakes/rules" className="full-rules-link">
            View Complete Official Rules
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SweepstakeDetail; 