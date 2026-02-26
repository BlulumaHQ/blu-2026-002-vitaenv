import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Building2, HardHat, Ruler, Shield, CheckCircle, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectResidential from "@/assets/project-residential.jpg";
import projectIndustrial from "@/assets/project-industrial.jpg";
import Layout from "@/components/Layout";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const services = [
  {
    icon: Building2,
    title: "General Contracting",
    desc: "Full-scope project delivery from pre-construction to final closeout.",
  },
  {
    icon: HardHat,
    title: "Construction Management",
    desc: "Expert oversight ensuring quality, safety, and schedule adherence.",
  },
  {
    icon: Ruler,
    title: "Renovations & Buildouts",
    desc: "Transforming existing spaces with precision and minimal disruption.",
  },
  {
    icon: Shield,
    title: "Pre-Construction Services",
    desc: "Planning, budgeting, and value engineering before ground breaks.",
  },
];

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "50+", label: "Team Members" },
];

const projects = [
  { image: projectCommercial, title: "Commercial Office Complex", category: "Commercial" },
  { image: projectResidential, title: "Custom Residential Build", category: "Residential" },
  { image: projectIndustrial, title: "Industrial Warehouse", category: "Industrial" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Construction site" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-vita-dark/70" />
        </div>
        <div className="relative z-10 container-wide px-6 md:px-12 lg:px-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-2xl"
          >
            <motion.p variants={fadeUp} className="text-vita-blue text-sm font-semibold uppercase tracking-widest mb-4">
              General Contracting
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
              Building With
              <br />
              <span className="text-vita-blue">Purpose & Precision</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-primary-foreground/80 text-lg md:text-xl mb-8 leading-relaxed">
              Vita Constructions delivers professional general contracting services with a commitment to quality, safety, and client satisfaction on every project.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-vita-blue text-primary-foreground px-8 py-3.5 font-semibold rounded hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/projects"
                className="border border-primary-foreground/30 text-primary-foreground px-8 py-3.5 font-semibold rounded hover:bg-primary-foreground/10 transition-colors"
              >
                View Projects
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-vita-blue">
        <div className="container-wide px-6 md:px-12 lg:px-20 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-extrabold text-primary-foreground">{stat.value}</p>
                <p className="text-sm text-primary-foreground/80 mt-1 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.p variants={fadeUp} className="text-vita-blue text-sm font-semibold uppercase tracking-widest mb-3">
              What We Do
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold">
              Our Services
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                className="bg-background border border-border rounded p-8 hover:border-vita-blue/40 transition-colors group"
              >
                <service.icon className="w-10 h-10 text-vita-blue mb-5" />
                <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                <p className="text-sm text-vita-gray leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-vita-blue font-semibold text-sm hover:underline"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-vita-gray-light">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.p variants={fadeUp} className="text-vita-blue text-sm font-semibold uppercase tracking-widest mb-3">
                About Vita Constructions
              </motion.p>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold mb-6">
                Quality Construction You Can Trust
              </motion.h2>
              <motion.p variants={fadeUp} className="text-vita-gray leading-relaxed mb-6">
                With over 25 years of experience in general contracting, Vita Constructions has built a reputation for delivering projects on time, on budget, and to the highest standards of quality and safety.
              </motion.p>
              <motion.ul variants={stagger} className="space-y-3 mb-8">
                {[
                  "Licensed and fully insured",
                  "Experienced project management team",
                  "Commitment to safety and compliance",
                  "Transparent communication and budgeting",
                ].map((item) => (
                  <motion.li key={item} variants={fadeUp} className="flex items-center gap-3 text-sm text-vita-dark">
                    <CheckCircle className="w-5 h-5 text-vita-blue flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div variants={fadeUp}>
                <Link
                  to="/contact"
                  className="bg-vita-blue text-primary-foreground px-8 py-3.5 font-semibold rounded hover:opacity-90 transition-opacity inline-flex items-center gap-2"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-4"
            >
              <img src={projectCommercial} alt="Commercial project" className="rounded w-full h-64 object-cover" />
              <img src={projectResidential} alt="Residential project" className="rounded w-full h-64 object-cover mt-8" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.p variants={fadeUp} className="text-vita-blue text-sm font-semibold uppercase tracking-widest mb-3">
              Our Work
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold">
              Featured Projects
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div key={project.title} variants={fadeUp} className="group overflow-hidden rounded">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-vita-blue text-primary-foreground text-xs font-semibold px-3 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-5 border border-t-0 border-border">
                  <h3 className="font-bold text-lg">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-vita-blue font-semibold text-sm hover:underline"
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-vita-dark">
        <div className="container-wide section-padding text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
            Contact our team today for a free consultation and project estimate.
          </p>
          <Link
            to="/contact"
            className="bg-vita-blue text-primary-foreground px-10 py-4 font-semibold rounded hover:opacity-90 transition-opacity inline-flex items-center gap-2 text-lg"
          >
            Get Your Free Estimate
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
