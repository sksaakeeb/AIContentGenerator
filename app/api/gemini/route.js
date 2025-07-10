import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req) {
  const { prompt } = await req.json();

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return Response.json({ result: text });
  } catch (err) {
    console.error("Gemini API Error:", err);
    return Response.json({ result: "Error: " + err.message });
  }
}
