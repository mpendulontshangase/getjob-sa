import Header from '@/components/Header';
import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="md:flex md:gap-6">
          {/* Filters Sidebar */}
          <div className="hidden md:block w-56 bg-gradient-to-br from-white/90 to-blue-50/90 backdrop-blur-sm p-4 rounded-lg shadow-[0_2px_8px_-1px_rgba(0,0,0,0.1)] border border-blue-100/50">
            <h2 className="text-base font-semibold mb-3">Filters</h2>
            
            {/* Job Type Filter */}
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Job Type</h3>
              <div className="space-y-1">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded text-blue-600" />
                  <span className="ml-2 text-sm text-gray-700">Full-time</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded text-blue-600" />
                  <span className="ml-2 text-sm text-gray-700">Part-time</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded text-blue-600" />
                  <span className="ml-2 text-sm text-gray-700">Contract</span>
                </label>
              </div>
            </div>

            {/* Experience Level Filter */}
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Experience Level</h3>
              <div className="space-y-1">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded text-blue-600" />
                  <span className="ml-2 text-sm text-gray-700">Entry Level</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded text-blue-600" />
                  <span className="ml-2 text-sm text-gray-700">Mid Level</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded text-blue-600" />
                  <span className="ml-2 text-sm text-gray-700">Senior Level</span>
                </label>
              </div>
            </div>
          </div>

          {/* Jobs List */}
          <div className="flex-1">
            <div className="mb-4">
              <h1 className="text-xl font-bold text-gray-900">Available Jobs</h1>
              <p className="text-gray-600 mt-1 text-sm">Showing 150 jobs</p>
            </div>

            {/* Job Cards */}
            <div className="space-y-3">
              {/* Sample Job Cards */}
              {[1, 2, 3].map((job) => (
                <div key={job} className="bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-sm p-4 rounded-lg shadow-[0_2px_8px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_12px_-1px_rgba(0,0,0,0.1),0_2px_6px_-2px_rgba(0,0,0,0.05)] transition-all hover:translate-y-[-2px] border border-blue-100/50">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-lg font-semibold text-gray-900">Senior Software Engineer</h2>
                      <p className="text-blue-600 mt-0.5 text-sm">TechCorp SA</p>
                      <p className="text-gray-600 mt-0.5 text-sm">Cape Town, Western Cape</p>
                      <div className="mt-2 space-x-2">
                        <span className="inline-block bg-blue-100/80 text-blue-800 text-xs px-2 py-0.5 rounded-full">
                          Full-time
                        </span>
                        <span className="inline-block bg-green-100/80 text-green-800 text-xs px-2 py-0.5 rounded-full">
                          Remote
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-900 font-medium text-sm">R50,000 - R75,000</p>
                      <p className="text-gray-600 text-xs">per month</p>
                    </div>
                  </div>
                  <p className="mt-2 text-gray-600 text-sm line-clamp-2">
                    We are looking for an experienced software engineer to join our growing team...
                  </p>
                  <div className="mt-2 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <p className="text-xs text-gray-500">Posted 2 days ago</p>
                      <button className="flex items-center gap-1 text-gray-500 hover:text-blue-600 transition-colors">
                        <ChatBubbleLeftIcon className="w-4 h-4" />
                        <span className="text-xs">15 comments</span>
                      </button>
                    </div>
                    <Link 
                      href={`/jobs/senior-software-engineer-${job}`}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-6 flex justify-center">
              <nav className="flex items-center space-x-1">
                <button className="px-2 py-1 rounded-md bg-gradient-to-br from-white/90 to-blue-50/90 backdrop-blur-sm text-gray-500 hover:text-blue-600 text-sm border border-blue-100/50">
                  Previous
                </button>
                <button className="px-2 py-1 rounded-md bg-blue-600 text-white text-sm">1</button>
                <button className="px-2 py-1 rounded-md bg-gradient-to-br from-white/90 to-blue-50/90 backdrop-blur-sm text-gray-700 hover:text-blue-600 text-sm border border-blue-100/50">2</button>
                <button className="px-2 py-1 rounded-md bg-gradient-to-br from-white/90 to-blue-50/90 backdrop-blur-sm text-gray-700 hover:text-blue-600 text-sm border border-blue-100/50">3</button>
                <button className="px-2 py-1 rounded-md bg-gradient-to-br from-white/90 to-blue-50/90 backdrop-blur-sm text-gray-500 hover:text-blue-600 text-sm border border-blue-100/50">
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 