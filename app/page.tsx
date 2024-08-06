'use client'
import React from "react";
import Link from 'next/link'
import 'regenerator-runtime/runtime'

export default function Home() {

  return (
    <main>
      <div className="flex flex-col mx-4 my-4 border-4">
        Jarvis Main Page
        <Link href='/test1'>
          <div className='text-sky-500 underline'>
            Test Number 1
          </div>
        </Link>
        <Link href='/test2'>
          <div className='text-sky-500 underline'>
            Test Number 2
          </div>
        </Link>
      </div>
    </main>
  );
}
