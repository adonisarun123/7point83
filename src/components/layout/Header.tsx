"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/retreats", label: "Retreats" },
        // { href: "/locations", label: "Locations" }, // Not in list of files to implement yet
        { href: "/philosophy", label: "Philosophy" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 w-full px-[5%] flex justify-between items-center z-50 transition-all duration-400 ease-out",
                scrolled
                    ? "py-4 bg-[rgba(2,10,5,0.95)] backdrop-blur-md"
                    : "py-6 bg-gradient-to-b from-[rgba(2,10,5,0.9)] to-transparent"
            )}
        >
            <Link href="/" className="font-display text-[1.4rem] font-normal text-accent-glow tracking-[3px] uppercase relative group">
                7point83
                <span className="absolute bottom-[-4px] left-0 w-full h-[1px] bg-gradient-to-r from-accent-glow to-transparent" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-10 items-center">
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                            "text-[0.85rem] tracking-[2px] uppercase transition-colors duration-300",
                            pathname === link.href ? "text-accent-glow" : "text-text-muted hover:text-accent-glow"
                        )}
                    >
                        {link.label}
                    </Link>
                ))}
                <Link
                    href="/apply"
                    className="px-6 py-2.5 bg-transparent text-text-primary border border-white/20 font-body text-[0.85rem] tracking-[2px] uppercase transition-all duration-400 ease-out hover:border-accent-glow hover:text-accent-glow hover:shadow-[0_0_30px_rgba(79,255,208,0.2)]"
                >
                    Apply Now
                </Link>
            </nav>

            {/* Mobile Toggle */}
            <button
                className="md:hidden flex flex-col gap-1.5 p-2.5 cursor-pointer text-text-primary"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Nav */}
            <div
                className={cn(
                    "fixed top-0 right-0 w-[80%] max-w-[400px] h-screen bg-bg-deep flex flex-col justify-center gap-8 items-center transition-transform duration-400 ease-out md:hidden border-l border-accent-glow/10",
                    mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                            "text-[1.1rem] tracking-[2px] uppercase transition-colors duration-300",
                            pathname === link.href ? "text-accent-glow" : "text-text-muted hover:text-accent-glow"
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        {link.label}
                    </Link>
                ))}
                <Link
                    href="/apply"
                    className="px-8 py-3 bg-transparent text-text-primary border border-white/20 font-body text-[1rem] tracking-[2px] uppercase transition-all duration-400 ease-out hover:border-accent-glow hover:text-accent-glow"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    Apply Now
                </Link>
            </div>
        </header>
    );
}
