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

    const values = [
        {
            en: "PLAYER FIRST",
            ja: "プレイヤー起点で思考",
            desc: "作り手の論理ではなく、使い手の感覚を最優先に。すべての判断基準は「プレイヤーにとって最適か」にある。"
        },
        {
            en: "CRAFT × LOGIC",
            ja: "職人技と論理の両立",
            desc: "感性を数値化する論理と、数値を形にする技術。相反する二つを高度に融合させ、唯一無二の精度を生む。"
        },
        {
            en: "CO-CREATION",
            ja: "プレイヤーと共に創る姿勢",
            desc: "一方的な提供ではなく、対話から生まれる共創。フィードバックを糧に、理想のバレルを共に完成させる。"
        },
        {
            en: "HONEST DESIGN",
            ja: "意図・根拠ある設計",
            desc: "装飾のためのデザインはしない。すべての形状、すべてのカットに、機能としての明確な意図と根拠を持たせる。"
        },
        {
            en: "EVOLUTION TOGETHER",
            ja: "継続的に伴走して進化する",
            desc: "納品はゴールではなくスタート。プレイヤーの進化に合わせて、バレルもまた進化し続ける。"
        }
    ];

    return (
        <section ref={ref} className="py-24 md:py-32 bg-base relative overflow-hidden">
            <div className="container mx-auto px-4">
                {/* VISION */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="mb-24 text-center"
                >
                    <h2 className="text-5xl md:text-7xl font-bold text-white/5 mb-4 absolute left-1/2 -translate-x-1/2 -top-12 select-none pointer-events-none w-full">
                        VISION
                    </h2>
                    <span className="block text-accent text-sm tracking-[0.3em] mb-4 font-bold relative z-10">
                        VISION
                    </span>
                    <h3 className="text-2xl md:text-4xl font-bold mb-6 text-main relative z-10 leading-relaxed">
                        すべてのプレイヤーが、<br className="md:hidden" />自分だけの理想を握る世界を。
                    </h3>
                    <p className="text-sub text-sm md:text-base relative z-10">
                        （「バレルを選ぶ」から「バレルを創る」文化を定着させる）
                    </p>
                </motion.div>

                {/* MISSION */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-24 text-center"
                >
                    <h2 className="text-5xl md:text-7xl font-bold text-white/5 mb-4 absolute left-1/2 -translate-x-1/2 -top-12 select-none pointer-events-none w-full">
                        MISSION
                    </h2>
                    <span className="block text-accent text-sm tracking-[0.3em] mb-4 font-bold relative z-10">
                        MISSION
                    </span>
                    <h3 className="text-xl md:text-3xl font-bold mb-6 text-main relative z-10 leading-relaxed max-w-3xl mx-auto">
                        満足のいくグリップ感の実現
                    </h3>
                </motion.div>

                {/* VALUE */}
                <div className="relative">
                    <h2 className="text-5xl md:text-7xl font-bold text-white/5 mb-12 text-center select-none pointer-events-none">
                        VALUE
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
                        {values.map((item, index) => (
                            <motion.div
                                key={item.en}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                className="bg-white/5 border border-white/10 p-8 rounded-lg hover:bg-white/10 transition-colors duration-300"
                            >
                                <div className="text-accent font-bold tracking-wider mb-2 text-sm">
                                    {item.en}
                                </div>
                                <h4 className="text-lg md:text-xl font-bold text-main mb-4">
                                    {item.ja}
                                </h4>
                                {/* <p className="text-sub text-sm leading-relaxed">
                                    {item.desc}
                                </p> */}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
