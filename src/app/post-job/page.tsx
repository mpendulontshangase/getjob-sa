"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import { BuildingOfficeIcon, BriefcaseIcon, MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

// Common input class to avoid repetition
const inputClass = "w-full rounded-md border-2 border-blue-100 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white/50 px-4 py-3 text-base hover:border-blue-200 transition-colors";
const selectClass = "w-full rounded-md border-2 border-blue-100 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white/50 px-4 py-3 text-base hover:border-blue-200 transition-colors";
const textareaClass = "w-full rounded-md border-2 border-blue-100 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white/50 px-4 py-3 text-base hover:border-blue-200 transition-colors";

export default function PostJobPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    companyWebsite: '',
    jobTitle: '',
    jobType: 'Full-time',
    experienceLevel: 'Entry Level',
    salaryMin: '',
    salaryMax: '',
    location: '',
    description: '',
    requirements: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement job posting functionality
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-sm rounded-lg shadow-[0_2px_8px_-1px_rgba(0,0,0,0.1)] border border-blue-100/50 p-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Post a New Job</h1>
            <p className="mt-2 text-gray-600">Fill in the details below to post your job listing</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Company Information */}
            <div className="bg-white/50 rounded-lg p-6 space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <BuildingOfficeIcon className="h-6 w-6 text-blue-600" />
                <h2 className="text-lg font-semibold text-gray-900">Company Information</h2>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="company-name" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    id="company-name"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Tech Solutions Ltd"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="company-website" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Website
                  </label>
                  <input
                    type="url"
                    id="company-website"
                    value={formData.companyWebsite}
                    onChange={(e) => setFormData({ ...formData, companyWebsite: e.target.value })}
                    placeholder="https://www.example.com"
                    className={inputClass}
                  />
                  <p className="mt-2 text-sm text-gray-500">Optional, but recommended</p>
                </div>
              </div>
            </div>

            {/* Job Details */}
            <div className="bg-white/50 rounded-lg p-6 space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <BriefcaseIcon className="h-6 w-6 text-blue-600" />
                <h2 className="text-lg font-semibold text-gray-900">Job Details</h2>
              </div>

              <div>
                <label htmlFor="job-title" className="block text-sm font-medium text-gray-700 mb-2">
                  Job Title <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="text"
                  id="job-title"
                  value={formData.jobTitle}
                  onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                  placeholder="e.g. Senior Software Engineer"
                  className={inputClass}
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="job-type" className="block text-sm font-medium text-gray-700 mb-2">
                    Job Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    id="job-type"
                    value={formData.jobType}
                    onChange={(e) => setFormData({ ...formData, jobType: e.target.value })}
                    className={selectClass}
                  >
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Contract</option>
                    <option>Internship</option>
                    <option>Remote</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="experience-level" className="block text-sm font-medium text-gray-700 mb-2">
                    Experience Level <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    id="experience-level"
                    value={formData.experienceLevel}
                    onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                    className={selectClass}
                  >
                    <option>Entry Level</option>
                    <option>Mid Level</option>
                    <option>Senior Level</option>
                    <option>Executive</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <CurrencyDollarIcon className="h-5 w-5 text-gray-400" />
                  <h3 className="text-sm font-medium text-gray-700">Salary Range (Annual)</h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="salary-min" className="block text-sm font-medium text-gray-700 mb-2">
                      Minimum (R) <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="number"
                      id="salary-min"
                      min="0"
                      step="1000"
                      value={formData.salaryMin}
                      onChange={(e) => setFormData({ ...formData, salaryMin: e.target.value })}
                      placeholder="e.g. 300000"
                      className={inputClass}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="salary-max" className="block text-sm font-medium text-gray-700 mb-2">
                      Maximum (R) <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="number"
                      id="salary-max"
                      min="0"
                      step="1000"
                      value={formData.salaryMax}
                      onChange={(e) => setFormData({ ...formData, salaryMax: e.target.value })}
                      placeholder="e.g. 500000"
                      className={inputClass}
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <MapPinIcon className="h-5 w-5 text-gray-400" />
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                    Location <span className="text-red-500">*</span>
                  </label>
                </div>
                <input
                  required
                  type="text"
                  id="location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="e.g. Cape Town, Western Cape (or Remote)"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Job Description <span className="text-red-500">*</span>
                </label>
                <p className="text-sm text-gray-500 mb-2">
                  Provide a detailed description of the role, responsibilities, and what success looks like
                </p>
                <textarea
                  required
                  id="description"
                  rows={6}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe the role, day-to-day responsibilities, and what success looks like in this position..."
                  className={textareaClass}
                ></textarea>
              </div>

              <div>
                <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-2">
                  Requirements <span className="text-red-500">*</span>
                </label>
                <p className="text-sm text-gray-500 mb-2">
                  List the required skills, qualifications, and experience
                </p>
                <textarea
                  required
                  id="requirements"
                  rows={4}
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  placeholder="List required skills, qualifications, and experience..."
                  className={textareaClass}
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-between pt-6">
              <p className="text-sm text-gray-500">
                <span className="text-red-500">*</span> Required fields
              </p>
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium text-base"
              >
                Post Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 