"use client";

import Header from "@/components/Header";
import Link from "next/link";
import { fetchJobs } from "./index";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import {
  MagnifyingGlassIcon,
  ArrowPathRoundedSquareIcon,
  ArrowPathIcon,
  FaceFrownIcon,
} from "@heroicons/react/16/solid";
import type { Job } from "@/types";

export default function JobsPageInner() {
  const searchParams = useSearchParams();

  const [title, setTitle] = useState(searchParams.get("title") || "");
  const [location, setLocation] = useState(searchParams.get("location") || "");
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [contract_type, setcontract_type] = useState("");
  const [salaryRange, setSalaryRange] = useState("");
  const [province, setProvince] = useState("");

  const currentPage = Number(searchParams.get("page") || 1);

  useEffect(() => {
    async function loadJobs() {
      setLoading(true);
      const results = await fetchJobs(
        currentPage,
        title,
        location,
        contract_type,
        salaryRange
      );
      setJobs(results);
      setLoading(false);
    }

    loadJobs();
  }, [currentPage, title, location, contract_type, salaryRange, province]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-6 flex flex-wrap md:flex-nowrap items-end gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg">
          {/* Search Bar */}
          {/* Job Title Search */}
          <div className="flex flex-col w-64 relative">
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Job title or keywords"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="pl-10 pr-3 py-2 bg-transparent border border-slate-200 rounded-md text-sm text-gray-700 focus:ring-2 focus:ring-blue-600 focus:outline-none"
            />
          </div>

          {/* Location Search */}
          <div className="flex flex-col w-64">
            <input
              type="text"
              placeholder="Town"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="px-3 py-2 bg-transparent border border-slate-200 rounded-md text-sm text-gray-700 focus:ring-2 focus:ring-blue-600 focus:outline-none"
            />
          </div>

          {/* Job Type */}
          <div className="flex flex-col w-32">
            {/* <label className="text-sm font-medium text-gray-700 mb-1">Job Type</label> */}
            <select
              value={contract_type}
              onChange={(e) => setcontract_type(e.target.value)}
              className="px-3 py-2 bg-transparent border border-slate-200 rounded-md text-sm text-gray-700 focus:ring-2 focus:ring-blue-600 focus:outline-none"
            >
              <option value="">Job Type</option>
              <option value="permanent">Permanent</option>
              <option value="part_time">Part Time</option>
              <option value="contract">Contract</option>
            </select>
          </div>

          {/* Salary Range */}
          <div className="flex flex-col w-40">
            {/* <label className="text-sm font-medium text-gray-700 mb-1">Salary Range</label> */}
            <select
              value={salaryRange}
              onChange={(e) => setSalaryRange(e.target.value)}
              className="px-3 py-2 bg-transparent border border-slate-200 rounded-md text-sm text-gray-700 focus:ring-2 focus:ring-blue-600 focus:outline-none"
            >
              <option value="">Salary Range</option>
              <option value="0-10000">Below R10,000</option>
              <option value="10000-40000">R10,000 - R40,000</option>
              <option value="40000-60000">R40,000 - R60,000</option>
              <option value="60000-80000">R60,000 - R80,000</option>
              <option value="80000+">Above 80,000</option>
            </select>
          </div>

          {/* Province */}
          <div className="flex flex-col w-40">
            {/* <label className="text-sm font-medium text-gray-700 mb-1">Province</label> */}
            <select
              value={province}
              onChange={(e) => setProvince(e.target.value)}
              className="px-3 py-2 bg-transparent border border-slate-200 rounded-md text-sm text-gray-700 focus:ring-2 focus:ring-blue-600 focus:outline-none"
            >
              <option value="">Province</option>
              <option value="gauteng">Gauteng</option>
              <option value="kwazulu-natal">KwaZulu-Natal</option>
              <option value="western-cape">Western Cape</option>
              <option value="eastern-cape">Eastern Cape</option>
              <option value="free-state">Free State</option>
              <option value="limpopo">Limpopo</option>
              <option value="mpumalanga">Mpumalanga</option>
              <option value="north-west">North West</option>
              <option value="northern-cape">Northern Cape</option>
            </select>
          </div>

          {/* Reset Button */}
          <div className="flex items-end">
            <button
              onClick={() => {
                setcontract_type("");
                setSalaryRange("");
                setProvince("");
                setTitle("");
                setLocation("");
              }}
              title="Reset Filters"
              className="p-2 hover:text-red-600 transition"
            >
              Clear Filters
              {/* <ArrowPathIcon className="w-5 h-5 text-gray-500" /> */}
            </button>
          </div>
        </div>

        <div className="md:flex md:gap-6">
          <div className="flex-1">
            <div className="space-y-3">
              {!loading && jobs.length === 0 && (
                <div className="text-center text-gray-600 py-12">
                  <div className="flex flex-col items-center justify-center gap-3">
                    <FaceFrownIcon className="h-12 w-12 text-gray-400" />
                    <p className="text-lg font-semibold">No jobs found</p>
                    <p className="text-sm text-gray-500">
                      Try adjusting your filters or search terms.
                    </p>
                  </div>
                </div>
              )}

              {!loading &&
                jobs.length > 0 &&
                jobs.map((job, index: number) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-sm p-4 rounded-lg shadow hover:translate-y-[-2px] transition-all"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-lg font-semibold text-gray-900">
                          {job.title}
                        </h2>
                        <p className="text-blue-600 mt-0.5 text-sm">
                          {job.company.display_name}
                        </p>
                        <p className="text-gray-600 mt-0.5 text-sm">
                          {job.location.display_name}
                        </p>
                        <div className="mt-2 space-x-2">
                          <span className="inline-block bg-blue-100/80 text-blue-800 text-xs px-2 py-0.5 rounded-full">
                            {job.contract_type || "N/A"}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        {job.salary_max && job.salary_max ? (
                          <>
                            <p className="text-gray-900 font-medium text-sm">
                              +R{(job.salary_max / 12).toLocaleString()}
                            </p>
                            <p className="text-gray-600 text-xs">per month</p>
                          </>
                        ) : (
                          <p className="text-sm text-gray-500">
                            Salary not disclosed
                          </p>
                        )}
                      </div>
                    </div>
                    <p className="mt-2 text-gray-600 text-sm line-clamp-2">
                      {job.description}
                    </p>
                    <div className="mt-2 flex justify-between items-center">
                      <p className="text-xs text-gray-500">
                        Posted {new Date(job.created).toLocaleDateString()}
                      </p>
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

       {jobs.length > 1 &&  <div className="mt-6 flex justify-center">
          <nav className="flex items-center space-x-2">
            <Link
              href={`?page=${
                currentPage - 1
              }&title=${title}&location=${location}`}
              className={`px-3 py-1 border rounded text-sm ${
                currentPage === 1
                  ? "text-gray-300 pointer-events-none"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Previous
            </Link>
            <span className="px-3 py-1 text-sm font-medium text-blue-700">
              {currentPage}
            </span>
            <Link
              href={`?page=${
                currentPage + 1
              }&title=${title}&location=${location}`}
              className="px-3 py-1 border rounded text-sm text-gray-600 hover:text-blue-600"
            >
              Next
            </Link>
          </nav>
        </div>}
      </div>
      <Footer />
    </div>
  );
}
