"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Instagram } from "lucide-react";
import Image from "next/image";

export function WorksSection() {
    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-wider">INSTAGRAM</h2>
                        <p className="text-sub text-sm">最新の制作実績をチェック</p>
                    </div>
                    <Button variant="outline" className="hidden md:inline-flex gap-2" asChild>
                        <Link href="https://www.instagram.com/order_grip/" target="_blank">
                            <Instagram className="w-4 h-4" />
                            Follow on Instagram
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    {[
                        { src: "/images/works-straight.png", label: "Straight Model" },
                        { src: "/images/works-torpedo.png", label: "Torpedo Model" },
                        { src: "/images/works-custom.png", label: "Custom Model" },
                        { src: "/images/works-straight.png", label: "Straight Model" }, // Dummy 4th image for grid
                    ].map((item, i) => (
                        <Link
                            key={i}
                            href="https://www.instagram.com/order_grip/"
                            target="_blank"
                            className="group relative aspect-square bg-white/5 overflow-hidden transition-colors"
                        >
                            <Image
                                src={item.src}
                                alt={item.label}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center z-10 gap-2">
                                <Instagram className="w-8 h-8 text-white" />
                                <span className="text-white font-bold tracking-widest text-xs">VIEW POST</span>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center md:hidden">
                    <Button variant="outline" className="w-full gap-2" asChild>
                        <Link href="https://www.instagram.com/order_grip/" target="_blank">
                            <Instagram className="w-4 h-4" />
                            Follow on Instagram
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
