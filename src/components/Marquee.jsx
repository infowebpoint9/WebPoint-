const ITEMS = [
    "Premium Store Design",
    "40+ Winning Products",
    "Free Domain",
    "Custom Logo",
    "0% Advance Payment",
    "Ready Within 24 Hours",
];

const Row = () => (
    <div className="flex shrink-0 items-center">
        {ITEMS.map((item, i) => (
            <span key={item} className="flex items-center">
                <span
                    className={`whitespace-nowrap px-6 sm:px-10 ${
                        i % 2 === 0
                            ? "font-serif-accent text-xl italic text-[#FCF4E1]/70 sm:text-3xl"
                            : "font-mono-brand text-xs uppercase tracking-[0.3em] text-[#7A766E] sm:text-sm"
                    }`}
                >
                    {item}
                </span>
                <span className="text-[10px] text-[#C8242B]" aria-hidden="true">
                    ◆
                </span>
            </span>
        ))}
    </div>
);

export const Marquee = () => (
    <div className="marquee py-3.5 sm:py-4.5" data-testid="editorial-marquee" aria-hidden="true">
        <div className="marquee-track">
            <Row />
            <Row />
        </div>
    </div>
);
