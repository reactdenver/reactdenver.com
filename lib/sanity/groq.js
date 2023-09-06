import { groq } from "next-sanity";

export const eventquery = groq`
*[_type == "event"] | order(publishedAt desc, _createdAt desc) {
  _id,
  _createdAt,
  publishedAt,
  mainImage {
    ...,
    "blurDataURL":asset->metadata.lqip,
    "ImageColor": asset->metadata.palette.dominant.background,
  },
  featured,
  excerpt,
  slug,
  title,
  speaker-> {
    _id,
    image,
    slug,
    name
  },
}
`;

export const limiteventquery = groq`
*[_type == "event"] | order(publishedAt desc, _createdAt desc) [0..$limit] {
  ...,
  author->,
  speaker->
}
`;
// [(($pageIndex - 1) * 10)...$pageIndex * 10]{

export const paginatedeventsquery = groq`
*[_type == "event"] | order(publishedAt desc, _createdAt desc) [$pageIndex...$limit] {
  ...,
  speaker->
}
`;

// Get Site Config
export const configQuery = groq`
*[_type == "settings"][0] {
  ...,
}
`;

export const singleeventquery = groq`
*[_type == "event" && slug.current == $slug][0] {
  ...,
  speaker->,
  "related": *[_type == "event" ] | order(publishedAt desc, _createdAt desc) [0...5] {
    title,
    slug,
    "date": coalesce(publishedAt,_createdAt),
    "image": mainImage
  },
}
`;

// Paths for generateStaticParams
export const patheventquery = groq`
*[_type == "event" && defined(slug.current)][].slug.current
`;

export const speakersquery = groq`
*[_type == "speaker" && defined(slug.current)][].slug.current
`;

export const organizersquery = groq`
*[_type == "organizer" && defined(slug.current)][].slug.current
`;

export const eventsbyspeakerquery = groq`
*[_type == "event" && $slug match speaker->slug.current ] {
  ...,
  speaker->,
}
`;

export const searcheventquery = groq`*[_type == "event" && _score > 0]
| score(title match $query || excerpt match $query || pt::text(body) match $query)
| order(_score desc)
{
  _score,
  _id,
  _createdAt,
  mainImage,
  speaker->,
   title,
   slug
}`;

export const allspeakersquery = groq`
*[_type == "speaker"] {
 ...,
 'slug': slug.current,
}
`;

export const organizerquery = groq`
*[_type == "organizer" && $slug == slug.current ] {
  ...,
  'slug': slug.current
}
`;

export const allorganizersquery = groq`
*[_type == "organizer"] {
 ...,
 'slug': slug.current,
}
`;
