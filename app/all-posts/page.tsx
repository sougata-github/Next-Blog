import NoResult from "@/components/NoResult";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/actions/post.action";
import { formatDate } from "@/lib/utils";

export const dynamic = "force-dynamic";

const Page = async () => {
  const posts = await getAllPosts();

  return (
    <section className="max-w-full flex-col px-6 py-10 sm:max-w-[770px]">
      <h1
        className={`${
          posts.length < 1
            ? "text-center text-3xl font-bold md:text-4xl"
            : "text-3xl font-bold md:text-4xl"
        }`}
      >
        All Posts
      </h1>

      {posts.length > 0 ? (
        posts.map((post) => (
          <PostCard
            key={post._id}
            _id={post._id}
            title={post.title}
            content={post.content}
            author={post.author}
            createdAt={formatDate(post.createdAt)}
          />
        ))
      ) : (
        <NoResult />
      )}
    </section>
  );
};

export default Page;
