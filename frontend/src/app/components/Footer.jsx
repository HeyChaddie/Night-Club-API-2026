"use client";

export function Footer() {
  return (
    <footer className="relative flex text-white text-center p-6 bg-[url('/assets/bg/footerbg.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black/75"></div>
      <div className="relative z-10">
        <img src="/assets/logo.png" alt="Logo" className="mx-auto h-12 w-auto mb-4 p-2" />
        <h1 className=" text-2xl font-bold mb-2 text-pink-500 m-12">LOCATION</h1>
        <p>Kompagnistræde 278</p>
        <p>1265 Køhenhavn H</p>
        <h1 className=" text-2xl font-bold mb-2 mt-4 text-pink-500 m-12">OPENING HOURS</h1>
        <p>WED-THU 10:30 TO 3 AM</p>
        <p>SAT-SUN 11 PM - 5 AM</p>
        <h2 className=" text-lg font-bold mb-2 mt-4 text-white m-12">Stay Connected With Us</h2>
        <div className="flex justify-center space-x-4 mb-4">
          <p>Facebook</p>
          <p>Snapchat</p>
          <p>Instagram</p>
        </div>
        <p className="text-grey">Night Club</p>
        <p className="text-grey">All Rights Reserved</p>
        <p className="text-grey m-12"> Copyright &copy; NightClub</p>
      </div>
      <div className="hidden md:block">
        <div className="relative z-10">
          <h1 className=" text-l font-bold mb-2 text-pink-500 m-4">NEWS</h1>
          <div className="flex justify-center space-x-4 mb-4">
            <img src="/assets/content-img/recent_post1.jpg" alt="Recent Post 1" className="h-16 w-16 object-cover" />
            <div className="flex flex-col justify-center mx-auto">
              <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p className="text-grey text-sm text-pink-500">April 17, 2026</p>
            </div>
          </div>
          <div className="flex justify-center space-x-4 mb-4">
            <img src="/assets/content-img/recent_post2.jpg" alt="Recent Post 2" className="h-16 w-16 object-cover" />
            <div className="flex flex-col justify-center mx-auto">
              <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p className="text-grey text-sm text-pink-500">April 17, 2026</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="relative z-10">
          <h1 className=" text-l font-bold mb-2 text-pink-500 m-4">RECENT POSTS</h1>
          <div className="flex justify-center space-x-4 mb-4">
            <img src="/assets/content-img/recent_post1.jpg" alt="Recent Post 1" className="h-16 w-16 object-cover" />
            <div className="flex flex-col justify-center mx-auto">
              <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p className="text-grey text-sm text-pink-500">5 hours ago</p>
            </div>
          </div>
          <div className="flex justify-center space-x-4 mb-4">
            <img src="/assets/content-img/recent_post2.jpg" alt="Recent Post 2" className="h-16 w-16 object-cover" />
            <div className="flex flex-col justify-center mx-auto">
              <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p className="text-grey text-sm text-pink-500">5 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
