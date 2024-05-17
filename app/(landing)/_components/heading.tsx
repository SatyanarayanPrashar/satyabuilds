"use client";

import { motion } from 'framer-motion';
import { File, Github, Linkedin, Twitter } from 'lucide-react';
import Typewriter from 'typewriter-effect';

export const Heading = () => {
    

    return (
        <div className="text-start w-full px-5 bg-white">
            <div className="text-5xl leading-snug font-extrabold transition-all duration-300 ease-in-out]">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .pauseFor(500)
                            .typeString("Satyanarayan Prashar")
                            .start();
                    }}
                />
            </div>
            
            <p className="mt-4 text-[#4D4D4D] text-[1.15rem] leading-9 font-medium">
                I enjoy creating things that live on the internet, whether that be website, or mobile application.
                My goal is to always build products that provide pixel-perfect, performant experiences.
            </p>
            <div className="flex gap-3 items-center mt-5 text-[#4D4D4D]">
                <a href="https://github.com/SatyanarayanPrashar" target="_blank" rel="noopener noreferrer" className="items-center flex gap-1 border-[#dddddd] border-[1px] rounded-lg px-3 py-1 hover:bg-slate-100">
                    <Github size="20px"/> Github
                </a>
                <a href="https://www.linkedin.com/in/satyanarayan-prashar-57a170229/" target="_blank" rel="noopener noreferrer" className="items-center flex gap-1 border-[#dddddd] border-[1px] rounded-lg px-3 py-1 hover:bg-slate-100">
                    <Linkedin size="20px"/> LinkedIn
                </a>
                <a href="https://twitter.com/Satya021Don" target="_blank" rel="noopener noreferrer" className="items-center flex gap-1 border-[#dddddd] border-[1px] rounded-lg px-3 py-1 hover:bg-slate-100">
                    <Twitter size="20px"/> X(twitter)
                </a>
                {/* <a href="satyanarayan.pdf" target="_blank" rel="noopener noreferrer" className="items-center flex gap-1 border-[#dddddd] border-[1px] rounded-lg px-3 py-1 hover:bg-slate-100">
                    <File size="20px"/> Resume
                </a> */}
            </div>
        </div>
    )
}