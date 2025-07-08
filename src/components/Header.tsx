"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { WrenchScrewdriverIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
// import AIChat from './AIChat';

export default function Header() {
  //const [isAIDialogOpen, setIsAIDialogOpen] = useState(false);
  const [isDevDialogOpen, setIsDevDialogOpen] = useState(false);
  const [isWhatsAppDialogOpen, setIsWhatsAppDialogOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm relative">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">Drimmaz</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
          <button
              onClick={() => setIsWhatsAppDialogOpen(true)}
              className="text-gray-700 hover:text-green-600 p-2 rounded-full hover:bg-green-50"
              title="Contact us on WhatsApp"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </button>
            <Link href="/jobs" className="text-gray-700 hover:text-blue-600">
              Find Jobs
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">
              About
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

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2 border border-gray-300 rounded"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

                {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden bg-white border-t border-gray-200 absolute top-16 left-0 right-0 z-50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => {
                  setIsWhatsAppDialogOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 w-full px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp
              </button>
              <Link
                href="/jobs"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md"
              >
                Find Jobs
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md"
              >
                About
              </Link>
              <button
                onClick={() => {
                  setIsDevDialogOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md"
              >
                Where are other options?
              </button>
            </div>
          </div>
        )}
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

      {isWhatsAppDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-sm text-center">
           
            <h4 className="text-base font-semibold text-gray-800 mb-4">Scan to Join Our WhatsApp Channel</h4>

            <div className="flex justify-center mb-4">
              <Image 
                src="/drimmaz-code.png" 
                alt="Drimmaz Code" 
                width={250}
                height={250}
                className="h-48 w-auto rounded-lg shadow-md"
              />
            </div>
            <div className="space-y-3">
              <a
                href="https://whatsapp.com/channel/0029Vb5htdmJP20yoL0iFG3k"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 font-medium text-sm"
              >
                Link to join WhatsApp Channel
              </a>
              <button
                onClick={() => setIsWhatsAppDialogOpen(false)}
                className="w-full px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
