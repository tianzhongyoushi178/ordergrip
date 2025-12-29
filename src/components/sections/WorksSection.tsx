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
        imgUrl: "https://scontent-itm1-1.cdninstagram.com/v/t51.2885-15/606922462_18030662204771162_3774245418900982952_n.jpg?stp=dst-jpg_e35_s640x640_sh0.08_tt6&_nc_ht=scontent-itm1-1.cdninstagram.com&_nc_cat=102&_nc_oc=Q6cZ2QG7-z5qdPxhymnPTFufDB0Pip54Lv9PnCFT9rZO_J7pUC-II4qG8F92meA8eoh1zD2i-eI4RtONjgf6BZrnDAbk&_nc_ohc=3aEZW9l8AeoQ7kNvwFXwFwa&_nc_gid=UJIW04f_vyXyG4vM4RmFUw&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfnLzMZltumjNqVW0CQPQfWjV9g_EkuUmvF9uNM-TMXqTQ&oe=69585ECD&_nc_sid=8b3546"
    },
    {
        id: "DSXJH8bEsMv",
        postUrl: "https://www.instagram.com/order_grip/p/DSXJH8bEsMv/",
        imgUrl: "https://scontent-itm1-1.cdninstagram.com/v/t51.2885-15/601012537_18029352236771162_3044404147316570549_n.jpg?stp=dst-jpg_e35_s640x640_sh0.08_tt6&_nc_ht=scontent-itm1-1.cdninstagram.com&_nc_cat=102&_nc_oc=Q6cZ2QG7-z5qdPxhymnPTFufDB0Pip54Lv9PnCFT9rZO_J7pUC-II4qG8F92meA8eoh1zD2i-eI4RtONjgf6BZrnDAbk&_nc_ohc=nUEd-2VM02wQ7kNvwGNffTO&_nc_gid=UJIW04f_vyXyG4vM4RmFUw&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfmvLqdBMZpRsqK_DwKt8xv-tM_Rp6tSDDLnIi6eUA-ERA&oe=695850C3&_nc_sid=8b3546"
    },
    {
        id: "DSR-qMuklgN",
        postUrl: "https://www.instagram.com/order_grip/p/DSR-qMuklgN/",
        imgUrl: "https://scontent-itm1-1.cdninstagram.com/v/t51.2885-15/591160057_18029152190771162_6158143769260265066_n.jpg?stp=dst-jpg_e35_s640x640_sh0.08_tt6&_nc_ht=scontent-itm1-1.cdninstagram.com&_nc_cat=102&_nc_oc=Q6cZ2QG7-z5qdPxhymnPTFufDB0Pip54Lv9PnCFT9rZO_J7pUC-II4qG8F92meA8eoh1zD2i-eI4RtONjgf6BZrnDAbk&_nc_ohc=4HWzu_X5bSEQ7kNvwFJ8oTI&_nc_gid=UJIW04f_vyXyG4vM4RmFUw&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_Afn-OU7sVMZfEnxApH0tYWJaEGUqbSf0uDmnGdToDtDhOA&oe=695854DA&_nc_sid=8b3546"
    },
    {
        id: "DSMxq75EtHy",
        postUrl: "https://www.instagram.com/order_grip/p/DSMxq75EtHy/",
        imgUrl: "https://scontent-itm1-1.cdninstagram.com/v/t51.2885-15/591156425_18028927712771162_7954979372243343998_n.jpg?stp=dst-jpg_e35_s640x640_sh0.08_tt6&_nc_ht=scontent-itm1-1.cdninstagram.com&_nc_cat=102&_nc_oc=Q6cZ2QG7-z5qdPxhymnPTFufDB0Pip54Lv9PnCFT9rZO_J7pUC-II4qG8F92meA8eoh1zD2i-eI4RtONjgf6BZrnDAbk&_nc_ohc=8koMq5EWvY4Q7kNvwEdpZU_&_nc_gid=UJIW04f_vyXyG4vM4RmFUw&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_Afng6hmroLR7NdcHDIbE-qULo8T52H0qFLk4EaWlev_-_g&oe=695857F8&_nc_sid=8b3546"
    },
    {
        id: "DSKGueMkmGO",
        postUrl: "https://www.instagram.com/order_grip/p/DSKGueMkmGO/",
        imgUrl: "https://scontent-itm1-1.cdninstagram.com/v/t51.2885-15/592571030_18028814192771162_7130141839301965986_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&_nc_ht=scontent-itm1-1.cdninstagram.com&_nc_cat=102&_nc_oc=Q6cZ2QG7-z5qdPxhymnPTFufDB0Pip54Lv9PnCFT9rZO_J7pUC-II4qG8F92meA8eoh1zD2i-eI4RtONjgf6BZrnDAbk&_nc_ohc=Alae27SpWGYQ7kNvwGp6Qud&_nc_gid=UJIW04f_vyXyG4vM4RmFUw&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfmabDKVt2ogqb8edWans2zShN2K9ODOCfa85COOJxoRfQ&oe=6958478E&_nc_sid=8b3546"
    },
    {
        id: "DSE8qwwkkuH",
        postUrl: "https://www.instagram.com/order_grip/p/DSE8qwwkkuH/",
        imgUrl: "https://scontent-itm1-1.cdninstagram.com/v/t51.2885-15/588622350_18028598372771162_8795847902512903301_n.jpg?stp=dst-jpg_e35_s640x640_sh0.08_tt6&_nc_ht=scontent-itm1-1.cdninstagram.com&_nc_cat=102&_nc_oc=Q6cZ2QG7-z5qdPxhymnPTFufDB0Pip54Lv9PnCFT9rZO_J7pUC-II4qG8F92meA8eoh1zD2i-eI4RtONjgf6BZrnDAbk&_nc_ohc=iWcr11SHfBMQ7kNvwFc7gKC&_nc_gid=UJIW04f_vyXyG4vM4RmFUw&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfnZH6Pq-vY1p1WvS12AHBNZAjxJBHlISQHQovJ7A6ki1g&oe=69586231&_nc_sid=8b3546"
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
                            duration: 40,
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
                                unoptimized // InstagramのCDN画像用
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
