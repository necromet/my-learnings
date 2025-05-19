import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config({ path: './.env' });

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post('/chat', async (req, res) => {
  try {
    const userMessage = req.body.message;
    const response = await openai.chat.completions.create({
      model: 'gpt-4.1-nano',
      messages: [
        { 
          role: 'user', 
          content: userMessage 
        }
      ],
    });

    const reply = response.choices[0].message.content;

    if (!reply) {
      return res.status(500).json({ error: 'No response from OpenAI.' });
    }

    res.json({ reply });
  } catch (error) {
    console.error(error);
    
    if (!res.headersSent) {
      res.status(500).json({error: error.message});
    }
  }
});

console.log("OpenAI Key Loaded:", process.env.OPENAI_API_KEY);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`OpenAI backend listening at http://localhost:${port}`);
});
