"use client";

import { useState } from "react";
import { FaFacebookSquare, FaInstagram, FaSnapchatGhost } from "react-icons/fa";

const owners = [
  {
    name: "ALEX",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarassing hidden in the middle of the text.",
    image: "/assets/content-img/testimonial_3.jpg",
  },
  {
    name: "MARY",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarassing hidden in the middle of the text.",
    image: "/assets/content-img/testimonial_2.jpg",
  },
  {
    name: "JOHN",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarassing hidden in the middle of the text.",
    image: "/assets/content-img/testimonial_1.jpg",
  },
];

export default function Ejere() {
  const [slide, setSlide] = useState(0);
  const currentOwner = owners[slide];

  function showPrevious() {
    setSlide((current) => (current - 1 + owners.length) % owners.length);
  }

  function showNext() {
    setSlide((current) => (current + 1) % owners.length);
  }

  return (
    <>
      <section aria-label="ejere" className="flex flex-col items-center gap-4 bg-[url('/assets/bg/footerbg.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="mt-10 ml-10 mr-10 px-4 text-center text-lg">
          <img src={currentOwner.image} alt={`Portræt af ${currentOwner.name}`} className="mx-auto max-w-full" />
          <h1 className="text-white text-2xl mt-4">{currentOwner.name}</h1>
          <p className="mt-2 text-white m-4">{currentOwner.description}</p>
          <div className="mt-4 flex flex-row justify-center gap-4 text-white">
            <div className="border border-white p-2">
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
    </>
  );
}
