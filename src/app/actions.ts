'use server';
import {
  newsletterFlow,
  NewsletterFlowInput,
  NewsletterFlowOutput,
} from '@/ai/flows/newsletter-flow';

export async function handleNewsletterSignup(
  input: NewsletterFlowInput
): Promise<NewsletterFlowOutput> {
  return await newsletterFlow(input);
}
