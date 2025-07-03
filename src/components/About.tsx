'use client';

import React from 'react';

export default function About() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-blue-600"> Drimmaz</h2>
          <p className="mt-4 text-gray-600 text-base max-w-2xl mx-auto">
            Learn more about who we are, how we started, and our goals for transforming the job search experience in South Africa.
          </p>
        </div>

        {/* Origin Story */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">How It All Started</h3>
          <p className="text-gray-700 text-base leading-relaxed">
            Drimmaz was founded with a simple mission: to bridge the gap between opportunity and talent. 
            Born out of the need to support South African job seekers, especially youth and first-time job hunters, 
            we envisioned a platform that goes beyond just listing jobs—it empowers people to take control of their career journey.
          </p>
        </div>

        {/* What We Do */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">What We Do</h3>
          <p className="text-gray-700 text-base leading-relaxed">
            Drimmaz is a job discovery platform that provides real-time job listings, easy application processes, and personalized job alerts. 
            We make it easier for individuals to find employment opportunities suited to their skills, location, and career interests. 
            Our platform is user-friendly, mobile-ready, and constantly updated with new listings.
          </p>
        </div>

        {/* Vision */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Our Vision</h3>
          <p className="text-gray-700 text-base leading-relaxed">
            To become South Africa’s most trusted and accessible job platform—helping individuals not just find jobs, but build fulfilling careers.
          </p>
        </div>

        {/* Mission */}
        <div>
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Our Mission</h3>
          <p className="text-gray-700 text-base leading-relaxed">
            Our mission is to empower every South African job seeker with tools, information, and opportunities to succeed in today’s job market. 
            We aim to reduce unemployment by making the job hunt faster, fairer, and more transparent.
          </p>
        </div>
      </div>
    </div>
  );
}
