"use client";

import { Button } from "@/components/ui/button";

export default function ContactPage() {
    return (
        <div className="pt-24 pb-24 container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-center tracking-widest">CONTACT</h1>
            <p className="text-center text-sub mb-12">お問い合わせ</p>

            <div className="max-w-2xl mx-auto">
                <form className="space-y-8">
                    <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-bold">お名前 <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            id="name"
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-md p-3 focus:outline-none focus:border-accent transition-colors"
                            placeholder="山田 太郎"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-bold">メールアドレス <span className="text-red-500">*</span></label>
                        <input
                            type="email"
                            id="email"
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-md p-3 focus:outline-none focus:border-accent transition-colors"
                            placeholder="example@order-grip.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-bold">ご相談内容 <span className="text-red-500">*</span></label>
                        <div className="space-y-2">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="type" className="accent-accent" defaultChecked />
                                <span>オーダーメイドについて</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="type" className="accent-accent" />
                                <span>GRIP RESETについて</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="type" className="accent-accent" />
                                <span>その他・パートナー提携について</span>
                            </label>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="block text-sm font-bold">詳細 <span className="text-red-500">*</span></label>
                        <textarea
                            id="message"
                            required
                            rows={6}
                            className="w-full bg-white/5 border border-white/10 rounded-md p-3 focus:outline-none focus:border-accent transition-colors"
                            placeholder="ご自由にご記入ください"
                        />
                    </div>

                    <div className="text-center">
                        <Button size="lg" className="w-full md:w-auto px-12">
                            送信する
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
