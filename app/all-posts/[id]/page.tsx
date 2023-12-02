import { getPostById } from "@/lib/actions/post.action";
import { formatDate } from "@/lib/utils";

const Page = async ({ params }: any) => {
  const post = await getPostById({ postId: params.id });

  return (
    <section className="dark:text-light-100 max-w-full flex-col p-10 text-left md:max-w-[770px] lg:px-6">
      <div className="flex flex-col items-start gap-6">
        <h1 className="text-3xl font-bold capitalize md:text-4xl">
          {post.title}
        </h1>
        <div className="flex text-[15px]">
          <p className="capitalize text-gray-400">
            Created by {post.author} | {formatDate(post.createdAt)}
          </p>
        </div>
      </div>
      <div className="">
        <p className="text-md mt-8 flex">{post.content}</p>
      </div>
    </section>
  );
};

export default Page;
