import Container from "@/components/container";
import EventList from "@/components/eventlist";

export default function AltHome({ events }) {
  return (
    <>
      <Container>
        <div className="grid ">
          {events.slice(0, 1).map(event => (
            <EventList
              key={event._id}
              event={event}
              minimal={true}
              aspect="landscape"
              fontWeight="large"
              preloadImage={true}
            />
          ))}
        </div>
        <div className="grid gap-10 mt-20 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 ">
          {events.slice(1).map(event => (
            <EventList key={event._id} event={event} aspect="square" />
          ))}
        </div>
      </Container>
    </>
  );
}
