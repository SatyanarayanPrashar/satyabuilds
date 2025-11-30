"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Briefcase } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export const useOutsideClick = (
    ref: React.RefObject<HTMLDivElement>,
    callback: Function
) => {
    useEffect(() => {
        const listener = (event: any) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            callback(event);
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, callback]);
};

export const ExperienceSection = () => {
    const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(null);
    const ref = useRef<HTMLDivElement>(null);
    const id = useId();

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") setActive(false);
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
        <section className="py-12">
            <SectionHeading icon={Briefcase} title="Career Logs" />

            {/* Overlay */}
            <AnimatePresence>
                {active && typeof active === "object" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99998] w-full h-full"
                    />
                )}
            </AnimatePresence>

            {/* Modal */}
            <AnimatePresence>
                {active && typeof active === "object" ? (
                    <div className="fixed inset-0 grid place-items-center z-[999999] p-4">
                        <motion.button
                            key={`button-${active.title}-${id}`}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.05 } }}
                            className="flex absolute top-4 right-4 lg:hidden items-center justify-center bg-zinc-800 text-zinc-100 rounded-full h-8 w-8 z-[10000]"
                            onClick={() => setActive(null)}
                        >
                            <X size={16} />
                        </motion.button>

                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="w-full max-w-[600px] h-fit max-h-[90%] flex flex-col rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl relative"
                        >
                            {/* Header Image/Pattern */}
                            <div className="h-14 bg-gradient-to-br from-indigo-900/40 to-zinc-900 relative w-full border-b border-zinc-800">
                                <button
                                    onClick={() => setActive(null)}
                                    className="hidden lg:flex absolute top-4 right-4 bg-black/50 hover:bg-black/70 p-1 rounded-full text-zinc-400 transition-colors"
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            <div className="px-6 pt-6 pb-8 relative">
                                {/* Floating Logo */}
                                <motion.div
                                    layoutId={`img-${active.title}-${id}`}
                                    className="absolute -top-10 left-6 h-20 w-20 rounded-2xl border-4 border-zinc-900 bg-zinc-800 overflow-hidden shadow-lg flex items-center justify-center"
                                >
                                    {active.src !== "NA" ? (
                                        <img width={80} height={80} src={active.src} alt={active.title} className="object-fill p-1 h-full w-full" />
                                    ) : (
                                        <div className="text-xl font-bold text-indigo-400">{active.description.substring(0, 2)}</div>
                                    )}
                                </motion.div>

                                <div className="mt-10">
                                    <motion.h3 layoutId={`title-${active.title}-${id}`} className="text-2xl font-bold text-zinc-100">
                                        {active.title}
                                    </motion.h3>
                                    <motion.div layoutId={`description-${active.description}-${id}`} className="flex flex-wrap gap-2 text-sm text-indigo-400 mt-1 mb-4">
                                        <span className="font-medium">{active.description}</span>
                                        <span className="text-zinc-600">•</span>
                                        <span className="text-zinc-500">{active.period}</span>
                                    </motion.div>
                                </div>

                                <div className="mt-4 pt-4 border-t border-zinc-800/50">
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex flex-col gap-3 text-zinc-400 text-sm leading-relaxed h-[200px] overflow-y-auto pr-2 [scrollbar-width:thin] [scrollbar-color:#3f3f46_transparent]"
                                    >
                                        {active.details.map((detail, index) => (
                                            <div key={index} className="flex gap-3">
                                                <span className="text-indigo-500 mt-1.5">▹</span>
                                                <p>{detail}</p>
                                            </div>
                                        ))}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>

            {/* List View */}
            <ul className="flex flex-col gap-4">
                {cards.map((card) => (
                    <motion.div
                        layoutId={`card-${card.title}-${id}`}
                        key={`card-${card.title}-${id}`}
                        onClick={() => setActive(card)}
                        className="group p-4 flex justify-between items-center rounded-xl bg-zinc-900/30 border border-zinc-800/50 hover:bg-zinc-800/50 hover:border-zinc-700 cursor-pointer transition-all"
                    >
                        <div className="flex gap-4 items-center">
                            <motion.div layoutId={`img-${card.title}-${id}`} className="h-12 w-12 rounded-lg bg-zinc-800 border border-zinc-700 overflow-hidden flex items-center justify-center shrink-0">
                                {card.src !== "NA" ? (
                                    <img width={48} height={48} src={card.src} alt={card.title} className="object-fill p-1 h-full w-full" />
                                ) : (
                                    <div className="text-sm font-bold text-indigo-400 p-1">{card.description.substring(0, 6)}</div>
                                )}
                            </motion.div>

                            <div>
                                <motion.h3 layoutId={`title-${card.title}-${id}`} className="font-medium text-zinc-200 group-hover:text-indigo-400 transition-colors">
                                    {card.title}
                                </motion.h3>
                                <motion.p layoutId={`description-${card.description}-${id}`} className="text-sm text-zinc-500">
                                    {card.description}
                                </motion.p>
                            </div>
                        </div>
                        <div className="hidden sm:block">
                            <span className="px-3 py-1 text-xs rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700">{card.ctaText}</span>
                        </div>
                    </motion.div>
                ))}
            </ul>
        </section>
    );
};

const cards = [
    {
      description: "SAP",
      title: "Automation Engineer",
      src: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
      ctaText: "View",
      period: "Jan 2025 - Current",
      details: [
        "Developed automation software to streamline repetitive workflows, enhancing operational efficiency for over 1,000 support engineers.",
        "Designed and implemented CaseAI, a Retrieval-Augmented Generation (RAG) based internal AI tool that processes multiple Salesforce reports.",
        "Scaled existing solutions to support a growing user base across multiple regions, leveraging distributed systems."
      ]
    },
    {
      description: "Monter Pvt Ltd",
      title: "Frontend Developer",
      src: "NA",
      ctaText: "View",
      period: "May 2024 - July 2024",
      details: [
        "Built the client facing website using NextJS, enabling investors and companies to share a common platform.",
        "Optimised the cross-browser compatibility to support screens of all sizes, and integrated APIs with the frontend.",
        "Conducted comprehensive user and competitor analysis to develop seamless UX, creating UI wireframes in Figma."
      ]
    },
    {
      description: "TreeVed",
      title: "Product Management Intern",
      src: "https://www.treeved.com/footerLogo.png",
      ctaText: "View",
      period: "Jan 23 - Nov 23",
      details: [
        "Managed a team of 9 to build a website enabling people to discover and store valuable links.",
        "Delegated tasks to the development team working with NextJS, Django, AWS, and Flutter.",
        "Prepared strategy and road-map for the product based on market research and available resources.",
        "Documented and streamlined decision-making process, ensuring alignment and transparency."
      ]
    }
  ];