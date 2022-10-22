import { Link, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { getEventsJson } from "~/utils/events.server";
import { format } from 'date-fns';

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

  // console.log(format(new Date(events[0].date), 'EEE, MMM d, y'));
  
  return (
  <div className={'past-events'}>
    <h4 className={'past-events__headline'}>Previous Events:</h4>
    {events.map(event => 
    <Link key={event.id} className={'past-event__content'} to={`./${event.slug}`}>
      <img className={'past-event__image'} src={'https://source.unsplash.com/random/400x300'} alt={event.title}></img>
      {/*=============== Image source to be changed from placeholder when available========= */}
      <div className={'past-event__text-box'}>
        <p className={'past-event__text_small'}>{typeof event.date === 'string' && format(new Date(event.date), 'EEE, MMM d, y')}</p>
        <h3 className={'past-event__text_large'}>{event.title}</h3>
        <p className={'past-event__text_small'}>{event.speakers?.map(speaker => `${speaker.name}`)}</p>
        <p className={'past-event__text_small'}>{event.location}</p>
      </div>
    </Link>)}
  </div>
  );
}
