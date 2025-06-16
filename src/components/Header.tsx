"use client";

import Link from 'next/link';
 import { useState } from 'react';
import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
// import AIChat from './AIChat';

export default function Header() {
  //const [isAIDialogOpen, setIsAIDialogOpen] = useState(false);
  const [isDevDialogOpen, setIsDevDialogOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">GetJobsSA</span>
            </Link>
          </div>

          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link href="/jobs" className="text-gray-700 hover:text-blue-600">
              Find Jobs
            </Link>
            <button
              onClick={() => setIsDevDialogOpen(true)}
              className="text-gray-700 hover:text-blue-600"
            >
              Where are other options?
            </button>
            {/* <Link href="/post-job" className="text-gray-700 hover:text-blue-600">
              Post a Job
            </Link>
            <Link href="/companies" className="text-gray-700 hover:text-blue-600">
              Companies
            </Link>
            <button
              onClick={() => setIsAIDialogOpen(true)}
              className="text-gray-700 hover:text-blue-600 flex items-center gap-1"
            >
              <SparklesIcon className="h-5 w-5" />
              <span>AI Assistant</span>
            </button>
            <Link 
              href="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Sign In
            </Link> */}
          </div>
        </div>
      </nav>

      {/* <AIChat isOpen={isAIDialogOpen} onClose={() => setIsAIDialogOpen(false)} /> */}

      {isDevDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-sm text-center">
            <div className="flex items-center justify-center mb-2">
              <WrenchScrewdriverIcon className="h-10 w-9 text-blue-600 mr-2" />
            </div>
            <h2 className="text-lg font-semibold text-gray-800">Coming Soon</h2>
<br></br>
            <p className="text-sm text-gray-600">
              Thank you for your interest in our service. These features are currently under development. Please check back later.
            </p>
            <div className="mt-6">
              <button
                onClick={() => setIsDevDialogOpen(false)}
                className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
