"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md rounded-full" : "bg-transparent"}`}
      style={{
        boxShadow: isScrolled ? "rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px" : "none"
      }}
    >
      <div className="flex items-center justify-between transition-all duration-300 px-2 pl-5 py-2">
        <Link href="#hero" className="text-lg font-bold tracking-tight transition-colors duration-300 text-foreground">
          KAMTECH IA
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link href="#solutions" className="text-sm font-medium transition-colors text-muted-foreground hover:text-foreground">Solutions</Link>
          <Link href="#process" className="text-sm font-medium transition-colors text-muted-foreground hover:text-foreground">Processus</Link>
          <Link href="#results" className="text-sm font-medium transition-colors text-muted-foreground hover:text-foreground">Résultats</Link>
          <Link href="#faq" className="text-sm font-medium transition-colors text-muted-foreground hover:text-foreground">FAQ</Link>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full text-foreground"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              <span className="sr-only">Toggle theme</span>
            </Button>
          )}
          <Link
            href="#audit"
            className="px-5 py-2.5 text-sm font-bold transition-all rounded-full bg-primary text-primary-foreground hover:opacity-90"
          >
            Audit gratuit
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full text-foreground"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
          )}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="transition-colors text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-border bg-background px-6 py-8 lg:hidden rounded-b-2xl shadow-xl">
          <nav className="flex flex-col gap-6">
            <Link href="#solutions" className="text-lg font-medium text-foreground" onClick={() => setIsMenuOpen(false)}>Solutions</Link>
            <Link href="#process" className="text-lg font-medium text-foreground" onClick={() => setIsMenuOpen(false)}>Processus</Link>
            <Link href="#results" className="text-lg font-medium text-foreground" onClick={() => setIsMenuOpen(false)}>Résultats</Link>
            <Link href="#faq" className="text-lg font-medium text-foreground" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
            <Link
              href="#audit"
              className="mt-4 bg-primary px-5 py-3 text-center text-sm font-bold text-primary-foreground rounded-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Audit gratuit
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
