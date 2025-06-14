// app/jobs/[id]/page.tsx
import Header from '@/components/Header';
import Link from 'next/link';
import { fetchJobs } from '../index'; // adjust path if needed
import {
  ChatBubbleLeftIcon,
  MapPinIcon,
  BriefcaseIcon,
  CurrencyDollarIcon,
  ClockIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';
import Footer from '@/components/Footer';

export default async function JobDetail({ params }: { params: { id: string } }) {
  const jobs = await fetchJobs();
  const job = jobs.find((j: any) => j.id === params.id);

  if (!job) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-8 text-center text-red-600 font-semibold">
          Job not found.
        </div>
      </div>
    );
  }

  function formatJobDescription(description: string) {
    if (!description) return '';
  
    // Replace section titles with HTML strong + breaks
    const formatted = description
      .replace(/Requirements:/g, '<br/><br/><strong>Requirements:</strong>')
      .replace(/Benefits:/g, '<br/><br/><strong>Benefits:</strong>')
      .replace(/Responsibilities:/g, '<br/><br/><strong>Responsibilities:</strong>')
      // Replace new lines with <br/>
      .replace(/\n/g, '<br/>');
  
    return formatted;
  }
  

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/jobs" className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-2">
            ← Back to Jobs
          </Link>
        </div>

        {/* Job Header */}
        <div className="bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-sm p-6 rounded-lg shadow border border-blue-100/50">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{job.title}</h1>
              <div className="mt-2 flex items-center gap-2 text-gray-600">
                <BuildingOfficeIcon className="w-5 h-5" />
                <span className="text-blue-600">{job.company.display_name}</span>
              </div>
              <div className="mt-2 flex items-center gap-2 text-gray-600">
                <MapPinIcon className="w-5 h-5" />
                <span>{job.location.display_name}</span>
              </div>
            </div>
            <div className="text-right">
              {job.salary_min && job.salary_max ? (
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <CurrencyDollarIcon className="w-5 h-5" />
                  <span className="font-medium">
                    R{job.salary_min.toLocaleString()} - R{job.salary_max.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-500">per year</span>
                </div>
              ) : (
                <p className="text-sm text-gray-500">Salary not disclosed</p>
              )}
              <div className="flex items-center gap-2 text-gray-600">
                <ClockIcon className="w-5 h-5" />
                <span>Posted {new Date(job.created).toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center bg-blue-100/80 text-blue-800 text-sm px-3 py-1 rounded-full">
              <BriefcaseIcon className="w-4 h-4 mr-1" />
              {job.contract_type || 'Unknown'}
            </span>
            {job.category?.label && (
              <span className="inline-flex items-center bg-purple-100/80 text-purple-800 text-sm px-3 py-1 rounded-full">
                {job.category.label}
              </span>
            )}
          </div>
        </div>

        {/* Job Description */}
        <div className="mt-6 bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-sm p-6 rounded-lg shadow border border-blue-100/50">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Job Description</h2>
          <div
  className="prose prose-blue max-w-none text-gray-600"
  dangerouslySetInnerHTML={{ __html: formatJobDescription(job.description) }}
/>

        </div>

        {/* Apply Button */}
        <div className="mt-6 flex justify-end">
          <a
            href={job.redirect_url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
          >
            Apply for this Position
          </a>
        </div>

        {/* Comment Section */}
        {/* <div className="mt-6 bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-sm p-6 rounded-lg shadow border border-blue-100/50">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Comments</h2>
            <div className="flex items-center gap-2 text-gray-600">
              <ChatBubbleLeftIcon className="w-5 h-5" />
              <span>15 comments</span>
            </div>
          </div>

          // Comment Box 
          <div className="mb-6">
            <textarea
              placeholder="Add a comment..."
              className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-white/50 min-h-[100px]"
            ></textarea>
            <div className="mt-2 flex justify-end">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm">
                Post Comment
              </button>
            </div>
          </div>

          // Static Comments 
          <div className="space-y-4">
            <div className="bg-white/50 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-gray-900">John Doe</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Great opportunity! Is this position open to international candidates?
                  </p>
                </div>
                <span className="text-xs text-gray-500">2 days ago</span>
              </div>
            </div>
            <div className="bg-white/50 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-gray-900">Sarah Smith</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    What tech stack does the team currently use?
                  </p>
                </div>
                <span className="text-xs text-gray-500">1 day ago</span>
              </div>
            </div>
          </div>
        </div> */}
      </main>
      <Footer/>
    </div>
  );
}
