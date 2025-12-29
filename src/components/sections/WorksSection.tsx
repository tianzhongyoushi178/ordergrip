"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Instagram } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const instagramPosts = [
    {
        id: "DS1tTimEiWL",
        postUrl: "https://www.instagram.com/order_grip/p/DS1tTimEiWL/",
        imgUrl: "/images/instagram/work1.jpg"
    },
    {
        id: "DSXJH8bEsMv",
        postUrl: "https://www.instagram.com/order_grip/p/DSXJH8bEsMv/",
        imgUrl: "/images/instagram/work2.jpg"
    },
    {
        id: "DSR-qMuklgN",
        postUrl: "https://www.instagram.com/order_grip/p/DSR-qMuklgN/",
        imgUrl: "/images/instagram/work3.jpg"
    },
    {
        id: "DSMxq75EtHy",
        postUrl: "https://www.instagram.com/order_grip/p/DSMxq75EtHy/",
        imgUrl: "/images/instagram/work4.jpg"
    },
    {
        id: "DSKGueMkmGO",
        postUrl: "https://www.instagram.com/order_grip/p/DSKGueMkmGO/",
        imgUrl: "/images/instagram/work5.jpg"
    },
    {
        id: "DSE8qwwkkuH",
        postUrl: "https://www.instagram.com/order_grip/p/DSE8qwwkkuH/",
        imgUrl: "/images/instagram/work6.jpg"
    }
];

// ループのためにリストを繰り返す
const extendedPosts = [...instagramPosts, ...instagramPosts, ...instagramPosts];

export function WorksSection() {
    return (
        <section className="py-24 bg-black overflow-hidden">
            <div className="container mx-auto px-4 mb-12">
                <div className="flex justify-between items-end">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-wider">製作実績</h2>
                        <p className="text-sub text-sm">最新の制作事例をInstagramで公開中</p>
                    </div>
                    <Button variant="outline" className="hidden md:inline-flex gap-2" asChild>
                        <Link href="https://www.instagram.com/order_grip/" target="_blank">
                            <Instagram className="w-4 h-4" />
                            Official Instagram
                        </Link>
                    </Button>
                </div>
            </div>

            {/* カルーセルコンテナ */}
            <div className="relative w-full overflow-hidden">
                <motion.div
                    className="flex gap-4 px-4"
                    animate={{
                        x: [0, -100 * instagramPosts.length + "%"],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 60,
                            ease: "linear",
                        },
                    }}
                    style={{
                        width: "max-content",
                    }}
                >
                    {extendedPosts.map((post, i) => (
                        <Link
                            key={`${post.id}-${i}`}
                            href={post.postUrl}
                            target="_blank"
                            className="group relative w-64 md:w-80 aspect-square bg-white/5 overflow-hidden flex-shrink-0"
                        >
                            <Image
                                src={post.imgUrl}
                                alt={`Instagram Works ${i}`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center z-10 gap-2">
                                <Instagram className="w-8 h-8 text-white" />
                                <span className="text-white font-bold tracking-widest text-xs">VIEW ON INSTAGRAM</span>
                            </div>
                        </Link>
                    ))}
                </motion.div>
            </div>

            <div className="container mx-auto px-4 mt-12 text-center md:hidden">
                <Button variant="outline" className="w-full gap-2" asChild>
                    <Link href="https://www.instagram.com/order_grip/" target="_blank">
                        <Instagram className="w-4 h-4" />
                        Official Instagram
                    </Link>
                </Button>
            </div>
        </section>
    );
}
