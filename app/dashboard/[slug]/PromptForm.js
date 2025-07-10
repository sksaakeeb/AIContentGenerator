"use client";
import { useState, useEffect } from "react";

export default function PromptForm({ prompt }) {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState("");
  const [displayedText, setDisplayedText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("");
    setDisplayedText("");

    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: `${prompt}\nUser Input: ${userInput}`,
        }),
      });

      const data = await res.json();
      setResult(data.result || "No response from Gemini");
    } catch (err) {
      setResult("Failed to fetch Gemini response");
    }

    setLoading(false);
  };

  // 💬 Typewriter animation
  useEffect(() => {
    if (!result) return;

    let i = 0;

    setDisplayedText(""); // Reset before typing
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + result.charAt(i));
      i++;
      if (i >= result.length) {
        clearInterval(interval);
      }
    }, 20); // Typing speed in ms

    return () => clearInterval(interval); // Clean up
  }, [result]);

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Enter your input"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        required
        className="w-full border rounded p-2"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate"}
      </button>

      {displayedText && (
        <div className="mt-6 bg-gray-100 p-4 rounded whitespace-pre-line">
          <h2 className="font-semibold mb-2">AI Response:</h2>
          <p>{displayedText}</p>
        </div>
      )}
    </form>
  );
}
