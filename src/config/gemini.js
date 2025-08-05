
import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai"
  
  const apiKey = "AIzaSyB3dGWYEKE4TpQLBH2RKZt5tc4kIuegZFI";
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
        const response = result.response;
        return response.text();
    } catch (error) {
        console.error("Error in run function:", error);
        return "An error occurred while fetching the response.";
    }
}
 export default run;


function outer(){
  let count =0;
  function inner() {
    count++;
    console.log(count)

  }
  return  inner;
}

const counter = outer();
counter();1
counter();2



