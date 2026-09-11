import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { MessageCircle, Mail, Send, LoaderCircle } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const inputCls =
    "w-full rounded-xl border border-[#FCF4E1]/12 bg-[#FCF4E1]/[0.04] px-4 py-3.5 text-sm text-[#FCF4E1] placeholder:text-[#7A766E] outline-none transition-colors duration-200 focus:border-[#C8242B] focus:bg-[#FCF4E1]/[0.06]";

export const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
    const [sending, setSending] = useState(false);

    const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        setSending(true);
        try {
            await axios.post(`${API}/enquiries`, form);
            toast.success("Request received — we'll reach out to you shortly.");
            setForm({ name: "", email: "", phone: "", message: "" });
        } catch (err) {
            toast.error("Something went wrong. Please try WhatsApp or email instead.");
        } finally {
            setSending(false);
        }
    };

    return (
        <section id="contact" className="relative overflow-hidden py-20 sm:py-28" data-testid="contact-section">
            <div className="glow-red pointer-events-none absolute left-[-160px] bottom-0 h-[420px] w-[420px]" aria-hidden="true" />
            <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
                <div>
                    <SectionHeading
                        eyebrow="Contact"
                        title="Let's Build Your Store."
                        sub="Tell us a little about what you want to sell. We'll get back to you with the next steps — usually the same day."
                    />
                    <Reveal delay={0.15}>
                        <div className="mt-9 space-y-3">
                            <a
                                href="https://wa.me/917861989254?text=Hi%20WebPoint%20Development%2C%20I%20want%20to%20start%20my%20dropshipping%20store."
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid="contact-whatsapp-btn"
                                className="glass-card flex items-center gap-4 rounded-2xl p-5"
                            >
                                <span className="glass-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-[#C8242B]">
                                    <MessageCircle size={19} strokeWidth={1.75} />
                                </span>
                                <span>
                                    <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-[#7A766E]">WhatsApp</span>
                                    <span className="block text-sm font-semibold text-[#FCF4E1]">+91 78619 89254</span>
                                </span>
                            </a>
                            <a
                                href="mailto:info.webpoint9@gmail.com"
                                data-testid="contact-email-btn"
                                className="glass-card flex items-center gap-4 rounded-2xl p-5"
                            >
                                <span className="glass-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-[#C8242B]">
                                    <Mail size={19} strokeWidth={1.75} />
                                </span>
                                <span>
                                    <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-[#7A766E]">Email</span>
                                    <span className="block text-sm font-semibold text-[#FCF4E1]">info.webpoint9@gmail.com</span>
                                </span>
                            </a>
                            <p className="font-mono-brand pt-2 text-[10px] uppercase tracking-[0.22em] text-[#7A766E]">
                                Typically replies the same day
                            </p>
                        </div>
                    </Reveal>
                </div>
                <Reveal delay={0.1}>
                    <form onSubmit={onSubmit} className="glass-card rounded-3xl p-6 sm:p-8" data-testid="contact-form">
                        <div className="grid gap-5">
                            <div>
                                <label htmlFor="contact-name" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[#B5B0A4]">
                                    Name
                                </label>
                                <input id="contact-name" data-testid="contact-name-input" name="name" required value={form.name} onChange={onChange} placeholder="Your full name" className={inputCls} />
                            </div>
                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="contact-email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[#B5B0A4]">
                                        Email
                                    </label>
                                    <input id="contact-email" data-testid="contact-email-input" type="email" name="email" required value={form.email} onChange={onChange} placeholder="you@email.com" className={inputCls} />
                                </div>
                                <div>
                                    <label htmlFor="contact-phone" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[#B5B0A4]">
                                        Phone / WhatsApp
                                    </label>
                                    <input id="contact-phone" data-testid="contact-phone-input" name="phone" required value={form.phone} onChange={onChange} placeholder="+91 …" className={inputCls} />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="contact-message" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[#B5B0A4]">
                                    Message
                                </label>
                                <textarea id="contact-message" data-testid="contact-message-input" name="message" required rows={4} value={form.message} onChange={onChange} placeholder="What would you like your store to sell?" className={`${inputCls} resize-none`} />
                            </div>
                            <button
                                type="submit"
                                disabled={sending}
                                data-testid="contact-submit-btn"
                                className="btn-primary inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-bold disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {sending ? (
                                    <>
                                        <LoaderCircle size={16} className="animate-spin" /> Sending…
                                    </>
                                ) : (
                                    <>
                                        Submit Request <Send size={15} />
                                    </>
                                )}
                            </button>
                            <p className="text-center text-[11px] leading-relaxed text-[#7A766E]">
                                No advance payment. We'll discuss your store first — you decide after.
                            </p>
                        </div>
                    </form>
                </Reveal>
            </div>
        </section>
    );
};
