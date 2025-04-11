import React from 'react';
import { SignIn, SignUp } from "@clerk/nextjs";

export default function Page({ params }: { params: { clerk: string[] } }) {
  const isSignUp = params.clerk.includes("sign-up");
  
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center py-12">
      <div className="mx-auto w-full max-w-md px-4">
        {isSignUp ? (
          <SignUp 
            path="/sign-up" 
            routing="path" 
            signInUrl="/sign-in" 
            redirectUrl="/dashboard"
            appearance={{
              elements: {
                formButtonPrimary: "bg-primary hover:bg-primary/90",
                card: "rounded-md shadow-md"
              }
            }}
          />
        ) : (
          <SignIn 
            path="/sign-in" 
            routing="path" 
            signUpUrl="/sign-up" 
            redirectUrl="/dashboard"
            appearance={{
              elements: {
                formButtonPrimary: "bg-primary hover:bg-primary/90",
                card: "rounded-md shadow-md"
              }
            }}
          />
        )}
      </div>
    </div>
  );
} 