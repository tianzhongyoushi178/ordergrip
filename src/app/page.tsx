import { HeroSection } from "@/components/sections/HeroSection";
import { MVVSection } from "@/components/sections/MVVSection";
import { ConceptSection } from "@/components/sections/ConceptSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WorksSection } from "@/components/sections/WorksSection";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ORDER GRIP",
    "url": "https://order-grip.com",
    "logo": "https://order-grip.com/logo.png",
    "description": "オーダーメイドバレル制作サービス",
    "sameAs": [
      "https://twitter.com/ordergrip",
      "https://instagram.com/ordergrip"
    ]
  };

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <MVVSection />
      <ConceptSection />
      <ProcessSection />
      <WorksSection />
    </div>
  );
}
