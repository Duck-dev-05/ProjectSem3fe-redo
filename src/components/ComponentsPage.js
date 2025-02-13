import React from 'react';
import Navbar from './Navbar';
import MainContent from './MainContent';
import Footer from './Footer';
import SignIn from './SignIn';
import Register from './Register';
import './ComponentsPage.css';

function ComponentsPage() {
  return (
    <div className="components-page">
      <h1>Components Overview</h1>
      <section className="component-section">
        <h2>Navbar</h2>
        <Navbar />
      </section>
      <section className="component-section">
        <h2>Main Content</h2>
        <MainContent />
      </section>
      <section className="component-section">
        <h2>Footer</h2>
        <Footer />
      </section>
      <section className="component-section">
        <h2>Sign In</h2>
        <SignIn />
      </section>
      <section className="component-section">
        <h2>Register</h2>
        <Register />
      </section>
    </div>
  );
}

export default ComponentsPage; 