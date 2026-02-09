
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { PERSONAL_INFO } from '../data';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;

    setStatus('sending');

    try {
      // NOTE: Replace these with your actual EmailJS credentials
      // You can get them from https://dashboard.emailjs.com/
      const result = await emailjs.send(
        'YOUR_SERVICE_ID', // e.g., 'service_abc123'
        'YOUR_TEMPLATE_ID', // e.g., 'template_xyz456'
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: PERSONAL_INFO.email,
        },
        'YOUR_PUBLIC_KEY' // e.g., 'user_789qwe'
      );

      if (result.status === 200) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-5xl mx-auto glass rounded-[3rem] overflow-hidden shadow-2xl shadow-stone-300/40 dark:shadow-black/40 relative">
        <div className="grid md:grid-cols-2 items-stretch">
          <div className="p-12 md:p-16 space-y-10 bg-[#2d2d2a] dark:bg-stone-900 text-[#f2f0ea] dark:text-stone-100 flex flex-col justify-center">
            <div className="space-y-4">
              <span className="text-xs font-bold text-stone-500 uppercase tracking-[0.2em]">Inquiries</span>
              <h2 className="text-5xl font-bold leading-tight">Let's craft something.</h2>
              <p className="text-stone-400 dark:text-stone-400 font-light text-xl leading-relaxed">
                Whether it's a new venture or a technical challenge, my door is always open.
              </p>
            </div>

            <div className="space-y-8 pt-6">
              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all border border-white/5">
                  <svg className="w-7 h-7 text-stone-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-[0.2em] text-stone-500 font-bold mb-1">Email</span>
                  <span className="text-lg font-medium group-hover:text-stone-300 transition-colors break-all">{PERSONAL_INFO.email}</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-5 pt-10">
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-stone-100/10 transition-all border border-white/5">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6 fill-current text-stone-300" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-stone-100/10 transition-all border border-white/5">
                <span className="sr-only">GitHub</span>
                <svg className="w-6 h-6 fill-current text-stone-300" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>

          <div className="p-12 md:p-16 space-y-10 bg-[#faf9f6]/80 dark:bg-stone-800/80 backdrop-blur-xl relative">
            <h3 className="text-3xl font-bold text-stone-900 dark:text-stone-100">Message</h3>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-stone-400 dark:text-stone-500 uppercase tracking-[0.2em] ml-1">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Elias Thorne"
                  className="w-full px-6 py-4 rounded-2xl bg-[#f2f0ea]/50 dark:bg-stone-900/50 border border-stone-200 dark:border-stone-700 focus:outline-none focus:ring-4 focus:ring-stone-200/20 dark:focus:ring-stone-700/20 focus:border-stone-400 dark:focus:border-stone-500 transition-all placeholder:text-stone-300 dark:placeholder:text-stone-600 font-medium text-stone-900 dark:text-stone-100" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-stone-400 dark:text-stone-500 uppercase tracking-[0.2em] ml-1">Work Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="elias@studio.com"
                  className="w-full px-6 py-4 rounded-2xl bg-[#f2f0ea]/50 dark:bg-stone-900/50 border border-stone-200 dark:border-stone-700 focus:outline-none focus:ring-4 focus:ring-stone-200/20 dark:focus:ring-stone-700/20 focus:border-stone-400 dark:focus:border-stone-500 transition-all placeholder:text-stone-300 dark:placeholder:text-stone-600 font-medium text-stone-900 dark:text-stone-100" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-stone-400 dark:text-stone-500 uppercase tracking-[0.2em] ml-1">Brief Project Overview</label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your vision..."
                  className="w-full px-6 py-4 rounded-2xl bg-[#f2f0ea]/50 dark:bg-stone-900/50 border border-stone-200 dark:border-stone-700 focus:outline-none focus:ring-4 focus:ring-stone-200/20 dark:focus:ring-stone-700/20 focus:border-stone-400 dark:focus:border-stone-500 transition-all placeholder:text-stone-300 dark:placeholder:text-stone-600 resize-none font-medium text-stone-900 dark:text-stone-100" 
                ></textarea>
              </div>

              {status === 'success' && (
                <div className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-6 py-4 rounded-2xl border border-emerald-200 dark:border-emerald-800 flex items-center gap-3 animate-in fade-in duration-300">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm font-bold">Message delivered successfully!</span>
                </div>
              )}

              {status === 'error' && (
                <div className="bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 px-6 py-4 rounded-2xl border border-rose-200 dark:border-rose-800 flex items-center gap-3 animate-in fade-in duration-300">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-sm font-bold">Something went wrong. Please try again.</span>
                </div>
              )}

              <button 
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-5 bg-[#2d2d2a] dark:bg-stone-100 text-[#f2f0ea] dark:text-stone-900 rounded-2xl font-bold hover:bg-stone-800 dark:hover:bg-stone-200 transition-all shadow-xl shadow-stone-200/50 dark:shadow-black/40 active:scale-[0.98] text-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <span className="flex items-center justify-center gap-3">
                    <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
