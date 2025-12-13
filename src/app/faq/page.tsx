import { Plus } from "lucide-react";

const faqs = [
    {
        q: "オーダーメイドの納期はどのくらいですか？",
        a: "通常、ヒアリングから納品まで約1ヶ月〜1.5ヶ月をいただいております。設計の修正回数や工場の稼働状況により前後する場合がございます。",
    },
    {
        q: "遠方でもオーダー可能ですか？",
        a: "はい、可能です。Zoom等を用いたオンラインヒアリングにて対応させていただきます。現在ご使用のバレルをお送りいただき、数値を測定することも可能です。",
    },
    {
        q: "現在使用しているバレルと同じ形状で作れますか？",
        a: "はい、可能です。現物をお預かりし、ノギス測定にて数値を出し、再現いたします。廃盤になったモデルの復刻などもご相談ください。",
    },
    {
        q: "リテイク（修正）は可能ですか？",
        a: "設計段階での修正は無制限です。加工開始後の変更や修正は、別途費用をいただく場合がございます。",
    },
    {
        q: "素材は何を使用していますか？",
        a: "タングステン80%〜95%を使用しております。比重の調整も可能ですのでご相談ください。",
    },
];

export default function FAQPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };

    return (
        <div className="pt-24 pb-24 container mx-auto px-4">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <h1 className="text-4xl font-bold mb-8 text-center tracking-widest">FAQ</h1>
            <p className="text-center text-sub mb-12">よくある質問</p>

            <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <details key={index} className="group border border-white/10 rounded-lg bg-white/5 overflow-hidden">
                        <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-white/10 transition-colors">
                            <span className="font-bold text-lg pr-8">{faq.q}</span>
                            <Plus className="w-5 h-5 text-accent transition-transform group-open:rotate-45" />
                        </summary>
                        <div className="p-6 pt-0 text-sub leading-relaxed border-t border-white/5 mt-4">
                            {faq.a}
                        </div>
                    </details>
                ))}
            </div>
        </div>
    );
}
