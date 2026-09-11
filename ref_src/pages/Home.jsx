import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { TrustGrid } from "@/components/TrustGrid";
import { Manifesto } from "@/components/Manifesto";
import { Checklist } from "@/components/Checklist";
import { WhyChoose } from "@/components/WhyChoose";
import { Process } from "@/components/Process";
import { LaunchPackage } from "@/components/LaunchPackage";
import { Portfolio } from "@/components/Portfolio";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Pricing } from "@/components/Pricing";
import { PaymentTrust } from "@/components/PaymentTrust";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
    return (
        <div className="grain min-h-screen bg-[#0B0B0D] text-[#FCF4E1]">
            <Nav />
            <main>
                <Hero />
                <Marquee />
                <TrustGrid />
                <Manifesto />
                <Checklist />
                <WhyChoose />
                <Process />
                <LaunchPackage />
                <Portfolio />
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
