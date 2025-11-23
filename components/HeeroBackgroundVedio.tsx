"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroBackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const durationRef = useRef<number>(0);
  const [segmentIndex, setSegmentIndex] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // When duration becomes available
    const onLoaded = () => {
      durationRef.current = video.duration;
      playSegment(0); // First 25% on page load
    };

    video.addEventListener("loadedmetadata", onLoaded);

    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      let newIndex = 0;

      if (scrollPercent >= 75) newIndex = 3;
      else if (scrollPercent >= 50) newIndex = 2;
      else if (scrollPercent >= 25) newIndex = 1;
      else newIndex = 0;

      if (newIndex !== segmentIndex) {
        setSegmentIndex(newIndex);
        playSegment(newIndex);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      video.removeEventListener("loadedmetadata", onLoaded);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [segmentIndex]);

  const playSegment = (index: number) => {
    const video = videoRef.current;
    if (!video || !durationRef.current) return;

    const total = durationRef.current;
    const segmentLength = total / 4;
    const startTime = index * segmentLength;

    video.currentTime = startTime;
    video.play();
  };

  return (
<video
  ref={videoRef}
  src="/videos/myvideo.mp4"
  muted
  autoPlay
  playsInline
  preload="auto"
  className="fixed top-0 left-0 w-full h-full object-cover -z-10"
/>


  );
}
