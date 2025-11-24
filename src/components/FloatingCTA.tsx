"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling down a bit
            setIsVisible(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-4 left-4 right-4 z-40 md:hidden"
                >
                    <Button
                        variant="default"
                        size="lg"
                        className="w-full shadow-lg shadow-accent/20 text-base font-bold py-6"
                        asChild
                    >
                        <Link href="https://line.me/R/ti/p/@placeholder" target="_blank">
                            LINEで無料相談する
                        </Link>
                    </Button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
