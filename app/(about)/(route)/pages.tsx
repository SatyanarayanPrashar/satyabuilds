"use client"

import { useMediaQuery } from "usehooks-ts";

const AboutPage = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="min-h-full flex flex-col">
      <div className={isMobile ? "block" : "flex flex-col items-center justify-center text-center gap-y-8 flex-1 pb-10 px-[45vh]"}>

        <p>Designed and Built by Satya</p>

      </div>
    </div>
  );
}

export default AboutPage;