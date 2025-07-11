"use client";
import React from "react";

function About() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          About Our Platform
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          We built this AI-powered content generator to help creators,
          marketers, and entrepreneurs save time and create better content —
          faster. Whether you're drafting a blog title, writing social captions,
          or creating SEO descriptions, our tools simplify the process using
          Gemini AI.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Powered by AI
            </h3>
            <p className="text-gray-600">
              Built on top of Google's Gemini, our tools deliver creative and
              high-quality content in seconds.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              No Coding Needed
            </h3>
            <p className="text-gray-600">
              Our simple UI lets anyone use AI content tools — from bloggers to
              marketers and founders.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Built for Speed
            </h3>
            <p className="text-gray-600">
              Generate ready-to-use titles, hashtags, captions, or emails
              instantly — no waiting or lag.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
