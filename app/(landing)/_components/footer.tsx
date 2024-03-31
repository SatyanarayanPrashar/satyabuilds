"use client";

import { Github, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
    return (
        <div className="w-[100%] flex justify-between items-center mt-[60px]">
            <div className="flex gap-3">
                <a href="https://github.com/SatyanarayanPrashar" target="_blank" rel="noopener noreferrer" className="hover:text-[blue]">
                    <Github size="20px"/>
                </a>
                <a href="https://www.linkedin.com/in/satyanarayan-prashar-57a170229/" target="_blank" rel="noopener noreferrer" className="hover:text-[blue]">
                    <Linkedin size="20px"/>
                </a>
                <a href="https://twitter.com/Satya021Don" target="_blank" rel="noopener noreferrer" className="hover:text-[blue]">
                    <Twitter size="20px"/>
                </a>
            </div>
            <p>satyanarayan.pr29@gmail.com</p>
        </div>
    )
}