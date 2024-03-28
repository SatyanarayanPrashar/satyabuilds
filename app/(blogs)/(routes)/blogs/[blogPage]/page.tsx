"use client"

import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "@/app/firebase/config";
import { Footer } from "@/app/(landing)/_components/footer";
import { Slide } from "react-awesome-reveal";
import { useMediaQuery } from "usehooks-ts";
import { LoadingBox } from "@/components/loading";
import { usePathname } from "next/navigation";

type BlogInfo = {
    title: string;
    content: string;
}

const BlogPage = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const [currentBlog, setCurrentBlog] = useState<BlogInfo | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const path = usePathname();
    
    useEffect(() => {
        const fetchCurrentBlog = async () => {
            setIsLoading(true);
            try {
                console.log(path);
                const blogId = path.replace("/blogs/", "");

                const docRef = doc(db, "blogs", blogId);
                console.log(blogId);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const blogData = docSnap.data();
                    setCurrentBlog({
                        title: blogData.title,
                        content: blogData.content
                    });
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error('Error fetching current open blog:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCurrentBlog();
    }, []);

    if(isLoading) {
        return (
          <div className="min-h-full w-full flex justify-center items-center">
              <LoadingBox/>
          </div>
        )
    }

    return (
        <div className="min-h-full flex flex-col bg-[white]">
           <div className={isMobile ? "block px-[20px]" : "flex flex-col justify-center text-start gap-y-8 flex-1 pb-10 lg:px-[48vh] md:px-[20px] sm:px-[10px]"}>
                <Slide delay={0.5} direction="up" triggerOnce={true}>
                    <h1 className="text-[40px] font-bold">{currentBlog?.title}</h1>
                    <div className="text-[#4D4D4D] text-[17px] leading-[31px] text-justify"> {currentBlog?.content} </div>
                </Slide>
                <Footer />
           </div>
        </div>
    );
}

export default BlogPage;