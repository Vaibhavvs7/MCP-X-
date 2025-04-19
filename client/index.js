require("dotenv").config();
const readLine = require("readline/promises");
const { GoogleGenAI } = require("@google/genai");
const { type } = require("os");

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const chatHistory = [];
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});
async function chatLoop() {
  const question = await rl.question("You: ");

  chatHistory.push({ role: "user", parts: [{ text: question, type: "text" }] });
  const response = await ai.models.generateContent({
    model: "gemini-1.5-flash",
    contents: chatHistory,
  });

  const responseText = response.candidates[0].content.parts[0].text;
  chatHistory.push({
    role: "model",
    parts: [
        {
            text: responseText,
            type: "text",
        }
    ]
  });

  console.log(`AI: ${responseText}`);
  chatLoop();
}

chatLoop();
