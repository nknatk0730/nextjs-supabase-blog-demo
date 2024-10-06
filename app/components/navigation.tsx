'use client';

import Link from "next/link";

export const Navigation = () => {
  return (
    <header>
      <div className="max-w-screen-xl mx-auto relative flex justify-center items-center">
        <Link className="font-bold text-xl" href='/'>
          Home
        </Link>

        <div className="absolute right-5">
          <div className="flex space-x-4">
            <Link href='/auth/profile'>profile</Link>
            <Link href='auth/login'>Login</Link>
            <Link href='auth/signup'>Sign up</Link>
          </div>
        </div>
      </div>
    </header>
  )
}