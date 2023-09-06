import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function Organizers({ organizers }) {
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        Organization Team
      </h1>

      <div className="mb-16 mt-6 grid grid-cols-3 gap-5 md:mb-32 md:mt-16 md:gap-16">
        {organizers.slice(0, 3).map((organizer) => {
          const imageProps = urlForImage(organizer?.image) || null;
          return (
            imageProps && (
              <div
                key={organizer._id}
                className="relative aspect-square overflow-hidden rounded-md odd:translate-y-10 odd:md:translate-y-16"
              >
                <Link href={`/organizer/${organizer.slug}`}>
                  <Image
                    src={imageProps.src}
                    alt={organizer.name || " "}
                    fill
                    sizes="(max-width: 320px) 100vw, 320px"
                    className="object-cover"
                  />
                  <h4 className="absolute bottom-0 w-full bg-slate-900/50 text-white text-lg font-bold p-2">
                    {organizer.name}
                  </h4>
                </Link>
              </div>
            )
          );
        })}
      </div>
    </Container>
  );
}
