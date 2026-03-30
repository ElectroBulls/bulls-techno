'use client';

import { useState, useRef } from 'react';
import { content } from '@/config/content';

const { form } = content.contact;

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const data = new FormData(e.currentTarget);

    // Honeypot check — if the hidden field is filled, silently ignore
    if (data.get('_honey')) {
      setStatus('success');
      return;
    }

    const serviceId  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID  ?? '';
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '';
    const publicKey  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY  ?? '';

    if (!serviceId || !templateId || !publicKey) {
      // EmailJS not yet configured — show a fallback message
      setStatus('error');
      return;
    }

    try {
      const form = formRef.current;
      const templateParams = {
        from_name: (form?.querySelector('[name="user_name"]')  as HTMLInputElement)?.value  ?? '',
        from_email:(form?.querySelector('[name="user_email"]') as HTMLInputElement)?.value  ?? '',
        phone:     (form?.querySelector('[name="user_phone"]') as HTMLInputElement)?.value  ?? '',
        company:   (form?.querySelector('[name="user_company"]') as HTMLInputElement)?.value ?? '',
        message:   (form?.querySelector('[name="message"]')   as HTMLTextAreaElement)?.value ?? '',
      };
      const emailjs = await import('@emailjs/browser');
      await emailjs.send(serviceId, templateId, templateParams, { publicKey });
      setStatus('success');
      formRef.current?.reset();
    } catch (err) {
      console.error('[EmailJS error]', err);
      setStatus('error');
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-5"
      noValidate
    >
      {/* Honeypot — hidden from real users, catches bots */}
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        aria-hidden="true"
        className="sr-only"
        autoComplete="off"
      />

      {/* Full Name */}
      <div>
        <label htmlFor="user_name" className="block text-sm font-body font-medium text-white/80 mb-1.5">
          {form.nameLabel} <span className="text-bulls-red" aria-hidden="true">*</span>
        </label>
        <input
          type="text"
          id="user_name"
          name="user_name"
          placeholder={form.namePlaceholder}
          required
          className="w-full bg-bulls-card border border-white/10 rounded-btn px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-bulls-blue/60 focus:ring-1 focus:ring-bulls-blue/40 transition-colors duration-200"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="user_email" className="block text-sm font-body font-medium text-white/80 mb-1.5">
          {form.emailLabel} <span className="text-bulls-red" aria-hidden="true">*</span>
        </label>
        <input
          type="email"
          id="user_email"
          name="user_email"
          placeholder={form.emailPlaceholder}
          required
          className="w-full bg-bulls-card border border-white/10 rounded-btn px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-bulls-blue/60 focus:ring-1 focus:ring-bulls-blue/40 transition-colors duration-200"
        />
      </div>

      {/* Phone (optional) */}
      <div>
        <label htmlFor="user_phone" className="block text-sm font-body font-medium text-white/80 mb-1.5">
          {form.phoneLabel}
        </label>
        <input
          type="tel"
          id="user_phone"
          name="user_phone"
          placeholder={form.phonePlaceholder}
          className="w-full bg-bulls-card border border-white/10 rounded-btn px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-bulls-blue/60 focus:ring-1 focus:ring-bulls-blue/40 transition-colors duration-200"
        />
      </div>

      {/* Company (optional) */}
      <div>
        <label htmlFor="user_company" className="block text-sm font-body font-medium text-white/80 mb-1.5">
          {form.companyLabel}
        </label>
        <input
          type="text"
          id="user_company"
          name="user_company"
          placeholder={form.companyPlaceholder}
          className="w-full bg-bulls-card border border-white/10 rounded-btn px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-bulls-blue/60 focus:ring-1 focus:ring-bulls-blue/40 transition-colors duration-200"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-body font-medium text-white/80 mb-1.5">
          {form.messageLabel} <span className="text-bulls-red" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder={form.messagePlaceholder}
          required
          className="w-full bg-bulls-card border border-white/10 rounded-btn px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-bulls-blue/60 focus:ring-1 focus:ring-bulls-blue/40 transition-colors duration-200 resize-none"
        />
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-bulls-blue hover:bg-bulls-blue-hover disabled:opacity-60 disabled:cursor-not-allowed text-bulls-black font-body font-semibold py-3 px-6 rounded-btn transition-colors duration-200 cursor-pointer"
      >
        {status === 'sending' ? 'Sending…' : form.submitButton}
      </button>

      {/* Success message */}
      {status === 'success' && (
        <div role="alert" className="p-4 bg-green-500/10 border border-green-500/30 rounded-btn text-sm text-green-400 font-body animate-fade-in">
          {form.successMessage}
        </div>
      )}

      {/* Error message */}
      {status === 'error' && (
        <div role="alert" className="p-4 bg-bulls-red/10 border border-bulls-red/30 rounded-btn text-sm text-bulls-red font-body animate-fade-in">
          {form.errorMessage}
        </div>
      )}
    </form>
  );
}
