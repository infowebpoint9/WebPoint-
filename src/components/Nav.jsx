import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useStoreModal } from "@/context/ModalContext";

const LINKS = [
    { label: "Home", href: "#home" },
    { label: "Service", href: "#service" },
    { label: "Process", href: "#process" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
];

export const Nav = () => {
    const { openModal } = useStoreModal();
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className="fixed inset-x-0 top-0 z-50 px-3 sm:px-5" data-testid="main-navigation">
            <div
                className={`glass-nav mx-auto max-w-6xl rounded-2xl sm:rounded-full transition-all duration-500 ${
                    scrolled ? "mt-2 sm:mt-3" : "mt-3 sm:mt-5"
                }`}
            >
                <div className={`flex items-center justify-between px-4 sm:px-6 transition-all duration-500 ${scrolled ? "py-2.5" : "py-3.5"}`}>
                    <a href="#home" className="flex items-center gap-3" data-testid="nav-logo" aria-label="WebCraft Development — home">
                        <img src="/webpoint-mark.png" alt="WebCraft Development logo" className="h-9 w-9 rounded-lg" width={36} height={36} />
                        <span className="leading-none">
                            <span className="block text-[15px] font-bold tracking-tight text-[#FCF4E1]">WebCraft</span>
                            <span className="mt-0.5 block text-[9px] font-medium uppercase tracking-[0.32em] text-[#B5B0A4]">Development</span>
                        </span>
                    </a>
                    <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
                        {LINKS.map((l) => (
                            <a
                                key={l.label}
                                href={l.href}
                                data-testid={`nav-link-${l.label.toLowerCase()}`}
                                className="text-[13px] font-medium text-[#B5B0A4] transition-colors duration-200 hover:text-[#FCF4E1]"
                            >
                                {l.label}
                            </a>
                        ))}
                    </nav>
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={openModal}
                            data-testid="nav-get-started-btn"
                            className="btn-primary hidden items-center gap-1.5 rounded-full px-5 py-2.5 text-[13px] font-semibold sm:inline-flex"
                        >
                            Get Started <ArrowUpRight size={14} />
                        </button>
                        <button
                            type="button"
                            data-testid="nav-mobile-menu-btn"
                            aria-label={open ? "Close menu" : "Open menu"}
                            aria-expanded={open}
                            onClick={() => setOpen(!open)}
                            className="btn-glass inline-flex h-10 w-10 items-center justify-center rounded-full lg:hidden"
                        >
                            {open ? <X size={18} /> : <Menu size={18} />}
                        </button>
                    </div>
                </div>
                <AnimatePresence>
                    {open && (
                        <motion.nav
                            key="mobile-nav"
                            data-testid="nav-mobile-panel"
                            aria-label="Mobile"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden lg:hidden"
                        >
                            <div className="flex flex-col gap-1 border-t border-[#FCF4E1]/10 px-4 py-4">
                                {LINKS.map((l) => (
                                    <a
                                        key={l.label}
                                        href={l.href}
                                        data-testid={`nav-mobile-link-${l.label.toLowerCase()}`}
                                        onClick={() => setOpen(false)}
                                        className="rounded-xl px-4 py-3 text-sm font-medium text-[#B5B0A4] transition-colors hover:bg-[#FCF4E1]/5 hover:text-[#FCF4E1]"
                                    >
                                        {l.label}
                                    </a>
                                ))}
                                <button
                                    type="button"
                                    data-testid="nav-mobile-get-started-btn"
                                    onClick={() => {
                                        setOpen(false);
                                        openModal();
                                    }}
                                    className="btn-primary mt-2 inline-flex items-center justify-center gap-1.5 rounded-full px-5 py-3 text-sm font-semibold"
                                >
                                    Get Started <ArrowUpRight size={15} />
                                </button>
                            </div>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};
