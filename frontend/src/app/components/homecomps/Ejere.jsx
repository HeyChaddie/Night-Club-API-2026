"use client";

import { useState } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const images = ["/assets/content-img/testimonial_1.jpg", "/assets/content-img/testimonial_2.jpg", "/assets/content-img/testimonial_3.jpg"];

export default function Ejere() {
  const [slide, setSlide] = useState(0);

  function showPrevious() {
    setSlide((current) => (current - 1 + images.length) % images.length);
  }

  function showNext() {
    setSlide((current) => (current + 1) % images.length);
  }

  return (
    <section aria-label="ejere" className="flex flex-col items-center gap-4 bg-[url('/assets/bg/footerbg.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="mt-10 max-w-md px-4 text-center">
        <img src={images[slide]} alt={`ejere ${slide + 1}`} className="mx-auto max-w-full" />
        <h1 className="text-white mt-4">ALEX</h1>
        <p className="mt-2">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
          or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum,  you need to be sure there
          isn’t anything embarassing hidden in the middle of the text.
        </p>
        <div className="mt-4 flex flex-row justify-center text-white gap-4">
          <div className="border border-white  p-2">
            <FaFacebookSquare />
          </div>
          <div className="border border-white  p-2">
            <FaSnapchatGhost />
          </div>
          <div className="border border-white  p-2">
            <FaInstagram />
          </div>
        </div>
        <div className="m-4 flex justify-center gap-4 text-white">
          <button type="button" onClick={showPrevious}>
            Forrige
          </button>
          <button type="button" onClick={showNext}>
            Næste
          </button>
        </div>
      </div>
    </section>
  );
}
