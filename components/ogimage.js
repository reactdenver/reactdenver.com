export default function OgImage({ post }) {
  return (
    <div
      tw="w-full h-full flex flex-col items-start justify-center bg-white px-10"
      style={{ fontFamily: "Inter" }}>
      <h1 tw="mt-2 mb-3 text-3xl font-semibold tracking-tight lg:leading-snug lg:text-4xl dark:text-white">
        {post.title}
      </h1>
    </div>
  );
}
