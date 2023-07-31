import Container from "@/components/container";
import { PortableText } from "@/lib/sanity/plugins/portabletext";
import { urlForImage } from "@/lib/sanity/image";
import EventList from "@/components/eventlist";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function Speaker(props) {
  const { loading, events, speaker } = props;

  const slug = speaker?.slug;

  if (!loading && !slug) {
    notFound();
  }

  return (
    <>
      <Container>
        <div className="flex flex-col items-center justify-center">
          <div className="relative h-20 w-20 overflow-hidden rounded-full">
            {speaker?.image && (
              <Image
                src={urlForImage(speaker.image).src}
                alt={speaker.name || " "}
                fill
                sizes="(max-width: 320px) 100vw, 320px"
                className="object-cover"
              />
            )}
          </div>
          <h1 className="text-brand-primary mt-2 text-3xl font-semibold tracking-tight dark:text-white lg:text-3xl lg:leading-tight">
            {speaker.name}
          </h1>
          <div className="mx-auto mt-2 flex max-w-xl flex-col px-5 text-center text-gray-500">
            {speaker.bio && <PortableText value={speaker.bio} />}
          </div>
        </div>
        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
          {events.map((event) => (
            <EventList key={event._id} event={event} aspect="square" />
          ))}
        </div>
      </Container>
    </>
  );
}
