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
        <div className="container mx-auto px-6 max-w-2xl">
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
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
