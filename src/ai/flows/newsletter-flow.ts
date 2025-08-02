'use server';
/**
 * @fileOverview A flow for handling newsletter signups.
 *
 * - newsletterFlow - A function that processes the newsletter signup.
 * - NewsletterFlowInput - The input type for the newsletterFlow function.
 * - NewsletterFlowOutput - The return type for the newsletterFlow function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const NewsletterFlowInputSchema = z.object({
  email: z.string().email().describe('The email address of the subscriber.'),
});
export type NewsletterFlowInput = z.infer<typeof NewsletterFlowInputSchema>;

const NewsletterFlowOutputSchema = z.object({
  from: z.string().email(),
  to: z.string().email(),
  subject: z.string(),
  body: z.string(),
});

export type NewsletterFlowOutput = z.infer<typeof NewsletterFlowOutputSchema>;

export async function newsletterFlow(
  input: NewsletterFlowInput
): Promise<NewsletterFlowOutput> {
  const prompt = ai.definePrompt({
    name: 'newsletterPrompt',
    input: { schema: NewsletterFlowInputSchema },
    output: { schema: NewsletterFlowOutputSchema },
    prompt: `You are a newsletter signup processor. A new user has subscribed.
Generate a structured email object for internal notification.
The user's email is {{email}}.
The email should be from newsletter@engine-os.app to newsletter@engine-os.app.
The subject should be "New Newsletter Subscriber".
The body should confirm that the user with the given email has subscribed.`,
  });

  const { output } = await prompt(input);
  return output!;
}
