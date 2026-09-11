import { Reveal } from "./Reveal";

const CHAPTERS = [
    {
        n: "01",
        title: "One craft",
        body: "We don't offer fifty vague digital services. We build dropshipping stores — and we put everything into doing that one thing well.",
    },
    {
        n: "02",
        title: "Complete, not partial",
        body: "Design, products, content, pricing and setup. You receive a store that is genuinely ready for customers, not a half-finished template you have to fix yourself.",
    },
    {
        n: "03",
        title: "Straightforward terms",
        body: "One clear price, zero advance payment, no hidden charges. You see the finished store before you pay a single rupee.",
    },
];

export const Manifesto = () => (
    <section id="service" className="relative py-20 sm:py-28" data-testid="manifesto-section">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal className="max-w-4xl">
                <span className="eyebrow">What We Do</span>
                <h2 className="mt-4 text-3xl font-bold leading-[1.08] tracking-tight text-[#FCF4E1] sm:text-4xl lg:text-5xl">
                    One Service.{" "}
                    <span className="font-serif-accent font-medium italic">Done Properly.</span>
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#B5B0A4] sm:text-lg">
                    We specialize exclusively in complete dropshipping store development — giving you everything
                    required to launch a professional-looking online store without the complexity of doing it yourself.
                </p>
            </Reveal>
            <div className="mt-14 border-t border-[#FCF4E1]/10">
                {CHAPTERS.map((c, i) => (
                    <Reveal key={c.n} delay={i * 0.08}>
                        <div className="grid gap-3 border-b border-[#FCF4E1]/10 py-8 sm:grid-cols-[100px_240px_1fr] sm:items-baseline sm:gap-8" data-testid={`manifesto-chapter-${c.n}`}>
                            <span className="font-mono-brand text-sm text-[#C8242B]">{c.n}</span>
                            <h3 className="text-xl font-semibold tracking-tight text-[#FCF4E1]">{c.title}</h3>
                            <p className="max-w-2xl text-sm leading-relaxed text-[#B5B0A4] sm:text-base">{c.body}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);
