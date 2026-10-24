/**
 * IndexNow key file. Search engines fetch this to verify that pings sent by
 * `npm run indexnow` really come from the site owner (passed as keyLocation).
 */
export const dynamic = "force-static";

export function GET() {
  const key = process.env.INDEXNOW_KEY?.trim();
  if (!key) return new Response("Not found", { status: 404 });
  return new Response(key, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
