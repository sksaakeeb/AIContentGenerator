"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Supercharge Your Content with{" "}
            <span className="text-blue-600">AI Tools</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Instantly generate blog titles, SEO content, social captions, ad
            copies, and more using the power of Gemini AI — no tech skills
            needed.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/dashboard">
              <button className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">
                Try it Free
              </button>
            </Link>
            <Link href="/dashboard">
              <button className="cursor-pointer border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-6 py-3 rounded-lg font-semibold transition">
                Browse Tools
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full h-full">
          <Image
            src="/hero.jpg"
            alt="AI content generator illustration"
            width={600}
            height={400}
            className="rounded-xl shadow-md w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
