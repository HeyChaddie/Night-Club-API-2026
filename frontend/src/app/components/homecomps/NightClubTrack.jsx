"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import AudioControls from "./AudioControls";
import TracksGallery from "./TracksGallery";

// To Do:
// Lav markup til mobil
// Lav markup til desktop
// Lav karussel til galleri (slideshow fra 2. semester)
// Få progress-barer til at virke
// Få knapper til at virke/lav funktioner (onClick)
// Lav map() (eller?) til at skifte mellem sange/vise rigtig information

// array til sange
const tracks = [
  {
    id: "1",
    title: "Black Box Funky",
    cover: "/assets/content-img/track1.jpg",
    audio: "/assets/media/black-box-funky.mp3",
  },
  {
    id: "2",
    title: "Euphoria",
    cover: "/assets/content-img/track2.jpg",
    audio: "/assets/media/euphoria.mp3",
  },
  {
    id: "3",
    title: "Fashion Red Tape",
    cover: "/assets/content-img/track4.jpg",
    audio: "/assets/media/fashion-red-tape.mp3",
  },
  {
    id: "4",
    title: "None",
    cover: "/assets/content-img/track5.jpg",
    audio: "/assets/media/euphoria.mp3",
  },
];

const NightClubTrack = () => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const audioRef = useRef(null);

  // if: hvis index er lig med 0 (den første sang), skal der skiftes til det sidste index i array'et.
  // else: hvis index er større end 0, skal der trækkes 1 fra (skiftes til forrige sang).
  const toPrevTrack = () => {
    if (trackIndex === 0) {
      setTrackIndex(tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
    setIsPlaying(true);
  };

  // if: hvis index er lig med det sidste index i array'et, så skal der skiftes til index 0 (den første sang)
  // else: hvis index IKKE er lig med det sidste index i array'et, skal der lægges 1 til (én sang frem).
  const toNextTrack = () => {
    if (isShuffled) {
      const randomTrack = Math.floor(Math.random() * tracks.length);
      setTrackIndex(randomTrack);
      console.log(randomTrack);
    } else {
      if (trackIndex === tracks.length - 1) {
        setTrackIndex(0);
      } else {
        setTrackIndex(trackIndex + 1);
      }
    }
    setIsPlaying(true);
  };

  // useEffect bruges for at synkronisere state med musikken/audio-elementet.
  // State har ikke noget med musikken/audio at gøre, den styrer knappens tilstand/ændring fra play til pause.
  // Derfor bruges useEffect til at synkronisere, så musikken starter/stopper, når state ændres/der klikkes på knappen.
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, trackIndex]);

  const shuffle = () => {
    if (isShuffled === true) {
      setIsShuffled(false);
    } else {
      setIsShuffled(true);
    }
  };

  return (
    <section className="flex flex-col justify-center items-center bg-black text-white">
      <header className="flex flex-col justify-center items-center mt-10">
        <h2 className="uppercase text-[32px] font-medium tracking-[7.5%]">Night Club Track</h2>
        <Image src="/assets/bottom_line2.png" alt="Pink bottom line" width={100} height={100} className="w-80" />
      </header>

      <article className="flex flex-col justify-center items-center">
        <h3 className="uppercase text-[20px] font-medium tracking-[2%] mt-10">{tracks[trackIndex].title}</h3>

        {/* track progress */}
        <figure className="relative w-full mt-10">
          <div className=" bg-[#FF2A70] h-1"></div>
          <div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 bg-white w-6 h-6 rounded-full"></div>
        </figure>

        <div className="flex flex-col justify-center items-center">
          {/* track time current/full */}
          <p className="mt-10">Current time / Duration</p>
        </div>

        <audio src={tracks[trackIndex].audio} ref={audioRef}></audio>

        <AudioControls
          isPlaying={isPlaying}
          onPlayPauseClick={setIsPlaying}
          onPrevClick={toPrevTrack}
          onNextClick={toNextTrack}
          isShuffled={isShuffled}
          onShuffleClick={shuffle}
          isMuted={isMuted}
          onMuteClick={setIsMuted}
        />

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
