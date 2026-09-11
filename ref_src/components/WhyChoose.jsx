import { Sparkles, MousePointerClick, PackageCheck, SearchCheck, Smartphone, IndianRupee } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const CARDS = [
    {
        icon: Sparkles,
        title: "Professional First Impression",
        body: "Your store looks established from day one — considered design, real branding and a layout that feels trustworthy.",
    },
    {
        icon: MousePointerClick,
        title: "Conversion-Focused Structure",
        body: "Product pages, pricing and navigation arranged to guide visitors naturally from browsing to buying.",
    },
    {
        icon: PackageCheck,
        title: "Complete Store Setup",
        body: "Products, content, domain and design configured for you — so you skip the technical work entirely.",
    },
    {
        icon: SearchCheck,
        title: "Carefully Selected Products",
        body: "40+ high-demand products researched and listed with proper images, descriptions and sensible pricing.",
    },
    {
        icon: Smartphone,
        title: "Mobile-Friendly Experience",
        body: "Most shoppers browse on their phone. Your store is built mobile-first and feels effortless on any screen.",
    },
    {
        icon: IndianRupee,
        title: "Straightforward Pricing",
        body: "One clear price — ₹1,999 — with zero advance payment. You pay only after your store is complete.",
    },
];

export const WhyChoose = () => (
    <section className="relative py-20 sm:py-28" data-testid="why-choose-section">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading
                eyebrow="Why WebPoint"
                title="Built for People Who Want a Real Online Store."
                sub="No inflated promises — just careful work, honest terms and a store you would be proud to share."
            />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {CARDS.map((card, i) => (
                    <Reveal key={card.title} delay={(i % 3) * 0.08}>
                        <div className="glass-card h-full rounded-2xl p-6 sm:p-7" data-testid={`why-card-${card.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                            <span className="glass-icon flex h-11 w-11 items-center justify-center rounded-xl text-[#C8242B]">
                                <card.icon size={19} strokeWidth={1.75} />
                            </span>
                            <h3 className="mt-5 text-lg font-semibold tracking-tight text-[#FCF4E1]">{card.title}</h3>
                            <p className="mt-2.5 text-sm leading-relaxed text-[#B5B0A4]">{card.body}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);
