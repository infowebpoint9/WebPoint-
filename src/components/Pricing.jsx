import { Check, ArrowRight, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";
import { useStoreModal } from "@/context/ModalContext";

const INCLUDED = [
    "Professional store design",
    "40+ winning products",
    "Free domain + custom logo",
    "Images, descriptions & pricing",
    "Mobile-responsive build",
    "A–Z guidance after delivery",
];

export const Pricing = () => {
    const { openModal } = useStoreModal();

    return (
        <section id="pricing" className="relative py-12 sm:py-16" data-testid="pricing-section">
            <div className="glow-red pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
            <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
                <Reveal>
                    <div className="overflow-hidden rounded-[28px] bg-[#FCF4E1] text-[#17130F] shadow-[0_50px_120px_-30px_rgba(0,0,0,0.7)]" data-testid="pricing-card">
                        <div className="p-8 sm:p-12">
                            <div className="flex flex-wrap items-center justify-between gap-3">
                                <span className="font-mono-brand text-[10px] uppercase tracking-[0.28em] text-[#C8242B]">
                                    Limited Promotional Offer
                                </span>
                                <span className="rounded-full bg-[#C8242B] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#FCF4E1]" data-testid="pricing-save-badge">
                                    Save ₹2,000
                                </span>
                            </div>
                            <h2 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">Complete Dropshipping Store Setup</h2>
                            <div className="mt-6 flex flex-wrap items-end gap-x-4 gap-y-1">
                                <span className="text-6xl font-extrabold tracking-tight sm:text-7xl" data-testid="pricing-current-price">₹1,999</span>
                                <span className="pb-2 text-xl font-semibold text-[#17130F]/40 line-through" data-testid="pricing-original-price">₹3,999</span>
                            </div>
                            <p className="mt-3 text-sm text-[#17130F]/60">Complete setup for just ₹1,999 — one price, everything included.</p>
                            <div className="my-8 h-px bg-[#17130F]/10" />
                            <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                                {INCLUDED.map((item) => (
                                    <li key={item} className="flex items-start gap-2.5 text-sm font-medium">
                                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C8242B]/10 text-[#C8242B]">
                                            <Check size={11} strokeWidth={3} />
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <button
                                type="button"
                                onClick={openModal}
                                data-testid="pricing-start-btn"
                                className="btn-primary mt-9 flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-bold sm:w-auto"
                            >
                                Start My Store <ArrowRight size={16} />
                            </button>
                            <p className="mt-5 flex items-center gap-2 text-xs font-medium text-[#17130F]/55">
                                <ShieldCheck size={14} className="text-[#C8242B]" />
                                0% advance payment — pay only after your store is complete.
                            </p>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};
