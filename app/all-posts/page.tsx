import PostCard from "@/components/shared/PostCard";
import { getAllPosts } from "@/lib/actions/post.action";
import { formatDate } from "@/lib/utils";

const Page = async () => {
  const posts = await getAllPosts();

  return (
    <section className="max-w-full flex-col px-6 py-10 sm:max-w-[770px]">
      <h1 className=" text-3xl font-bold md:text-4xl">All Posts</h1>
      {posts.map((post) => (
        <PostCard
          key={post._id}
          _id={post._id}
          title={post.title}
          content={post.content}
          author={post.author}
          createdAt={formatDate(post.createdAt)}
        />
      ))}
    </section>
  );
};

export default Page;
