"use client";

import { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Architecture", href: "#architecture" },
  { label: "AI Lab", href: "#ai-lab" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#080b0f]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="text-lg font-bold tracking-tight text-white"
        >
          Vani<span className="text-cyan-400">.</span>
        </a>


        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">

          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-gray-300 transition hover:text-cyan-400"
            >
              {item.label}
            </a>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-cyan-400/30 px-4 py-2 text-sm font-medium text-cyan-400 transition hover:bg-cyan-400 hover:text-black"
          >
            Resume
          </a>

        </div>


        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-300 transition hover:border-cyan-400/30 hover:text-cyan-400 md:hidden"
        >
          {isOpen ? (
            <span className="text-2xl leading-none">×</span>
          ) : (
            <span className="text-2xl leading-none">☰</span>
          )}
        </button>

      </nav>


      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-white/10 bg-[#080b0f] md:hidden">

          <div className="mx-auto max-w-7xl px-6 py-5">

            <div className="flex flex-col">

              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="border-b border-white/5 py-4 text-sm text-gray-300 transition hover:text-cyan-400"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="mt-5 rounded-lg bg-cyan-400 px-5 py-3 text-center text-sm font-semibold text-black transition hover:bg-cyan-300"
              >
                View Resume
              </a>

            </div>

          </div>

        </div>
      )}

    </header>
  );
}