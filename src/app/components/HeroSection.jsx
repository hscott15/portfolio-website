"use client"
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';


    

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
            <h1 className=" text-white mb-4 text-4xl sm:text-5xl lg:text-8xl font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-[#8a8787]" >Hey there, I'm 
                </span>
                <br></br>

                <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Haven Scott',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Software Developer',
        1000,
        'Web Developer',
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />

                
                
            </h1>
            <p className=" text-[#fafafa] text-base sm:text-lg mb-6 lg:text-xl">
            First, solve the problem. Then, write the code.
            </p>
            <div >
                <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#8a8787] via-black to-red-800 hover:bg-slate-200 text-white">Hire Me</button>
                <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#8a8787] via-black to-red-800 hover:bg-slate-800 text-white mt-3">
                    <span className="block bg-black hover:bg-slate-800 rounded-full px-5 py-2">Download Resume</span></button>
            </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">    
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative m-24">
            <Image
            src="/images/heroimage.png"
            alt = "hero image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={300}
            height={300}
            />
                  </div>  
                </div>
            </div>   
        </section>
    );
};
export default HeroSection;