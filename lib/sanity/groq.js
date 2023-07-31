import { groq } from "next-sanity";

// Get all posts
export const postquery = groq`
*[_type == "post"] | order(publishedAt desc, _createdAt desc) {
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
  author-> {
    _id,
    image,
    slug,
    name
  },
}
`;
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
// Get all posts with 0..limit
export const limitquery = groq`
*[_type == "post"] | order(publishedAt desc, _createdAt desc) [0..$limit] {
  ...,
  author->,
  speaker->
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
// Get subsequent paginated posts
export const paginatedquery = groq`
*[_type == "post"] | order(publishedAt desc, _createdAt desc) [$pageIndex...$limit] {
  ...,
  author->,
  speaker->
}
`;
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

// Single Post
export const singlequery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ...,
  author->,
  "related": *[_type == "post" ] | order(publishedAt desc, _createdAt desc) [0...5] {
    title,
    slug,
    "date": coalesce(publishedAt,_createdAt),
    "image": mainImage
  },
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
export const pathquery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`;
export const patheventquery = groq`
*[_type == "event" && defined(slug.current)][].slug.current
`;
export const authorsquery = groq`
*[_type == "author" && defined(slug.current)][].slug.current
`;

export const speakersquery = groq`
*[_type == "speaker" && defined(slug.current)][].slug.current
`;

// Get Posts by Authors
export const postsbyauthorquery = groq`
*[_type == "post" && $slug match author->slug.current ] {
  ...,
  author->,
}
`;

export const eventsbyspeakerquery = groq`
*[_type == "event" && $slug match speaker->slug.current ] {
  ...,
  speaker->,
}
`;

export const searchquery = groq`*[_type == "post" && _score > 0]
| score(title match $query || excerpt match $query || pt::text(body) match $query)
| order(_score desc)
{
  _score,
  _id,
  _createdAt,
  mainImage,
  author->,
   title,
   slug
}`;
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

// Get all Authors
export const allauthorsquery = groq`
*[_type == "author"] {
 ...,
 'slug': slug.current,
}
`;

export const allspeakersquery = groq`
*[_type == "speaker"] {
 ...,
 'slug': slug.current,
}
`;
