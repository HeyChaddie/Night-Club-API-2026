"use client";

import { useState } from "react";
import Image from "next/image";
import SliderSquareBtns from "./SliderSquareBtns";

const FeaturedEvents = () => {
  const [activeFeaturedEvent, setActiveFeaturedEvent] = useState("/assets/content-img/event-thumb1.jpg");
  return (
    // api'et er ikke hentet endnu
    // mangler at gøre det responsivt

    <section className="bg-black/60 bg-[url(/assets/bg/slider_bg_overlay.png)] bg-blend-overlay bg-cover text-white p-8">
      <h2 className="font-medium text-[32px] text-center uppercase">Events of the Month</h2>
      {/* mangler komponent til streg */}

      <article className="flex flex-col justify-center items-center mt-4">
        <Image src={activeFeaturedEvent} alt="Image" width={100} height={100} className="w-88 h-61.25" />
        <div className="flex justify-between items-center bg-[#FF2A70] w-88 px-6 py-1.5">
          <p>DATE</p>
          <p>TIME</p>
          <p>LOCATION</p>
        </div>

        <div className="flex gap-3 mt-6">
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
