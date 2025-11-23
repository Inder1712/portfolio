"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!projectsRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(projectsRef.current, {
        y: -200,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      });
    }, projectsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={projectsRef}
      className="h-screen flex flex-col justify-center items-center  text-white"
    >
      <h2 className="text-4xl font-bold mb-8">Projects</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-64 h-64 bg-pink-500 rounded-2xl flex justify-center items-center text-2xl font-bold"
          >
            Project {i + 1}
          </div>
        ))}
      </div>
    </section>
  );
}
