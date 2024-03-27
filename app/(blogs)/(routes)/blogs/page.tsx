"use client"

import { Footer } from "@/app/(landing)/_components/footer";
import { Blogbox } from "@/components/blogBox";
import { Slide } from "react-awesome-reveal";
import { useMediaQuery } from "usehooks-ts";

const BlogsPage = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  
  return (
    <div className="min-h-full flex flex-col px-[20px] text-justify">
      <div className={isMobile ? "block" : "flex flex-col gap-y-8 flex-1 pb-10 px-[45vh]"}>
        <Slide delay={0.5} direction="up" triggerOnce={true}>
          <h1 className="text-[40px] font-bold">Blogs</h1>
          <Blogbox title={"Product Management"} description={"Here are my thoughts on Product Management, Why I choose it and later moved out..."} />
        </Slide>
        <Footer />
      </div>
    </div>
  );
}

export default BlogsPage;