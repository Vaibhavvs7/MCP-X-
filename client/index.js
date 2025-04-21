import {config}  from "dotenv";
import readLine from "readline/promises";
import { GoogleGenAI } from "@google/genai";
import {Client} from "@modelcontextprotocol/sdk/client/index.js";
import {SSEClientTransport} from "@modelcontextprotocol/sdk/client/sse.js";

config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const mcpClient = new Client({
  name:"example-client",
  version:"1.0.0",
});

const chatHistory = [];
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

mcpClient.connect(new SSEClientTransport(new URL("http://localhost:3001/sse")))
.then(async() => {
  console.log("Connected to mcpserver");
  const tools = (await mcpClient.listTools()).tools;
  console.log("Available tools:",tools);
})


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
