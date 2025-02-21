import React, { useState } from 'react';
import './Help.css';
import { useNavigate } from 'react-router-dom';

const Help = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const helpCategories = {
    general: {
      title: 'General',
      faqs: [
        {
          question: 'How do I create an account?',
          answer: 'To create an account, click the "Sign Up" button in the top right corner. Fill in your details, including your email and password, then follow the verification steps sent to your email.'
        },
        {
          question: 'How do I reset my password?',
          answer: 'Click the "Forgot Password" link on the login page. Enter your email address, and we\'ll send you instructions to reset your password.'
        },
        {
          question: 'Is it free to use Recipe Hub?',
          answer: 'Yes! Recipe Hub is completely free to use. Create an account to save your favorite recipes and share your own recipes with our community.'
        }
      ]
    },
    recipes: {
      title: 'Recipes',
      faqs: [
        {
          question: 'How do I submit a recipe?',
          answer: 'After logging in, click on "Submit Recipe" in your profile menu. Fill in the recipe details, including ingredients, instructions, and photos, then submit for review.'
        },
        {
          question: 'How do I save a recipe?',
          answer: 'Click the bookmark icon on any recipe to save it to your favorites. You must be logged in to use this feature.'
        },
        {
          question: 'Can I edit my submitted recipes?',
          answer: 'Yes, you can edit your submitted recipes at any time. Go to your profile, find the recipe under "My Recipes," and click "Edit."'
        }
      ]
    },
    account: {
      title: 'Account Settings',
      faqs: [
        {
          question: 'How do I change my email address?',
          answer: 'Go to "Account Settings" in your profile menu. Click "Edit" next to your email address and follow the verification steps.'
        },
        {
          question: 'How do I delete my account?',
          answer: 'Go to "Account Settings," scroll to the bottom, and click "Delete Account." Please note this action cannot be undone.'
        }
      ]
    },
    technical: {
      title: 'Technical Support',
      faqs: [
        {
          question: 'Why can\'t I upload photos?',
          answer: 'Make sure your photos are in JPG, PNG, or HEIC format and under 5MB. If you\'re still having issues, try using a different browser.'
        },
        {
          question: 'The website is loading slowly',
          answer: 'Try clearing your browser cache and cookies. If the problem persists, check your internet connection or try a different browser.'
        }
      ]
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredFaqs = searchQuery
    ? Object.values(helpCategories).reduce((acc, category) => {
        const filtered = category.faqs.filter(
          faq =>
            faq.question.toLowerCase().includes(searchQuery) ||
            faq.answer.toLowerCase().includes(searchQuery)
        );
        if (filtered.length > 0) {
          acc.push({
            title: category.title,
            faqs: filtered
          });
        }
        return acc;
      }, [])
    : null;

  const handleContactSupport = () => {
    navigate('/contact');
  };

  return (
    <div className="help-container">
      <div className="help-header">
        <h1>Help Center</h1>
        <div className="help-search">
          <input
            type="text"
            placeholder="Search for help..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
      </div>

      <div className="help-content">
        <div className="help-sidebar">
          <h2>Categories</h2>
          <ul>
            {Object.entries(helpCategories).map(([key, category]) => (
              <li
                key={key}
                className={activeCategory === key ? 'active' : ''}
                onClick={() => setActiveCategory(key)}
              >
                {category.title}
              </li>
            ))}
          </ul>
          
          <div className="contact-support">
            <h3>Need more help?</h3>
            <button className="contact-button" onClick={handleContactSupport}>
              Contact Support
            </button>
          </div>
        </div>

        <div className="help-main">
          {searchQuery ? (
            <div className="search-results">
              <h2>Search Results</h2>
              {filteredFaqs.map((category, index) => (
                <div key={index} className="faq-category">
                  <h3>{category.title}</h3>
                  {category.faqs.map((faq, faqIndex) => (
                    <div key={faqIndex} className="faq-item">
                      <h4>{faq.question}</h4>
                      <p>{faq.answer}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <div className="faq-category">
              <h2>{helpCategories[activeCategory].title}</h2>
              {helpCategories[activeCategory].faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <h4>{faq.question}</h4>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Help; 