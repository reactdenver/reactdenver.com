const headers = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Token token=${process.env.SECRET_ACCESS_TOKEN}`,
};

export default async function checkTitoSlug(eventId) {
  try {
    const response = await fetch(
      `https://api.tito.io/v3/react-denver/${eventId}/releases`,
      {
        headers,
      }
    );
    const json = await response.json();

    const inPersonId = json?.releases[0].id;
    const virtualId = json?.releases[1].id;

    const nextEventResponse = {
      nextEvent: eventId,
      inPerson: inPersonId,
      virtual: virtualId,
    };

    return nextEventResponse;
  } catch (err) {
    return {
      nextEvent: null,
      inPerson: 0,
      virtual: 0,
    };
  }
}
