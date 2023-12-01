import Link from "next/link";

interface Props {
  _id: string;
  title: string;
  content: string;
  author: string;
}

const PostCard = ({ _id, title, content, author }: Props) => {
  return (
    <Link href={`/all-posts/${_id}`}>
      <div className="mt-10 max-w-full rounded-[10px] bg-zinc-50 px-8 py-8 shadow-md shadow-zinc-200">
        <h1 className="text-left text-lg font-semibold text-zinc-400 md:text-xl">
          {title}
        </h1>
        <div className="mt-5 flex max-w-full sm:w-[550px]">
          <p className="line-clamp-1 text-[12px]">{content}</p>
        </div>
        <div className="flex">
          <p className="mt-4 text-[10px] text-gray-400">
            Created by {author} | 1/12/2023
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
