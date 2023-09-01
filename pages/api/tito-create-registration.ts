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
      .then((response) => {
        //const responseData = response;
        console.log("responseData", response);
        res.status(200).json({
          response: "submitting in the api",
        });
      })
      .catch((error) => {
        console.log(`there was an error ${error}`);
      });
  } catch (error) {
    console.log(`Something went wrong`);
  }
}
