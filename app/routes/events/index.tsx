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
  const eventsPast = events.filter(event => event.date && new Date >= new Date(event.date));
  const futureEvent = events.find(event => event.date && new Date < new Date(event.date));
  let eventsShown = eventsPast.concat((futureEvent || [])).reverse()
  if(eventsShown.length > 7) 
    eventsShown = eventsShown.slice(-7);

    console.log(events);
  
  return (
  <div className={'past-events'}>
    <h4 className={'past-events__headline'}>Events:</h4>
    {eventsShown.map(event => 
    <Link key={event.id} className={'past-event__content'} to={`./${event.slug}`}>
      <img className={'past-event__image'} src={'https://source.unsplash.com/random/400x300'} alt={event.title}></img>
      {/*=============== Image source to be changed from placeholder when available========= */}
      <div className={'past-event__text-box'}>
        <p className={'past-event__text_small'}>{typeof event.date === 'string' && format(new Date(event.date), 'EEE, MMM d, y')}</p>
        <h3 className={'past-event__text_large'}>{event.title}</h3>
        <p className={'past-event__text_small'}>{event.speakers?.map(speaker => `${speaker.name}`).join(', ')}</p>
        <p className={'past-event__text_small'}>{event.location}</p>
      </div>
    </Link>)}
  </div>
  );
}
