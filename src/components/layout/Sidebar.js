import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Only show sidebar on dashboard pages
  if (!location.pathname.includes('/dashboard')) {
    return null;
  }

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button 
        className="md:hidden fixed top-20 left-4 z-50 bg-primary text-white p-2 rounded-md"
        onClick={toggleSidebar}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      
      <aside className={`bg-gray-100 w-64 min-h-screen p-4 transition-all duration-300 ${isOpen ? 'left-0' : '-left-64'} md:left-0 fixed md:relative z-40`}>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Learning</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/dashboard/courses" 
                  className="block p-2 rounded-md hover:bg-gray-200"
                >
                  My Courses
                </Link>
              </li>
              <li>
                <Link 
                  to="/dashboard/progress" 
                  className="block p-2 rounded-md hover:bg-gray-200"
                >
                  Progress Tracking
                </Link>
              </li>
              <li>
                <Link 
                  to="/dashboard/recommendations" 
                  className="block p-2 rounded-md hover:bg-gray-200"
                >
                  Recommendations
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Account</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/dashboard/profile" 
                  className="block p-2 rounded-md hover:bg-gray-200"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link 
                  to="/dashboard/settings" 
                  className="block p-2 rounded-md hover:bg-gray-200"
                >
                  Settings
                </Link>
              </li>
              <li>
                <button 
                  className="w-full text-left p-2 rounded-md hover:bg-gray-200"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </aside>
      
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar; 