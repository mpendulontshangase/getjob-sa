import Header from '@/components/Header';
import Link from 'next/link';
import { ChatBubbleLeftIcon, MapPinIcon, BriefcaseIcon, CurrencyDollarIcon, ClockIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

export default function JobDetail({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link href="/jobs" className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-2">
            ← Back to Jobs
          </Link>
        </div>

        {/* Job Header */}
        <div className="bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-sm p-6 rounded-lg shadow-[0_2px_8px_-1px_rgba(0,0,0,0.1)] border border-blue-100/50">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Senior Software Engineer</h1>
              <div className="mt-2 flex items-center gap-2 text-gray-600">
                <BuildingOfficeIcon className="w-5 h-5" />
                <span className="text-blue-600">TechCorp SA</span>
              </div>
              <div className="mt-2 flex items-center gap-2 text-gray-600">
                <MapPinIcon className="w-5 h-5" />
                <span>Cape Town, Western Cape</span>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2 text-gray-600 mb-2">
                <CurrencyDollarIcon className="w-5 h-5" />
                <span className="font-medium">R50,000 - R75,000</span>
                <span className="text-sm text-gray-500">per month</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <ClockIcon className="w-5 h-5" />
                <span>Posted 2 days ago</span>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center bg-blue-100/80 text-blue-800 text-sm px-3 py-1 rounded-full">
              <BriefcaseIcon className="w-4 h-4 mr-1" />
              Full-time
            </span>
            <span className="inline-flex items-center bg-green-100/80 text-green-800 text-sm px-3 py-1 rounded-full">
              Remote
            </span>
            <span className="inline-flex items-center bg-purple-100/80 text-purple-800 text-sm px-3 py-1 rounded-full">
              Senior Level
            </span>
          </div>
        </div>

        {/* Job Description */}
        <div className="mt-6 bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-sm p-6 rounded-lg shadow-[0_2px_8px_-1px_rgba(0,0,0,0.1)] border border-blue-100/50">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Job Description</h2>
          <div className="prose prose-blue max-w-none">
            <p className="text-gray-600">
              We are looking for an experienced Software Engineer to join our growing team. You will be responsible for developing and maintaining high-quality software solutions that meet our clients' needs.
            </p>
            
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Responsibilities:</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Design and implement new features for our core products</li>
              <li>Write clean, maintainable, and efficient code</li>
              <li>Collaborate with cross-functional teams to define and implement innovative solutions</li>
              <li>Participate in code reviews and provide constructive feedback</li>
              <li>Mentor junior developers and share knowledge within the team</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Requirements:</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>5+ years of experience in software development</li>
              <li>Strong proficiency in JavaScript, TypeScript, and React</li>
              <li>Experience with Node.js and REST APIs</li>
              <li>Familiarity with cloud services (AWS, Azure, or GCP)</li>
              <li>Excellent problem-solving and communication skills</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Benefits:</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Competitive salary and performance bonuses</li>
              <li>Remote work options and flexible hours</li>
              <li>Health insurance and retirement benefits</li>
              <li>Professional development opportunities</li>
              <li>Modern equipment and software licenses</li>
            </ul>
          </div>
        </div>

        {/* Comments Section */}
        <div className="mt-6 bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-sm p-6 rounded-lg shadow-[0_2px_8px_-1px_rgba(0,0,0,0.1)] border border-blue-100/50">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Comments</h2>
            <div className="flex items-center gap-2 text-gray-600">
              <ChatBubbleLeftIcon className="w-5 h-5" />
              <span>15 comments</span>
            </div>
          </div>

          {/* Comment Input */}
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

          {/* Sample Comments */}
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
        </div>

        {/* Apply Button */}
        <div className="mt-6 flex justify-end">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium">
            Apply for this Position
          </button>
        </div>
      </main>
    </div>
  );
} 