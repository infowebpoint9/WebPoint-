import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Lock, RefreshCw, ArrowLeft, Inbox } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Admin() {
    const [key, setKey] = useState(sessionStorage.getItem("wp_admin_key") || "");
    const [enquiries, setEnquiries] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const load = async (k) => {
        setLoading(true);
        setError("");
        try {
            const res = await axios.get(`${API}/admin/enquiries`, { headers: { "X-Admin-Key": k } });
            setEnquiries(res.data);
            sessionStorage.setItem("wp_admin_key", k);
        } catch (err) {
            setError("Incorrect admin key. Please try again.");
            setEnquiries(null);
        } finally {
            setLoading(false);
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        load(key);
    };

    return (
        <div className="min-h-screen bg-[#0B0B0D] px-5 py-16 text-[#FCF4E1]" data-testid="admin-enquiries-view">
            <div className="mx-auto max-w-3xl">
                <Link to="/" data-testid="admin-back-link" className="inline-flex items-center gap-2 text-xs font-medium text-[#B5B0A4] transition-colors hover:text-[#FCF4E1]">
                    <ArrowLeft size={14} /> Back to site
                </Link>
                <div className="mt-6 flex items-center gap-3">
                    <img src="/webpoint-mark.png" alt="WebPoint Development logo" className="h-10 w-10 rounded-xl" width={40} height={40} />
                    <div>
                        <h1 className="text-xl font-bold tracking-tight">Enquiries</h1>
                        <p className="text-xs text-[#7A766E]">WebPoint Development — admin view</p>
                    </div>
                </div>

                {enquiries === null ? (
                    <form onSubmit={onSubmit} className="glass-card mt-8 rounded-3xl p-8" data-testid="admin-login-form">
                        <span className="glass-icon flex h-11 w-11 items-center justify-center rounded-xl text-[#C8242B]">
                            <Lock size={18} />
                        </span>
                        <p className="mt-4 text-sm text-[#B5B0A4]">Enter the admin key to view submitted enquiries.</p>
                        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                            <input
                                type="password"
                                value={key}
                                onChange={(e) => setKey(e.target.value)}
                                data-testid="admin-key-input"
                                placeholder="Admin key"
                                aria-label="Admin key"
                                className="w-full rounded-xl border border-[#FCF4E1]/12 bg-[#FCF4E1]/[0.04] px-4 py-3 text-sm text-[#FCF4E1] placeholder:text-[#7A766E] outline-none transition-colors focus:border-[#C8242B]"
                            />
                            <button type="submit" disabled={loading || !key} data-testid="admin-login-btn" className="btn-primary shrink-0 rounded-full px-7 py-3 text-sm font-semibold disabled:opacity-60">
                                {loading ? "Checking…" : "View Enquiries"}
                            </button>
                        </div>
                        {error && (
                            <p className="mt-4 text-sm font-medium text-[#C8242B]" data-testid="admin-error" role="alert">
                                {error}
                            </p>
                        )}
                    </form>
                ) : (
                    <div className="mt-8" data-testid="admin-enquiry-list">
                        <div className="flex items-center justify-between">
                            <p className="text-sm text-[#B5B0A4]">
                                {enquiries.length} enquir{enquiries.length === 1 ? "y" : "ies"}
                            </p>
                            <button type="button" onClick={() => load(key)} data-testid="admin-refresh-btn" className="btn-glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold">
                                <RefreshCw size={13} /> Refresh
                            </button>
                        </div>
                        {enquiries.length === 0 ? (
                            <div className="glass-card mt-5 flex flex-col items-center rounded-3xl p-12 text-center">
                                <Inbox size={28} className="text-[#7A766E]" />
                                <p className="mt-4 text-sm text-[#B5B0A4]">No enquiries yet. New submissions will appear here.</p>
                            </div>
                        ) : (
                            <div className="mt-5 space-y-4">
                                {enquiries.map((enq) => (
                                    <article key={enq.id} className="glass-card rounded-2xl p-6" data-testid="admin-enquiry-item">
                                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                                            <h2 className="text-base font-bold tracking-tight">{enq.name}</h2>
                                            <time className="font-mono-brand text-[10px] uppercase tracking-[0.14em] text-[#7A766E]">
                                                {new Date(enq.created_at).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })}
                                            </time>
                                        </div>
                                        <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-xs text-[#B5B0A4]">
                                            <a href={`mailto:${enq.email}`} className="hover:text-[#FCF4E1]">{enq.email}</a>
                                            <a href={`https://wa.me/${enq.phone.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#FCF4E1]">
                                                {enq.phone}
                                            </a>
                                        </div>
                                        <p className="mt-3 border-t border-[#FCF4E1]/10 pt-3 text-sm leading-relaxed text-[#B5B0A4]">{enq.message}</p>
                                    </article>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
