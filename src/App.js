import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

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
      <div className="App">
        <Navbar />
        <MainContent />
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
