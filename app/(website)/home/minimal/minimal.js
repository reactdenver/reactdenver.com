import Container from "@/components/container";
import PostList from "@/components/postlist";

export default function MinimalHome({ posts }) {
  return (
    <Container>
      <div className="flex items-center justify-center mt-5 ">
        <h1 className="text-3xl font-semibold tracking-tight lg:leading-tight text-brand-primary lg:text-5xl dark:text-white">
          Our Blog
        </h1>
      </div>
      <div className="grid gap-10 mt-14 lg:gap-10 ">
        {posts.map(post => (
          <PostList
            key={post._id}
            post={post}
            minimal={true}
            aspect="landscape"
            pathPrefix="minimal"
            fontWeight="large"
            preloadImage={true}
          />
        ))}
      </div>
    </Container>
  );
}
