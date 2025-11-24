import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PartnersPage() {
    return (
        <div className="pt-24 pb-24 container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-center tracking-widest">PARTNERS</h1>
            <p className="text-center text-sub mb-12">パートナー募集</p>

            <div className="max-w-3xl mx-auto space-y-12">
                <section>
                    <h2 className="text-2xl font-bold mb-4 text-main">取扱店舗様・ディーラー様へ</h2>
                    <p className="text-sub mb-6">
                        ORDER GRIPでは、オーダーメイドバレルの受付窓口となっていただけるパートナー店舗様を募集しております。
                        詳細な条件やサポート体制については、お問い合わせフォームよりご連絡ください。
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-main">プレイヤーの皆様へ</h2>
                    <p className="text-sub mb-6">
                        現在、スポンサードプレイヤーの公募は行っておりません。
                        募集の際は、本サイトおよび公式SNSにて告知いたします。
                    </p>
                </section>

                <div className="text-center pt-8">
                    <Button size="lg" asChild>
                        <Link href="/contact">お問い合わせはこちら</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
