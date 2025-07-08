'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Link from 'next/link';
import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline';
import { fetchJobs } from '@/app/jobs/index'; // Ensure this supports search params
import Footer from '@/components/Footer';
import OurOffer from '@/components/OurOffers';

type Job = {
  id: string;
  title: string;
  company: { display_name: string };
  location: { display_name: string };
  description: string;
  redirect_url: string;
  contract_time?: string | null;
};

export default function Home() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');

  const loadJobs = async (page = 1, titleFilter = '', locationFilter = '') => {
    setLoading(true);
    const results = await fetchJobs(page, titleFilter, locationFilter);
    setJobs(results.slice(0, 3) || []);
    setLoading(false);
  };

  useEffect(() => {
    loadJobs();
  }, []);

  const handleSearch = () => {
    loadJobs(1, title, location);
  };

  // Show full-page loader while loading
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">Loading featured jobs...</p>
            <p className="text-sm text-gray-500 mt-2">Please wait while we fetch the latest opportunities</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-white/40 to-slate-100/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="text-center">
            <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
              <span className="block">Find Your Dream Job in</span>
              <span className="block text-blue-600">South Africa</span>
            </h1>
            <p className="mt-2 max-w-md mx-auto text-base text-gray-600 sm:text-lg md:text-xl md:max-w-2xl">
              Discover thousands of job opportunities from top companies.
            </p>
          </div>

          {/* Search Section */}
          <div className="mt-6">
            <div className="max-w-2xl mx-auto">
              <div className="flex gap-2 shadow-lg rounded-lg overflow-hidden bg-white/80 backdrop-blur-sm">
                <input
                  type="text"
                  placeholder="Job title, keywords, or company"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="flex-1 px-4 py-2 border-0 bg-transparent focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-1/3 px-4 py-2 border-0 border-l border-slate-200 bg-transparent focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
                <button
                  onClick={handleSearch}
                  className="bg-blue-600 text-white px-6 py-2 hover:bg-blue-700 transition-colors"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Jobs Section */}
      <div className="bg-gradient-to-b from-slate-100/40 to-slate-50/40 backdrop-blur-sm py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Featured Jobs</h2>
            <p className="mt-2 text-base text-gray-600">Explore our latest job opportunities</p>
          </div>

          {jobs.length === 0 ? (
            <p className="text-center text-gray-600">No jobs found.</p>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-sm p-4 rounded-lg shadow hover:shadow-md transition-all hover:translate-y-[-2px] border border-blue-100/50"
                >
                  <h3 className="text-base font-semibold text-gray-900">{job.title}</h3>
                  <p className="text-blue-600 mt-1 text-sm">{job.company?.display_name || 'Unknown Company'}</p>
                  <p className="text-gray-600 mt-1 text-sm">{job.location?.display_name || 'Unknown Location'}</p>
                  <div className="mt-2">
                    {job.contract_time && (
                      <span className="inline-block bg-blue-100/80 text-blue-800 text-xs px-2 py-0.5 rounded-full">
                        {job.contract_time}
                      </span>
                    )}
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <Link
                       href={`/jobs/${job.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      View Details →
                    </Link>
                    <button className="flex items-center gap-1 text-gray-500 hover:text-blue-600 transition-colors">
                      <ChatBubbleLeftIcon className="w-4 h-4" />
                      <span className="text-xs">0 comments</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-8 text-center">
            <Link
              href="/jobs"
              className="inline-block bg-white/80 backdrop-blur-sm text-blue-600 px-6 py-2 rounded-md border border-blue-600 hover:bg-blue-50 text-sm"
            >
              View All Jobs
            </Link>
          </div>
          <OurOffer/>
        </div>
        
      </div>
      <Footer/>
    </div>
  );
}
