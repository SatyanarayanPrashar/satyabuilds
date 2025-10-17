"use client";

import { DisplayBox } from "@/components/displayBox"
import { cn } from "@/lib/utils";
import { Linkedin, Mail, MapPin, Twitter } from "lucide-react"
import Image from "next/image"
import { useMediaQuery } from "usehooks-ts";

export const Heading = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <div className="text-start w-full px-5 bg-white">
            <DisplayBox classname={cn("flex border rounded-xl p-4 gap-4 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-zinc-100 relative overflow-hidden border-slate-200 bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat w-full transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[1500ms]",
                isMobile && "flex-col"
            )}>
                <Image src="/profile.png" alt="profile" width={160} height={160} className="rounded-xl border border-gray-300 bg-cover mt-4"/>
                <div className="mt-4 flex flex-col">
                    <h1 className="text-3xl leading-snug">Satya</h1>
                    <div className="flex gap-2 items-center text-[#4D4D4D] text-sm">
                        Software Engineer
                    </div>
                    <div className="flex gap-2 items-center text-[#4D4D4D] text-sm mt-2">
                        <MapPin size={18}/>
                        <p>Bangalore, India</p>
                    </div>
                    <div className="flex gap-2 items-center text-[#4D4D4D] text-sm mt-2">
                        <Mail size={18}/>
                        <p>satyanarayan.pr29@gmail.com</p>
                    </div>
                    <a className="flex gap-2 items-center text-[#4D4D4D] text-sm mt-2 hover:underline w-fit" href="https://www.linkedin.com/in/satyanarayan-prashar-57a170229/" target="_blank" rel="noopener noreferrer">
                        <Linkedin size="20px"/> LinkedIn
                    </a>
                    <a className="flex gap-2 items-center text-[#4D4D4D] text-sm mt-2 hover:underline w-fit" href="https://x.com/Satya021Don" target="_blank" rel="noopener noreferrer">
                        <Twitter size="20px"/> @Satya021Don
                    </a>
                </div>
            </DisplayBox>
            
            <DisplayBox>
                <div className="flex flex-col gap-3 mt-4 text-[#4D4D4D] text-md">
                    <p>I enjoy creating things that live on the internet and sometimes in people's terminals.</p>
                    <p>You can find me building efficient RAG piplines, or systems which utilizes agent's context window to the fullest.</p>
                    <p>Heavily interested in Edtech, particullarly finding out how human brain uses patterns to learn things faster, or how can we learn to learn things faster.</p>
                </div>
            </DisplayBox>
        </div>
    )
}