import React from 'react';
import { Link } from 'react-router-dom';
import './Winners.css';

const Winners = () => {
  const winners = [
    {
      id: 1,
      sweepstake: "KitchenAid Stand Mixer Giveaway",
      date: "February 2024",
      winners: [
        {
          name: "Sarah Johnson",
          location: "Portland, OR",
          prize: "KitchenAid Professional 5™ Plus Series Stand Mixer"
        }
      ]
    },
    {
      id: 2,
      sweepstake: "Holiday Kitchen Makeover",
      date: "December 2023",
      winners: [
        {
          name: "Michael Smith",
          location: "Austin, TX",
          prize: "Complete Kitchen Renovation Package"
        },
        {
          name: "Emily Davis",
          location: "Chicago, IL",
          prize: "Runner-up Prize: Cookware Set"
        }
      ]
    },
    {
      id: 3,
      sweepstake: "Cooking Class Experience",
      date: "November 2023",
      winners: [
        {
          name: "David Wilson",
          location: "Miami, FL",
          prize: "1-Year Professional Cooking Course"
        }
      ]
    }
  ];

  return (
    <div className="winners-container">
      <div className="winners-header">
        <Link to="/sweepstakes" className="back-link">← Back to Sweepstakes</Link>
        <h1>Previous Winners</h1>
        <p>Congratulations to all our lucky winners!</p>
      </div>

      <div className="winners-list">
        {winners.map((contest) => (
          <div key={contest.id} className="contest-winners">
            <div className="contest-header">
              <h2>{contest.sweepstake}</h2>
              <span className="contest-date">{contest.date}</span>
            </div>
            <div className="winners-grid">
              {contest.winners.map((winner, index) => (
                <div key={index} className="winner-card">
                  <div className="winner-info">
                    <div className="winner-badge">Winner</div>
                    <h3>{winner.name}</h3>
                    <p className="winner-location">{winner.location}</p>
                    <p className="prize-won">Prize: {winner.prize}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="winners-footer">
        <div className="current-opportunities">
          <h3>Want to be our next winner?</h3>
          <p>Check out our current sweepstakes and enter for your chance to win!</p>
          <Link to="/sweepstakes" className="view-sweepstakes-button">
            View Current Sweepstakes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Winners; 