export default async function (req, res) {
  const { registrationData, nextEvent } = JSON.parse(req.body);
  const registrationDataToSend = { registration: registrationData };

  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Token token=${process.env.SECRET_ACCESS_TOKEN}`,
  };

  try {
    const response = await fetch(
      `https://api.tito.io/v3/react-denver/${nextEvent}/registrations`,
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(registrationDataToSend),
      }
    )
      .then((response) => response.json())
      .then((json) => {
        res.status(201).json({
          ticket: json.registration.tickets[0].unique_url,
        });
      })
      .catch((error) => {
        console.log(`there was an error ${error}`);
      });
  } catch (error) {
    console.log(`Something went wrong`);
  }
}
