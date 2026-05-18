import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        // from_name: formState.name,
        // from_email: formState.email,
        // reply_to: formState.email,
        // to_name: 'Salman',
        // message: formState.message,
        from_name: formState.name,
        from_email: formState.email,
        reply_to: formState.email,
        to_name: 'Salman',
        message: formState.message,
        sender_email: formState.email
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
      );

      setIsSuccess(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send message. Please try again later or contact me directly via email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="section-padding bg-zinc-950">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* Contact Info */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-white tracking-tight">Let's build something <span className="text-indigo-400">awesome</span> together</h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
              I'm always open to discussing new projects, creative ideas or architectural insights.
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              { icon: Mail, label: 'Email', value: 'salmanjmu13@gmail.com', href: 'mailto:salmanjmu13@gmail.com' },
              { icon: Phone, label: 'Phone', value: '+91 9693599284', href: 'tel:+919693599284' },
              { icon: MapPin, label: 'Location', value: 'Chandigarh, India', href: '#' },
            ].map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-6 group cursor-pointer"
              >
                <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center border border-zinc-800 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/5 transition-all">
                  <item.icon size={24} className="text-zinc-400 group-hover:text-indigo-400 transition-colors" />
                </div>
                <div>
                  <div className="text-xs text-zinc-500 uppercase tracking-widest font-mono">{item.label}</div>
                  <div className="text-lg text-white font-medium group-hover:text-indigo-400 transition-colors">{item.value}</div>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="flex gap-4 pt-4">
            {[
              { icon: Github, href: 'https://github.com/mdsalmangousqadri13' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/mdsalmangous/' },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="w-12 h-12 glass rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:border-indigo-500/50 transition-all"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-8 lg:p-12 rounded-[2.5rem] border-zinc-800/50 relative overflow-hidden"
        >
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Your Name</label>
                  <input
                    required
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white outline-none focus:border-indigo-500/50 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Email Address</label>
                  <input
                    required
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white outline-none focus:border-indigo-500/50 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Your Message</label>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white outline-none focus:border-indigo-500/50 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || isSuccess}
              className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-3 group"
            >
              {isSuccess ? (
                <>Message Sent! ✨</>
              ) : isSubmitting ? (
                <>Sending...</>
              ) : (
                <>
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Decorative background element for form */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/5 blur-3xl rounded-full" />
        </motion.div>

      </div>
    </div>
  );
}
