import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";
import { notFound } from "next/navigation";
import { PortableText } from "@/lib/sanity/plugins/portabletext";
import { urlForImage } from "@/lib/sanity/image";
import { parseISO, format } from "date-fns";
import SpeakerCard from "@/components/blog/speakerCard";

export default function Event(props) {
  const { loading, event } = props;

  const slug = event?.slug;

  if (!loading && !slug) {
    notFound();
  }

  const imageProps = event?.mainImage
    ? urlForImage(event?.mainImage)
    : null;

  const SpeakerimageProps = event?.speaker?.image
    ? urlForImage(event.speaker.image)
    : null;

  return (
    <>
      <div className="relative z-0 flex min-h-[calc(100vh-30vh)] items-center">
        {imageProps && (
          <div className="absolute -z-10 h-full w-full before:absolute before:z-10 before:h-full before:w-full before:bg-black/30">
            <Image
              src={imageProps.src}
              alt={event.mainImage?.alt || "Thumbnail"}
              loading="eager"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        )}

        <div className="mx-auto max-w-screen-md px-5 py-20">
          <h1 className="text-brand-primary mb-3 mt-2 text-3xl font-semibold tracking-tight text-white lg:text-5xl lg:leading-tight">
            {event.title}
          </h1>

          <div className="mt-8 flex space-x-3 text-gray-500 ">
            <div className="flex flex-col gap-3 md:flex-row md:items-center">
              <div className="flex gap-3">
                <div className="relative h-5 w-5 flex-shrink-0">
                  {SpeakerimageProps && (
                    <Link href={`/speaker/${event.speaker.slug.current}`}>
                      <Image
                        src={SpeakerimageProps.src}
                        alt={event?.speaker?.name}
                        className="rounded-full object-cover"
                        fill
                        sizes="100vw"
                      />
                    </Link>
                  )}
                </div>
                <p className="text-gray-100 ">
                  <Link href={`/speaker/${event.speaker.slug.current}`}>
                    {event.speaker.name}
                  </Link>{" "}
                  <span className="hidden pl-2 md:inline"> ·</span>
                </p>
              </div>

              <div>
                <div className="flex space-x-2 text-sm md:flex-row md:items-center">
                  <time
                    className="text-gray-100 "
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
      </div>

      {/* {post?.mainImage && <MainImage image={post.mainImage} />} */}
      <Container>
        <article className="mx-auto max-w-screen-md ">
          <div className="prose prose-lg mx-auto my-3 dark:prose-invert prose-a:text-blue-500">
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

const MainImage = ({ image }) => {
  return (
    <div className="mb-12 mt-12 ">
      <Image {...urlForImage(image)} alt={image.alt || "Thumbnail"} />
      <figcaption className="text-center ">
        {image.caption && (
          <span className="text-sm italic text-gray-600 dark:text-gray-400">
            {image.caption}
          </span>
        )}
      </figcaption>
    </div>
  );
};
