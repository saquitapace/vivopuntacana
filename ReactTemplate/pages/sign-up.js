// pages/sign-in.js

import { SignUp } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className='flex flex-col w-full h-screen items-center justify-center'>
      <h1>Sign Up</h1>
      <SignUp />
    </div>
  );
}
