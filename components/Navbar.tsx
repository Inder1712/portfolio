"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    tl.from(".nav-logo", {
      x: -40,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
    });

    tl.from(
      ".nav-item",
      {
        y: -20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.12,
        ease: "power2.out",
      },
      "-=0.3"
    );

    tl.from(
      ".hire-btn",
      {
        scale: 0.3,
        opacity: 0,
        duration: 0.4,
        ease: "back.out(1.7)",
      },
      "-=0.2"
    );

    tl.from(
      ".resume-btn",
      {
        x: 40,
        opacity: 0,
        duration: 0.4,
        ease: "power3.out",
      },
      "-=0.3"
    );
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/15 border-b border-white/10 shadow-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex justify-between items-center h-16">

        {/* Logo */}
        <div className="text-xl font-bold text-white nav-logo cursor-pointer">
          <Link href="#">MyPortfolio</Link>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-8 font-medium text-white">
          {["Home", "Projects", "Skills", "Contact"].map((item) => (
            <li key={item} className="nav-item">
              <Link
                href={`#${item.toLowerCase()}`}
                className="relative px-2 py-1 after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </Link>
            </li>
          ))}

          {/* Hire Me */}
          <li className="hire-btn relative">
            <Link
              href="#contact"
              className="hire-button relative px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 transition"
            >
              Hire Me
            </Link>

            {/* Laser */}
            <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <rect
                className="laser-line"
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="none"
                stroke="#00cfff"
                strokeWidth="2"
                strokeDasharray="400"
                strokeDashoffset="400"
                strokeLinecap="round"
                filter="drop-shadow(0px 0px 6px #00eaff)"
              />
            </svg>
          </li>

          {/* Resume */}
          <li className="resume-btn">
            <a
              href="/resume.pdf"
              download
              className="px-4 py-2 rounded-md border border-gray-500 hover:border-blue-500 transition"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                menuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white/15 backdrop-blur-xl border-t border-white/10">
          <ul className="flex flex-col text-white py-4 space-y-4 text-center">

            {["Home", "Projects", "Skills", "Contact"].map((item) => (
              <li key={item} className="mobile-item">
                <Link
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}

            <li>
              <Link
                href="#contact"
                className="px-4 py-2 bg-blue-500 rounded-md"
                onClick={() => setMenuOpen(false)}
              >
                Hire Me
              </Link>
            </li>

            <li>
              <a
                href="/resume.pdf"
                download
                className="px-4 py-2 border border-gray-500 rounded-md"
                onClick={() => setMenuOpen(false)}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
