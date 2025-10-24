"use client";
import { useMediaQuery } from "usehooks-ts";

interface ProjectBoxProps {
    title: string;
    description: string | null;
    link: string | null;
    techStack: string[] | [];
}

export const Projectbox = ( {title, description, link, techStack } : ProjectBoxProps ) => {
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <div className={isMobile ? "flex w-full bg-white border-[#dddddd] border-[1px] rounded-lg flex-col p-4 hove:bg-slate-100"
            : "flex justify-between w-full bg-white border-[#dddddd] border-[1px] rounded-lg flex-col p-4 hove:bg-slate-100"}>
            <>
                <p className="font-[600]">{title}</p>
                <p className="text-[#4D4D4D] leading-[1.7rem] mt-[5px]">{description}</p>
                {techStack && techStack.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-3">
                        {techStack.map((tech, index) => (
                            <div key={index} className="py-[2px] px-2 bg-slate-100 rounded-lg text-sm">{tech}</div>
                        ))}
                    </div>
                )}
            </>
            {link && (
                <a href={link} target="blank" className="text-sm hover:underline hover:text-blue mt-3 w-fit p-2 pb-0">visit</a>
            )}
        </div>
    )
}