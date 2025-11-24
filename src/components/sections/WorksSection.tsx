"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function WorksSection() {
    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-wider">WORKS</h2>
                        <p className="text-sub text-sm">制作実績・お客様の声</p>
                    </div>
                    <Button variant="link" className="hidden md:inline-flex text-accent" asChild>
                        <Link href="/works">View All <ArrowRight className="ml-2 w-4 h-4" /></Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {[
                        { src: "/images/works-straight.png", label: "Straight Model" },
                        { src: "/images/works-torpedo.png", label: "Torpedo Model" },
                        { src: "/images/works-custom.png", label: "Custom Model" },
                    ].map((item, i) => (
                        <div key={i} className="group relative aspect-video bg-white/5 rounded-lg overflow-hidden border border-white/5 hover:border-accent/50 transition-colors">
                            <Image
                                src={item.src}
                                alt={item.label}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                                <span className="text-main font-bold tracking-widest">VIEW DETAILS</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center md:hidden">
                    <Button variant="outline" className="w-full" asChild>
                        <Link href="/works">View All Works</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
