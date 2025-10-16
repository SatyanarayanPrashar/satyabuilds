"use client";

import { useState, useEffect } from "react";
import { Footer } from "@/app/(landing)/_components/footer";
import { Blogbox } from "@/components/blogBox";
import { Slide } from "react-awesome-reveal";
import { useMediaQuery } from "usehooks-ts";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "@/app/firebase/config";
import Link from "next/link";
import { LoadingBox } from "@/components/loading";

type Blog = {
  title: string;
  description: string;
  content?: string;
};

const BlogsPage = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [loading, setLoading] = useState(false);

  if(loading) {
    return (
      <div className="min-h-full w-full flex justify-center items-center">
          <LoadingBox/>
      </div>
    )
  }

  return (
    <div className="min-h-screen justify-between flex flex-col gap-y-8 flex-1 pb-10 lg:px-[45vh] md:px-[20px] sm:px-[10px]">
      <div className="flex flex-col">
        <h1 className="text-[40px] font-bold">Blogs</h1>
        <Link href={"/blogs/technical/Transformers-Explained"} className="hover:bg-gray-200 mt-10 p-2 rounded-xl">
          <p className="text-xl font-medium">Transformers Explained</p>
          <p className="text-md text-gray-500">Understanding what are transformers, why we needed them, and how do they do what they do..</p>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default BlogsPage;