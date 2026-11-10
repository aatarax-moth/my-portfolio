import { useState } from "react";
import Container from "./Container";
import emailjs from "@emailjs/browser";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("idle"); // 'idle' | 'submitting' | 'success' | 'error'
    const [errorMessage, setErrorMessage] = useState("");

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey =
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY ||
        process.env.REACT_APP_EMAILJS_USER_ID;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("submitting");
        setErrorMessage("");

        try {
            if (!serviceId || !templateId || !publicKey) {
                throw new Error(
                    "EmailJS is not configured. In Create React App, env vars must start with REACT_APP_ (e.g. REACT_APP_EMAILJS_SERVICE_ID)."
                );
            }

            const templateParams = {
                from_name: formData.name,
                reply_to: formData.email,
                message: formData.message,
                name: formData.name,
                email: formData.email,
            };

            await emailjs.send(serviceId, templateId, templateParams, {
                publicKey,
            });

            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            setStatus("error");
            const message =
                (typeof error === "object" && error && "text" in error && error.text) ||
                (error instanceof Error ? error.message : "") ||
                "Something went wrong. Please try again.";

            setErrorMessage(String(message));
        }
    };

    return (
        <Container>
            <div
                className="mt-16 rounded-xl transition duration-420 ease-portfolio focus-within:-translate-y-px focus-within:shadow-[0_18px_44px_rgba(0,0,0,0.08)] max-[640px]:mt-16"
                id="contact"
                data-reveal
                style={{ "--reveal-delay": "160ms" }}
            >
                <div className="mb-8 text-left">
                    <h2 className="mb-2 text-[1.875rem] font-bold text-[#111827]">Contact Me</h2>
                    <p className="text-[0.95rem] text-[#6b7280]">Have a question or want to work together? Send a message!</p>
                </div>

                {status === "success" ? (
                    <div className="animate-pop-in p-6 text-center">
                        <h3 className="mb-2 text-2xl text-[#111827]">Thank You!</h3>
                        <p className="mb-6 text-[#4b5563]">Your message has been sent successfully. I'll get back to you shortly.</p>
                        <button 
                            type="button"
                            className="cursor-pointer rounded-lg border-[1.5px] border-orange bg-transparent px-5 py-2.5 text-[0.9rem] font-semibold text-orange hover:bg-orange-light" 
                            onClick={() => setStatus("idle")}
                        >
                            Send another message
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2 text-left">
                            <label className="text-sm font-semibold text-[#374151]" htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="box-border w-full rounded-lg border-[1.5px] border-[#e5e7eb] bg-[#f9fafb] px-4 py-3 text-[0.95rem] text-[#1f2937] outline-none transition duration-220 focus:border-orange focus:bg-white focus:shadow-[0_0_0_4px_var(--color-orange-light)]"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                autoComplete="name"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2 text-left">
                            <label className="text-sm font-semibold text-[#374151]" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="box-border w-full rounded-lg border-[1.5px] border-[#e5e7eb] bg-[#f9fafb] px-4 py-3 text-[0.95rem] text-[#1f2937] outline-none transition duration-220 focus:border-orange focus:bg-white focus:shadow-[0_0_0_4px_var(--color-orange-light)]"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                autoComplete="email"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2 text-left">
                            <label className="text-sm font-semibold text-[#374151]" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                className="box-border min-h-[120px] w-full resize-y rounded-lg border-[1.5px] border-[#e5e7eb] bg-[#f9fafb] px-4 py-3 text-[0.95rem] text-[#1f2937] outline-none transition duration-220 focus:border-orange focus:bg-white focus:shadow-[0_0_0_4px_var(--color-orange-light)]"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="How can I help you?"
                                required
                            ></textarea>
                        </div>

                        {status === "error" && (
                            <p className="m-0 text-sm text-red-500">
                                {errorMessage || "Something went wrong. Please try again."}
                            </p>
                        )}

                        <button 
                            type="submit" 
                        className="mt-2 flex cursor-pointer items-center justify-center rounded-full border-0 bg-orange px-6 py-3.5 text-base font-semibold text-white transition duration-220 ease-portfolio hover:-translate-y-px hover:bg-orange-hover hover:shadow-[0_4px_12px_rgba(249,115,22,0.25)] disabled:cursor-not-allowed disabled:opacity-75" 
                            disabled={status === "submitting"}
                        >
                            {status === "submitting" ? (
                                <span className="inline-flex items-center gap-2">
                                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/35 border-t-white"></span> Sending...
                                </span>
                            ) : (
                                "Send Message"
                            )}
                        </button>
                    </form>
                )}
            </div>
        </Container>
    );
}

export default ContactForm;
