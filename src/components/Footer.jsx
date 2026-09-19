const LINKS = [
    { label: "Home", href: "#home" },
    { label: "Service", href: "#service" },
    { label: "Process", href: "#process" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
];

export const Footer = () => (
    <footer className="relative z-10 border-t border-[#FCF4E1]/10 pt-10 sm:pt-12" data-testid="site-footer">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-8 pb-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
                <div>
                    <div className="flex items-center gap-3">
                        <img src="/webpoint-mark.png" alt="WebCraft Development logo" className="h-10 w-10 rounded-xl" width={40} height={40} />
                        <span className="leading-none">
                            <span className="block text-base font-bold tracking-tight text-[#FCF4E1]">WebCraft</span>
                            <span className="mt-0.5 block text-[9px] font-medium uppercase tracking-[0.32em] text-[#B5B0A4]">Development</span>
                        </span>
                    </div>
                    <p className="mt-5 max-w-xs text-sm leading-relaxed text-[#B5B0A4]">
                        Specialized Dropshipping Website Development. One service, done properly — complete stores,
                        ready to launch.
                    </p>
                </div>
                <nav aria-label="Footer">
                    <span className="font-mono-brand text-[10px] uppercase tracking-[0.28em] text-[#7A766E]">Navigate</span>
                    <ul className="mt-4 space-y-2.5">
                        {LINKS.map((l) => (
                            <li key={l.label}>
                                <a href={l.href} data-testid={`footer-link-${l.label.toLowerCase()}`} className="text-sm text-[#B5B0A4] transition-colors hover:text-[#FCF4E1]">
                                    {l.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div>
                    <span className="font-mono-brand text-[10px] uppercase tracking-[0.28em] text-[#7A766E]">Reach Us</span>
                    <ul className="mt-4 space-y-2.5 text-sm text-[#B5B0A4]">
                        <li>
                            <a href="https://wa.me/919313371599" target="_blank" rel="noopener noreferrer" data-testid="footer-whatsapp-link" className="transition-colors hover:text-[#FCF4E1]">
                                WhatsApp — +91 93133 71599
                            </a>
                        </li>
                        <li>
                            <a href="mailto:info.webpoint9@gmail.com" data-testid="footer-email-link" className="transition-colors hover:text-[#FCF4E1]">
                                info.webpoint9@gmail.com
                            </a>
                        </li>
                        <li>
                            <a href="https://clyton.shop" target="_blank" rel="noopener noreferrer" data-testid="footer-demo-link" className="transition-colors hover:text-[#FCF4E1]">
                                Demo store — Clyton.shop
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col items-center justify-between gap-3 border-t border-[#FCF4E1]/10 py-7 sm:flex-row">
                <p className="text-xs text-[#7A766E]">© 2026 WebCraft Development. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
);
