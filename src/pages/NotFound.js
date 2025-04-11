import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container not-found-container">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Neural Connection Failed</h2>
        <p>The neural pathway you requested could not be found or accessed.</p>
        <div className="not-found-actions">
          <Link to="/" className="btn btn-primary">
            Return to Neural Hub
          </Link>
        </div>
      </div>
      <div className="not-found-decoration">
        <div className="matrix-code"></div>
      </div>
    </div>
  );
};

export default NotFound; 