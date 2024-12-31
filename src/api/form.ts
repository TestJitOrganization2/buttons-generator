import { APP_CONFIG } from '../utils/config.ts';
import { FormData } from '../components/organisms/Form/Form';

/**
 * Sanitizes the input string by removing potentially unsafe characters.
 *
 * The following characters are removed: <, >, ;, (, ), and &.
 * This is useful for preventing injection attacks or ensuring clean input.
 *
 * @param {string} input - The string to be sanitized.
 * @returns {string} The sanitized string with unsafe characters removed.
 */
const sanitizeInput = (input: string): string => {
  return input.replace(/[<>;()&]/g, '');
};

export const submitForm = async (formData: FormData): Promise<string> => {
  const apiURL = APP_CONFIG.VITE_API_URL;
  const apiKey = APP_CONFIG.VITE_OPENAI_API_KEY;

  const { size, color, text } = formData;

  const messages = [
    {
      role: 'system',
      content:
        'You are an expert UI component designer. I want you to generate the HTML and inline CSS code for a button. Generate only the HTML code using inline CSS. Do not include any explanations in the response. Do not include any unnecessary code. Present it as a simple text, do not add html or `.',
    },
    {
      role: 'user',
      content: `The button should have the following properties: size - ${sanitizeInput(size)}, which represents how big the button should be, color - ${sanitizeInput(color)}, which represents background color of the button, text - ${sanitizeInput(text)} which is text to display in the button. Here are the specific requirements. 1. The button's background color should be the specified color, and the text color should be white. 2. The text inside the button should match the text property provided.`,
    },
  ];

  const body = {
    model: 'gpt-4o',
    messages,
  };
  const endpoint = `${apiURL}/v1/chat/completions`;

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`, // TODO: token should be retrieved from the secret storage
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(
      `Received ${response.status} response from the API. Please try again later.`,
    );
  }

  const data = await response.json();
  return data.choices[0].message.content.trim();
};
