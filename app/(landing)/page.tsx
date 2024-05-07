"use client"

import { Feature } from "./_components/feature";
import { Footer } from "./_components/footer";
import { Heading } from "./_components/heading";
import { useMediaQuery } from "usehooks-ts";
import { motion } from "framer-motion";

const MarketingPage = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="min-h-full flex flex-col bg-[white]">
      <div className={isMobile ? "block " : "flex flex-col items-center justify-center text-center gap-y-8 flex-1 pb-10 lg:px-[45vh] md:px-[20px] sm:px-[10px]"}>
        <motion.div
        initial={{ opacity: 0, paddingTop: "20px" }}
        whileInView={{ opacity: 1, paddingTop: "0px" }}
        transition={{ ease: "linear", duration: 1 }}
        viewport={{ margin: "-200px" }}
        >
          <Heading />
        </motion.div>
        <Feature />
        <Footer />
      </div>
    </div>
  );
}

export default MarketingPage;