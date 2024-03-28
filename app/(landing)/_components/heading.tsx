"use client";
import Typewriter from 'typewriter-effect';

export const Heading = () => {
    return (
        <div className="text-start w-full px-5 bg-white">
            <div className="text-5xl leading-snug font-extrabold transition-all duration-300 ease-in-out]">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .pauseFor(500)
                            .typeString("Satyanarayan Prahar")
                            .start();
                    }}
                />
            </div>
            {/* <h1 className="text-5xl leading-snug font-extrabold transition-all duration-300 ease-in-out]">Satyanarayan Prashar</h1> */}
            <p className="mt-4 text-[#4D4D4D] text-[1.15rem] leading-9 font-medium">
                I enjoy creating things that live on the internet, whether that be website, or mobile application.
                My goal is to always build products that provide pixel-perfect, performant experiences.
            </p>
        </div>
    )
}