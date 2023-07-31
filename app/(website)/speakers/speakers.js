import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function Speakers({ speakers, settings }) {
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        Speakers
      </h1>

      <div className="mb-16 mt-6 grid grid-cols-3 gap-5 md:mb-32 md:mt-16 md:gap-16">
        {speakers.slice(0, 3).map((speaker) => {
          const imageProps = urlForImage(speaker?.image) || null;
          return (
            imageProps && (
              <div
                key={speaker._id}
                className="relative aspect-square overflow-hidden rounded-md odd:translate-y-10 odd:md:translate-y-16"
              >
                <Link href={`/speaker/${speaker.slug}`}>
                  <Image
                    src={imageProps.src}
                    alt={speaker.name || " "}
                    fill
                    sizes="(max-width: 320px) 100vw, 320px"
                    className="object-cover"
                  />
                </Link>
              </div>
            )
          );
        })}
      </div>

      <div className="prose mx-auto mt-14 text-center dark:prose-invert">
        <p>Some really cool text about the meetup and the events</p>
        <p>More cool text highlighting the speakers</p>
        <p>
          <Link href="/contact">Want to become a speaker? Lets talk!</Link>
        </p>
      </div>
    </Container>
  );
}
