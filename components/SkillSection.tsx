"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SkillsSection() {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!skillsRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(skillsRef.current, {
        y: 200,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      });
    }, skillsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={skillsRef}
      className="h-screen flex flex-col justify-center items-center  text-white"
    >
      <h2 className="text-4xl font-bold mb-6">Skills</h2>
      {["React", "Next.js", "GSAP", "Tailwind"].map((skill, i) => (
        <div key={i} className="w-80 h-6 bg-gray-600 rounded-full my-2">
          <div className="h-6 bg-green-500 rounded-full w-3/4"></div>
        </div>
      ))}
    </section>
  );
}
