"use client"

export const LoadingBox = () => {
    return (
        <div>
            <img src="icon.svg" alt=""  className="h-[50px]"/>
            <div className="w-[50px] h-1 border-[1px] rounded-md overflow-hidden">
              <div className="h-full bg-[#4D4D4D] animate-loading"></div>
            </div>
        </div>
    )
}