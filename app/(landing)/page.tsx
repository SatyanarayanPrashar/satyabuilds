"use client"

import { Feature } from "./_components/feature";
import { Footer } from "./_components/footer";
import { Heading } from "./_components/heading";
import { useMediaQuery } from "usehooks-ts";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { DisplayBox } from "@/components/displayBox";


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
      <div className={isMobile ? "block " : "flex flex-col items-center justify-center text-center gap-y-8 flex-1 pb-10 lg:px-[40vh] md:px-[20px] sm:px-[10px]"}>
        <DisplayBox> <Heading /> </DisplayBox>
        <Feature />
        <Footer />
      </div>
    </div>
  );
}

export default MarketingPage;