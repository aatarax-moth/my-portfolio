import { useState } from "react";
import "./ContactForm.css";
import "../index.css";
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
                className="contact-form-card"
                id="contact"
                data-reveal
                style={{ "--reveal-delay": "160ms" }}
            >
                <div className="contact-form-header">
                    <h2>Contact Me</h2>
                    <p>Have a question or want to work together? Send a message!</p>
                </div>

                {status === "success" ? (
                    <div className="form-feedback success">
                        <h3>Thank You!</h3>
                        <p>Your message has been sent successfully. I'll get back to you shortly.</p>
                        <button 
                            type="button"
                            className="btn-secondary" 
                            onClick={() => setStatus("idle")}
                        >
                            Send another message
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                autoComplete="name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                autoComplete="email"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="How can I help you?"
                                required
                            ></textarea>
                        </div>

                        {status === "error" && (
                            <p className="form-error">
                                {errorMessage || "Something went wrong. Please try again."}
                            </p>
                        )}

                        <button 
                            type="submit" 
                            className="submit-btn" 
                            disabled={status === "submitting"}
                        >
                            {status === "submitting" ? (
                                <span className="spinner-container">
                                    <span className="spinner"></span> Sending...
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
