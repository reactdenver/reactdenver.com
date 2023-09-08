import Image from "next/image";
import { urlForImage } from "@/lib/sanity/image";
import { parseISO, format } from "date-fns";
import { cx } from "@/utils/all";
import Link from "next/link";

export default function Featured({ event, pathPrefix }) {
  const imageProps = event?.mainImage ? urlForImage(event?.mainImage) : null;

  const SpeakerimageProps = event?.speaker?.image
    ? urlForImage(event.speaker.image)
    : null;
  return (
    <div
      className={cx(
        "grid gap-5 md:min-h-[calc(100vh-60vh)] md:grid-cols-2 md:gap-10"
      )}
      style={{
        backgroundColor: event?.mainImage?.ImageColor || "black",
      }}
    >
      {imageProps && (
        <div className="relative aspect-video md:aspect-auto">
          <Link
            href={`/event/${pathPrefix ? `${pathPrefix}/` : ""}${
              event.slug.current
            }`}
          >
            <Image
              src={imageProps.src}
              {...(event.mainImage.blurDataURL && {
                placeholder: "blur",
                blurDataURL: event.mainImage.blurDataURL,
              })}
              alt={event.mainImage?.alt || "Thumbnail"}
              priority
              fill
              sizes="100vw"
              className="object-cover"
            />
          </Link>
        </div>
      )}

      <div className="self-center px-5 pb-10">
        <Link
          href={`/event/${pathPrefix ? `${pathPrefix}/` : ""}${
            event.slug.current
          }`}
        >
          <div className="max-w-2xl">
            <h1 className="text-brand-primary mb-3 mt-2 text-3xl font-semibold tracking-tight text-white lg:text-5xl lg:leading-tight">
              {event.title}
            </h1>

            <div className="mt-4 flex space-x-3 text-gray-500 md:mt-8 ">
              <div className="flex flex-col gap-3 md:flex-row md:items-center">
                <div className="flex items-center gap-3">
                  <div className="relative h-5 w-5 flex-shrink-0">
                    {SpeakerimageProps && (
                      <Image
                        src={SpeakerimageProps.src}
                        alt={event?.speaker?.name}
                        className="rounded-full object-cover"
                        fill
                        sizes="100vw"
                      />
                    )}
                  </div>
                  <p className="text-gray-100 ">
                    {event.speaker.name}{" "}
                    <span className="hidden pl-2 md:inline"> ·</span>
                  </p>
                </div>

                <div>
                  <div className="flex space-x-2 text-sm md:flex-row md:items-center">
                    <time
                      className="text-white"
                      dateTime={event?.publishedAt || event._createdAt}
                    >
                      {format(
                        parseISO(event?.publishedAt || event._createdAt),
                        "MMMM dd, yyyy"
                      )}
                    </time>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
