import type { APIRoute } from 'astro';
import { SITES } from '../lib/sites';

/* robots.txt — AI-crawler-friendly.
   Explicitly allows the major AI/LLM crawlers and points to the sitemap so
   assistants can discover the methodology and (eventually) report pages. */
export const GET: APIRoute = () => {
  const body = `# ${SITES.testing} — Charcoal Hub Testing
# Charcoal testing methodology and (data-pending) test reports.
# Content is openly crawlable by search and AI crawlers.

User-agent: *
Allow: /

# --- AI / LLM crawlers: explicitly allowed ---
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Perplexity-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: CCBot
Allow: /

User-agent: Bytespider
Allow: /

User-agent: Amazonbot
Allow: /

User-agent: cohere-ai
Allow: /

User-agent: Meta-ExternalAgent
Allow: /

User-agent: YouBot
Allow: /

User-agent: DuckAssistBot
Allow: /

Sitemap: ${SITES.testing}/sitemap-index.xml
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
