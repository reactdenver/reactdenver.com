/**
 * This code is responsible for revalidating the cache when a post is updated.
 *
 * It is set up to receive a validated GROQ-powered Webhook from Sanity.io:
 * https://www.sanity.io/docs/webhooks
 *
 * 1. Go to the API section of your Sanity project on sanity.io/manage or run `npx sanity hook create`
 * 2. Click "Create webhook"
 * 3. Set the Name & Description
 * 4. Set the URL to https://YOUR_NEXTJS_SITE_URL/api/revalidate
 * 5. Choose Dataset to "production" or choose the one you prefer.
 * 6. Trigger on: "Create", "Update", and "Delete"
 * 7. Set Filter: _type == "post"
 * 8. Projection: Leave empty
 * 9. Status: Keep it enabled
 * 10. HTTP method: POST
 * 11. HTTP Headers: Leave empty
 * 12. API version: v2021-03-25
 * 13. Include drafts: No
 * 14. Secret: Set to the same value as SANITY_REVALIDATE_SECRET (create a random one if you haven't)
 * 15. Save the cofiguration
 * 16. Add the secret to Vercel: `npx vercel env add SANITY_REVALIDATE_SECRET`
 * 17. Redeploy with `npx vercel --prod` to apply the new environment variable
 */

import type { NextApiRequest, NextApiResponse } from "next";
import { parseBody } from "next-sanity/webhook";
import { SanityDocument } from "@sanity/types";
export { config } from "next-sanity/webhook";

export default async function revalidate(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { body, isValidSignature } = await await parseBody(
      req,
      process.env.SANITY_REVALIDATE_SECRET
    );
    if (isValidSignature === false) {
      const message = "Invalid signature";
      console.log(message);
      return res.status(401).send(message);
    }
    const sanityBody = body as SanityDocument & {
      slug: { current: string };
    };

    if (
      typeof sanityBody.slug.current !== "string" ||
      !sanityBody.slug.current
    ) {
      const invalidSlug = "Invalid slug";
      console.error(invalidSlug, { sanityBody });
      return res.status(400).send(invalidSlug);
    }

    const staleRoutes = [`/post/${sanityBody.slug.current}`, "/"];
    await Promise.all(
      staleRoutes.map(route => res.revalidate(route))
    );

    const updatedRoutes = `Updated routes: ${staleRoutes.join(", ")}`;
    console.log(updatedRoutes);
    return res.status(200).send(updatedRoutes);
  } catch (err) {
    console.error(err);
    return res.status(500).send(err.message);
  }
}
