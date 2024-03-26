import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export const Sides = () => {

    return (
        <aside>
            <div className="flex justify-between px-[20px] absolute w-[100%] h-[100%]">
            <div className="h-[100%] flex flex-col justify-end items-center gap-y-[17px]">
                <Twitter />
                <Linkedin />
                <Github />
                <div className="bg-black h-[20%] w-[1.5px]"></div>
            </div>
            <div className="h-[100%] w-[15px] flex flex-col justify-end items-center gap-y-[120px]">
                <div className="rotate-90 font-[500]">satyanarayan.pr29@gmail.com</div>
                <div className="bg-black h-[7%] w-[1.5px]"></div>
            </div>
        </div>
        </aside>
    )
}