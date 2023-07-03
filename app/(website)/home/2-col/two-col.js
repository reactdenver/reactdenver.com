import Container from "@/components/container";
import PostAlt from "@/components/postalt";

export default function HomeTwoCol({ posts }) {
  return (
    <>
      <div className="flex flex-col max-w-5xl px-8 pb-16 mx-auto pt-14 sm:px-10 lg:px-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
            Our Blog
          </h1>
          <h2 className="px-10 mt-6 text-xl font-medium text-gray-500">
            This is where we talk things &amp; speak our mind.
          </h2>
        </div>
      </div>
      <Container alt={true}>
        <div className="hidden lg:px-12 lg:block">
          <h3 className="font-medium text-gray-600">Most Recent</h3>
        </div>
        <div className="grid gap-10 lg:mt-5 lg:gap-12 lg:px-12">
          {posts.slice(0, 1).map(post => (
            <PostAlt
              key={post._id}
              post={post}
              aspect="landscape"
              featured={true}
              preloadImage={true}
            />
          ))}
        </div>
        <div className="hidden mt-10 lg:px-12 lg:block">
          <h3 className="font-medium text-gray-600">
            Earlier Articles
          </h3>
        </div>
        <div className="grid gap-10 mt-10 lg:mt-5 lg:gap-12 lg:gap-y-16 md:grid-cols-2 lg:px-12">
          {posts.slice(1).map(post => (
            <PostAlt key={post._id} post={post} aspect="landscape" />
          ))}
        </div>
      </Container>
    </>
  );
}
