import { SignIn, SignUp } from "@clerk/nextjs";

export default function Page({ params }: { params: { clerk: string[] } }) {
  const isSignUp = params.clerk.includes("sign-up");
  
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center py-12">
      <div className="mx-auto w-full max-w-md px-4">
        {isSignUp ? <SignUp /> : <SignIn />}
      </div>
    </div>
  );
} 