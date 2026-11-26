import { FaFastBackward } from "react-icons/fa";
import { FaFastForward } from "react-icons/fa";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaRegPauseCircle } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";
import { FaVolumeUp } from "react-icons/fa";
import { FaVolumeMute } from "react-icons/fa";

const AudioControls = ({ isPlaying, onPlayPauseClick, onPrevClick, onNextClick, onShuffleClick, isMuted, onMuteClick }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* ikoner: rewind, play, forward, shuffle */}
      <figure className="flex justify-center items-center gap-8 mt-10">
        <button type="button" aria-label="Previous" onClick={onPrevClick}>
          <FaFastBackward className="text-3xl" />
        </button>

        {/* ternary operator - vis pause-ikon, hvis sangen er sat på pause */}
        {isPlaying ? (
          <button type="button" aria-label="Pause" onClick={() => onPlayPauseClick(false)}>
            <FaRegPauseCircle className={`text-6xl`} />
          </button>
        ) : (
          <button type="button" aria-label="Play" onClick={() => onPlayPauseClick(true)}>
            <FaRegPlayCircle className={`text-6xl`} />
          </button>
        )}

        <button type="button" aria-label="Next" onClick={onNextClick}>
          <FaFastForward className="text-3xl" />
        </button>

        {/* shuffle bør måske være pink, når den er aktiv/klikket på */}
        <button type="button" aria-label="Shuffle" onClick={onShuffleClick} className="active:text-[#FF2A70]">
          <FaShuffle className="text-3xl" />
        </button>
      </figure>

      {/* ikon: volume + bar til lyd */}
      <figure className="flex justify-center items-center gap-5 w-full mt-10">
        {isMuted ? (
          <button type="button" aria-label="Unmute" onClick={() => onMuteClick(false)}>
            <FaVolumeMute className="text-4xl" />
          </button>
        ) : (
          <button type="button" aria-label="Mute" onClick={() => onMuteClick(true)}>
            <FaVolumeUp className="text-4xl" />
          </button>
        )}

        <div className="relative w-[60%]">
          <div className=" bg-[#FF2A70] h-1 "></div>
          <div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 bg-white w-4.5 h-4.5 rounded-full"></div>
        </div>
      </figure>
    </div>
  );
};

export default AudioControls;
