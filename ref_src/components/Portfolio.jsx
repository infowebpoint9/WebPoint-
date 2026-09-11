import { ArrowUpRight, Check } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { BrowserFrame, Storefront } from "./StoreMockup";

const POINTS = ["Full product catalogue", "Mobile-first design", "Professional branding"];

export const Portfolio = () => (
    <section id="portfolio" className="relative overflow-hidden py-20 sm:py-28" data-testid="portfolio-section">
        <div className="glow-red pointer-events-none absolute right-[-140px] top-1/3 h-[480px] w-[480px]" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
            <div>
                <SectionHeading
                    eyebrow="Portfolio"
                    title="See the Kind of Store We Build."
                    sub="Browse a complete example store exactly as a customer would — then picture your own store finished to the same standard."
                />
                <Reveal delay={0.15}>
                    <div className="mt-8 flex items-center gap-3">
                        <span className="font-mono-brand rounded-full border border-[#FCF4E1]/15 bg-[#FCF4E1]/5 px-3.5 py-1.5 text-[10px] uppercase tracking-[0.2em] text-[#B5B0A4]">
                            Demo Store
                        </span>
                        <span className="text-lg font-bold tracking-tight text-[#FCF4E1]">Clyton.shop</span>
                    </div>
                    <ul className="mt-6 space-y-3">
                        {POINTS.map((point) => (
                            <li key={point} className="flex items-center gap-3 text-sm text-[#B5B0A4]">
                                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C8242B]/15 text-[#C8242B]">
                                    <Check size={11} strokeWidth={3} />
                                </span>
                                {point}
                            </li>
                        ))}
                    </ul>
                    <a
                        href="https://clyton.shop"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="view-demo-store-button"
                        className="btn-primary mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
                    >
                        View Demo Store <ArrowUpRight size={16} />
                    </a>
                </Reveal>
            </div>
            <Reveal delay={0.1} className="group relative">
                <div className="transition-transform duration-500 ease-out group-hover:-translate-y-2">
                    <BrowserFrame url="clyton.shop">
                        <Storefront name="CLYTON" tagline="Curated Everyday Essentials" />
                    </BrowserFrame>
                </div>
                <div className="glass-chip absolute -bottom-5 left-5 flex items-center gap-2 rounded-full px-4 py-2 sm:left-8" data-testid="portfolio-demo-pill">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#C8242B]" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FCF4E1]">Live demo storefront</span>
                </div>
            </Reveal>
        </div>
    </section>
);
