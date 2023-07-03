import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";
import { notFound } from "next/navigation";
import { PortableText } from "@/lib/sanity/plugins/portabletext";
import { urlForImage } from "@/lib/sanity/image";
import { parseISO, format } from "date-fns";
import AuthorCard from "@/components/blog/authorCard";

export default function Post(props) {
  const { loading, post } = props;

  const slug = post?.slug;

  if (!loading && !slug) {
    notFound();
  }

  const imageProps = post?.mainImage
    ? urlForImage(post?.mainImage)
    : null;

  const AuthorimageProps = post?.author?.image
    ? urlForImage(post.author.image)
    : null;

  return (
    <>
      <div className="relative z-0 flex min-h-[calc(100vh-30vh)] items-center">
        {imageProps && (
          <div className="absolute -z-10 h-full w-full before:absolute before:z-10 before:h-full before:w-full before:bg-black/30">
            <Image
              src={imageProps.src}
              alt={post.mainImage?.alt || "Thumbnail"}
              loading="eager"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        )}

        <div className="mx-auto max-w-screen-md px-5 py-20">
          <h1 className="text-brand-primary mb-3 mt-2 text-3xl font-semibold tracking-tight text-white lg:text-5xl lg:leading-tight">
            {post.title}
          </h1>

          <div className="mt-8 flex space-x-3 text-gray-500 ">
            <div className="flex flex-col gap-3 md:flex-row md:items-center">
              <div className="flex gap-3">
                <div className="relative h-5 w-5 flex-shrink-0">
                  {AuthorimageProps && (
                    <Link
                      href={`/author/${post.author.slug.current}`}>
                      <Image
                        src={AuthorimageProps.src}
                        alt={post?.author?.name}
                        className="rounded-full object-cover"
                        fill
                        sizes="100vw"
                      />
                    </Link>
                  )}
                </div>
                <p className="text-gray-100 ">
                  <Link href={`/author/${post.author.slug.current}`}>
                    {post.author.name}
                  </Link>{" "}
                  <span className="hidden pl-2 md:inline"> ·</span>
                </p>
              </div>

              <div>
                <div className="flex space-x-2 text-sm md:flex-row md:items-center">
                  <time
                    className="text-gray-100 "
                    dateTime={post?.publishedAt || post._createdAt}>
                    {format(
                      parseISO(post?.publishedAt || post._createdAt),
                      "MMMM dd, yyyy"
                    )}
                  </time>
                  <span className="text-gray-100">
                    · {post.estReadingTime || "5"} min read
                  </span>
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
            {post.body && <PortableText value={post.body} />}
          </div>
          <div className="mb-7 mt-7 flex justify-center">
            <Link
              href="/"
              className="bg-brand-secondary/20 rounded-full px-5 py-2 text-sm text-blue-600 dark:text-blue-500 ">
              ← View all posts
            </Link>
          </div>
          {post.author && <AuthorCard author={post.author} />}
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
