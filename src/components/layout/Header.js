import React from 'react';
import { Link } from 'react-router-dom';
import UserButton from '../auth/UserButton';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <Link to="/" className="mr-6 flex items-center space-x-2">
          <span className="text-xl font-bold">Smart Learnify</span>
        </Link>
        
        <nav className="hidden md:flex flex-1 items-center justify-center space-x-4">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link to="/features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Features
          </Link>
          <Link to="/dashboard" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Dashboard
          </Link>
        </nav>
        
        <div className="flex flex-1 items-center justify-end space-x-4">
          <UserButton />
        </div>
      </div>
    </header>
  );
};

export default Header; 