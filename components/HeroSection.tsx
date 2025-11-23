"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, {
        y: -100,
        opacity: 0,
        scale: 0.8,
        duration: 1,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          end: "top 60%",
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="h-screen  flex justify-center items-center  from-purple-900 to-blue-900 text-white text-center"
    >
      <h1 className="text-5xl font-bold">Hi, I'm Inderpreet Singh</h1>
    </section>
  );
}
