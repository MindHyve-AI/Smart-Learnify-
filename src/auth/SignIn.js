import React from 'react';
import { SignIn } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center py-12">
      <div className="mx-auto w-full max-w-md px-4">
        <SignIn 
          routing="path" 
          path="/sign-in" 
          signUpUrl="/sign-up"
          afterSignInUrl="/dashboard"
          navigateAfterSignIn={() => navigate('/dashboard')}
        />
      </div>
    </div>
  );
};

export default SignInPage; 