"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Plane() {
  useEffect(() => {
    gsap.timeline({
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  }
})
  
  .to("#plane", { x: 300, y: -50 })
  .to("#plane", { x: 600, y: -150 })
  .to("#plane", { x: 900, y: -50 })
  .to("#plane", { x: 1200, y: -200 })
  .to("#plane", { x: 1500, y: -400 });

  }, []);

  return null;
}
