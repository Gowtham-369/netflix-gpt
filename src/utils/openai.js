import OpenAI from 'openai';

const openAiClient = new OpenAI({
//   apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
});

export default openAiClient;