import OpenAI from "openai";
import 'dotenv/config';

const client = new OpenAI({ 
    apiKey: process.env.OPENAI_API_KEY,
    dangerouslyAllowBrowser: true // Only use this for development/testing!
});

export async function chatOpenAI(input){
    const response = await client.responses.create({
        model: "gpt-4.1-nano",
        input: input
    });

    return response.output_text;
};
