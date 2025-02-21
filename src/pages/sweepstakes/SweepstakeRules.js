import React from 'react';
import { Link } from 'react-router-dom';
import './SweepstakeRules.css';

const SweepstakeRules = () => {
  return (
    <div className="rules-container">
      <div className="rules-header">
        <Link to="/sweepstakes" className="back-link">← Back to Sweepstakes</Link>
        <h1>Official Rules</h1>
      </div>

      <div className="rules-content">
        <section className="rules-section">
          <h2>NO PURCHASE NECESSARY TO ENTER OR WIN</h2>
          <div className="section-content">
            <h3>Eligibility</h3>
            <p>The JamesThew Sweepstakes is open to legal residents of the 50 United States and District of Columbia who are 18 years of age or older at time of entry.</p>
            
            <h3>Entry Period</h3>
            <p>Sweepstakes begins at 12:00:01 AM Eastern Time ("ET") on March 1, 2024 and ends at 11:59:59 PM ET on April 30, 2024.</p>
            
            <h3>How to Enter</h3>
            <ul>
              <li>Visit JamesThew.com and complete the entry form</li>
              <li>Limit one (1) entry per person per day</li>
              <li>Multiple entries in excess of the entry limits will be void</li>
            </ul>

            <h3>Prizes</h3>
            <div className="prizes-list">
              <div className="prize-item">
                <h4>KitchenAid Stand Mixer</h4>
                <p>Approximate Retail Value ("ARV"): $499.99</p>
                <p>Entry Period: March 1 - March 31, 2024</p>
              </div>

              <div className="prize-item">
                <h4>Ultimate Kitchen Makeover</h4>
                <p>ARV: $5,000</p>
                <p>Entry Period: March 15 - April 15, 2024</p>
              </div>

              <div className="prize-item">
                <h4>Cooking Class Experience</h4>
                <p>ARV: $1,200</p>
                <p>Entry Period: April 1 - April 30, 2024</p>
              </div>
            </div>

            <h3>Winner Selection</h3>
            <p>Winners will be selected in a random drawing from among all eligible entries received. Drawing will be conducted by JamesThew, whose decisions are final on all matters relating to this sweepstakes.</p>

            <h3>Winner Notification</h3>
            <p>Winners will be notified by email within 5 days of the drawing. If a winner cannot be contacted or does not respond within 7 days, an alternate winner will be selected.</p>

            <h3>General Conditions</h3>
            <ul>
              <li>All federal, state and local laws and regulations apply</li>
              <li>Void where prohibited by law</li>
              <li>All taxes on prizes are the sole responsibility of winners</li>
              <li>No prize substitution or transfer permitted</li>
            </ul>

            <h3>Privacy</h3>
            <p>Information collected from entrants is subject to JamesThew's <Link to="/privacy">Privacy Policy</Link>.</p>
          </div>
        </section>

        <section className="rules-section">
          <h2>Sponsor</h2>
          <p>JamesThew, [Address]</p>
          <p>For a list of winners, send a self-addressed stamped envelope to: JamesThew Winners List, [Address]. Requests must be received by May 31, 2024.</p>
        </section>
      </div>
    </div>
  );
};

export default SweepstakeRules; 