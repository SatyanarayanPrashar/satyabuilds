"use client"

import { Feature } from "./_components/feature";
import { Footer } from "./_components/footer";
import { Heading } from "./_components/heading";
import { useMediaQuery } from "usehooks-ts";

const MarketingPage = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="min-h-full flex flex-col">
      <div className={isMobile ? "block" : "flex flex-col items-center justify-center text-center gap-y-8 flex-1 pb-10 px-[45vh]"}>
        <Heading />
        <Feature />
        {/* <p>Designed and Built by Satya</p> */}
        <Footer />
      </div>
    </div>
  );
}

export default MarketingPage;