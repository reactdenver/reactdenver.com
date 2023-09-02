import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";
import EventSignup from "@/components/event-signup";
import { notFound } from "next/navigation";
import { PortableText } from "@/lib/sanity/plugins/portabletext";
import { urlForImage } from "@/lib/sanity/image";
import { parseISO, format } from "date-fns";
import SpeakerCard from "@/components/blog/speakerCard";

export default function Event(props) {
  //const [showForm, setShowForm] = useState();
  const { loading, event } = props;

  const checkEventDatePast = (eventDate) => {
    const today = new Date();
    const event = new Date(eventDate);
    return event.setHours(0, 0, 0, 0) <= today.setHours(0, 0, 0, 0);
  };

  const dateInPast = checkEventDatePast(event.eventAt);

  const slug = event?.slug;

  if (!loading && !slug) {
    notFound();
  }

  const imageProps = event?.mainImage ? urlForImage(event?.mainImage) : null;

  const SpeakerimageProps = event?.speaker?.image
    ? urlForImage(event.speaker.image)
    : null;

  return (
    <>
      <Container className="!pt-0">
        <div className="mx-auto max-w-screen-md ">
          <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
            {event.title}
          </h1>

          <div className="mt-3 flex justify-center space-x-3 text-gray-500 ">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 flex-shrink-0">
                {SpeakerimageProps && (
                  <Link href={`/speaker/${event.speaker.slug.current}`}>
                    <Image
                      src={SpeakerimageProps.src}
                      alt={event?.speaker?.name}
                      className="rounded-full object-cover"
                      fill
                      sizes="40px"
                    />
                  </Link>
                )}
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-400">
                  <Link href={`/speaker/${event.speaker.slug.current}`}>
                    {event.speaker.name}
                  </Link>
                </p>
                <div className="flex items-center space-x-2 text-sm">
                  <time
                    className="text-gray-500 dark:text-gray-400"
                    dateTime={event?.eventAt || event._createdAt}
                  >
                    {format(
                      parseISO(event?.eventAt || event._createdAt),
                      "MMMM dd, yyyy"
                    )}
                  </time>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
        {imageProps && (
          <Image
            src={imageProps.src}
            alt={event.mainImage?.alt || "Thumbnail"}
            loading="eager"
            fill
            sizes="100vw"
            className="object-cover"
          />
        )}
      </div>

      <Container>
        <article className="mx-auto max-w-screen-md ">
          {!dateInPast && <EventSignup event={event} />}
          <div className="prose mx-auto my-3 dark:prose-invert prose-a:text-blue-600">
            {event.body && <PortableText value={event.body} />}
          </div>
          <div className="mb-7 mt-7 flex justify-center">
            <Link
              href="/"
              className="bg-brand-secondary/20 rounded-full px-5 py-2 text-sm text-blue-600 dark:text-blue-500 "
            >
              ← View all talks
            </Link>
          </div>
          {event.speaker && <SpeakerCard speaker={event.speaker} />}
        </article>
      </Container>
    </>
  );
}
