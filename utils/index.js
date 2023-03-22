import { surpriseMePrompts } from '../constants';

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriceMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  // avoid the same prompts appear two times in a row
  if (randomPormpt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}