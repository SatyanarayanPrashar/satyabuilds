"use client";

import { useState } from "react";
import { Footer } from "@/app/(landing)/_components/footer";
import { useMediaQuery } from "usehooks-ts";
import { LoadingBox } from "@/components/loading";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Resourcebox } from "../../_components/resourcebox";

const ResourcePage = () => {
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
    <div className="min-h-full flex flex-col px-[20px] text-justify bg-[white]">
      <div className={isMobile ? "block" : "flex flex-col gap-y-8 flex-1 pb-10 lg:px-[45vh] md:px-[20px] sm:px-[10px]"}>
      <motion.div
        initial={{ opacity: 0, paddingTop: "20px" }}
        whileInView={{ opacity: 1, paddingTop: "0px" }}
        transition={{ ease: "linear", duration: 1 }}
        viewport={{ margin: "-200px" }}
      >
          <>
            <h1 className="text-[40px] font-bold">Resources</h1>
            <p>Few resources I have been through & accumulated</p>
            <Resourcebox
                imgUrl="https://api-prod.treeved.com/media/list_images/Psychology-Degree.jpg"
                url="https://www.treeved.com/list/?id=psychology-resources-2295946843"
                title="Psychology Resources"
                description= "Starting psychology can be difficult. So, here's the lectures and hand written notes to make things smother. I recommend going through notes first before watching lectures."
            />
            <Resourcebox
                imgUrl="https://api-prod.treeved.com/media/list_images/a-list-of-free-and-great-courses-8538534001_rGiaFZ8.webp"
                url="https://www.treeved.com/list/?id=a-list-of-free-and-great-courses-8538534001"
                title="A List of Free and Great Courses"
                description= "Learn and build skills. Find great courses on many different topics here. "
            />
            <Resourcebox
                imgUrl="https://api-prod.treeved.com/media/list_images/ReactJS_ZcwgHOK.png"
                url="https://www.treeved.com/list/?id=react-projects-2385030935"
                title="React Projects"
                description= "31 react project ideas"
            />
            <Resourcebox
                imgUrl="https://api-prod.treeved.com/media/list_images/filename3118.png"
                url="https://www.treeved.com/list/?id=movies-to-watch-9299794790"
                title="Movies to watch"
                description= "My fav"
            />
            <Resourcebox 
                imgUrl="https://api-prod.treeved.com/media/list_images/filename2495.png"
                url="https://www.treeved.com/list/?id=books-and-podcasts-for-entrepreneurs-6713616098"
                title="Books and Podcasts for Entrepreneurs"
                description= "Hey 👋 Here are some great podcasts and books for every entrepreneurship enthusiasts, directly recommended by fellow founders. Feel free to suggest more...!!! thankyou"
            />
            
          </>
      </motion.div>
      <Footer />
      </div>
    </div>
  );
}

export default ResourcePage;