import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { TrustGrid } from "@/components/TrustGrid";
import { Manifesto } from "@/components/Manifesto";
import { Checklist } from "@/components/Checklist";
import { Process } from "@/components/Process";
import { LaunchPackage } from "@/components/LaunchPackage";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Pricing } from "@/components/Pricing";
import { PaymentTrust } from "@/components/PaymentTrust";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
    return (
        <div className="grain relative min-h-screen bg-[#0B0B0D] text-[#FCF4E1]">
            <Nav />
            <main className="relative z-10">
                <Hero />
                <Marquee />
                <TrustGrid />
                <Manifesto />
                <Checklist />
                <Process />
                <LaunchPackage />
                <BeforeAfter />
                <Pricing />
                <PaymentTrust />
                <Faq />
                <FinalCta />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
