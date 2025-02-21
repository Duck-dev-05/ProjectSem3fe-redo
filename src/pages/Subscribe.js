import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Subscribe.css';

const Subscribe = () => {
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [showPaypal, setShowPaypal] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState(null);

  const plans = {
    monthly: {
      basic: {
        price: '4.99',
        period: 'month'
      },
      premium: {
        price: '9.99',
        period: 'month'
      },
      professional: {
        price: '19.99',
        period: 'month'
      }
    },
    annual: {
      basic: {
        price: '49.99',
        period: 'year',
        savings: '10'
      },
      premium: {
        price: '99.99',
        period: 'year',
        savings: '20'
      },
      professional: {
        price: '199.99',
        period: 'year',
        savings: '30'
      }
    }
  };

  const handleSubscribe = (planType) => {
    const price = plans[selectedPlan][planType].price;
    setSelectedPrice(price);
    setShowPaypal(true);
  };

  const handlePaypalSuccess = (details, data) => {
    toast.success('Subscription successful!');
    setShowPaypal(false);
    // Add subscription logic here
  };

  const handlePaypalError = (err) => {
    toast.error('Payment failed. Please try again.');
    console.error('PayPal Error:', err);
    setShowPaypal(false);
  };

  useEffect(() => {
    if (!showPaypal) return;

    const loadPayPalScript = () => {
      const script = document.createElement('script');
      script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.REACT_APP_PAYPAL_SANDBOX_CLIENT_ID}&currency=USD`;
      script.async = true;
      
      script.onload = () => {
        if (window.paypal) {
          window.paypal.Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    value: selectedPrice
                  }
                }]
              });
            },
            onApprove: (data, actions) => {
              return actions.order.capture()
                .then(function(details) {
                  toast.success('Payment completed successfully! Welcome to JamesThew Premium.');
                  setShowPaypal(false);
                  console.log('Transaction completed by ' + details.payer.name.given_name);
                })
                .catch(function(err) {
                  toast.error('Payment processing failed. Please try again.');
                  console.error('Capture error:', err);
                });
            },
            onCancel: (data) => {
              toast.info("Payment cancelled. Feel free to try again when you're ready.");
              setShowPaypal(false);
            },
            onError: (err) => {
              toast.error('Something went wrong with the payment. Please try again.');
              console.error('PayPal Error:', err);
              setShowPaypal(false);
            }
          }).render('.paypal-button-container')
            .catch(function(err) {
              toast.error('Failed to load PayPal buttons. Please refresh the page.');
              console.error('Render error:', err);
            });
        }
      };

      script.onerror = () => {
        toast.error('Failed to load PayPal SDK. Please refresh the page.');
      };

      document.body.appendChild(script);

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    };

    loadPayPalScript();
  }, [showPaypal, selectedPrice]);

  return (
    <div className="subscribe-container">
      <div className="subscribe-header">
        <h1>Subscribe to JamesThew</h1>
        <p>Get unlimited access to all our recipes, meal plans, and cooking tips</p>
      </div>

      <div className="billing-toggle">
        <button 
          className={selectedPlan === 'monthly' ? 'active' : ''} 
          onClick={() => setSelectedPlan('monthly')}
        >
          Monthly Billing
        </button>
        <button 
          className={selectedPlan === 'annual' ? 'active' : ''} 
          onClick={() => setSelectedPlan('annual')}
        >
          Annual Billing
          <span className="save-badge">Save up to 30%</span>
        </button>
      </div>

      <div className="subscription-plans">
        <div className="plan-card basic">
          <h2>Basic</h2>
          <div className="price">
            <span className="currency">$</span>
            <span className="amount">{plans[selectedPlan].basic.price}</span>
            <span className="period">/{plans[selectedPlan].basic.period}</span>
          </div>
          {selectedPlan === 'annual' && (
            <div className="savings">Save {plans[selectedPlan].basic.savings}%</div>
          )}
          <ul className="features">
            <li>Access to all recipes</li>
            <li>Basic meal planning tools</li>
            <li>Shopping list generator</li>
            <li>Ad-supported experience</li>
          </ul>
          <button 
            className="subscribe-button"
            onClick={() => handleSubscribe('basic')}
          >
            Subscribe Now
          </button>
        </div>

        <div className="plan-card premium recommended">
          <div className="recommended-badge">Most Popular</div>
          <h2>Premium</h2>
          <div className="price">
            <span className="currency">$</span>
            <span className="amount">{plans[selectedPlan].premium.price}</span>
            <span className="period">/{plans[selectedPlan].premium.period}</span>
          </div>
          {selectedPlan === 'annual' && (
            <div className="savings">Save {plans[selectedPlan].premium.savings}%</div>
          )}
          <ul className="features">
            <li>Everything in Basic</li>
            <li>Ad-free experience</li>
            <li>Advanced meal planning</li>
            <li>Recipe scaling tools</li>
            <li>Nutritional information</li>
            <li>Save unlimited recipes</li>
          </ul>
          <button 
            className="subscribe-button"
            onClick={() => handleSubscribe('premium')}
          >
            Subscribe Now
          </button>
        </div>

        <div className="plan-card professional">
          <h2>Professional</h2>
          <div className="price">
            <span className="currency">$</span>
            <span className="amount">{plans[selectedPlan].professional.price}</span>
            <span className="period">/{plans[selectedPlan].professional.period}</span>
          </div>
          {selectedPlan === 'annual' && (
            <div className="savings">Save {plans[selectedPlan].professional.savings}%</div>
          )}
          <ul className="features">
            <li>Everything in Premium</li>
            <li>Professional recipe formatting</li>
            <li>Recipe cost calculator</li>
            <li>Inventory management</li>
            <li>Priority support</li>
            <li>API access</li>
          </ul>
          <button 
            className="subscribe-button"
            onClick={() => handleSubscribe('professional')}
          >
            Subscribe Now
          </button>
        </div>
      </div>

      {showPaypal && (
        <div className="paypal-modal" onClick={() => setShowPaypal(false)}>
          <div className="paypal-modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={() => setShowPaypal(false)}>×</button>
            <h2>Complete Your Subscription</h2>
            <p>Total: ${selectedPrice}</p>
            <div className="paypal-button-container"></div>
          </div>
        </div>
      )}

      <div className="subscription-footer">
        <p>All plans include a 14-day free trial. Cancel anytime.</p>
        <div className="footer-links">
          <Link to="/terms">Terms of Service</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/help">Need Help?</Link>
        </div>
      </div>
    </div>
  );
};

export default Subscribe; 