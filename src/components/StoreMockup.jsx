import { Lock } from "lucide-react";

export const PRODUCTS = [
    {
        name: "Alabaster Bust",
        price: "₹1,499",
        img: "https://images.unsplash.com/photo-1777795530501-61f68a9c08b8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMHByb2R1Y3QlMjBzdHVkaW8lMjBwcmVzZW50YXRpb258ZW58MHx8fHwxNzg5MDU4MDkwfDA&ixlib=rb-4.1.0&q=80&w=500&auto=format",
    },
    {
        name: "Studio Ceramic Vase",
        price: "₹899",
        img: "https://images.unsplash.com/photo-1627542557169-5ed71c66ed85?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZWNvbW1lcmNlJTIwc3RvcmUlMjBtb2NrdXAlMjBwcm9kdWN0JTIwcHJlc2VudGF0aW9ufGVufDB8fHx8MTc4OTA1ODA4NXww&ixlib=rb-4.1.0&q=80&w=500&auto=format",
    },
    {
        name: "Leather Phone Case",
        price: "₹549",
        img: "https://images.unsplash.com/photo-1706509511714-2a1e0f74321e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHw0fHxtaW5pbWFsJTIwZWNvbW1lcmNlJTIwc3RvcmUlMjBtb2NrdXAlMjBwcm9kdWN0JTIwcHJlc2VudGF0aW9ufGVufDB8fHx8MTc4OTA1ODA4NXww&ixlib=rb-4.1.0&q=80&w=500&auto=format",
    },
];

export const BrowserFrame = ({ url, children, className = "" }) => (
    <div className={`browser ${className}`}>
        <div className="browser-bar">
            <span className="browser-dot bg-[#C8242B]" />
            <span className="browser-dot bg-[#FCF4E1]/20" />
            <span className="browser-dot bg-[#FCF4E1]/20" />
            <span className="browser-url">
                <Lock size={9} className="text-[#C8242B]" /> {url}
            </span>
        </div>
        {children}
    </div>
);

export const Storefront = ({ name = "YOUR STORE", tagline = "New Season Essentials", compact = false }) => (
    <div className="bg-[#FCF4E1] text-[#17130F]">
        <div className="flex items-center justify-between border-b border-[#17130F]/10 px-4 py-2.5 sm:px-5">
            <span className="text-[11px] font-extrabold tracking-[0.18em] sm:text-xs">{name}</span>
            <div className="flex items-center gap-3 text-[9px] font-medium uppercase tracking-widest text-[#17130F]/60">
                <span className="hidden sm:inline">Shop</span>
                <span className="hidden sm:inline">About</span>
                <span className="inline-flex h-5 items-center rounded-full bg-[#C8242B] px-2 text-[8px] font-bold text-[#FCF4E1]">Cart · 2</span>
            </div>
        </div>
        <div className={`flex items-center justify-between gap-4 bg-[#17130F] px-4 text-[#FCF4E1] sm:px-5 ${compact ? "py-3" : "py-5"}`}>
            <div>
                <p className="text-[8px] font-medium uppercase tracking-[0.3em] text-[#C8242B]">Just Dropped</p>
                <p className={`font-serif-accent italic ${compact ? "text-sm" : "text-lg sm:text-xl"}`}>{tagline}</p>
            </div>
            <span className="shrink-0 rounded-full border border-[#FCF4E1]/25 px-3 py-1 text-[8px] font-semibold uppercase tracking-widest">
                Shop Now
            </span>
        </div>
        <div className="grid grid-cols-3 gap-2.5 p-3 sm:gap-3 sm:p-4">
            {PRODUCTS.map((p) => (
                <div key={p.name}>
                    <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-[#17130F]/5">
                        <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover" />
                        <span className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#17130F]/35 to-transparent" />
                    </div>
                    <p className="mt-1.5 truncate text-[9px] font-semibold sm:text-[10px]">{p.name}</p>
                    <p className="text-[9px] font-medium text-[#C8242B] sm:text-[10px]">{p.price}</p>
                </div>
            ))}
        </div>
    </div>
);
