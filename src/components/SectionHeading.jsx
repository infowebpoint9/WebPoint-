import { Reveal } from "./Reveal";

export const SectionHeading = ({ eyebrow, title, sub, align = "left" }) => (
    <Reveal className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
        {eyebrow && (
            <span className="eyebrow" data-testid={`eyebrow-${eyebrow.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                {eyebrow}
            </span>
        )}
        <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#FCF4E1] leading-[1.12]">
            {title}
        </h2>
        {sub && <p className="mt-4 text-base sm:text-lg text-[#B5B0A4] leading-relaxed">{sub}</p>}
    </Reveal>
);
