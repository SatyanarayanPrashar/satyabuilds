"use client";

import { Menu } from "lucide-react";
export const NavbarMobile = () => {

    return (
        <div className="z-50 bg-white fixed top-0 flex items-center justify-between w-full p-6">
            <div>Recruto</div>
            <Menu onClick={()=>{}}/>
        </div>
    )
}