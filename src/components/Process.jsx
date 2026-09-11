import { MessagesSquare, PackageSearch, PenTool, Wrench, Rocket } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const STEPS = [
    {
        n: "01",
        icon: MessagesSquare,
        title: "Understand Your Business",
        body: "A short conversation about what you want to sell, the style you like and what you're aiming for.",
    },
    {
        n: "02",
        icon: PackageSearch,
        title: "Select & Prepare Products",
        body: "We research high-demand products and prepare their images, descriptions and pricing.",
    },
    {
        n: "03",
        icon: PenTool,
        title: "Design Your Store",
        body: "Your brand comes together — logo, colours, layout and a storefront that feels professional.",
    },
    {
        n: "04",
        icon: Wrench,
        title: "Build & Optimize",
        body: "We build the complete store, test every page and refine the mobile experience.",
    },
    {
        n: "05",
        icon: Rocket,
        title: "Deliver Ready-to-Launch",
        body: "You review the finished store, we hand everything over and guide you on what comes next.",
    },
];

export const Process = () => (
    <section id="process" className="relative py-12 sm:py-16" data-testid="process-timeline-section">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading
                eyebrow="The Process"
                title="Our Simple 5-Step Process"
                sub="From first message to a store that is ready for customers — with you informed at every step."
            />
            <div className="relative mt-8 sm:mt-10">
                <div className="absolute left-0 right-0 top-7 hidden h-px bg-[#FCF4E1]/10 lg:block" aria-hidden="true" />
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
                    {STEPS.map((step, i) => (
                        <Reveal key={step.n} delay={i * 0.1}>
                            <div className="relative" data-testid={`process-step-${step.n}`}>
                                <div className="glass-icon relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#121215] text-[#C8242B]">
                                    <step.icon size={22} strokeWidth={1.6} />
                                </div>
                                <span className="font-mono-brand mt-5 block text-xs tracking-[0.2em] text-[#C8242B]">{step.n}</span>
                                <h3 className="mt-2 text-base font-semibold leading-snug tracking-tight text-[#FCF4E1]">{step.title}</h3>
                                <p className="mt-2 text-[13px] leading-relaxed text-[#B5B0A4]">{step.body}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    </section>
);
