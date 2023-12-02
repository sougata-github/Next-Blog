"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { createPost } from "@/lib/actions/post.action";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  title: z.string().min(2).max(60),
  content: z.string().min(10),
});

const Page = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      title: "",
      content: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      await createPost({
        author: values.name,
        title: values.title,
        content: values.content,
        path: pathname,
      });
      form.reset();
      router.push("/all-posts");
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="flex max-w-full flex-col px-10 py-10 sm:px-6 ">
      <h1 className="text-3xl font-bold md:text-4xl">Create a Post</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-5 flex max-w-full flex-col gap-5"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md dark:text-light-100 text-gray-600">
                  Author<span>*</span>
                </FormLabel>
                <FormControl className="mt-5">
                  <Input
                    className="dark:dark-gradient-input flex rounded-[5px] border-none bg-zinc-200 py-4 text-left placeholder:text-gray-500 sm:py-6"
                    {...field}
                    placeholder="Enter you name"
                    required
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel className="text-md dark:text-light-100 text-gray-600">
                  Title<span>*</span>
                </FormLabel>
                <FormControl className="mt-5">
                  <Input
                    className="dark:dark-gradient-input flex rounded-[5px] border-none bg-zinc-200 py-4 text-left placeholder:text-gray-500 sm:py-6"
                    {...field}
                    placeholder="Title of your story"
                    required
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel className="text-md dark:text-light-100 text-gray-600">
                  Write your Blog<span>*</span>
                </FormLabel>
                <FormControl className="mt-5">
                  <Textarea
                    className="dark:dark-gradient-input flex rounded-[5px] border-none bg-zinc-200 py-4 text-left placeholder:text-gray-500 sm:py-6"
                    {...field}
                    cols={80}
                    rows={4}
                    required
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            disabled={isSubmitting}
            className="primary-gradient w-fit rounded-[5px] py-2 text-white "
          >
            {isSubmitting ? "Submitting" : "Submit"}
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default Page;
