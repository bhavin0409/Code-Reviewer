const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GEMINI_KEY })

module.exports.generateContent = async function (userCode) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    systemInstruction: `
        You are an expert software engineer. Review the following code for:
        1. Syntax errors
        2. Logic or runtime issues
        3. Code readability and maintainability
        4. Performance optimizations
        5. Security vulnerabilities
        6. Suggestions for improvement

        Return the feedback in structured JSON format with:
        - category
        - issue
        - explanation
        - suggested_fix
    `,
    contents: [
      {
        role: "user",
        parts: [
          {
            text: `Please review the following JavaScript code:\n\n\`\`\`javascript\n${userCode}\n\`\`\``
          }
        ]
      }
    ],
    maxOutputTokens: 1000,
  });

  return response.text;
};
