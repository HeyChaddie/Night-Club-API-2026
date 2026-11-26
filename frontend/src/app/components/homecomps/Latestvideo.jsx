"use client";

import { useState } from "react";
import { AiOutlineCaretLeft } from "react-icons/ai";
import { AiOutlineCaretRight } from "react-icons/ai";

export default function LatestVideo() {
  const [slide, setSlide] = useState(0);

  const videos = ["/assets/media/video-crowd.mp4", "/assets/media/video-dj-crowd-2.mp4", "/assets/media/video-dj-crowd1.mp4"];

  return (
    <section className="bg-black flex flex-col items-center py-20">
      <h1 className="text-white text-4xl tracking-widest ">LATEST VIDEO</h1>

      <img src="/assets/bottom_line.png" alt="" />

      <div className="mt-10 w-full max-w-4xl overflow-hidden">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${slide * 100}%)` }}>
          {videos.map((video) => (
            <video key={video} src={video} controls className="w-full flex-shrink-0" />
          ))}
        </div>
      </div>

      <div className="flex gap-8 mt-6">
        <button onClick={() => setSlide((slide - 1 + 3) % 3)} className="text-white text-2xl m-4 p-4 outline outline-white">
          <AiOutlineCaretLeft />
        </button>

        <button onClick={() => setSlide((slide + 1) % 3)} className="text-white text-2xl m-4 p-4 outline outline-white">
          <AiOutlineCaretRight />
        </button>
      </div>
    </section>
  );
}
