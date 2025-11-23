"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contactRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(contactRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      });
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={contactRef}
      className="h-screen flex flex-col justify-center items-center  text-white"
    >
      <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
      <p className="text-lg mb-6 text-center max-w-lg">
        Reach out via email or LinkedIn. Let's collaborate on awesome projects!
      </p>
      <div className="flex gap-6">
        <a
          href="mailto:example@example.com"
          className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
        >
          Email
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          className="px-6 py-3 bg-green-600 rounded-lg hover:bg-green-700 transition"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
