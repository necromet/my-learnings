import { marked } from 'marked';

export function renderChatContent(rawText) {
  // Customize marked for inline math, if needed
  return marked.parse(rawText);
}