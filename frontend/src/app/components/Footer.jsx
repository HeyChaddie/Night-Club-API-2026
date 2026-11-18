"use client";

export function Footer() {
  return (
    <footer className="bg-black text-white text-center bg-[url('/assets/bg/footerbg.jpg')] bg-cover bg-center bg-no-repeat p-6 brightness-25">
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
      <p className="text-grey m-12"> Copyright &copy; Night Club</p>
    </footer>
  );
}
