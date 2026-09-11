import { LayoutTemplate, Package, TrendingUp, Globe, Fingerprint, ListChecks, Image, FileText, Tag, Compass } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const ITEMS = [
    { icon: LayoutTemplate, label: "Professional Store Design" },
    { icon: Package, label: "40+ Winning Products" },
    { icon: TrendingUp, label: "High-Demand Product Selection" },
    { icon: Globe, label: "Free Domain" },
    { icon: Fingerprint, label: "Custom Business Logo" },
    { icon: ListChecks, label: "Complete Product Listing" },
    { icon: Image, label: "Product Images" },
    { icon: FileText, label: "Product Descriptions" },
    { icon: Tag, label: "Pricing Setup" },
    { icon: Compass, label: "A–Z Guidance" },
];

export const TrustGrid = () => (
    <section className="relative py-20 sm:py-28" data-testid="trust-features-section">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading
                eyebrow="The Complete Setup"
                title="Everything You Need to Launch Your Dropshipping Store."
                sub="This is not only website design. You receive a complete, ready-to-run store — every product, image, word and setting taken care of."
            />
            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
                {ITEMS.map((item, i) => (
                    <Reveal key={item.label} delay={i * 0.05}>
                        <div
                            className="glass-card flex h-full flex-col gap-4 rounded-2xl p-5"
                            data-testid={`trust-item-${item.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                        >
                            <span className="glass-icon flex h-10 w-10 items-center justify-center rounded-xl text-[#C8242B]">
                                <item.icon size={18} strokeWidth={1.75} />
                            </span>
                            <span className="text-[13px] font-semibold leading-snug text-[#FCF4E1]">{item.label}</span>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);
