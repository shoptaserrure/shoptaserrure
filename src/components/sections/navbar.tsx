"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false);
      };
      window.addEventListener("keydown", handleEsc);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleEsc);
      };
    }
  }, [open]);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Dépannage", href: "/#depannage" },
    { name: "Tarifs", href: "/#tarifs" },
    { name: "Blog", href: "/#blog" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <nav
        className={`absolute top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/40 backdrop-blur-sm shadow-sm py-1" : "bg-transparent py-2"
        }`}
        style={{ height: "112px" }}
      >
        <div className="container mx-auto px-4 grid grid-cols-3 items-center h-full">
          {/* Col gauche: Burger */}
          <div className="justify-self-start">
            <button
              onClick={() => setOpen(true)}
              className="p-2 text-brand-blue hover:text-brand-green transition-colors"
              aria-label="Menu"
            >
              <Menu size={32} />
            </button>
          </div>

          {/* Col centre: Logo */}
            <div className="justify-self-center col-start-2">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo-shopta-transparent.png"
                  alt="Shopta Serrure"
                  width={160}
                  height={50}
                  priority
                  className="object-contain"
                />
              </Link>
            </div>

          {/* Col droite: Vide */}
          <div className="justify-self-end w-10" />
        </div>
      </nav>

      {/* Drawer Overlay */}
      {open && (
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[100]" 
            onClick={() => setOpen(false)} 
          />
        )}
        
        {/* Drawer Panel */}
      <div 
        className={`fixed top-0 left-0 h-full w-[75vw] max-w-[300px] bg-white shadow-2xl z-[101] transition-transform duration-300 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
          <div className="flex items-center justify-between p-6 pb-2">
            <Link href="/" onClick={() => setOpen(false)} className="flex items-center">
              <Image
                src="/logo-shopta-transparent.png"
                alt="Shopta Serrure"
                width={160}
                height={50}
                priority
                className="object-contain"
              />
            </Link>
          <button 
            onClick={() => setOpen(false)} 
            className="p-2 text-gray-500 hover:text-brand-blue transition-colors"
          >
            <X size={28} />
          </button>
        </div>

            <div className="flex flex-col h-[calc(100%-100px)] p-5 pt-6">
              {/* Links */}
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-lg font-bold text-brand-blue hover:text-brand-green transition-colors rounded-lg px-3 py-1.5 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-green/30"
                    >
                      {link.name}
                    </Link>
                ))}
              </div>

              {/* CTA Section at bottom */}
              <div className="mt-auto">
                <div className="my-6 h-px bg-gray-100" />
                <p className="text-xs text-gray-500 mb-3">Urgence 24h/24 — réponse immédiate</p>
                <div className="space-y-3">
                <a 
                  href="tel:0620546693" 
                  className="flex items-center justify-center gap-3 w-full py-3 bg-red-600 text-white rounded-xl font-bold text-base shadow-lg shadow-red-200 hover:bg-red-700 transition-colors"
                >
                  <Phone size={22} />
                  Appeler
                </a>
                <a 
                  href="https://wa.me/33620546693" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-3 border-2 border-green-500 text-green-600 rounded-xl font-bold text-base hover:bg-green-50 transition-colors"
                >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.887-11.891 3.181 0 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.481 8.403 0 6.556-5.332 11.89-11.888 11.89-2.015 0-3.986-.511-5.741-1.483l-6.251 1.702zm6.103-3.723l.357.213c1.483.882 3.19 1.35 4.933 1.35 5.221 0 9.471-4.25 9.471-9.471 0-2.529-.985-4.903-2.775-6.696-1.791-1.791-4.164-2.777-6.693-2.777-5.221 0-9.473 4.252-9.473 9.472 0 1.762.463 3.483 1.34 4.978l.232.393-1.077 3.931 4.042-1.1zm9.851-5.46c-.247-.124-1.463-.722-1.692-.805-.226-.085-.393-.127-.557.124-.166.252-.641.808-.784.969-.143.161-.285.181-.532.058-.247-.124-1.043-.385-1.987-1.227-.735-.656-1.231-1.465-1.375-1.711-.143-.247-.015-.381.109-.504.112-.112.247-.29.37-.435.124-.145.165-.247.248-.412.082-.165.041-.31-.02-.435-.062-.124-.557-1.343-.765-1.841-.2-.482-.403-.418-.557-.425-.145-.006-.31-.007-.474-.007-.165 0-.433.062-.659.31-.227.247-.866.846-.866 2.062 0 1.216.886 2.392 1.01 2.557.124.165 1.745 2.664 4.225 3.733.59.254 1.05.406 1.41.519.593.189 1.133.162 1.559.099.475-.07 1.463-.598 1.67-1.175.205-.578.205-1.073.143-1.175-.062-.103-.227-.165-.474-.29z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
