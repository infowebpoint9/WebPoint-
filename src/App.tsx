import { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lenis from "lenis";
import { MotionConfig } from "framer-motion";
import { Toaster } from "sonner";
import Home from "@/pages/Home";
import Admin from "@/pages/Admin";
import { ModalProvider } from "@/context/ModalContext";
import { StartStoreModal } from "@/components/StartStoreModal";

export default function App() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return undefined;
    const lenis = new Lenis({ lerp: 0.11, smoothWheel: true });
    lenisRef.current = lenis;
    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest('a[href^="#"]');
      if (!anchor) return;
      const id = anchor.getAttribute("href");
      if (id && id.length > 1) {
        const el = document.querySelector(id);
        if (el) {
          e.preventDefault();
          lenis.scrollTo(el as HTMLElement, { offset: -84 });
        }
      }
    };
    document.addEventListener("click", onClick);
    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <ModalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </BrowserRouter>
        <StartStoreModal />
        <Toaster
          theme="dark"
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#1A1A1F",
              border: "1px solid rgba(252,244,225,0.14)",
              color: "#FCF4E1",
            },
          }}
        />
      </ModalProvider>
    </MotionConfig>
  );
}

