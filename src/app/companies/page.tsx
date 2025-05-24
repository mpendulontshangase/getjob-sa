import Header from '@/components/Header';
import Link from 'next/link';
import { MapPinIcon, BriefcaseIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

export default function CompaniesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Top Companies Hiring</h1>
          <p className="mt-2 text-gray-600">Discover great places to work in South Africa</p>
        </div>

        {/* Companies Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Company Card 1 */}
          <div className="bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-sm p-6 rounded-lg shadow-[0_2px_8px_-1px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_12px_-1px_rgba(0,0,0,0.1)] transition-all hover:translate-y-[-2px] border border-blue-100/50">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <BuildingOfficeIcon className="w-10 h-10 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">TechCorp SA</h2>
                <p className="text-gray-600 text-sm mt-1">Technology</p>
                <div className="flex items-center gap-2 mt-2 text-gray-600 text-sm">
                  <MapPinIcon className="w-4 h-4" />
                  <span>Cape Town, South Africa</span>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-600 text-sm">Leading software development company specializing in enterprise solutions and digital transformation.</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center bg-blue-100/80 text-blue-800 text-xs px-2.5 py-0.5 rounded-full">
                <BriefcaseIcon className="w-3 h-3 mr-1" />
                12 open positions
              </span>
              <span className="inline-flex items-center bg-green-100/80 text-green-800 text-xs px-2.5 py-0.5 rounded-full">
                Remote friendly
              </span>
            </div>
            <div className="mt-4">
              <Link 
                href="/companies/techcorp-sa"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                View Company Profile →
              </Link>
            </div>
          </div>

          {/* Company Card 2 */}
          <div className="bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-sm p-6 rounded-lg shadow-[0_2px_8px_-1px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_12px_-1px_rgba(0,0,0,0.1)] transition-all hover:translate-y-[-2px] border border-blue-100/50">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <BuildingOfficeIcon className="w-10 h-10 text-purple-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Brand Solutions</h2>
                <p className="text-gray-600 text-sm mt-1">Marketing & Advertising</p>
                <div className="flex items-center gap-2 mt-2 text-gray-600 text-sm">
                  <MapPinIcon className="w-4 h-4" />
                  <span>Johannesburg, South Africa</span>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-600 text-sm">Full-service marketing agency helping brands connect with their audience through innovative campaigns.</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center bg-blue-100/80 text-blue-800 text-xs px-2.5 py-0.5 rounded-full">
                <BriefcaseIcon className="w-3 h-3 mr-1" />
                8 open positions
              </span>
              <span className="inline-flex items-center bg-purple-100/80 text-purple-800 text-xs px-2.5 py-0.5 rounded-full">
                Hybrid work
              </span>
            </div>
            <div className="mt-4">
              <Link 
                href="/companies/brand-solutions"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                View Company Profile →
              </Link>
            </div>
          </div>

          {/* Company Card 3 */}
          <div className="bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-sm p-6 rounded-lg shadow-[0_2px_8px_-1px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_12px_-1px_rgba(0,0,0,0.1)] transition-all hover:translate-y-[-2px] border border-blue-100/50">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <BuildingOfficeIcon className="w-10 h-10 text-green-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Investment Corp</h2>
                <p className="text-gray-600 text-sm mt-1">Financial Services</p>
                <div className="flex items-center gap-2 mt-2 text-gray-600 text-sm">
                  <MapPinIcon className="w-4 h-4" />
                  <span>Durban, South Africa</span>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-600 text-sm">Leading investment firm providing comprehensive financial services and wealth management solutions.</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center bg-blue-100/80 text-blue-800 text-xs px-2.5 py-0.5 rounded-full">
                <BriefcaseIcon className="w-3 h-3 mr-1" />
                5 open positions
              </span>
              <span className="inline-flex items-center bg-yellow-100/80 text-yellow-800 text-xs px-2.5 py-0.5 rounded-full">
                Office based
              </span>
            </div>
            <div className="mt-4">
              <Link 
                href="/companies/investment-corp"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                View Company Profile →
              </Link>
            </div>
          </div>
        </div>

        {/* Load More Button */}
        <div className="mt-8 text-center">
          <button className="bg-white/80 backdrop-blur-sm text-blue-600 px-6 py-2 rounded-md border border-blue-600 hover:bg-blue-50 text-sm">
            Load More Companies
          </button>
        </div>
      </main>
    </div>
  );
} 