import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, User, Phone, Mail, MessageSquare, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";
import { useStoreModal } from "@/context/ModalContext";

const API = typeof process !== "undefined" && process.env?.REACT_APP_BACKEND_URL
    ? `${process.env.REACT_APP_BACKEND_URL}/api`
    : "";

const inputClasses =
    "w-full rounded-xl border border-[#FCF4E1]/15 bg-[#FCF4E1]/[0.04] px-4 py-3 text-sm text-[#FCF4E1] placeholder:text-[#7A766E] outline-none transition-colors duration-200 focus:border-[#C8242B] focus:bg-[#FCF4E1]/[0.07]";

export const StartStoreModal = () => {
    const { isOpen, closeModal } = useStoreModal();
    const [sending, setSending] = useState(false);
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    // Close on Escape key press & handle body scroll lock
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                closeModal();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = originalOverflow;
        };
    }, [isOpen, closeModal]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.name.trim() || !form.phone.trim() || !form.email.trim()) {
            toast.error("Please fill in your name, mobile number, and email.");
            return;
        }

        setSending(true);

        const waText = `Hi WebCraft Development, I want to start my dropshipping store!

*Full Name:* ${form.name.trim()}
*Mobile Number:* ${form.phone.trim()}
*Email:* ${form.email.trim()}
*Message:* ${form.message.trim() || "Ready to launch my dropshipping store."}`;

        const waUrl = `https://wa.me/919313371599?text=${encodeURIComponent(waText)}`;

        // Save enquiry locally
        try {
            const existing = JSON.parse(localStorage.getItem("wp_enquiries") || "[]");
            const newEntry = {
                id: `enq_${Date.now()}`,
                name: form.name.trim(),
                phone: form.phone.trim(),
                email: form.email.trim(),
                message: form.message.trim(),
                created_at: new Date().toISOString(),
            };
            localStorage.setItem("wp_enquiries", JSON.stringify([newEntry, ...existing]));
        } catch (_) {}

        // Send to backend if available
        if (API && !API.startsWith("undefined")) {
            try {
                await axios.post(`${API}/enquiries`, form);
            } catch (_) {}
        }

        toast.success("Request submitted! Redirecting to WhatsApp...", {
            duration: 4000,
            action: {
                label: "Open WhatsApp",
                onClick: () => window.open(waUrl, "_blank"),
            },
        });

        setForm({ name: "", phone: "", email: "", message: "" });
        setSending(false);
        closeModal();

        // Redirect directly to WhatsApp with submitted details
        try {
            const w = window.open(waUrl, "_blank");
            if (!w || w.closed || typeof w.closed === "undefined") {
                window.location.href = waUrl;
            }
        } catch {
            window.location.href = waUrl;
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
                    data-testid="start-store-modal-overlay"
                >
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={closeModal}
                        className="fixed inset-0 bg-black/80 backdrop-blur-md"
                        aria-hidden="true"
                    />

                    {/* Modal Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 15 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 15 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl border border-[#FCF4E1]/15 bg-[#121215] p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] sm:p-8"
                        data-testid="start-store-modal"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-title"
                    >
                        {/* Close button */}
                        <button
                            type="button"
                            onClick={closeModal}
                            data-testid="modal-close-btn"
                            aria-label="Close popup"
                            className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-[#FCF4E1]/10 bg-[#FCF4E1]/[0.05] text-[#B5B0A4] transition-colors hover:border-[#FCF4E1]/30 hover:bg-[#FCF4E1]/10 hover:text-[#FCF4E1]"
                        >
                            <X size={18} />
                        </button>

                        {/* Modal Header */}
                        <div>
                            <span className="font-mono-brand text-[10px] uppercase tracking-[0.25em] text-[#C8242B]">
                                Launch Within 24 Hours
                            </span>
                            <h2
                                id="modal-title"
                                className="mt-2 text-2xl font-bold tracking-tight text-[#FCF4E1] sm:text-3xl"
                            >
                                Start My Store
                            </h2>
                            <p className="mt-2 text-sm text-[#B5B0A4] leading-relaxed">
                                Enter your details below. We'll review your requirements and begin setting up your store.
                            </p>

                            <div className="mt-4 flex items-center gap-2 rounded-xl border border-[#C8242B]/25 bg-[#C8242B]/10 px-3.5 py-2 text-xs font-medium text-[#FCF4E1]">
                                <ShieldCheck size={16} className="shrink-0 text-[#C8242B]" />
                                <span>0% Advance · Pay ₹1,999 only after completion</span>
                            </div>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="mt-6 space-y-4" data-testid="modal-store-form">
                            <div>
                                <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#FCF4E1]/80">
                                    <User size={13} className="text-[#C8242B]" />
                                    Full Name <span className="text-[#C8242B]">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    autoFocus
                                    data-testid="modal-input-name"
                                    placeholder="e.g. Rahul Sharma"
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    className={inputClasses}
                                />
                            </div>

                            <div>
                                <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#FCF4E1]/80">
                                    <Phone size={13} className="text-[#C8242B]" />
                                    Mobile Number <span className="text-[#C8242B]">*</span>
                                </label>
                                <input
                                    type="tel"
                                    required
                                    data-testid="modal-input-phone"
                                    placeholder="e.g. +91 98765 43210"
                                    value={form.phone}
                                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                    className={inputClasses}
                                />
                            </div>

                            <div>
                                <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#FCF4E1]/80">
                                    <Mail size={13} className="text-[#C8242B]" />
                                    Email <span className="text-[#C8242B]">*</span>
                                </label>
                                <input
                                    type="email"
                                    required
                                    data-testid="modal-input-email"
                                    placeholder="e.g. rahul@example.com"
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    className={inputClasses}
                                />
                            </div>

                            <div>
                                <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#FCF4E1]/80">
                                    <MessageSquare size={13} className="text-[#C8242B]" />
                                    Message
                                </label>
                                <textarea
                                    rows={3}
                                    data-testid="modal-input-message"
                                    placeholder="Tell us about the products or niche you want to sell..."
                                    value={form.message}
                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    className={inputClasses}
                                />
                            </div>

                            {/* Bottom Send Request Button */}
                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={sending}
                                    data-testid="modal-send-request-btn"
                                    className="btn-primary inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold shadow-[0_8px_25px_rgba(200,36,43,0.4)] disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {sending ? "Sending..." : (
                                        <>
                                            Send Request <Send size={15} />
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
