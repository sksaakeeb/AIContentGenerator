"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Templates from "@/app/(data)/Templates";

function Dashboard() {
  const router = useRouter();

  return (
    <div>
      <div>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Templates.map((tool) => (
            <div
              key={tool.slug}
              onClick={() => router.push(`/dashboard/${tool.slug}`)}
              className="cursor-pointer border rounded p-4 hover:bg-gray-100 transition"
            >
              <img src={tool.icon} alt={tool.name} className="w-10 h-10 mb-2" />
              <h2 className="text-lg font-semibold">{tool.name}</h2>
              <p className="text-sm text-gray-600">{tool.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
