import Container from "@/components/container";
import EventList from "@/components/eventlist";

export default function MinimalHome({ events }) {
  return (
    <Container>
      <div className="mt-5 flex items-center justify-center ">
        <h1 className="text-brand-primary text-3xl font-semibold tracking-tight dark:text-white lg:text-5xl lg:leading-tight">
          Our Events
        </h1>
      </div>
      <div className="mt-14 grid gap-10 lg:gap-10 ">
        {events.map((event) => (
          <EventList
            key={event._id}
            event={event}
            minimal={true}
            aspect="landscape"
            pathPrefix="minimal"
            fontWeight="large"
            preloadImage={true}
          />
        ))}
      </div>
    </Container>
  );
}
