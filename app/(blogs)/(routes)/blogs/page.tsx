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
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const q = query(collection(db, "blogs"));
        const querySnapshot = await getDocs(q);
        const blogData = querySnapshot.docs.map(doc => ({
          title: doc.id,
          description: doc.data().description,
          content: doc.data().content // Adding content if available
        }));
        setBlogs(blogData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if(loading) {
    return (
      <div className="min-h-full w-full flex justify-center items-center">
          <LoadingBox/>
      </div>
    )
  }

  return (
    <div className="min-h-full flex flex-col px-[20px] text-justify">
      <div className={isMobile ? "block" : "flex flex-col gap-y-8 flex-1 pb-10 lg:px-[45vh] md:px-[20px] sm:px-[10px]"}>
        <Slide delay={0.5} direction="up" triggerOnce={true}>
          <h1 className="text-[40px] font-bold">Blogs</h1>
          {blogs.map(blog => (
            <Link href={`/blogs/${blog.title}`}>
                <Blogbox key={blog.title} title={blog.title} description={blog.description} />
            </Link>
          ))}
        </Slide>
        <Footer />
      </div>
    </div>
  );
}

export default BlogsPage;