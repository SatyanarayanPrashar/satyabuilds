"use client"

import { Feature } from "./_components/feature";
import { Footer } from "./_components/footer";
import { Heading } from "./_components/heading";
import { useMediaQuery } from "usehooks-ts";
import React, { useState, useEffect } from "react";
import { CustomScrollbar } from "@/components/CustomScrollbar";

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
      <CustomScrollbar />
      <div className={isMobile ? "block " : "flex flex-col items-center justify-center text-center flex-1 pb-10 lg:px-[40vh] md:px-[20px] sm:px-[10px]"}>
        <Heading />
        <Feature />
        <Footer />
      </div>
    </div>
  );
}

export default MarketingPage;