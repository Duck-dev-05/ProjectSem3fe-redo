import React from 'react';
import './Help.css';

const Help = () => {
  return (
    <div className="help-container">
      <h1>Help Center</h1>
      <div className="help-content">
        <section className="help-section">
          <h2>Frequently Asked Questions</h2>
          {/* Add FAQs here */}
        </section>
        
        <section className="help-section">
          <h2>Contact Support</h2>
          {/* Add contact form or support information */}
        </section>
      </div>
    </div>
  );
};

export default Help; 