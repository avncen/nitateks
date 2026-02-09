import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Factory, Palette, Globe } from "lucide-react";
import Layout from "@/components/Layout";
import heroImg from "@/assets/hero-textile.jpg";

const services = [
  {
    icon: Factory,
    title: "Production & Quality",
    description:
      "End-to-end production oversight and quality management systems that ensure your textiles meet international standards.",
  },
  {
    icon: Palette,
    title: "Fashion & Design",
    description:
      "Trend forecasting, collection planning, and design consultancy to keep your brand ahead of the curve.",
  },
  {
    icon: Globe,
    title: "Export & Marketing",
    description:
      "Strategic market entry, international trade partnerships, and export documentation to scale your reach globally.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Premium textile fabric"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/70" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
              Reliable Garment Manufacturing
              <br />
              <span className="text-gold">Partner in Turkey</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
              High-quality knit and woven womenswear production with a strong focus on sustainability, quality and on-time delivery.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-gold text-accent-foreground px-8 py-3 font-medium text-sm uppercase tracking-wider rounded hover:opacity-90 transition-opacity"
              >
                Our Services <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-8 py-3 font-medium text-sm uppercase tracking-wider rounded hover:bg-primary-foreground/10 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="text-gold text-sm font-medium uppercase tracking-widest mb-3">
              What We Do
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-serif text-4xl md:text-5xl font-bold text-navy">
              Our Expertise
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className="bg-card rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                  <service.icon className="text-gold" size={24} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-navy font-medium text-sm uppercase tracking-wider hover:text-gold transition-colors"
            >
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy text-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6"
            >
              Ready to Transform Your
              <br />
              Textile Business?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-primary-foreground/70 mb-8 max-w-md mx-auto"
            >
              Let's discuss how our expertise can drive your success in the
              global textile market.
            </motion.p>
            <motion.div variants={fadeUp} custom={2}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gold text-accent-foreground px-8 py-3 font-medium text-sm uppercase tracking-wider rounded hover:opacity-90 transition-opacity"
              >
                Contact Us <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
