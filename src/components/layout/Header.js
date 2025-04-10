import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">Smart Learnify</Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-600 hover:text-primary">Home</Link>
          <Link to="/features" className="text-gray-600 hover:text-primary">Features</Link>
          <Link to="/dashboard" className="text-gray-600 hover:text-primary">Dashboard</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link to="/sign-up" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90">
            Get Started
          </Link>
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 