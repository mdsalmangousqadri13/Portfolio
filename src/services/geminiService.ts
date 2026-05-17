import { GoogleGenAI } from '@google/genai';

const apiKey = process.env.GEMINI_API_KEY;

export async function reviewCode(code: string) {
  if (!apiKey) {
    throw new Error('Gemini API key is missing. Please configure it in your secrets.');
  }

  const ai = new GoogleGenAI({ apiKey });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        {
          text: `You are an expert code reviewer. Please review the following code and provide:
          1. Potential bugs or issues.
          2. Suggestions for optimization.
          3. Best practices followed or missed.
          4. Overall quality rating (1-10).
          
          Format the output in clean markdown.
          
          Code to review:
          ${code}`
        }
      ],
      config: {
        temperature: 0.7,
        topP: 0.95,
      }
    });

    return response.text;
  } catch (error) {
    console.error('Error reviewing code:', error);
    throw error;
  }
}
