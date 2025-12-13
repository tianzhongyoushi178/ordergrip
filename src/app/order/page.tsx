"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export default function OrderPage() {
  return (
    <div className="pt-24 pb-24 container mx-auto px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-widest">ORDER SYSTEM</h1>
        <p className="text-sub text-lg">料金システム・オーダーの流れ</p>
      </div>

      {/* Pricing Plans */}
      <section className="max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl font-bold mb-12 text-center text-accent">オーダーバレル製作プラン</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Commit Plan */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-8 flex flex-col relative overflow-hidden group hover:border-accent/50 transition-colors">
            <div className="absolute top-0 left-0 w-full h-1 bg-accent/50" />
            <h3 className="text-2xl font-bold mb-2 text-center">コミットプラン</h3>
            <p className="text-center text-sub text-sm mb-6">新規で図面から作成するプラン</p>

            <div className="flex justify-center items-center gap-4 mb-8 text-sm font-bold">
              <div className="bg-black/50 px-4 py-2 rounded border border-white/10">図面作成</div>
              <ArrowRight className="text-accent" />
              <div className="bg-black/50 px-4 py-2 rounded border border-white/10">製品製作</div>
            </div>

            <div className="text-center mb-8">
              <span className="text-4xl font-bold text-white">¥33,000</span>
              <span className="text-sub text-sm ml-1">(税込)</span>
            </div>

            <ul className="space-y-3 text-sm text-sub mb-8 flex-grow">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <span>タングステン80% / 90% / 95%</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <span>2BA / No.5 / スティール 対応 (4BAはオプション)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <span>※レーザー刻印、コーティング、ポリッシュ加工は別料金</span>
              </li>
            </ul>

            <Button className="w-full" asChild>
              <Link href="https://lin.ee/c0nSKDB" target="_blank">このプランで相談する</Link>
            </Button>
          </div>

          {/* Repeat Plan */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-8 flex flex-col relative overflow-hidden group hover:border-accent/50 transition-colors">
            <div className="absolute top-0 left-0 w-full h-1 bg-white/20" />
            <h3 className="text-2xl font-bold mb-2 text-center">リピートプラン</h3>
            <p className="text-center text-sub text-sm mb-6">前回と同じ製品を再製作</p>

            <div className="flex justify-center items-center gap-4 mb-8 text-sm font-bold">
              <div className="bg-black/50 px-4 py-2 rounded border border-white/10">前回製品</div>
              <ArrowRight className="text-accent" />
              <div className="bg-black/50 px-4 py-2 rounded border border-white/10">再製作</div>
            </div>

            <div className="text-center mb-8">
              <span className="text-4xl font-bold text-white">¥25,000</span>
              <span className="text-sub text-sm ml-1">(税込)</span>
            </div>

            <ul className="space-y-3 text-sm text-sub mb-8 flex-grow">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <span>タングステン80% / 90% / 95%</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <span>2BA / No.5 / スティール 対応 (4BAはオプション)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <span>※レーザー刻印、コーティング、ポリッシュ加工は別料金</span>
              </li>
            </ul>

            <Button variant="outline" className="w-full" asChild>
              <Link href="https://lin.ee/c0nSKDB" target="_blank">このプランで相談する</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Options */}
      <section className="max-w-4xl mx-auto mb-24">
        <h2 className="text-2xl font-bold mb-8 text-center">その他オプション</h2>
        <div className="bg-white/5 border border-white/10 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <span className="font-bold">追加特殊カット</span>
              <span className="text-accent">¥6,600</span>
            </div>
            <div className="text-xs text-sub md:col-span-2 -mt-4 mb-2 pl-2">
              (特殊カット=多角形カット、縦カット、ローレット加工)
            </div>

            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <span className="font-bold">レーザー刻印</span>
              <span className="text-accent">¥3,300</span>
            </div>

            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <span className="font-bold">PVDコーティング</span>
              <span className="text-accent">¥6,600</span>
            </div>

            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <span className="font-bold">ポリッシュ加工</span>
              <span className="text-accent">¥7,700</span>
            </div>

            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <span className="font-bold">多角形ポリッシュ加工</span>
              <span className="text-accent">¥8,800</span>
            </div>

            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <span className="font-bold">4BAオプション</span>
              <span className="text-accent">¥3,300</span>
            </div>

            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <span className="font-bold">サンドブラスト</span>
              <span className="text-accent">¥5,500</span>
            </div>
          </div>
        </div>
      </section>

      {/* Flow */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-12 text-center">オーダーの流れ</h2>
        <div className="space-y-8">
          {[
            { title: "ヒアリング", desc: "LINEにて現在の悩みや理想のスペックをお伺いします。" },
            { title: "お見積り・決済", desc: "仕様決定後、お見積りを提示し、決済いただきます。" },
            { title: "図面作成", desc: "3D CADで図面を作成し、ご確認いただきます。" },
            { title: "製作開始", desc: "図面確定後、製作に入ります。（納期：約3〜4週間）" },
            { title: "完成・納品", desc: "完成したバレルをお届けします。" },
          ].map((step, i) => (
            <div key={i} className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold border border-accent/20">
                {i + 1}
              </div>
              <div className="pt-2">
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sub text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="px-12 py-6 text-lg" asChild>
            <Link href="https://lin.ee/c0nSKDB" target="_blank">
              LINEでオーダー相談する
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
