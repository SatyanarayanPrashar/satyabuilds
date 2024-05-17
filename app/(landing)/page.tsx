"use client"

import { Feature } from "./_components/feature";
import { Footer } from "./_components/footer";
import { Heading } from "./_components/heading";
import { useMediaQuery } from "usehooks-ts";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";


const MarketingPage = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const data = ["raise equity", "raise debt", "buy and sell"];
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [data]);

  return (
    <div className="min-h-full flex flex-col bg-[white]">
      <div className={isMobile ? "block " : "flex flex-col items-center justify-center text-center gap-y-8 flex-1 pb-10 lg:px-[45vh] md:px-[20px] sm:px-[10px]"}>

      <div className="text-5xl leading-snug font-extrabold flex gap-2 justify-start items-start w-[45rem] bg-red-200">
        We help you{" "}
        <motion.span
          key={index}
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          {data[index]}
        </motion.span>
      </div>

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