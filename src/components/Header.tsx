"use client";

import Link from 'next/link';
import { useState } from 'react';
import { SparklesIcon } from '@heroicons/react/24/outline';
import AIChat from './AIChat';

export default function Header() {
  const [isAIDialogOpen, setIsAIDialogOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">GetJobSA</span>
            </Link>
          </div>
          
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link href="/jobs" className="text-gray-700 hover:text-blue-600">
              Find Jobs
            </Link>
            <Link href="/post-job" className="text-gray-700 hover:text-blue-600">
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
            </Link>
          </div>
        </div>
      </nav>

      <AIChat
        isOpen={isAIDialogOpen}
        onClose={() => setIsAIDialogOpen(false)}
      />
    </header>
  );
} 