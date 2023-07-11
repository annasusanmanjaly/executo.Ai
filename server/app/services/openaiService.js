const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
async function callOpenAI(goal,day) {
  try {
    const prompt = `i'm tryin to do ${goal} in ${day} days  give me the whole plan for ${day} days with each day containing 3 tasks , it should be in a json format. Give me the stringified json output without any explanation
    I'm repeating again, I don't need any explanation, only the json stringified code`

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens:400 ,
      temperature: 0,
      // stream: true
    });

    const output = response.data.choices[0].text.trim();
    return output;
  } catch (error) {
    console.error('Error in calling OpenAI API:', error.message);
    throw new Error('Failed to call OpenAI API');
  }
}

module.exports = {
  callOpenAI
};
