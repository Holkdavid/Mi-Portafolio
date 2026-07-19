import { siteConfig } from '$lib/data/site';

export const prerender = true;

export function GET() {
  const body = `User-agent: *
Disallow:

Sitemap: ${siteConfig.url}/sitemap.xml`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain' }
  });
}
