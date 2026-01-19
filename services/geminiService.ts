
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

const SYSTEM_INSTRUCTION = `
You are a professional, calm, and reassuring AI dental assistant for Elite Dental Clinic.
Your goal is to help patients with:
1. Answering treatment questions (implants, root canals, hygiene, etc).
2. Explaining procedures simply and medically accurately.
3. Sharing approximate cost ranges (always mention these are estimates and final quotes require a physical exam).
4. Providing timings (Mon-Sat, 9AM to 7PM) and directions (located at 123 Medical Center Way, Suite 400).
5. Assisting with the booking process.

Tone: Professional, clinical yet warm, efficient. No emojis.
If the user asks something non-dental, politely redirect them to how Elite Dental Clinic can help with their oral health.
`;

export async function getChatResponse(history: Message[]) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    
    // Convert history to Gemini format
    const contents = history.map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: contents as any,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request right now. Please call us directly.";
  } catch (error) {
    console.error("Chat Error:", error);
    return "I'm having trouble connecting. Please feel free to call our reception at (555) 0123.";
  }
}
