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

const formSchema = z.object({
  name: z.string().min(2).max(50),
  title: z.string().min(5).max(60),
  content: z.string().min(10),
});

function onSubmit(values: z.infer<typeof formSchema>) {
  console.log(values);
}

const Page = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      title: "",
    },
  });

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
              <FormItem className="">
                <FormLabel className="text-md text-gray-600 ">
                  Author<span>*</span>
                </FormLabel>
                <FormControl className="mt-5">
                  <Input
                    className="flex rounded-[5px] border-none bg-zinc-200 py-4 text-left placeholder:text-gray-500 sm:py-6"
                    {...field}
                    placeholder="Enter you name"
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
                <FormLabel className="text-md text-gray-600 ">
                  Title<span>*</span>
                </FormLabel>
                <FormControl className="mt-5">
                  <Input
                    className="flex rounded-[5px] border-none bg-zinc-200 py-4 text-left placeholder:text-gray-500 sm:py-6"
                    {...field}
                    placeholder="Title of your story"
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
                <FormLabel className="text-md text-gray-600">
                  Write your Blog<span>*</span>
                </FormLabel>
                <FormControl className="mt-5">
                  <Textarea
                    className="flex rounded-[5px] border-none bg-zinc-200 py-4 text-left placeholder:text-gray-500 sm:py-6"
                    {...field}
                    cols={80}
                    rows={4}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button className="w-fit rounded-[5px] bg-orange-500  py-2 text-white hover:bg-orange-200 hover:text-white">
            Submit
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default Page;
