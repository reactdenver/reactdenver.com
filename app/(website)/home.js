import Link from "next/link";
import Container from "@/components/container";
import EventList from "@/components/eventlist";
import Featured from "@/components/featured";
import EventSignup from "@/components/event-signup";
export default function Event({ events }) {
  return (
    <>
      {events && (
        <Container>
          <div className="flex ">
            {events.slice(0, 1).map((event) => (
              <Featured key={event._id} event={event} pathPrefix="lifestyle" />
            ))}
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
            {events.slice(1, 14).map((event) => (
              <EventList key={event._id} event={event} aspect="square" />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/archive"
              className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300"
            >
              <span>View all Events</span>
            </Link>
          </div>
        </Container>
      )}
    </>
  );
}
