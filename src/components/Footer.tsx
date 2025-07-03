"use client";

import { useState } from 'react';
import { WrenchScrewdriverIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
 // used for social icons (as placeholders)

export default function Footer() {
  const [isDevDialogOpen, setIsDevDialogOpen] = useState(false);

  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center text-center text-gray-700 gap-8">

          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Info</h3>
            {/* <p className="flex items-center gap-2">
              <PhoneIcon className="h-5 w-5 text-blue-600" /> +27 123 456 789
            </p> */}
            <p className="flex items-center gap-2 mt-1">
              <EnvelopeIcon className="h-5 w-5 text-blue-600" /> support@drimmaz.com
            </p>
          </div>

          {/* Social Media */}
         {/* Social Media */}
<div>
  <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
  <div className="flex gap-4 mt-1">
    {/* Facebook */}
    <a href="" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" />
      </svg>
    </a>

    {/* Twitter */}
   {/* X (formerly Twitter) */}
<a href="" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
  >
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
</a>


    {/* LinkedIn */}
    <a href="" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    </a>
  </div>
</div>


          {/* Developers */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Owners</h3>
            <p>
              {/* Sub Entity of{' '} */}
              <button
                // onClick={() => setIsDevDialogOpen(true)}
                className="text-blue-600 hover:underline"
              >
                Sobetwo Group (Pty) Ltd
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Coming Soon Dialog */}
      {isDevDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-sm text-center">
            <div className="flex items-center justify-center mb-2">
              <WrenchScrewdriverIcon className="h-10 w-10 text-blue-600 mr-2" />
            </div>
            <h2 className="text-lg font-semibold text-gray-800">Coming Soon</h2>
            <p className="text-sm text-gray-600 mt-2">
              This feature is still under development. Please check back later.
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
    </footer>
  );
}
