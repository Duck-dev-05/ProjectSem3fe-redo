import React from 'react';
import { Link } from 'react-router-dom';
import './Sweepstakes.css';

const Sweepstakes = () => {
  const currentSweepstakes = [
    {
      id: 1,
      title: "Win a KitchenAid Stand Mixer",
      description: "Enter for a chance to win a KitchenAid Professional 5™ Plus Series 5 Quart Bowl-Lift Stand Mixer",
      endDate: "March 31, 2024",
      frequency: "Daily"
    },
    {
      id: 2,
      title: "Ultimate Kitchen Makeover",
      description: "Transform your kitchen with a complete set of premium appliances and cookware",
      endDate: "April 15, 2024",
      frequency: "Daily"
    },
    {
      id: 3,
      title: "Cooking Class Experience",
      description: "Win a year of online cooking classes with professional chefs",
      endDate: "April 30, 2024",
      frequency: "Weekly"
    }
  ];

  return (
    <div className="sweepstakes-container">
      <div className="sweepstakes-header">
        <h1>Current Sweepstakes</h1>
        <p>Enter for your chance to win amazing prizes!</p>
      </div>

      <div className="sweepstakes-grid">
        {currentSweepstakes.map((sweepstake) => (
          <div key={sweepstake.id} className="sweepstake-card">
            <h2>{sweepstake.title}</h2>
            <p className="description">{sweepstake.description}</p>
            <div className="sweepstake-details">
              <div className="detail-row">
                <span className="label">End Date:</span>
                <span className="value">{sweepstake.endDate}</span>
              </div>
              <div className="detail-row">
                <span className="label">Entry Frequency:</span>
                <span className="value">{sweepstake.frequency}</span>
              </div>
            </div>
            <Link to={`/sweepstakes/${sweepstake.id}`} className="enter-button">
              Enter Now
            </Link>
          </div>
        ))}
      </div>

      <div className="sweepstakes-footer">
        <div className="footer-section">
          <h3>Official Rules</h3>
          <p>
            No purchase necessary. Void where prohibited. Must be 18 or older to enter.
            See <Link to="/sweepstakes/rules">Official Rules</Link> for complete details.
          </p>
        </div>
        <div className="footer-section">
          <h3>Past Winners</h3>
          <Link to="/sweepstakes/winners">View Previous Winners</Link>
        </div>
      </div>
    </div>
  );
};

export default Sweepstakes; 