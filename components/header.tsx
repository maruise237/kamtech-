"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { name: "Problème", href: "#problem" },
  { name: "Solutions", href: "#solutions" },
  { name: "Résultats", href: "#resultats" },
  { name: "Processus", href: "#processus" },
  { name: "FAQ", href: "#faq" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-3xl transition-all duration-300 ${isScrolled ? "bg-bg-1/80 backdrop-blur-md rounded-none border border-border shadow-md" : "bg-transparent"}`}
    >
      <div className="flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-tighter text-text-primary">
          KAMTECH<span className="text-brand">IA</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-text-secondary hover:text-brand transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
          <Link
            href="#cta-final"
            className="px-4 py-2 text-sm font-medium transition-all rounded-none bg-text-primary text-text-inverse hover:opacity-80"
          >
            Démarrer
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-text-primary focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="border-t border-border bg-bg-1 px-6 py-8 md:hidden rounded-none shadow-xl">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-text-primary hover:text-brand transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#cta-final"
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-text-primary px-5 py-3 text-center text-sm font-medium text-text-inverse rounded-none"
            >
              Parler à un expert
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
