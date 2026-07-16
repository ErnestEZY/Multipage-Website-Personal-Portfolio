import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getConfig() {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim();
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim();
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim();
  return { publicKey, serviceId, templateId };
}

export default function ContactForm() {
  const [sending, setSending] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !subject || !message) {
      await Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All input fields are required before sending email.",
      });
      return;
    }

    if (!emailPattern.test(email)) {
      await Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please validate your email format before sending email. (Example: johndoe@gmail.com)",
      });
      return;
    }

    const { publicKey, serviceId, templateId } = getConfig();

    if (!publicKey || !serviceId || !templateId) {
      await Swal.fire({
        icon: "error",
        title: "Email not configured",
        text: "EmailJS environment variables are missing. Add VITE_EMAILJS_PUBLIC_KEY, VITE_EMAILJS_SERVICE_ID, and VITE_EMAILJS_TEMPLATE_ID to your .env, then restart npm run dev.",
      });
      return;
    }

    setSending(true);
    void Swal.fire({
      title: "Sending email...",
      text: "Please wait while we send your email.",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      // Must match EmailJS template vars: {{name}}, {{email}}, {{message}}
      await emailjs.send(
        serviceId,
        templateId,
        {
          name,
          email,
          message,
          subject,
          reply_to: email,
        },
        { publicKey },
      );

      await Swal.fire({
        icon: "success",
        title: "Success",
        text: "Email sent successfully!",
      });
      form.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      await Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to send email. Please try again later.",
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="form" id="contact-form" onSubmit={onSubmit} noValidate>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="contact-subject">Subject</label>
        <input id="contact-subject" name="subject" type="text" required />
      </div>

      <div className="form-field">
        <label htmlFor="contact-message">Message</label>
        <textarea id="contact-message" name="message" required />
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        id="submit-button"
        disabled={sending}
      >
        {sending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
