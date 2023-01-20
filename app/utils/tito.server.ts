import axios from "axios";

const headers = {
  "Access-Control-Allow-Origin": "*",
  Authorization: `Token token=${process.env.SECRET_ACCESS_TOKEN}`,
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const checkSlug = async () => {
  const url = "https://api.tito.io/v3/react-denver/events";

  // get event slug
  const { data: eventData } = await axios(url, { headers });
  let sortedEvents = eventData.events.sort((first: any, second: any) =>
    new Date(first.start_date) > new Date(second.start_date)
      ? 1
      : new Date(first.start_date) < new Date(second.start_date)
      ? -1
      : 0
  );
  const nextEventSlug = sortedEvents[0].slug;

  // get releaseID
  const { data: releaseData } = await axios(
    `https://api.tito.io/v3/react-denver/${nextEventSlug}/releases`,
    { headers }
  );
  const inPersonId = releaseData.releases[0].id;
  const virtualId = releaseData.releases[1].id;

  // get question object
  // const {data: questions} = await axios(`https://api.tito.io/v3/react-denver/${nextEventSlug}/questions`, {headers})
  // console.log(questions[0].title);

  return { nextEventSlug, virtualId, inPersonId };
};

type CreateRegistrationProps = {
  name: string;
  email: string;
  releaseId: string;
  eventSlug: string;
};

export const createRegistration = async ({
  name,
  email,
  releaseId,
  eventSlug,
}: CreateRegistrationProps) => {
  try {
    const registration = {
      registration: {
        email: email,
        name: name,
        discount_code: "",
        source: "",
        notify: true,
        line_items: [{ release_id: releaseId, quantity: 1 }],
      },
    };

    const authPost = axios.create({
      baseURL: `https://api.tito.io/v3/react-denver/${eventSlug}`,
      headers: headers,
    });

    const response = await authPost.post("/registrations", registration);
    const registrationData = response.data;
    // console.log("data", registrationData.registration.name);

    let message = "";
    if (registrationData.registration.tickets) {
      message = registrationData.registration.tickets[0].unique_url;
    }
    return message;
  } catch (error) {
    if (error && axios.isAxiosError(error)) {
      console.log(error.response);
    }
    return "Woops things didn't go as planned";
  }
};
