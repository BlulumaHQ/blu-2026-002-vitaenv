import { motion } from "framer-motion";
import { Building2, HardHat, Ruler, Shield, Wrench, ClipboardCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const services = [
  {
    icon: Building2,
    title: "General Contracting",
    desc: "Complete project delivery from concept to completion. We manage all phases of construction, ensuring quality and efficiency at every step.",
  },
  {
    icon: HardHat,
    title: "Construction Management",
    desc: "Professional oversight of your project with a focus on budget control, schedule management, and quality assurance.",
  },
  {
    icon: Ruler,
    title: "Renovations & Buildouts",
    desc: "Expert renovation and tenant improvement services for commercial and residential properties.",
  },
  {
    icon: Shield,
    title: "Pre-Construction Planning",
    desc: "Comprehensive planning, cost estimation, and value engineering to maximize your investment before construction begins.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Repairs",
    desc: "Ongoing building maintenance and repair services to protect your investment and extend the life of your property.",
  },
  {
    icon: ClipboardCheck,
    title: "Consulting & Compliance",
    desc: "Construction consulting, building code compliance, and permit management for projects of all sizes.",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-vita-dark py-20 md:py-28">
        <div className="container-wide px-6 md:px-12 lg:px-20">
          <p className="text-vita-blue text-sm font-semibold uppercase tracking-widest mb-3">What We Offer</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground">Our Services</h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                className="border border-border rounded p-8 hover:border-vita-blue/40 transition-colors"
              >
                <service.icon className="w-10 h-10 text-vita-blue mb-5" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-sm text-vita-gray leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-vita-gray-light section-padding">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-extrabold mb-4">Need a Custom Solution?</h2>
          <p className="text-vita-gray mb-8 max-w-lg mx-auto">
            Every project is unique. Contact us to discuss your specific requirements and get a tailored proposal.
          </p>
          <Link
            to="/contact"
            className="bg-vita-blue text-primary-foreground px-8 py-3.5 font-semibold rounded hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            Request a Proposal
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
