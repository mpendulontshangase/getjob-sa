'use client';

import Header from '@/components/Header';
import { ChatBubbleLeftIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { fetchJobs } from './index';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';

export default function JobsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [title, setTitle] = useState(searchParams.get('title') || '');
  const [location, setLocation] = useState(searchParams.get('location') || '');
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const currentPage = Number(searchParams.get('page') || 1);

  useEffect(() => {
    async function loadJobs() {
      setLoading(true);
      const results = await fetchJobs(currentPage, title, location);
      setJobs(results);
      setLoading(false);
    }

    loadJobs();
  }, [currentPage, title, location]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`?page=1&title=${encodeURIComponent(title)}&location=${encodeURIComponent(location)}`);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Search Section */}
        
        {/* <form onSubmit={handleSearch} className="mb-6">
          <div className="flex gap-2 shadow-lg rounded-lg overflow-hidden bg-white/80 backdrop-blur-sm p-2">
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
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 hover:bg-blue-700 transition-colors"
            >
              Search
            </button>
          </div>
        </form> */}

        <div className="md:flex md:gap-6">
          {/* Jobs List */}
          
          <div className="flex-1">
            
          <div className="mt-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
  {/* Heading */}
  <div>
    <h1 className="text-xl font-bold text-gray-900">Available Jobs</h1>
    <p className="text-gray-600 mt-1 text-sm">
      {loading ? 'Loading jobs...' : `Showing ${jobs.length} jobs`}
    </p>
  </div>

  {/* Search Form */}
  <div className="w-full md:max-w-2xl">
    <div className="flex gap-2 shadow-lg rounded-lg overflow-hidden bg-white/80 backdrop-blur-sm">
    <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 inset-y-0 my-auto pointer-events-none" />
      <input
        type="text"
        
        placeholder="     Job title, keywords, or company"
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
    </div>
  </div>
</div>

</div>


            <div className="space-y-3">
              {!loading && jobs.map((job: any, index: number) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-sm p-4 rounded-lg shadow hover:translate-y-[-2px] transition-all"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-lg font-semibold text-gray-900">{job.title}</h2>
                      <p className="text-blue-600 mt-0.5 text-sm">{job.company.display_name}</p>
                      <p className="text-gray-600 mt-0.5 text-sm">{job.location.display_name}</p>
                      <div className="mt-2 space-x-2">
                        <span className="inline-block bg-blue-100/80 text-blue-800 text-xs px-2 py-0.5 rounded-full">
                          {job.contract_type || 'N/A'}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      {job.salary_min && job.salary_max ? (
                        <>
                          <p className="text-gray-900 font-medium text-sm">
                            R{job.salary_min.toLocaleString()} - R{job.salary_max.toLocaleString()}
                          </p>
                          <p className="text-gray-600 text-xs">per year</p>
                        </>
                      ) : (
                        <p className="text-sm text-gray-500">Salary not disclosed</p>
                      )}
                    </div>
                  </div>
                  <p className="mt-2 text-gray-600 text-sm line-clamp-2">{job.description}</p>
                  <div className="mt-2 flex justify-between items-center">
                    <p className="text-xs text-gray-500">Posted {new Date(job.created).toLocaleDateString()}</p>
                    <Link
                      href={`/jobs/${job.id}`}
                      target="_blank"
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-6 flex justify-center">
          <nav className="flex items-center space-x-2">
            <Link
              href={`?page=${currentPage - 1}&title=${title}&location=${location}`}
              className={`px-3 py-1 border rounded text-sm ${
                currentPage === 1 ? 'text-gray-300 pointer-events-none' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Previous
            </Link>
            <span className="px-3 py-1 text-sm font-medium text-blue-700">{currentPage}</span>
            <Link
              href={`?page=${currentPage + 1}&title=${title}&location=${location}`}
              className="px-3 py-1 border rounded text-sm text-gray-600 hover:text-blue-600"
            >
              Next
            </Link>
          </nav>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
