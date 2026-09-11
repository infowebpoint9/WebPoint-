import { Store, Package, Image, FileText, Tag, Fingerprint, Globe, Settings, Smartphone, Compass } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const ROWS = [
    { icon: Store, label: "Professional Store" },
    { icon: Package, label: "40+ Products" },
    { icon: Image, label: "Product Images" },
    { icon: FileText, label: "Product Descriptions" },
    { icon: Tag, label: "Product Pricing" },
    { icon: Fingerprint, label: "Brand Logo" },
    { icon: Globe, label: "Domain" },
    { icon: Settings, label: "Store Setup" },
    { icon: Smartphone, label: "Mobile Optimization" },
    { icon: Compass, label: "A–Z Guidance" },
];

const STATS = [
    { value: "40+", label: "Products listed" },
    { value: "1", label: "Free domain" },
    { value: "24h", label: "Target delivery" },
    { value: "0%", label: "Advance payment" },
];

export const LaunchPackage = () => (
    <section className="relative overflow-hidden py-12 sm:py-16" data-testid="launch-package-section">
        <div className="glow-cream pointer-events-none absolute right-[-160px] top-10 h-[420px] w-[420px]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading
                eyebrow="What You Receive"
                title="Your Launch Package."
                sub="Everything below arrives together — one delivery, one handover, one store that is ready to show people."
            />
            <div className="mt-8 sm:mt-10 grid gap-5 lg:grid-cols-[1fr_320px]">
                <Reveal>
                    <div className="glass-card rounded-3xl p-6 sm:p-8" data-testid="launch-package-panel">
                        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#FCF4E1]/10 pb-5">
                            <div className="flex items-center gap-3">
                                <img src="/webpoint-mark.png" alt="" className="h-8 w-8 rounded-lg" width={32} height={32} />
                                <span className="text-sm font-bold tracking-tight text-[#FCF4E1]">Launch Package</span>
                            </div>
                            <span className="font-mono-brand rounded-full border border-[#C8242B]/40 bg-[#C8242B]/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[#FCF4E1]">
                                10 deliverables · all included
                            </span>
                        </div>
                        <div className="grid gap-x-8 sm:grid-cols-2">
                            {ROWS.map((row) => (
                                <div
                                    key={row.label}
                                    className="flex items-center justify-between border-b border-[#FCF4E1]/[0.07] py-3.5"
                                    data-testid={`package-row-${row.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                                >
                                    <span className="flex items-center gap-3 text-sm font-medium text-[#FCF4E1]">
                                        <row.icon size={15} className="text-[#C8242B]" strokeWidth={1.75} />
                                        {row.label}
                                    </span>
                                    <span className="font-mono-brand text-[9px] uppercase tracking-[0.2em] text-[#7A766E]">Included</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Reveal>
                <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
                    {STATS.map((stat, i) => (
                        <Reveal key={stat.label} delay={i * 0.07}>
                            <div className="glass-card flex h-full flex-col justify-center rounded-2xl p-6" data-testid={`package-stat-${stat.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                                <span className="text-3xl font-extrabold tracking-tight text-[#FCF4E1]">
                                    {stat.value}
                                </span>
                                <span className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-[#B5B0A4]">{stat.label}</span>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    </section>
);
