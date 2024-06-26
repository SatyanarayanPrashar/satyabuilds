"use client"

import { Footer } from "@/app/(landing)/_components/footer";
import { useMediaQuery } from "usehooks-ts";
import { motion } from "framer-motion";

const AboutPage = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  
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
            <h1 className="text-[40px] font-bold">About me</h1>
            <div className="text-[#4D4D4D] text-[17px] leading-[25px]">
              <p>I'm a 21 y/o frontend engineer based in Banglore, India. I'm currently pursuing Engineering at BMSIT&M. My fascination with technology knows no bounds, and I'm constantly intrigued by its evolution and its potential to shape the future.</p>
              <p className="mt-[30px]">Beside tech and academics, my interests are:</p>
              <ul className="list-disc ml-[15px]">
                  <li className="mt-[20px]"><span className="font-[600]">Psychology:</span> Exploring the complexities of the human mind is a journey I find endlessly fascinating. From understanding behavior patterns to delving into the intricacies of cognition, psychology provides invaluable insights that extend far beyond the realm of textbooks.</li>
                  <li className="mt-[20px]"><span className="font-[600]">Reading Books:</span> The lockdown period opened up a new world for me, one filled with the wisdom and imagination found within the pages of books. It all began with "The Power of Your Subconscious Mind," a transformative read that ignited my passion for self-improvement. However, it was Paulo Coelho's masterpiece, "The Alchemist," that truly captured my heart and remains my favorite to this day.</li>
                  <li className="mt-[20px]"><span className="font-[600]">Painting:</span> Amidst the chaos of life, I often retreat into the realm of art, where colors dance freely upon the canvas and emotions find expression in every brushstroke. Painting allows me to unleash my creativity and immerse myself in a world where imagination knows no bounds.</li>
              </ul>
              <p className="mt-[30px]">If you have an interesting project or if you want to collab on a hackathon or just want to say hi, feel free to reach out to me via my socials or through my mail.</p>
            </div>
          </>
      </motion.div>
      <Footer />
      </div>
    </div>
  );
}

export default AboutPage;