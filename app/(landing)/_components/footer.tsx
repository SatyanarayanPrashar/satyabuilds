"use client";

import { Github, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
    return (
        <div className="w-[95%] flex justify-between items-center mt-[60px]">
            <div className="flex gap-3">
                <Github size="20px"/>
                <Linkedin size="20px"/>
                <Twitter size="20px"/>
            </div>
            <p>satyanarayan.pr29@gmail.com</p>
        </div>
    )
}