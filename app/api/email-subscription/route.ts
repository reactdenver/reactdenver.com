import { NextResponse } from "next/server";

const headers = {
  "Content-Type": "application/json",
};

const FORM_ID = "5204468";

export async function POST(request: Request) {
  const req = await request.json();

  const response = await fetch(
    `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`,
    {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        api_key: process.env.CONVERKIT_TOKEN,
        email: req.email,
        tags: req.tags,
        first_name: req.name.split(" ")[0],
      }),
    }
  );

  return NextResponse.json({
    ok: response.ok,
  });
}
