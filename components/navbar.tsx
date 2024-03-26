"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export const Navbar = () => {
    const path = usePathname();

    return (
        <div className="z-50 bg-white fixed top-0 flex items-center justify-between w-full p-6 px-[47vh] border-b-[1px]">
            <div className="font-[600] text-[20px]">Satya</div>
            <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-[7vh]">
                <div className={path == "/" ? "bg-slate-100 border-[#dddddd] px-2 py-1 rounded-md" : ""}>
                    <Link href={"/"}>
                        Home
                    </Link>
                </div>
                <div className={path == "/about" ? "bg-slate-100 border-[#dddddd] px-2 py-1 rounded-md" : ""}>
                    <Link href={"/about"}>
                        About
                    </Link>
                </div>
                <div className={path == "/blog" ? "bg-slate-100 border-[#dddddd] px-2 py-1 rounded-md" : ""}>
                    <Link href={"/blog"}>
                        Blog
                    </Link>
                </div>
            </div>    
        </div>
    )
}