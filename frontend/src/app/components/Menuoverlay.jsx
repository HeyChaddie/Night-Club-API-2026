const menuItems = [
  { label: "HOME", href: "/" },
  { label: "EVENTS", href: "/eventsdetail" },
  { label: "BOOK TABLE", href: "/eventspage" },
  { label: "CONTACT US", href: "/contactpage" },
];

export function Menuoverlay({ open, onClose }) {
  if (!open) {
    return null;
  }

  return (
    <div
      id="mobile-menu"
      className="fixed inset-0 z-50 flex flex-col bg-[url('/assets/bg/header_bg_2.jpg')] bg-cover bg-center bg-no-repeat  p-6 text-white"
    >
      <div className="absolute inset-0 bg-black/75"></div>
      <div className="relative z-10">
        <div className="flex justify-end">
          <button
            type="button"
            className="rounded px-4 py-2 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500"
            onClick={onClose}
          >
            X
          </button>
        </div>
        <nav aria-label="Hovedmenu" className="flex items-center justify-center">
          <ul className="space-y-6 text-center text-3xl font-bold">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a className="hover:text-pink-500 focus-visible:text-pink-500 focus-visible:outline-none" href={item.href} onClick={onClose}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
