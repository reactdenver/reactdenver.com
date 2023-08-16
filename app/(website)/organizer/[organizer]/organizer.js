import Container from "@/components/container";
import { PortableText } from "@/lib/sanity/plugins/portabletext";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function Organizer(props) {
  console.log("props", props);
  const { organizer } = props;

  const slug = organizer?.slug;

  if (!slug) {
    notFound();
  }

  return (
    <>
      <Container>
        <div className="flex flex-col items-center justify-center">
          <div className="relative mb-16 aspect-square h-1/3 w-1/3 overflow-hidden rounded-md">
            {organizer?.image && (
              <Image
                src={urlForImage(organizer.image).src}
                alt={organizer.name || " "}
                fill
                sizes="(max-width: 320px) 100vw, 320px"
                className="object-cover"
              />
            )}
          </div>
          <h1 className="text-brand-primary mt-2 text-3xl font-semibold tracking-tight dark:text-white lg:text-3xl lg:leading-tight">
            {organizer.name}
          </h1>
          <div className="mx-auto mt-2 flex flex-col px-5 text-center text-gray-500">
            {organizer.bio && <PortableText value={organizer.bio} />}
          </div>
        </div>
      </Container>
    </>
  );
}
