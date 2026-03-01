import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { MapPin, Mail, Phone } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
} as const;

const Contact = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-navy py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold text-sm font-medium uppercase tracking-widest mb-3">
              Contact
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground">
              Get in Touch
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeUp} custom={0} className="font-serif text-3xl font-bold text-navy mb-6">
              Let's Start a Conversation
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground leading-relaxed mb-10">
              Whether you're looking for production partners, need design
              guidance, or want to expand into new markets — we're here to help.
            </motion.p>

            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  label: "Address",
                  value: "Opera Cad. Atılgan Royal Apt D:60, Kat 20, Mavişehir, İzmir / Turkey",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "zeynep@nitateks.com",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+90 533 216 55 88",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  custom={i + 2}
                  variants={fadeUp}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <item.icon className="text-gold" size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy">{item.label}</p>
                    <p className="text-muted-foreground text-sm">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-cream rounded-2xl p-8 lg:p-10 space-y-6"
          >
            <div>
              <label className="text-sm font-medium text-navy block mb-2">
                Full Name
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-navy block mb-2">
                Email
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-navy block mb-2">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 resize-none"
                placeholder="How can we help you?"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full inline-flex items-center justify-center gap-2 bg-navy text-primary-foreground px-8 py-3 font-medium text-sm uppercase tracking-wider rounded hover:bg-navy-light transition-colors disabled:opacity-50"
            >
              {sending ? (
                <><Loader2 size={16} className="animate-spin" /> Sending...</>
              ) : (
                <>Send Message <Send size={16} /></>
              )}
            </button>
          </motion.form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
