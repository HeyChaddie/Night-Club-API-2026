import { FaFastBackward } from "react-icons/fa";
import { FaFastForward } from "react-icons/fa";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";
import { FaVolumeUp } from "react-icons/fa";
import Image from "next/image";

import TracksGallery from "./TracksGallery";

// To Do:
// Lav markup til mobil
// Lav markup til desktop
// Lav karussel til galleri (slideshow fra 2. semester)
// Få progress-barer til at virke
// Få knapper til at virke/lav funktioner (onClick)
// Lav map() (eller?) til at skifte mellem sange/vise rigtig information

const NightClubTrack = () => {
  return (
    <section
      className="flex flex-col bg-black text-white min-h-dvh
    "
    >
      <h2 className="uppercase">Night Club Track</h2>

      <article className="flex flex-col items-center">
        <h3>SONG TITLE</h3>

        {/* track progress */}
        <figure className="relative w-[80%] mt-20">
          <div className=" bg-[#FF2A70] h-1"></div>
          <div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 bg-white w-6 h-6 rounded-full"></div>
        </figure>

        <div className="flex flex-col justify-center items-center">
          {/* track time current/full */}
          <p className="mt-20">Current time / Duration</p>

          {/* ikoner: rewind, play, forward, shuffle */}
          <figure className="flex justify-center items-center gap-8 mt-20">
            <FaFastBackward className="text-3xl" />

            <FaRegPlayCircle className="text-6xl" />

            <FaFastForward className="text-3xl" />

            <FaShuffle className="text-3xl" />
          </figure>

          {/* ikon: volume + bar til lyd */}
          <figure className="flex justify-center items-center gap-5 w-full mt-20">
            <FaVolumeUp className="text-4xl" />

            <div className="relative w-[50%]">
              <div className=" bg-[#FF2A70] h-1 "></div>
              <div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 bg-white w-4.5 h-4.5 rounded-full"></div>
            </div>
          </figure>
        </div>

        <TracksGallery />
      </article>
    </section>
  );
};

export default NightClubTrack;

// Assets jeg skal bruge:
// content-img: track_thumb.jpg, track1.jpg, track2.jpg, track4.jpg, track5.jpg
// icon: music_loader.gif (noget suspense/fallback når der skiftes mellem sange?), Play_btn.svg, Play.svg
// loader: madbars.gif
// media: black-box-funky.mp3, euphoria.mp3, fashion-red-tape.mp3
