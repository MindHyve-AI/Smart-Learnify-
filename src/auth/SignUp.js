import React from 'react';
import { SignUp } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center py-12">
      <div className="mx-auto w-full max-w-md px-4">
        <SignUp 
          routing="path" 
          path="/sign-up" 
          signInUrl="/sign-in"
          afterSignUpUrl="/dashboard"
          navigateAfterSignUp={() => navigate('/dashboard')}
        />
      </div>
    </div>
  );
};

export default SignUpPage; 