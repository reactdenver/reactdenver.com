import { Link, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { getEventsJson } from "~/utils/events.server";

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

  // Will need to add a filter to show past events and one future event

  console.log(events);
  
  return (
  <div className={'past-events'}>
    <h4 className={'past-events__headline'}>Previous Events:</h4>
    {events.map(event => 
    <Link key={event.id} className={'past-event__content'} to={`./${event.slug}`}>
      <img className={'past-event__image'} src='https://picsum.photos/400/300' alt=''></img>
      {/*=============== Image source to be changed when available from mdx========= */}
      <div className={'past-event__text-box'}>
        <p className={'past-event__text_small'}>{new Date(event.date).toDateString()}</p>
        <h3 className={'past-event__text_large'}>{event.title}</h3>
        <p className={'past-event__text_small'}>{event.speakers?.map(speaker => `${speaker.name}`)}</p>
        <p className={'past-event__text_small'}>{event.location}</p>
      </div>
    </Link>)}
  </div>
  );
}
