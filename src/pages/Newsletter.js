import React, { useState } from 'react';
import { toast } from 'react-toastify';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [preferences, setPreferences] = useState({
    dailyRecipes: false,
    weeklyMealPlans: false,
    cookingTips: false,
    seasonal: false,
    specialOffers: false
  });

  const newsletterTypes = [
    {
      id: 'dailyRecipes',
      title: "Daily Recipe Inspiration",
      description: "Get a fresh recipe delivered to your inbox every day",
      image: "https://placehold.co/400x400/E33D26/ffffff?text=Daily+Recipes"
    },
    {
      id: 'weeklyMealPlans',
      title: "Weekly Meal Plans",
      description: "Start your week right with curated meal plans every Sunday",
      image: "https://placehold.co/400x400/E33D26/ffffff?text=Meal+Plans"
    },
    {
      id: 'cookingTips',
      title: "Kitchen Tips & Tricks",
      description: "Expert cooking advice and helpful kitchen hacks",
      image: "https://placehold.co/400x400/E33D26/ffffff?text=Cooking+Tips"
    },
    {
      id: 'seasonal',
      title: "Seasonal Specials",
      description: "Holiday recipes and seasonal cooking inspiration",
      image: "https://placehold.co/400x400/E33D26/ffffff?text=Seasonal"
    },
    {
      id: 'specialOffers',
      title: "Special Offers",
      description: "Exclusive deals and offers from JamesThew",
      image: "https://placehold.co/400x400/E33D26/ffffff?text=Special+Offers"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Object.values(preferences).some(pref => pref)) {
      toast.warning('Please select at least one newsletter type');
      return;
    }
    // Add newsletter subscription logic here
    toast.success('Thank you for subscribing to our newsletters!');
    setEmail('');
    setPreferences({
      dailyRecipes: false,
      weeklyMealPlans: false,
      cookingTips: false,
      seasonal: false,
      specialOffers: false
    });
  };

  return (
    <div className="newsletter-container">
      <header className="newsletter-header">
        <h1>Subscribe to Our Newsletters</h1>
        <p>Get recipes, tips, and inspiration delivered to your inbox</p>
      </header>

      <form onSubmit={handleSubmit} className="newsletter-form">
        <div className="email-input-section">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
          />
          <button type="submit">Sign Up</button>
        </div>

        <div className="newsletter-options">
          {newsletterTypes.map((type) => (
            <div key={type.id} className="newsletter-option">
              <div className="option-image">
                <img src={type.image} alt={type.title} />
              </div>
              <div className="option-content">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={preferences[type.id]}
                    onChange={(e) => setPreferences({
                      ...preferences,
                      [type.id]: e.target.checked
                    })}
                  />
                  <span className="checkbox-custom"></span>
                  <div className="option-text">
                    <h3>{type.title}</h3>
                    <p>{type.description}</p>
                  </div>
                </label>
              </div>
            </div>
          ))}
        </div>
      </form>

      <div className="newsletter-footer">
        <p>
          By signing up, you agree to our{' '}
          <a href="/terms">Terms of Service</a> and{' '}
          <a href="/privacy">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
};

export default Newsletter; 