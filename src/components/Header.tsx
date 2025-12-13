"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { name: "TOP", href: "/" },
    { name: "ORDER", href: "/order" },
    { name: "GRIP RESET", href: "https://order-grip.com/wash-shine-lp/" },
    { name: "PARTNERS", href: "/partners" },
    { name: "STORY", href: "/story" },
    { name: "FAQ", href: "/faq" },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-base/90 backdrop-blur-md py-4" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-widest text-main">
                    ORDER GRIP
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-main/80 hover:text-accent transition-colors tracking-wider"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Button variant="default" className="ml-4" asChild>
                        <Link href="https://lin.ee/c0nSKDB" target="_blank">
                            LINEで相談
                        </Link>
                    </Button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-main p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-base/95 backdrop-blur-xl border-t border-white/10 p-4 md:hidden flex flex-col gap-4 shadow-2xl"
                    >
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-lg font-medium text-main py-2 border-b border-white/5"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Button variant="default" className="w-full mt-4" asChild>
                            <Link href="https://lin.ee/c0nSKDB" target="_blank">
                                LINEで相談する
                            </Link>
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
