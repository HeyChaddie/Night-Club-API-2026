"use client";

import { useState } from "react";
import { Menuoverlay } from "./Menuoverlay";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header id="home" className="flex items-center justify-between bg-black p-4 text-white">
        <div>
          <img src="/assets/logo.png" alt="Logo" className="h-12 w-auto" />
        </div>
        <button
          type="button"
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded text-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500"
          aria-label={menuOpen ? "Luk menu" : "Åbn menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="h-0.5 w-6 bg-current" />
          <span className="h-0.5 w-6 bg-current" />
          <span className="h-0.5 w-6 bg-current" />
        </button>
      </header>
      <Menuoverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

export default Header;
