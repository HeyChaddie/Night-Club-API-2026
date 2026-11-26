"use client";

import { useState } from "react";
import Image from "next/image";
import SliderSquareBtns from "./SliderSquareBtns";
import Link from "next/link";

const FeaturedEvents = () => {
  const [activeFeaturedEvent, setActiveFeaturedEvent] = useState("/assets/content-img/event-thumb1.jpg");
  return (
    // api'et er ikke hentet endnu
    // skal gøres responsivt
    // mangler gap mellem hover og bjælke i animation

    <section className="bg-black/60 bg-[url(/assets/bg/slider_bg_overlay.png)] bg-blend-overlay bg-cover text-white p-8">
      <h2 className="block md:hidden font-medium text-[32px] text-center uppercase">Events of the Month</h2>
      <h2 className="hidden md:block font-medium text-[32px] text-center uppercase">Featured Events</h2>

      {/* mangler komponent til streg */}

      <article className="flex flex-col justify-center items-center mt-4">
        <div className="relative group w-full h-full md:max-w-150">
          <Image src={activeFeaturedEvent} alt="Image" width={100} height={100} className="w-full object-cover grid-cols-1 md:grid-cols-2" />

          {/* div til hover */}
          <div className="absolute inset-0 overflow-hidden w-full group-hover:bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col border-solid border-t border-b border-[#FF2A70]">
            <div className="absolute bg-[#FF2A70] p-10 rotate-45 -top-10 left-5 -translate-15 group-hover:translate-y-0 transition-transform duration-400 ease-in-out"></div>

            <button className="flex justify-center items-center translate-y-10 group-hover:translate-y-15 transition-transform duration-400 ease-in-out">
              <Link href="/bookingpage" className="bg-[#FF2A70] font-medium w-fit px-4 py-1.5">
                Book Now
              </Link>
            </button>

            <div className="bg-black/80 mt-auto px-6 py-5 translate-y-10 group-hover:translate-y-0 transition-transform duration-400 ease-in-out">
              <h3 className="uppercase">NAME</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ad!</p>
            </div>

            <div className="absolute bg-[#FF2A70] p-10 rotate-45 -bottom-10 right-5 translate-15 group-hover:translate-y-0 transition-transform duration-400 ease-in-out"></div>
          </div>

          <div className="absolute bottom-[-35] w-full bg-[#FF2A70] font-medium px-6 py-1.5">
            {/* For at løse problemet med, at data skal være forskellig fra mobil til desktop, har jeg benyttet (display) block/hidden. Jeg endte med at lave to forskellige grupper, den øverste til mobile og den nederste til desktop, da dette (selvom noget kode gentages) var mest simpelt. */}
            {/* På mobil vil mobil-markuppen vises (block), og desktop-markuppen skjules (hidden), og omvendt på desktop. */}

            {/* mobil */}
            <div className="flex justify-between items-center w-full md:hidden">
              <p>DATE</p>
              <p>TIME</p>
              <p>LOCATION</p>
            </div>

            {/* desktop */}
            <div className="hidden md:flex justify-between w-full">
              <p>NAME</p>
              <p>
                DATE <span>・</span> TIME
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-3 mt-16">
          <SliderSquareBtns
            activeFeaturedEvent={activeFeaturedEvent}
            setActiveFeaturedEvent={setActiveFeaturedEvent}
            relatedImage="/assets/content-img/event-thumb1.jpg"
          />
          <SliderSquareBtns
            activeFeaturedEvent={activeFeaturedEvent}
            setActiveFeaturedEvent={setActiveFeaturedEvent}
            relatedImage="/assets/content-img/event-thumb2.jpg"
          />
          <SliderSquareBtns
            activeFeaturedEvent={activeFeaturedEvent}
            setActiveFeaturedEvent={setActiveFeaturedEvent}
            relatedImage="/assets/content-img/event-thumb3.jpg"
          />
          <SliderSquareBtns
            activeFeaturedEvent={activeFeaturedEvent}
            setActiveFeaturedEvent={setActiveFeaturedEvent}
            relatedImage="/assets/content-img/event-thumb4.jpg"
          />
          <SliderSquareBtns
            activeFeaturedEvent={activeFeaturedEvent}
            setActiveFeaturedEvent={setActiveFeaturedEvent}
            relatedImage="/assets/content-img/event-thumb5.jpg"
          />
          <SliderSquareBtns
            activeFeaturedEvent={activeFeaturedEvent}
            setActiveFeaturedEvent={setActiveFeaturedEvent}
            relatedImage="/assets/content-img/event-thumb6.jpg"
          />
        </div>
      </article>
    </section>
  );
};

export default FeaturedEvents;
