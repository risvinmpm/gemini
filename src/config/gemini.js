const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey = "AIzaSyDGsiChTg2jY14wz5OOO1IPv5yBE-DM7JI";

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

async function run(prompt) {
    try {
        const chatSession = model.startChat({
            generationConfig,
            history: [],
        });

        const result = await chatSession.sendMessage(prompt);
        const responseText = await result.response.text();
        console.log(responseText);
        return responseText;
    } catch (error) {
        console.error("Error:", error.message);
        return "An error occurred while processing your request.";
    }
}

module.exports = run;
