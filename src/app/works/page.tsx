import Link from "next/link";

const works = [
    {
        id: 1,
        title: "Model: S.T Custom",
        desc: "グリップ位置のマイクロカットが特徴的なトルピード。",
    },
    {
        id: 2,
        title: "Model: K.M Custom",
        desc: "極限まで細くしたストレートバレル。重量18.5g。",
    },
    {
        id: 3,
        title: "Model: Y.O Custom",
        desc: "後重心に設定した砲弾型。リリースの抜けを重視。",
    },
];

export default function WorksPage() {
    return (
        <div className="pt-24 pb-24 container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-center tracking-widest">WORKS</h1>
            <p className="text-center text-sub mb-12">制作実績</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {works.map((item) => (
                    <Link key={item.id} href={`/works/${item.id}`} className="group block">
                        <div className="aspect-video bg-white/5 rounded-lg overflow-hidden border border-white/10 mb-4 relative">
                            <div className="absolute inset-0 flex items-center justify-center text-sub text-sm">
                                Image
                            </div>
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-main font-bold tracking-widest border-b border-main pb-1">VIEW MORE</span>
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-main mb-1 group-hover:text-accent transition-colors">
                            {item.title}
                        </h3>
                        <p className="text-sub text-sm">
                            {item.desc}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
