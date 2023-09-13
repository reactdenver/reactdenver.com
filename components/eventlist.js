import Image from "next/image";
import Link from "next/link";
import { cx } from "@/utils/all";
import { urlForImage } from "@/lib/sanity/image";
import { parseISO, format } from "date-fns";
import { PhotoIcon } from "@heroicons/react/24/outline";

export default function EventList({
  event,
  aspect,
  minimal,
  pathPrefix,
  preloadImage,
  fontSize,
  fontWeight,
}) {
  const imageProps = event?.mainImage ? urlForImage(event.mainImage) : null;
  const SpeakerimageProps = event?.speaker?.image
    ? urlForImage(event.speaker.image)
    : null;
  return (
    <>
      <div
        className={cx(
          "group cursor-pointer",
          minimal && "grid gap-10 md:grid-cols-2"
        )}
      >
        <div
          className={cx(
            " overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800"
          )}
        >
          <Link
            className={cx(
              "relative block",
              aspect === "landscape"
                ? "aspect-video"
                : aspect === "custom"
                ? "aspect-[5/4]"
                : "aspect-square"
            )}
            href={`/event/${pathPrefix ? `${pathPrefix}/` : ""}${
              event.slug.current
            }`}
          >
            {imageProps ? (
              <Image
                src={imageProps.src}
                {...(event.mainImage.blurDataURL && {
                  placeholder: "blur",
                  blurDataURL: event.mainImage.blurDataURL,
                })}
                alt={event.mainImage.alt || "Thumbnail"}
                priority={preloadImage ? true : false}
                className="object-cover transition-all"
                fill
                sizes="(max-width: 768px) 30vw, 33vw"
              />
            ) : (
              <span className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-gray-200">
                <PhotoIcon />
              </span>
            )}
          </Link>
        </div>

        <div className={cx(minimal && "flex items-center")}>
          <div>
            <h2
              className={cx(
                fontSize === "large"
                  ? "text-2xl"
                  : minimal
                  ? "text-3xl"
                  : "text-lg",
                fontWeight === "normal"
                  ? "line-clamp-2 font-medium  tracking-normal text-black"
                  : "font-semibold leading-snug tracking-tight",
                "mt-2    dark:text-white"
              )}
            >
              <Link
                href={`/event/${pathPrefix ? `${pathPrefix}/` : ""}${
                  event.slug.current
                }`}
              >
                <span className="hover:text-blue-500">{event.title}</span>
              </Link>
            </h2>

            <div className="hidden">
              {event.excerpt && (
                <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                  <Link
                    href={`/event/${pathPrefix ? `${pathPrefix}/` : ""}${
                      event.slug.current
                    }`}
                    legacyBehavior
                  >
                    {event.excerpt}
                  </Link>
                </p>
              )}
            </div>

            <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
              <Link
                href={`/speaker/${event.speaker.slug.current}`}
                legacyBehavior
              >
                <div className="flex items-center gap-3">
                  <div className="relative h-5 w-5 flex-shrink-0">
                    {event.speaker.image && (
                      <Image
                        src={SpeakerimageProps.src}
                        loader={SpeakerimageProps.loader}
                        alt={event?.speaker?.name}
                        className="rounded-full object-cover"
                        fill
                        sizes="20px"
                      />
                    )}
                  </div>
                  <span className="truncate text-sm">{event.speaker.name}</span>
                </div>
              </Link>
              <span className="text-xs text-gray-300 dark:text-gray-600">
                &bull;
              </span>
              <time
                className="truncate text-sm"
                dateTime={event?.eventAt}
              >
                {format(
                  parseISO(event?.eventAt),
                  "MMMM dd, yyyy"
                )}
              </time>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
