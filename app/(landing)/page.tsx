"use client"

import { Feature } from "./_components/feature";
import { Footer } from "./_components/footer";
import { Heading } from "./_components/heading";
import { useMediaQuery } from "usehooks-ts";
import { Slide } from "react-awesome-reveal";

const MarketingPage = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="min-h-full flex flex-col bg-[white]">
      <div className={isMobile ? "block " : "flex flex-col items-center justify-center text-center gap-y-8 flex-1 pb-10 lg:px-[45vh] md:px-[20px] sm:px-[10px]"}>
        <Slide delay={0.5} direction="up" triggerOnce={true}>
          <Heading />
          <Feature />
        </Slide>
        <Footer />
      </div>
    </div>
  );
}

export default MarketingPage;