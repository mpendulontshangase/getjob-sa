"use client";

import React from "react";

export default function OurOffer() {
  return (
    <div className="mt-16 bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900">What We Offer</h2>
          <p className="mt-2 text-gray-600 text-base">
            GetEmployedSA is more than just a job portal. Here's how we support
            your career journey.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Wide Range of Jobs",
              desc: "Discover thousands of listings across all industries, roles, and experience levels.",
            },
            {
              title: "Real-Time Updates",
              desc: "We fetch new jobs daily from verified sources so you never miss an opportunity.",
            },
            {
              title: "Easy Application",
              desc: "Apply directly through our platform with just a click—no complicated forms.",
            },
            {
              title: "Job Alerts",
              desc: "Set custom alerts and get notified instantly when matching jobs are posted.",
            },
            {
              title: "Mobile Friendly",
              desc: "Browse and apply on the go using your phone or tablet without limitations.",
            },
            {
              title: "Community Support",
              desc: "Join our growing network of job seekers and get helpful tips and resources.",
            },
            {
              title: "Reactions & Comments",
              desc: "Engage with job posts by liking and commenting to share your thoughts and questions.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-blue-50/50 p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
