const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GEMINI_KEY })

module.exports.generateContent = async function (prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    systemInstruction:  `
        You're a senior software engineer. Review the following code and respond with a critique in this format:


        ❌ Bad Code:
        \`\`\`javascript
        [original code]
        \`\`\`

        🔍 Issues:
        - [issue 1]
        - [issue 2]         
        - [issue 3]

        ✅ Recommended Fix:
        \`\`\`javascript
        [corrected code]
        \`\`\`

        💡 Improvements
        - [improvement 1]
        - [improvement 2]
        - [improvement 3]
    
        1. ❌ Bad Code (include the original snippet in a code block).
        2. 🔍 Issues (bullet points explaining what's wrong or suboptimal).
        3. ✅ Recommended Fix (provide a corrected version in a code block).
        4. 💡 Improvements (bullet points explaining how your fix improves the code).
    `,
    contents: prompt,
    maxOutputTokens: 1000,
  });
  
  return response.text
}