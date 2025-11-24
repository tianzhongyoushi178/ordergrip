"use client";

import { Target, Ruler, Hammer } from "lucide-react";
import { motion } from "framer-motion";

const concepts = [
    {
        icon: Target,
        title: "完全なフィット感",
        desc: "指先の感覚は、人それぞれ違う。あなたのグリップタイプ、指の長さ、力の入れ方を分析し、違和感をゼロにする。",
    },
    {
        icon: Ruler,
        title: "0.01mmの精度",
        desc: "数値化されたデータに基づき、最新のNC旋盤で削り出す。感覚頼りではない、再現性のある精密加工。",
    },
    {
        icon: Hammer,
        title: "熟練の仕上げ",
        desc: "機械加工の後は、職人の手による最終調整。カットの掛かり具合、重心バランスを微調整し、魂を吹き込む。",
    },
];

export function ConceptSection() {
    return (
        <section className="py-24 bg-black text-main">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-wider">CONCEPT</h2>
                    <p className="text-sub text-sm">なぜ、オーダーメイドなのか。</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {concepts.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="flex flex-col items-center text-center p-6 border border-white/5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                        >
                            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 text-accent">
                                <item.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                            <p className="text-sub leading-relaxed text-sm">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
