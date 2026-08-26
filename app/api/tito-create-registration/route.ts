import { NextResponse } from "next/server";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Token token=${process.env.SECRET_ACCESS_TOKEN}`,
};

export async function POST(request: Request) {
  const req = await request.json();
  const { registrationData, nextEvent } = req;
  const registrationDataToSend = { registration: registrationData };

  const response = await fetch(
    `https://api.tito.io/v3/react-denver/${nextEvent}/registrations`,
    {
      method: "POST",
      headers: headers,
      body: JSON.stringify(registrationDataToSend),
    }
  );
  const json = await response.json();

  return NextResponse.json({
    ticket: json.registration.tickets[0].unique_url,
  });
}
