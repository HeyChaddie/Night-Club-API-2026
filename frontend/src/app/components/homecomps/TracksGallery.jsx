import { IoCaretBack } from "react-icons/io5";
import { IoCaretForward } from "react-icons/io5";
import Image from "next/image";

const TracksGallery = () => {
  return (
    <figure className="flex flex-col justify-center items-center gap-2.5 mt-10">
      <article className="md:block flex">
        <Image src="/assets/content-img/track1.jpg" alt="Track Cover" width={100} height={100} />
        {/* <Image src="/assets/content-img/track2.jpg" alt="Track Cover" width={100} height={100} /> */}
      </article>

      <div className="flex justify-center items-center w-12 h-12 border-2">
        <IoCaretBack className="text-3xl" />
      </div>

      <div className="flex justify-center items-center w-12 h-12 border-2">
        <IoCaretForward className="text-3xl" />
      </div>
    </figure>
  );
};

export default TracksGallery;
