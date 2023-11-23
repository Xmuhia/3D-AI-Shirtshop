import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const router = express.Router();

const apiKey = process.env.OPENAI_API_KEY;
const openAi = new OpenAI({ apiKey });

router.route('/').get((req, res) => {
  res.status(200).json({ message: "Hello from DALL.E ROUTES" });
});

router.route('/').post(async (req, res) => {
  try {
    // Extract prompt from the request body
    const { prompt } = req.body;

    // Ensure prompt is provided
    if (!prompt) {
      return res.status(400).json({ message: 'Prompt is required' });
    }

    const response = await openAi.images.generate({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json',
    });

    const image = response.data[0].b64_json;

    

    res.status(200).json({ photo: image });

    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Something went wrong', error: error.message });
    }

});

export default router;
