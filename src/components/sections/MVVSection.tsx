"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const mvvData = [
    {
        en: "VISION",
        ja: "理想の追求",
        desc: "すべてのプレイヤーが、道具への迷いなく、純粋に技術と向き合える世界を作る。",
    },
    {
        en: "MISSION",
        ja: "感覚の数値化",
        desc: "曖昧な「握り心地」を、0.01mm単位の設計データへ変換し、再現性のある武器に変える。",
    },
    {
        en: "VALUE",
        ja: "職人の誇り",
        desc: "効率よりも精度。妥協なきクラフトマンシップで、一本一本に魂を込める。",
    },
];

export function MVVSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-24 md:py-32 bg-base relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    {mvvData.map((item, index) => (
                        <motion.div
                            key={item.en}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <h2 className="text-5xl md:text-6xl font-bold text-white/5 mb-4 absolute select-none pointer-events-none group-hover:text-accent/10 transition-colors duration-500">
                                {item.en}
                            </h2>
                            <div className="relative z-10 pt-8">
                                <span className="block text-accent text-sm tracking-[0.3em] mb-2 font-bold">
                                    {item.en}
                                </span>
                                <h3 className="text-2xl font-bold mb-6 text-main">
                                    {item.ja}
                                </h3>
                                <p className="text-sub leading-loose text-sm md:text-base max-w-xs mx-auto">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
