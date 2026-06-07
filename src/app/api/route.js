/*{import { GoogleGenAI } from "@google/genai";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY });

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-1.5-flash",
    contents: prompt,
  });
  return response.response.text();
  
}

export default main;
}*/

// src/app/api/generate/route.js
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req) {
  const { title } = await req.json();
  const ai = new GoogleGenerativeAI({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY
    ,
  });

  const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent(
    `Generate a blog post based on the title: "${title}"`
  );

  const text = result.response.candidates?.[0]?.content?.parts?.[0]?.text || "No content generated.";
  return Response.json({ content: text });
}
