"use client";

const SliderSquareBtns = ({ activeFeaturedEvent, setActiveFeaturedEvent, relatedImage }) => {
  return (
    <div
      onClick={() => setActiveFeaturedEvent(relatedImage)}
      className={`w-5 h-5 cursor-pointer ${activeFeaturedEvent == relatedImage ? "bg-[#FF2A70]" : "bg-white"}`}
    ></div>
  );
};

export default SliderSquareBtns;
