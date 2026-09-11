import { ShieldCheck, BadgeCheck, ReceiptText } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const PILLARS = [
    {
        icon: ShieldCheck,
        title: "0% Advance Payment",
        body: "You begin without paying anything upfront — no deposit, no booking fee.",
    },
    {
        icon: BadgeCheck,
        title: "Pay After Completion",
        body: "Payment is collected only after your website is completed and shown to you.",
    },
    {
        icon: ReceiptText,
        title: "No Hidden Charges",
        body: "The price you see is the price you pay — ₹1,999, all inclusive.",
    },
];

export const PaymentTrust = () => (
    <section className="relative py-12 sm:py-16" data-testid="payment-trust-section">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="glass-card rounded-[32px] px-6 py-8 sm:px-10 sm:py-12">
                <SectionHeading
                    eyebrow="Payment & Trust"
                    title="Start With Confidence."
                    sub="You don't need to make an advance payment. Payment is collected after the website is completed — so you can begin with confidence."
                    align="center"
                />
                <div className="mt-8 sm:mt-10 grid gap-4 sm:grid-cols-3">
                    {PILLARS.map((pillar, i) => (
                        <Reveal key={pillar.title} delay={i * 0.1}>
                            <div
                                className="glass-chip flex h-full flex-col items-center rounded-2xl px-6 py-8 text-center"
                                data-testid={`trust-pillar-${pillar.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                            >
                                <span className="glass-icon flex h-12 w-12 items-center justify-center rounded-2xl text-[#C8242B]">
                                    <pillar.icon size={22} strokeWidth={1.6} />
                                </span>
                                <h3 className="mt-5 text-base font-bold tracking-tight text-[#FCF4E1]">{pillar.title}</h3>
                                <p className="mt-2 text-[13px] leading-relaxed text-[#B5B0A4]">{pillar.body}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    </section>
);
