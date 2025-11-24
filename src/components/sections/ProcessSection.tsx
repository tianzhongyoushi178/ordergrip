"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
    { num: "01", title: "ヒアリング", desc: "現在の悩み、理想の飛び、グリップの特徴を詳細に伺います。", img: "/images/process-sketch.png" },
    { num: "02", title: "設計・提案", desc: "3D CADを用いて図面を作成。重心位置やカット形状を視覚化します。", img: "/images/process-sketch.png" },
    { num: "03", title: "試作・調整", desc: "プロトタイプを作成し、実際に投げていただきます。微調整を繰り返します。", img: "/images/process-inspection.png" },
    { num: "04", title: "本製作", desc: "決定した図面を元に、タングステン90%以上の素材から削り出します。", img: "/images/process-machining.png" },
    { num: "05", title: "納品", desc: "最終検査を経て、あなただけのバレルをお届けします。", img: "/images/works-straight.png" },
];

export function ProcessSection() {
    return (
        <section className="py-24 bg-base relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-wider">PROCESS</h2>
                    <p className="text-sub text-sm">完成までの道のり</p>
                </div>

                <div className="relative">
                    {/* Vertical Line for Mobile */}
                    <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10 md:hidden" />

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative pl-12 md:pl-0 md:text-center group"
                            >
                                {/* Mobile Dot */}
                                <div className="absolute left-[11px] top-2 w-2.5 h-2.5 rounded-full bg-accent md:hidden" />

                                <div className="mb-4 relative aspect-square w-full hidden md:block overflow-hidden rounded-lg border border-white/5">
                                    <Image
                                        src={step.img}
                                        alt={step.title}
                                        fill
                                        className="object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                                    />
                                </div>

                                <div className="text-4xl font-bold text-white/10 mb-2 md:mb-4">{step.num}</div>
                                <h3 className="text-lg font-bold mb-2 text-main">{step.title}</h3>
                                <p className="text-sub text-xs leading-relaxed">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
