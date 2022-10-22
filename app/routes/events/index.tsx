import { Link, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { getEventsJson } from "~/utils/events.server";
import PastEvent from "~/components/past_event";

export async function loader() {
  const events = await getEventsJson();

  return json(events, {
    headers: {
      "Cache-Control": "private, max-age=3600",
    },
  });
}

export default function Events() {
  const events = useLoaderData<typeof loader>();

  console.log(events);
  return (
  <div className={'past-event'}>
    <h4 className={'past-event__headline'}>Previous Events:</h4>
    <img className={'past-event__image'} src='' alt=''></img>
    <div className={'past-event__content'}>
      <p className={'past-event__text_small'}>date</p>
      <h3 className={'past-event__text_large'}>description</h3>
      <p className={'past-event__text_small'}>speakers</p>
      <p className={'past-event__text_small'}>location</p>
    </div>
  </div>
    // <div>
    //   <main>
    //     <h1>Events list</h1>
    //     <PastEvent />
    //     <ul>
    //       {events.map((event) => (
    //         <li>
    //           <Link to={`./${event.slug}`}>{event.title}</Link>
    //         </li>
    //       ))}
    //     </ul>
    //   </main>
    // </div>
  );
}
