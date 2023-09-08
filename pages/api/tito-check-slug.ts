
export default async function (req, res) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Token token=${process.env.SECRET_ACCESS_TOKEN}`,
  };
  const nextEventSlug = req.query.eventId;
    const releaseDate: any = fetch(
      `https://api.tito.io/v3/react-denver/${nextEventSlug}/releases`,
      { headers: headers }
    )
      .then((response) => response.json())
      .then((json) => {
        const inPersonId = json?.releases[0].id;
        const virtualId = json?.releases[1].id;

        const nextEventResponse = {
          nextEvent: nextEventSlug,
          inPerson: inPersonId,
          virtual: virtualId,
        };
        res.status(200).json(nextEventResponse);
    })
    .catch((error) => {
      res.json(error);
      res.status(500).end();
    });
  res.status(200);
}
