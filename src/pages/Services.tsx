import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import {
  Factory,
  Palette,
  Globe,
  ArrowRight,
  CheckCircle2,
  Zap,
} from "lucide-react";
import serviceProduction from "@/assets/service-production.jpg";
import serviceDesign from "@/assets/service-design.jpg";
import serviceExport from "@/assets/service-export.jpg";
import serviceSampling from "@/assets/service-sampling.jpg";

const services = [
  {
    icon: Factory,
    title: "Production & Quality Management",
    description:
      "We oversee every stage of textile production to guarantee quality, efficiency, and compliance with international standards.",
    image: serviceProduction,
    features: [
      "Factory audits & supplier evaluation",
      "Quality control inspections",
      "Production timeline management",
      "Compliance with EU & US regulations",
    ],
  },
  {
    icon: Palette,
    title: "Fashion & Design Consultancy",
    description:
      "From trend analysis to collection planning, we help brands create compelling textile products that resonate with their target market.",
    image: serviceDesign,
    features: [
      "Seasonal trend forecasting",
      "Fabric & material selection",
      "Collection planning & development",
      "Sustainable design strategies",
    ],
  },
  {
    icon: Globe,
    title: "Export & Marketing",
    description:
      "We connect Turkish textile excellence with global opportunities through strategic market positioning and trade facilitation.",
    image: serviceExport,
    features: [
      "International market research",
      "Trade fair representation",
      "Export documentation support",
      "Buyer-supplier matchmaking",
    ],
  },
  {
    icon: Zap,
    title: "Fast Collection & Sampling Service",
    description:
      "We deliver rapid and reliable collection development and sampling solutions, helping brands accelerate their time-to-market with precision and quality.",
    image: serviceSampling,
    features: [
      "Quick turnaround sample production",
      "Full collection development support",
      "Fabric sourcing & proto sampling",
      "Fit and quality review before bulk",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
} as const;

const Services = () => {
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
              Services
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground">
              What We Offer
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="container mx-auto px-6 space-y-20">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                i % 2 !== 0 ? "lg:direction-rtl" : ""
              }`}
            >
              <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                  <service.icon className="text-gold" size={28} />
                </div>
                <h2 className="font-serif text-3xl font-bold text-navy mb-4">
                  {service.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-foreground/80">
                      <CheckCircle2 size={18} className="text-gold shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`rounded-2xl overflow-hidden h-64 lg:h-80 ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cream text-center">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl font-bold text-navy mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Every business is unique. Let's discuss how we can tailor our
            services to fit your specific needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gold text-accent-foreground px-8 py-3 font-medium text-sm uppercase tracking-wider rounded hover:opacity-90 transition-opacity"
          >
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
