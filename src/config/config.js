import { GoogleGenAI } from '@google/genai';

const GEMINI_API_KEY = "api key"

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

const modelName = 'gemini-2.5-flash';

// /**
//  * Sends a prompt to the Gemini model (simple text generation).
//  * @param {string} prompt The user's text prompt.
//  * @returns {Promise<string>} The model's text response.
//  */
export default async function generateText(prompt) {
  try {
    const response = await ai.models.generateContent({
      model: modelName,
      contents: prompt,
    });

    return response.text; // Extract the clean text output

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error: Could not connect to the AI model.";
  }
}
