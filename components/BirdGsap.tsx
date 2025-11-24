"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BirdGSAP() {
  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      }
    })
      .to(".bird", { x: -300, y: 50 })
      .to(".bird", { x: -600, y: -50 })
      .to(".bird", { x: -900, y: -100 })
      .to(".bird", { x: -1200, y: -50 })
      .to(".bird", { x: -1400, y: 50 })
      .to(".bird", { x: -1800, y: -50 });
  }, []);

  return null;
}
