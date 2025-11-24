import Link from "next/link";

const news = [
    {
        id: 1,
        date: "2024.11.23",
        category: "NEWS",
        title: "Webサイトをリニューアルオープンしました。",
    },
    {
        id: 2,
        date: "2024.11.01",
        category: "EVENT",
        title: "ダーツフェスティバル2024に出展決定。",
    },
    {
        id: 3,
        date: "2024.10.15",
        category: "INFO",
        title: "年末年始の営業について",
    },
];

export default function NewsPage() {
    return (
        <div className="pt-24 pb-24 container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-center tracking-widest">NEWS</h1>
            <p className="text-center text-sub mb-12">お知らせ</p>

            <div className="max-w-3xl mx-auto">
                <ul className="space-y-4">
                    {news.map((item) => (
                        <li key={item.id} className="border-b border-white/10 pb-4">
                            <Link href={`/news/${item.id}`} className="block hover:bg-white/5 p-4 rounded transition-colors group">
                                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                                    <span className="text-sub text-sm font-mono">{item.date}</span>
                                    <span className="text-accent text-xs font-bold border border-accent px-2 py-0.5 rounded w-fit">
                                        {item.category}
                                    </span>
                                    <h3 className="text-main font-medium group-hover:text-accent transition-colors">
                                        {item.title}
                                    </h3>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
