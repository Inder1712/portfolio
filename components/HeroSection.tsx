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
      // ----------------------------
      // HERO CONTAINER LOAD ANIMATION
      // ----------------------------
      gsap.from(".hero-wrapper", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      // ----------------------------
      // PROFILE IMAGE
      // ----------------------------
      gsap.from(".hero-image", {
        scale: 0.6,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "back.out(1.7)",
      });

      // ----------------------------
      // MAIN HEADING TEXT
      // ----------------------------
      gsap.from(".hero-title", {
        x: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      // ----------------------------
      // SKILLS LIST (STAGGER)
      // ----------------------------
      gsap.from(".skill-item", {
        x: -20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        delay: 0.4,
        ease: "power2.out",
      });

      // ----------------------------
      // DESCRIPTION PARAGRAPH
      // ----------------------------
      gsap.from(".hero-description", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.6,
        ease: "power2.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="h-fit md:h-screen w-full flex items-center py-6 md:py-0">
      <div className="hero-wrapper backdrop-blur-[6px] from-white/20 to-white/5 border border-white/30 shadow-xl rounded-3xl w-[98%] md:w-[95%] max-w-8xl p-4 md:p-10">

        {/* TOP SECTION */}
        <div className="w-full h-fit bg-white/10 backdrop-blur-xl border border-white/30 shadow-xl flex flex-col lg:flex-row items-center p-4 md:p-6 gap-4 rounded-2xl">
          
          {/* IMAGE */}
          <div className="hero-image bg-red-600 rounded-full h-24 w-24 md:h-28 md:w-28 overflow-hidden">
            <img src="/background/image1.jpg" className="w-full h-full object-cover rounded-full" alt="" />
          </div>

          {/* TEXT */}
          <div className="hero-title flex items-center text-center md:text-left text-3xl md:text-6xl font-black flex-wrap gap-2 text-white text-shadow">
            HI I AM INDER
            <img src="/background/hi.gif" className="w-16 md:w-28" alt="" />
          </div>
        </div>

        {/* SKILLS + DESCRIPTION */}
        <div className="w-full h-fit bg-white/10 backdrop-blur-xl border border-white/30 shadow-xl p-4 md:p-6 rounded-2xl mt-3 md:mt-4 text-lg md:text-2xl text-shadow">
          
          <ul className="list-disc pl-6 text-white space-y-1 md:space-y-2">
            <li className="skill-item">Next.js & modern frontend development</li>
            <li className="skill-item">GSAP motion and scroll-based animations</li>
            <li className="skill-item">Backend development with Node.js & Express</li>
            <li className="skill-item">REST API design and integration</li>
            <li className="skill-item">2+ years of real-world development experience</li>
          </ul>

          <p className="hero-description text-white/90 mt-4 text-sm md:text-lg leading-relaxed">
            I strive to build digital experiences that combine strong engineering practices,
            smooth user interactions, and modern design. From concept to deployment, I focus 
            on writing clean and understandable code, optimizing performance, and delivering 
            solutions that not only look great but also perform reliably across all devices 
            and platforms.
          </p>

        </div>
      </div>
    </div>
  );
}
