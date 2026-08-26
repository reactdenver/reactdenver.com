import Container from "@/components/container";
import EventAlt from "@/components/eventalt";

export default function HomeTwoCol({ events }) {
  return (
    <>
      <div className="mx-auto flex max-w-5xl flex-col px-8 pb-16 pt-14 sm:px-10 lg:px-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            Our Events
          </h1>
          <h2 className="mt-6 px-10 text-xl font-medium text-gray-500">
            This is where we talk react &amp; share our ideas.
          </h2>
        </div>
      </div>
      <Container alt={true}>
        <div className="hidden lg:block lg:px-12">
          <h3 className="font-medium text-gray-600">Most Recent</h3>
        </div>
        <div className="grid gap-10 lg:mt-5 lg:gap-12 lg:px-12">
          {events.slice(0, 1).map((event) => (
            <EventAlt
              key={event._id}
              event={event}
              aspect="landscape"
              featured={true}
              preloadImage={true}
            />
          ))}
        </div>
        <div className="mt-10 hidden lg:block lg:px-12">
          <h3 className="font-medium text-gray-600">Earlier Events</h3>
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:mt-5 lg:gap-12 lg:gap-y-16 lg:px-12">
          {events.slice(1).map((event) => (
            <EventAlt key={event._id} event={event} aspect="landscape" />
          ))}
        </div>
      </Container>
    </>
  );
}
