import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import {
  Leaf,
  Recycle,
  Droplets,
  Sun,
  Award,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import sustainEco from "@/assets/sustain-eco.jpg";
import sustainCircular from "@/assets/sustain-circular.jpg";
import sustainWater from "@/assets/sustain-water.jpg";
import sustainEthical from "@/assets/sustain-ethical.jpg";
import sustainHigg from "@/assets/sustain-higg.jpg";

const pillars = [
  {
    icon: Leaf,
    image: sustainEco,
    title: "Eco-Friendly Materials",
    description:
      "We prioritize organic, recycled, and sustainably sourced textiles to minimize environmental impact across the supply chain.",
    features: [
      "Organic cotton & linen sourcing",
      "Recycled polyester & nylon options",
      "GOTS & OEKO-TEX certified materials",
      "Low-impact natural dyes",
    ],
  },
  {
    icon: Recycle,
    image: sustainCircular,
    title: "Circular Production",
    description:
      "Our approach to production focuses on waste reduction, recycling, and creating closed-loop systems for textile manufacturing.",
    features: [
      "Zero-waste pattern cutting",
      "Fabric waste recycling programs",
      "Upcycling & repurposing initiatives",
      "Biodegradable packaging solutions",
    ],
  },
  {
    icon: Droplets,
    image: sustainWater,
    title: "Water & Energy Conservation",
    description:
      "We work with factories that implement advanced water treatment and energy-efficient processes to reduce resource consumption.",
    features: [
      "Water recycling in dyeing processes",
      "Energy-efficient manufacturing",
      "Carbon footprint tracking",
      "Renewable energy partnerships",
    ],
  },
  {
    icon: Sun,
    title: "Ethical & Transparent Supply Chain",
    description:
      "Transparency and fair labor practices are at the core of our sustainability commitment, ensuring dignity across every step.",
    features: [
      "Fair wage & safe working conditions",
      "Supply chain traceability",
      "Third-party social audits",
      "Community development programs",
    ],
  },
  {
    icon: Award,
    title: "Higg FEM",
    description:
      "We support and guide our partner factories in completing the Higg Facility Environmental Module (FEM), ensuring transparent measurement and continuous improvement of environmental performance.",
    features: [
      "Higg FEM assessment guidance",
      "Environmental performance benchmarking",
      "Continuous improvement action plans",
      "Verified sustainability reporting",
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

const Sustainability = () => {
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
              Sustainability
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground">
              Our Commitment to a Better Future
            </h1>
            <p className="text-primary-foreground/70 mt-4 max-w-2xl text-lg leading-relaxed">
              At Nıta Textile, sustainability isn't just a trend — it's a
              responsibility we embrace across every aspect of our business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24">
        <div className="container mx-auto px-6 space-y-20">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}
            >
              <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                  <pillar.icon className="text-gold" size={28} />
                </div>
                <h2 className="font-serif text-3xl font-bold text-navy mb-4">
                  {pillar.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {pillar.description}
                </p>
                <ul className="space-y-3">
                  {pillar.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-3 text-sm text-foreground/80"
                    >
                      <CheckCircle2 size={18} className="text-gold shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={`bg-cream rounded-2xl h-64 lg:h-80 flex items-center justify-center ${
                  i % 2 !== 0 ? "lg:order-1" : ""
                }`}
              >
                <pillar.icon className="text-navy/10" size={120} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cream text-center">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl font-bold text-navy mb-4">
            Partner With Us for Sustainable Growth
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Let's build a more sustainable textile future together. Reach out to
            learn how we can support your sustainability goals.
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

export default Sustainability;
