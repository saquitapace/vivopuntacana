// pages/sign-in.js
import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className='flex flex-col w-full h-screen items-center justify-center'>
      <h1>Sign In</h1>
      <SignIn signUpUrl='/sign-up' />
    </div>
  );
}
