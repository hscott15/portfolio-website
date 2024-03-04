
"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Python</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Node.js</li>
                <li> Web Application Development</li>
                <li>Full-Stack Development</li>

            </ul>
        )
    },
    {
        title: "Education",
        id: "Education",
        content: (
            <ul className="list-disc pl-2">
                <li>Bachelors of Science in Computer Science, Colorado State University</li>
            </ul>
        )
    },
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });

    }


    return (
        <section className="text-white" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xlLgap-16 sm:py-16 xl:px-16">
                <Image src="/images/aboutme.png" width={600} height={500} />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bond text-wwhite mb-4">About Me</h2>
                         <p className="text-base lg:text-lg">
                        Results-driven software development professional with expertise in multiple programming languages 
                        and strong communication skills to demystify technical concepts. Demonstrated ability to drive revenue 
                         growth and business expansion through strategic planning and problem-solving. Offers deep insights into
                        customer needs with a specialization in front-end development for tailored solutions. Excels in building 
                        and maintaining strong relationships with clients, colleagues, and stakeholders. Eager to leverage a blend 
                        of technical and communication skills to enhance team success.
                        </p>
                        <div className="flex flex-row justify-start mt-8">
                            <TabButton selectTab = {() => handleTabChange("skills")} 
                            active={tab === "skills"}>Skills
                            </TabButton>
                            <TabButton selectTab = {() => handleTabChange("Education")} 
                            active={tab === "Education"}>Education
                            </TabButton>
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id ===tab).content}</div>
                 </div>
                </div>
            </section>
    
    )
}

export default AboutSection