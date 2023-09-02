export default async function (req, res) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Token token=${process.env.SECRET_ACCESS_TOKEN}`,
  };

  await fetch("https://api.tito.io/v3/react-denver/events", {
    headers: headers,
  })
    .then((response) => response.json())
    .then((json) => {
      let sortedEvents = json.events.sort((first, second) =>
        new Date(first.start_date) > new Date(second.start_date)
          ? 1
          : new Date(first.start_date) < new Date(second.start_date)
          ? -1
          : 0
      );
      const nextEventSlug = sortedEvents[0].slug;
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
    })
    .catch((error) => {
      res.json(error);
      res.status(500).end();
    });
}
