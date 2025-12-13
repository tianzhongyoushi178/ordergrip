"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-base">
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-base z-10" />
                <Image
                    src="/images/hero.png"
                    alt="ORDER GRIP Hero"
                    fill
                    className="object-cover opacity-50"
                    priority
                />
            </div>

            <div className="container relative z-10 px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 leading-tight">
                        勝ちにこだわるなら、<br className="md:hidden" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
                            その「握り」から。
                        </span>
                    </h1>
                    <p className="text-sub text-sm md:text-lg mb-10 tracking-widest max-w-2xl mx-auto">
                        既製品のバレルに、あなたのフォームを合わせる必要はありません。<br />
                        ORDER GRIPは、0.01mm単位の精度で<br className="md:hidden" />
                        「あなただけの正解」を形にします。
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <Button variant="default" size="lg" className="w-full md:w-auto px-8 py-6 text-lg shadow-[0_0_20px_rgba(200,168,90,0.3)]" asChild>
                            <Link href="https://lin.ee/c0nSKDB" target="_blank">
                                LINEで無料相談
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" className="w-full md:w-auto px-8 py-6 text-lg" asChild>
                            <Link href="/order">
                                オーダーの流れを見る
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
