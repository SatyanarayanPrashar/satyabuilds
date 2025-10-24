"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function WorkCards() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 w-full z-[99998]"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[999999]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[100vh] h-full md:h-fit md:max-h-[90%] flex flex-col sm:rounded-3xl overflow-hidden bg-white"
            >
              <div className="flex gap-4 p-4">
                <motion.div layoutId={`img-${active.title}-${id}`}>
                  {active.src != "NA" ?<img
                    width={40}
                    height={40}
                    src={active.src}
                    alt={active.title}
                    className="min-h-20 min-w-20 md:h-14 md:w-14 border rounded-lg object-cover object-top"
                  />: <div className="h-20 w-20 md:h-14 md:w-14 border rounded-lg flex items-center justify-center">
                    <p className="font-bold text-blue-800 text-xl">{active.description[0]}</p>
                  </div>
                  }
                </motion.div>
                <div>
                  <motion.h3 layoutId={`title-${active.title}-${id}`} className="font-bold text-neutral-700">
                    {active.title}
                  </motion.h3>
                  <motion.p layoutId={`description-${active.description}-${id}`} className="text-neutral-600">
                    {active.description}
                    <p>{active.period}</p>
                  </motion.p>
                </div>

              </div>

              <div>
                <div className="relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto text-neutral-400 [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {active.details.map((detail, index) => (
                      <motion.p
                        key={`detail-${index}-${id}`}
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-neutral-800"
                      >
                        {detail}
                      </motion.p>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <ul className="max-w-full mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-1 sm:p-4 flex flex-row justify-between items-center hover:bg-slate-100 hover:border-[#dddddd] rounded-lg cursor-pointer"
          >
            <div className="flex gap-4">
              {/* <motion.div layoutId={`img-${card.title}-${id}`}>
                {card.src != "NA" ?<img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-20 w-20 md:h-14 md:w-14 border rounded-lg object-cover object-top"
                />: <div className="h-20 w-20 md:h-14 md:w-14 border rounded-lg flex items-center justify-center">
                  <p className="font-bold text-blue-800 text-xl">{card.description[0]}</p>
                </div>
                }
              </motion.div> */}
              <div>
                <motion.h3 layoutId={`title-${card.title}-${id}`} className="font-medium text-neutral-500 text-left">
                  {card.title}
                </motion.h3>
                <motion.p layoutId={`description-${card.description}-${id}`} className="text-neutral-800 text-left">
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button layoutId={`button-${card.title}-${id}`} className="px-4 py-2 text-sm rounded-full hover:underline text-black/50 mt-4 md:mt-0">
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "SAP",
    title: "Automation and Innovation Engineer",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1gDhu93w4QCSPMGWxzJMv8QN3tqPQe4zfuMnOo_GPdixUFBcW4FCKE4PfXrV5l-epeBg&usqp=CAU",
    ctaText: "View",
    ctaLink: "",
    period: "Jan 2025 - Current",
    details: [
      " Developed automation software to streamline repetitive workflows, enhancing operational efficiency for over 1,000 support engineers and significantly reducing manual effort",
      " Designed and implemented CaseAI, a Retrieval-Augmented Generation (RAG) based internal AI tool that processes multiple Salesforce reports to provide contextually aware & accurate support responses",
      " Scaled existing solutions to support a growing user base across multiple regions, leveraging distributed systems to ensure performance, reliability, and low-latency access"
    ]
  },
  {
    description: "Monter pvt ltd",
    title: "Frontend & UI/UX Developer Intern",
    src: "NA",
    ctaText: "View",
    ctaLink: "",
    period: "May 2024 - July 2024",
    details: [
      " Built the client facing website using NextJS, enabling investors and companies to share a common platform to expand there portfolio and connection respectively",
      " Optimised the cross-browser compatibility to support screens of all sizes, and integrated APIs with the frontend",
      " Conducted comprehensive user and competitor analysis to develop seamless UX, and created UI wireframes in Figma utilizing frames and auto-layouts"
    ]
  },
  {
    description: "TreeVed",
    title: "Product Management Intern",
    src: "https://www.treeved.com/footerLogo.png",
    ctaText: "View",
    ctaLink: "",
    period: "Jan 23 - Nov 23",
    details: [
      " Managed a team of size of 9, to build website, enabling people to discover, share and store valuable links, streamlining their internet browsing experience",
      " Worked with founders to delicate tasks of the development team working with NextJS, Django, AWS, and Flutter",
      " Prepared strategy, and road-map for the product based on market research, resources available and vision & mission of the company",
      " Documented and streamlined decision-making process, keeping user and other stakeholders at the forefront, ensuring alignment and transparency throughout the project lifecycle.",
    ]
  }
];
