export default function Headerevent() {
  return (
    <section className="relative flex min-h-[150px] items-center justify-center bg-[url('/assets/bg/footerbg.jpg')] bg-cover bg-center bg-no-repeat p-6 text-center text-white">
      <div aria-hidden="true" className="absolute inset-0 bg-black/75"></div>
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-3xl tracking-widest">EVENTS</h1>
        <img src="/assets/bottom_line2.png" alt="" className="mt-2" />
      </div>
    </section>
  );
}
