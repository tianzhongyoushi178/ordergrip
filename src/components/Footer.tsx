import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-black py-12 border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-2xl font-bold tracking-widest text-main mb-4">
                            ORDER GRIP
                        </h2>
                        <p className="text-sub text-sm leading-relaxed max-w-md">
                            既製品に合わせるのではなく、あなたに合わせる。<br />
                            世界に一つのオーダーメイドバレルで、<br />
                            ダーツライフをより豊かに。
                        </p>
                    </div>

                    <div>
                        <h3 className="text-main font-bold mb-4">MENU</h3>
                        <ul className="space-y-2 text-sm text-sub">
                            <li><Link href="/order" className="hover:text-accent transition-colors">オーダーメイド</Link></li>
                            <li><Link href="https://order-grip.com/wash-shine-lp/" target="_blank" className="hover:text-accent transition-colors">GRIP RESET</Link></li>
                            <li><Link href="/works" className="hover:text-accent transition-colors">制作実績</Link></li>
                            <li><Link href="/news" className="hover:text-accent transition-colors">お知らせ</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-main font-bold mb-4">SUPPORT</h3>
                        <ul className="space-y-2 text-sm text-sub">
                            <li><Link href="/faq" className="hover:text-accent transition-colors">よくある質問</Link></li>
                            <li><Link href="/contact" className="hover:text-accent transition-colors">お問い合わせ</Link></li>
                            <li><Link href="/partners" className="hover:text-accent transition-colors">パートナー募集</Link></li>
                            <li><Link href="/privacy" className="hover:text-accent transition-colors">プライバシーポリシー</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-sub">
                    <p>&copy; {new Date().getFullYear()} ORDER GRIP. All rights reserved.</p>
                    <div className="flex gap-4">
                        {/* SNS Icons could go here */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
