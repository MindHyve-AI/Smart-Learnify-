import React from 'react';
import FeaturesGrid from '../components/landing/FeaturesGrid';

const Features = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Features</h1>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
        Explore the powerful features that make Smart Learnify the leading AI-powered 
        adaptive learning platform for personalized education.
      </p>
      
      <FeaturesGrid />
      
      <div className="mt-16 bg-gray-100 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Additional Features</h2>
        <ul className="space-y-4">
          <li className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <h3 className="font-semibold">Cross-platform synchronization</h3>
              <p className="text-gray-600">Continue your learning journey across all your devices seamlessly</p>
            </div>
          </li>
          <li className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <h3 className="font-semibold">Spaced repetition algorithm</h3>
              <p className="text-gray-600">Optimized review schedules to maximize long-term knowledge retention</p>
            </div>
          </li>
          <li className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <h3 className="font-semibold">Learning communities</h3>
              <p className="text-gray-600">Connect with fellow learners to collaborate and share knowledge</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Features; 