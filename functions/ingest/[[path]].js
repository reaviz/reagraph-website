// PostHog ingestion proxy for Cloudflare Pages
export async function onRequest(context) {
  const url = new URL(context.request.url);
  const pathname = url.pathname.replace('/ingest', '');

  // Determine the PostHog destination
  let destination;
  if (pathname.startsWith('/static')) {
    destination = `https://us-assets.i.posthog.com${pathname}`;
  } else {
    destination = `https://us.i.posthog.com${pathname}`;
  }

  // Forward the request to PostHog
  const response = await fetch(destination, {
    method: context.request.method,
    headers: context.request.headers,
    body: context.request.method !== 'GET' && context.request.method !== 'HEAD'
      ? context.request.body
      : undefined,
  });

  // Return the response
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
  });
}
