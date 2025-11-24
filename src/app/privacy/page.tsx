export default function PrivacyPage() {
    return (
        <div className="pt-24 pb-24 container mx-auto px-4">
            <h1 className="text-2xl font-bold mb-8 text-center tracking-widest">PRIVACY POLICY</h1>

            <div className="max-w-3xl mx-auto space-y-8 text-sub text-sm leading-relaxed bg-white/5 p-8 rounded-lg border border-white/10">
                <section>
                    <h2 className="text-main font-bold mb-2">1. 個人情報の収集について</h2>
                    <p>
                        当社は、お問い合わせ、ご注文、サービスのご利用等に際して、お客様の個人情報（氏名、住所、電話番号、メールアドレス等）を収集する場合があります。
                    </p>
                </section>

                <section>
                    <h2 className="text-main font-bold mb-2">2. 個人情報の利用目的</h2>
                    <p>
                        収集した個人情報は、以下の目的で利用いたします。<br />
                        ・ご注文いただいた商品の発送<br />
                        ・お問い合わせへの回答<br />
                        ・サービス向上のための分析
                    </p>
                </section>

                <section>
                    <h2 className="text-main font-bold mb-2">3. 個人情報の第三者提供</h2>
                    <p>
                        法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
                    </p>
                </section>

                <p className="text-xs pt-4 border-t border-white/10">
                    制定日: 2024年11月23日<br />
                    ORDER GRIP
                </p>
            </div>
        </div>
    );
}
