import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { useStoreModal } from "@/context/ModalContext";

export const FinalCta = () => {
    const { openModal } = useStoreModal();

    return (
        <section className="relative px-3 py-6 sm:px-5" data-testid="final-cta-section">
            <div className="red-panel relative mx-auto max-w-7xl overflow-hidden rounded-[32px] px-6 py-12 sm:px-12 sm:py-16">
                <img
                    src="/webpoint-mark.png"
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-20 -top-24 hidden w-[420px] select-none opacity-[0.14] lg:block"
                />
                <div className="relative mx-auto max-w-3xl text-center">
                    <Reveal>
                        <span className="font-mono-brand text-[10px] uppercase tracking-[0.3em] text-[#FCF4E1]/70">
                            Ready when you are
                        </span>
                        <h2 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-[#FCF4E1] sm:text-5xl lg:text-6xl">
                            Your Store Should Look{" "}
                            <span className="font-serif-accent font-medium italic">Like a Business.</span>
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#FCF4E1]/80 sm:text-lg">
                            Launch a professionally designed dropshipping store with everything you need to get started —
                            and pay nothing until it's complete.
                        </p>
                        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                            <button
                                type="button"
                                onClick={openModal}
                                data-testid="final-cta-start-btn"
                                className="btn-cream inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold"
                            >
                                Start My Store <ArrowRight size={16} />
                            </button>
                            <a
                                href="https://clyton.shop"
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid="final-cta-demo-btn"
                                className="inline-flex items-center gap-2 rounded-full border border-[#FCF4E1]/40 px-8 py-4 text-sm font-semibold text-[#FCF4E1] transition-all duration-200 hover:border-[#FCF4E1]/70 hover:bg-[#FCF4E1]/10"
                            >
                                View Demo <ArrowUpRight size={15} />
                            </a>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};
