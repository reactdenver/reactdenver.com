import Container from "@/components/container";
import EventList from "@/components/eventlist";
import Featured from "@/components/featured";

export default function HomeLifeStyle({ events }) {
  const featuredEvents = events.filter(item => item.featured) || null;

  return (
    <>
      {featuredEvents && featuredEvents.length && (
        <Featured event={featuredEvents[0]} pathPrefix="lifestyle" />
      )}

      <Container large>
        {featuredEvents.length > 4 && (
          <>
            <div className="flex items-center justify-center mt-10">
              <h2 className="text-2xl">
                <strong>Featured</strong> Events
              </h2>
            </div>
            <div className="grid gap-10 mt-10 mb-20 lg:gap-10 md:grid-cols-3 lg:grid-cols-4 ">
              {featuredEvents.slice(1, 2).map(event => (
                <div
                  className="md:col-span-2 md:row-span-2"
                  key={event._id}>
                  <EventList
                    event={event}
                    preloadImage={true}
                    pathPrefix="lifestyle"
                    fontSize="large"
                    aspect="custom"
                    fontWeight="normal"
                  />
                </div>
              ))}
              {featuredEvents.slice(2, 6).map(event => (
                <EventList
                  key={event._id}
                  event={event}
                  aspect="landscape"
                  pathPrefix="lifestyle"
                  fontWeight="normal"
                  preloadImage={true}
                />
              ))}
            </div>
          </>
        )}

        <div className="flex items-center justify-center mt-4">
          <h3 className="text-2xl">
            <strong>Our</strong> Latest
          </h3>
        </div>
        <div className="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-4 ">
          {events.map(event => (
            <EventList
              key={event._id}
              event={event}
              fontWeight="normal"
              pathPrefix="lifestyle"
              aspect="square"
            />
          ))}
        </div>
      </Container>
    </>
  );
}
