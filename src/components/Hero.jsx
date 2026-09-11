import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Play, Package, Clock, ShieldCheck } from "lucide-react";
import { BrowserFrame, Storefront } from "./StoreMockup";
import { useStoreModal } from "@/context/ModalContext";

const MaskedLine = ({ children, delay }) => (
    <span className="block overflow-hidden pb-1">
        <motion.span
            className="block"
            initial={{ y: "112%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.span>
    </span>
);

export const Hero = () => {
    const { openModal } = useStoreModal();
    const sceneRef = useRef(null);
    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 120, damping: 18 });
    const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), { stiffness: 120, damping: 18 });

    const onMove = (e) => {
        const rect = sceneRef.current?.getBoundingClientRect();
        if (!rect) return;
        mx.set((e.clientX - rect.left) / rect.width - 0.5);
        my.set((e.clientY - rect.top) / rect.height - 0.5);
    };
    const onLeave = () => {
        mx.set(0);
        my.set(0);
    };

    return (
        <section id="home" data-testid="hero-section" className="relative overflow-hidden pb-10 pt-24 sm:pt-28 lg:pb-14 lg:pt-32">
            <div className="glow-red pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2" aria-hidden="true" />
            <div className="glow-cream pointer-events-none absolute right-[-180px] top-1/3 h-[420px] w-[420px]" aria-hidden="true" />
            <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
                <div>
                    <motion.span
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        data-testid="hero-trust-label"
                        className="glass-chip inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-medium tracking-wide text-[#FCF4E1]/90"
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#C8242B]" />
                        Specialized Dropshipping Website Development
                    </motion.span>
                    <h1 className="mt-5 text-4xl font-extrabold leading-[1.06] tracking-tight text-[#FCF4E1] sm:text-5xl lg:text-[3.35rem]">
                        <MaskedLine delay={0.2}>Premium Dropshipping</MaskedLine>
                        <MaskedLine delay={0.32}>Websites, Built to Turn</MaskedLine>
                        <MaskedLine delay={0.44}>
                            Visitors Into{" "}
                            <span className="font-serif-accent font-medium italic text-[#FCF4E1]">
                                Customers<span className="text-[#C8242B]">.</span>
                            </span>
                        </MaskedLine>
                    </h1>
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                        className="mt-6 max-w-xl text-base leading-relaxed text-[#B5B0A4] sm:text-lg"
                    >
                        Complete dropshipping store development for entrepreneurs who want a professional online
                        business — designed, stocked with 40+ products and delivered ready to launch.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.72 }}
                        className="mt-8 flex flex-wrap items-center gap-3"
                    >
                        <button
                            type="button"
                            onClick={openModal}
                            data-testid="hero-start-store-btn"
                            className="btn-primary inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
                        >
                            Start My Store <ArrowRight size={16} />
                        </button>
                        <a
                            href="https://clyton.shop"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="hero-view-demo-btn"
                            className="btn-glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
                        >
                            <Play size={14} className="text-[#C8242B]" /> View Demo
                        </a>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        className="font-mono-brand mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] uppercase tracking-[0.22em] text-[#7A766E]"
                    >
                        <span data-testid="hero-micro-advance">0% Advance</span>
                        <span className="h-3 w-px bg-[#FCF4E1]/15" aria-hidden="true" />
                        <span data-testid="hero-micro-delivery">Ready Within 24 Hours</span>
                        <span className="h-3 w-px bg-[#FCF4E1]/15" aria-hidden="true" />
                        <span data-testid="hero-micro-price">₹1,999 All-Inclusive</span>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="mockup-scene relative"
                    ref={sceneRef}
                    onMouseMove={onMove}
                    onMouseLeave={onLeave}
                    data-testid="hero-store-mockup"
                >
                    <motion.div style={{ rotateX, rotateY }} className="will-change-transform">
                        <BrowserFrame url="yourstore.com">
                            <Storefront />
                        </BrowserFrame>
                    </motion.div>
                    <div className="glass-chip float-slow absolute -right-3 -top-5 hidden items-center gap-2.5 rounded-2xl px-4 py-3 sm:flex" data-testid="hero-chip-products">
                        <span className="glass-icon flex h-8 w-8 items-center justify-center rounded-lg text-[#C8242B]">
                            <Package size={15} />
                        </span>
                        <span className="text-[11px] font-semibold text-[#FCF4E1]">
                            40+ Products <span className="block text-[9px] font-normal text-[#B5B0A4]">Listed for you</span>
                        </span>
                    </div>
                    <div className="glass-chip float-slower absolute -bottom-6 -left-4 hidden items-center gap-2.5 rounded-2xl px-4 py-3 sm:flex" data-testid="hero-chip-delivery">
                        <span className="glass-icon flex h-8 w-8 items-center justify-center rounded-lg text-[#C8242B]">
                            <Clock size={15} />
                        </span>
                        <span className="text-[11px] font-semibold text-[#FCF4E1]">
                            Ready in 24h <span className="block text-[9px] font-normal text-[#B5B0A4]">Stated target</span>
                        </span>
                    </div>
                    <div className="glass-chip float-slow absolute -left-6 top-1/3 hidden items-center gap-2.5 rounded-2xl px-4 py-3 lg:flex" data-testid="hero-chip-advance" style={{ animationDelay: "1.2s" }}>
                        <span className="glass-icon flex h-8 w-8 items-center justify-center rounded-lg text-[#C8242B]">
                            <ShieldCheck size={15} />
                        </span>
                        <span className="text-[11px] font-semibold text-[#FCF4E1]">
                            0% Advance <span className="block text-[9px] font-normal text-[#B5B0A4]">Pay after completion</span>
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
