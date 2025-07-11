"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Templates from "@/app/(data)/Templates";

function Dashboard() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTools = Templates.filter((tool) =>
    `${tool.name} ${tool.slug} ${tool.category} ${tool.desc}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="px-10 pt-6">
        {/* 🔍 Search Bar */}
        <input
          type="text"
          placeholder="Search tools..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-6"
        />
      </div>

      <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredTools.length > 0 ? (
          filteredTools.map((tool) => (
            <div
              key={tool.slug}
              onClick={() => router.push(`/dashboard/${tool.slug}`)}
              className="cursor-pointer border rounded p-4 hover:bg-gray-100 transition"
            >
              <img src={tool.icon} alt={tool.name} className="w-10 h-10 mb-2" />
              <h2 className="text-lg font-semibold">{tool.name}</h2>
              <p className="text-sm text-gray-600">{tool.desc}</p>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No results found.
          </p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
