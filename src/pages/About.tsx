import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Award, Users, Clock, TrendingUp } from "lucide-react";

const stats = [
  { icon: Clock, value: "14+", label: "Years Experience" },
  { icon: Users, value: "35+", label: "Clients Served" },
  { icon: Award, value: "22+", label: "Brands Partnered" },
  { icon: TrendingUp, value: "14+", label: "Countries Reached" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
} as const;

const About = () => {
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
              About Us
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground">
              Who We Are
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="font-serif text-3xl font-bold text-navy mb-6"
            >
              14+ Years of Garment Manufacturing Expertise
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-muted-foreground leading-relaxed mb-4"
            >
              Nita Tekstil is a garment manufacturer based in İzmir, Turkey, specialized in knit and woven womenswear production.
            </motion.p>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-muted-foreground leading-relaxed mb-4"
            >
              With more than 14 years of experience, we support brands from product development to final delivery, focusing on quality, transparency and sustainable production.
            </motion.p>
            <motion.p
              variants={fadeUp}
              custom={3}
              className="text-muted-foreground leading-relaxed mb-4"
            >
              Our mission is to build long-term partnerships through reliable production and strong communication.
            </motion.p>
            <motion.p
              variants={fadeUp}
              custom={4}
              className="text-muted-foreground leading-relaxed mb-4"
            >
              Nıta Tekstil Danışmanlık was founded with a singular vision: to bridge
              the gap between exceptional textile craftsmanship and the demands of
              modern global markets. Based in İzmir, Turkey — the heart of the
              country's textile industry — we bring unmatched local knowledge with
              an international perspective.
            </motion.p>
            <motion.p
              variants={fadeUp}
              custom={5}
              className="text-muted-foreground leading-relaxed"
            >
              Our team of industry veterans works closely with brands,
              manufacturers, and retailers to optimize production, enhance
              quality, and unlock new markets. We are committed to sustainable
              growth and long-term partnerships.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                variants={fadeUp}
                className="bg-cream rounded-lg p-6 text-center"
              >
                <stat.icon className="mx-auto text-gold mb-3" size={28} />
                <p className="font-serif text-3xl font-bold text-navy">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="text-gold text-sm font-medium uppercase tracking-widest mb-3">
              Our Values
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-serif text-3xl md:text-4xl font-bold text-navy">
              What Drives Us
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Quality First", desc: "We never compromise on standards. Every recommendation we make is rooted in excellence." },
              { title: "Global Vision", desc: "We think beyond borders, connecting Turkish textile expertise with worldwide opportunities." },
              { title: "Trusted Partnership", desc: "Our clients are partners. We invest in long-term relationships built on transparency and results." },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center"
              >
                <div className="w-1 h-12 bg-gold mx-auto mb-6 rounded-full" />
                <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                  {v.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
