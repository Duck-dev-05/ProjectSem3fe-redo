import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Dinners from './components/Dinners';
import Meals from './components/Meals';
import AllMeals from './components/AllMeals';
import TopicMeals from './components/TopicMeals';
import Ingredients from './components/Ingredients';
import IngredientDetail from './components/IngredientDetail';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import Register from './components/Register';

// ErrorBoundary component to catch errors in the tree.
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('Error caught in ErrorBoundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="App">
          <header className="App-header">
            <h1>Something went wrong.</h1>
            <p>{this.state.error && this.state.error.toString()}</p>
          </header>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/dinners" element={<Dinners />} />
          <Route path="/meals" element={<Meals />} />
          <Route path="/meals/all" element={<AllMeals />} />
          <Route path="/meals/topic/:topic" element={<TopicMeals />} />
          <Route path="/Ingredients" element={<Ingredients />} />
          <Route path="/Ingredients/:ingredient" element={<IngredientDetail />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </ErrorBoundary>
  );
}

export default App; 