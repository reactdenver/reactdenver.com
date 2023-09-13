import Container from "@/components/container";
import { PortableText } from "@/lib/sanity/plugins/portabletext";
import { urlForImage } from "@/lib/sanity/image";
import EventList from "@/components/eventlist";
import Image from "next/image";
import { notFound } from "next/navigation";
import GithubSocial from "@/components/github-social";
import FacebookSocial from "@/components/facebook-social";
import InstagramSocial from "@/components/instagram-social";
import LinkedinSocial from "@/components/linkedin-social";
import XSocial from "@/components/x-social";
import YoutubeSocial from "@/components/youtube-social";

export default function Speaker(props) {
  const { events, speaker } = props;

  const slug = speaker?.slug;

  if (!slug) {
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
          <div>
            <ul className="flex items-center justify-center mb-5 mt-3">
              {speaker.social.map((social) => {
                if (social.media === "github") {
                  return <GithubSocial key={social._key} url={social.url} />;
                }
                if (social.media === "facebook") {
                  return <FacebookSocial key={social._key} url={social.url} />;
                }
                if (social.media === "instagram") {
                  return <InstagramSocial key={social._key} url={social.url} />;
                }
                if (social.media === "linkedin") {
                  return <LinkedinSocial key={social._key} url={social.url} />;
                }
                if (social.media === "x" || social.media === "twitter") {
                  return <XSocial key={social._key} url={social.url} />;
                }
                if (social.media === "youtube") {
                  return <YoutubeSocial key={social._key} url={social.url} />;
                }
              })}
            </ul>
          </div>
          <div className="mx-auto mt-2 flex flex-col px-5 text-center text-gray-500">
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
