import PostCard from "@/components/shared/PostCard";

const posts = [
  {
    _id: "1",
    title: "Hello World",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    author: "Sougata",
  },
  {
    _id: "2",
    title: "Great World",
    content:
      "Lorem Jipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    author: "Cape",
  },
  {
    _id: "2",
    title: "Great World",
    content:
      "Lorem Jipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    author: "Cape",
  },
  {
    _id: "2",
    title: "Great World",
    content:
      "Lorem Jipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    author: "Cape",
  },
  {
    _id: "2",
    title: "Great World",
    content:
      "Lorem Jipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    author: "Cape",
  },
];

const Page = () => {
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
        />
      ))}
    </section>
  );
};

export default Page;
