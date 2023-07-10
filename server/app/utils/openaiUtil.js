// openaiUtils.js
// Any utility functions or helper methods related to OpenAI integration can be defined here
// Example utility function:
function formatResponse(response) {
  try {
    const formattedResponse = response.map((dayResponse) => {
      return dayResponse.choices.map((choice) => choice.text.trim());
    });

    return formattedResponse;
  } catch (error) {
    console.error('Error in formatting OpenAI response:', error);
    throw new Error('Failed to format OpenAI response');
  }
}
  
  module.exports = {
    formatResponse,
  };
  