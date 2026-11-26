import { GrCafeteria } from "react-icons/gr";
import { BiSolidDrink } from "react-icons/bi";
import Image from "next/image";

const Sectionone = () => {
  return (
    <>
      <section className="bg-black p-4 flex justify-center">
        <div className="p-4 flex flex-col items-center justify-center w-full gap-4 max-w-300">
          <h2 className="tracking-wider text-2xl font-bold text-white">
            WELCOME IN NIGHT<span className="text-[#C21D53]">CLUB</span>
          </h2>
          <Image
            src="/assets/bottom_line2.png"
            alt="Decorative bottom line"
            width={300}
            height={100}
            className="mb-10"
          />
          <div className=" flex flex-col sm:flex-row justify-between gap-5 w-full">
            <div className="bg-[url('/assets/content-img/thumb1.jpg')] bg-cover bg-center h-100 w-full">
              <div className="overflow-hidden relative group w-full h-full p-5 flex flex-col justify-center items-center gap-5 transition duration-400 ease-in-out hover:bg-black hover:border-t-3 hover:border-b-3 border-[#C21D53]">
                <div className="absolute rotate-45 -top-15 -left-15 -translate-x-15 -translate-y-15 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-200 ease-in-out bg-[#C21D53] h-30 w-30"></div>
                <div className="absolute rotate-45 -bottom-15 -right-15 translate-x-15 translate-y-15 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-200 ease-in-out bg-[#C21D53] h-30 w-30"></div>
                <div className="transition duration-400 ease-in-out group-hover:bg-[url('/assets/icon/favicon.png')] group-hover:border-3 border-[#C21D53] rounded-md  bg-no-repeat bg-center h-20 w-20"></div>
                <h3 className="text-xl opacity-0 font-medium text-white transition duration-400 group-hover:opacity-100">
                  NIGHT CLUB
                </h3>
                <p className="text-center font-medium text-white opacity-0 transition duration-400 group-hover:opacity-100">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus blanditiis sint voluptatibus
                  sed, aperiam fugit non sit debitis.
                </p>
              </div>
            </div>
            <div className="bg-[url('/assets/content-img/reastaurant_1.jpg')] bg-cover bg-center h-100 w-full">
              <div className="overflow-hidden relative group w-full h-full p-5 flex flex-col justify-center items-center gap-5 transition duration-400 ease-in-out hover:bg-black hover:border-t-3 hover:border-b-3 border-[#C21D53]">
                <div className="absolute rotate-45 -top-15 -left-15 -translate-x-15 -translate-y-15 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-200 ease-in-out bg-[#C21D53] h-30 w-30"></div>
                <div className="absolute rotate-45 -bottom-15 -right-15 translate-x-15 translate-y-15 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-200 ease-in-out bg-[#C21D53] h-30 w-30"></div>
                <div className="flex items-center justify-center transition duration-400 ease-in-out group-hover:border-3 border-[#C21D53] rounded-md  bg-no-repeat bg-center h-20 w-20">
                  <GrCafeteria className="text-5xl text-[#C21D53] opacity-0 scale-75 transition-all duration-400 ease-in-out group-hover:opacity-100" />
                </div>
                <h3 className="text-xl opacity-0 font-medium text-white transition duration-400 group-hover:opacity-100">
                  RESTURANT
                </h3>
                <p className="text-center font-medium text-white opacity-0 transition duration-400 group-hover:opacity-100">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus blanditiis sint voluptatibus
                  sed, aperiam fugit non sit debitis.
                </p>
              </div>
            </div>
            <div className="bg-[url('/assets/content-img/thumb2.jpg')] bg-cover bg-center h-100 w-full">
              <div className="overflow-hidden relative group w-full h-full p-5 flex flex-col justify-center items-center gap-5 transition duration-400 ease-in-out hover:bg-black hover:border-t-3 hover:border-b-3 border-[#C21D53]">
                <div className="absolute rotate-45 -top-15 -left-15 -translate-x-15 -translate-y-15 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-200 ease-in-out bg-[#C21D53] h-30 w-30"></div>
                <div className="absolute rotate-45 -bottom-15 -right-15 translate-x-15 translate-y-15 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-200 ease-in-out bg-[#C21D53] h-30 w-30"></div>
                <div className="flex items-center justify-center transition duration-400 ease-in-out group-hover:border-3 border-[#C21D53] rounded-md  bg-no-repeat bg-center h-20 w-20">
                  <BiSolidDrink className="text-5xl text-[#C21D53] opacity-0 scale-75 transition-all duration-400 ease-in-out group-hover:opacity-100" />
                </div>
                <h3 className="text-xl opacity-0 font-medium text-white transition duration-400 group-hover:opacity-100">
                  BAR
                </h3>
                <p className="text-center font-medium text-white opacity-0 transition duration-400 group-hover:opacity-100">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus blanditiis sint voluptatibus
                  sed, aperiam fugit non sit debitis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sectionone;
