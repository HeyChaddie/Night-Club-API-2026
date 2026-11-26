import { Suspense } from "react";
import Image from "next/image";

const Maingallery = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-black">
      <h2 className="tracking-wider text-2xl font-bold text-white mt-20">NIGHT CLUB GALLERY</h2>
      <Image src="/assets/bottom_line2.png" alt="Decorative bottom line" width={300} height={100} />
      <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-0 md:grid-cols-3 lg:grid-cols-4 mb-20 mt-20">
        <Suspense fallback={<p className="text-white">Loading...</p>}>
          <GalleryData />
        </Suspense>
      </div>
    </section>
  );
};

export default Maingallery;

const GalleryData = async () => {
  const response = await fetch("https://night-club-api-2026-dqsb.onrender.com/gallery");

  const data = await response.json();

  console.log("API RESPONSE:", data);

  return data
    .toSorted(() => Math.random() - 0.5)
    .slice(0, 8)
    .map((picture) => (
      <div
        key={picture.id}
        className="bg-cover bg-center h-100 sm:h-70 md:h-50 lg:h-60"
        style={{
          backgroundImage: `url("https://night-club-api-2026-dqsb.onrender.com${picture.asset.url}")`,
        }}
      >
        <div className="overflow-hidden relative group w-full h-full p-5 flex flex-col justify-center items-center gap-5 transition duration-400 ease-in-out hover:bg-black/50 hover:border-t-3 hover:border-b-4 border-[#C21D53]">
          <div className="absolute rotate-45 -top-10 -left-10 -translate-x-15 -translate-y-15 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-200 ease-in-out bg-[#C21D53] h-20 w-20"></div>
          <div className="absolute rotate-45 -bottom-10 -right-10 translate-x-15 translate-y-15 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-200 ease-in-out bg-[#C21D53] h-20 w-20"></div>
        </div>
      </div>
    ));
};
