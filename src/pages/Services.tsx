import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Building2, Paintbrush, RefreshCw, ClipboardList, Wrench, Layers, HardHat, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import SectionSeparator from "@/components/SectionSeparator";
import usePageMeta from "@/hooks/usePageMeta";
import bannerImage from "@/assets/vita-slider-1.png";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const tiCapabilities = [
  "Office TI",
  "Retail / Showroom TI",
  "Medical / Clinic TI",
  "Light Industrial / Warehouse Office TI",
  "Demising walls, reconfigurations, back-of-house upgrades",
];

const serviceCategories = [
  {
    icon: Paintbrush,
    title: "Buildouts & Interior Renovations",
    items: [
      "New unit buildouts (shell to occupancy-ready)",
      "Interior remodels / refreshes",
      "Space reconfigurations",
      "Finish upgrades (floors, ceilings, lighting coordination, paint)",
    ],
  },
  {
    icon: RefreshCw,
    title: "Turnovers & Make-Good",
    items: [
      "Unit turnovers between tenants",
      "Landlord make-good / restoration scope",
      "Punch-list and deficiency work",
      "Fast resets for re-lease timelines",
    ],
  },
  {
    icon: ClipboardList,
    title: "Project Management & General Contracting",
    items: [
      "Trade coordination & scheduling",
      "Budget management / cost tracking",
      "Site supervision & safety",
      "Procurement planning (long-lead items)",
      "Quality control & closeout",
    ],
  },
  {
    icon: Wrench,
    title: "Maintenance & Targeted Repairs",
    items: [
      "Damage repairs (water, wear-and-tear, impacts)",
      "Drywall/paint, door/hardware, flooring patch/replace",
      "Small upgrades and ongoing service",
    ],
  },
];

const typicalScopes = [
  "Light demo, framing, drywall, taping",
  "Doors/frames/hardware coordination",
  "Finish carpentry and detail work",
  "Flooring installation coordination (LVP, tile, carpet)",
  "Ceiling systems (T-bar, grid, acoustic)",
  "Painting and wall finishes",
  "Millwork/fixture coordination (by others or supplied)",
  "Washroom upgrades",
  "Accessibility/code-driven upgrades (as required)",
];

const preConstructionItems = [
  "Site walks & feasibility input",
  "Budget pricing and alternates",
  "Value engineering options",
  "Schedule planning",
];

const phasedItems = [
  "Minimizing downtime for operating businesses",
  "Clean, safe jobsite practices for occupied spaces",
];

const Services = () => {
  usePageMeta({
    title: "Vita Constructions | Services",
    description: "Explore Vita Constructions' full range of general contracting services including tenant improvements, buildouts, renovations, and project management.",
  });

  return (
    <Layout>
      <PageBanner title="SERVICES" backgroundImage={bannerImage} breadcrumb="Services" />

      {/* Flagship: Tenant Improvements */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-[1170px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-[28px] md:text-[42px] font-bold uppercase">Tenant Improvements</h2>
            <SectionSeparator />
            <p className="text-muted-foreground max-w-2xl mx-auto">Our Flagship Service</p>
          </div>
          <div className="bg-muted border border-border p-8 md:p-10">
            <div className="flex gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0 rounded">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-[20px] md:text-[24px] font-bold mb-2">Commercial TI Specialists</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Commercial tenant improvements are our core focus. We specialize in delivering efficient, high-quality buildouts for business spaces across Metro Vancouver.
                </p>
              </div>
            </div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              {tiCapabilities.map((item) => (
                <motion.div key={item} variants={fadeUp} className="flex items-start gap-2.5 mb-2.5">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Categories Grid */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="max-w-[1170px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-[28px] md:text-[42px] font-bold uppercase">Service Categories</h2>
            <SectionSeparator />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Vita manages projects from planning to closeout—so you have one accountable team driving the job forward.
            </p>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {serviceCategories.map((cat) => (
              <motion.div key={cat.title} variants={fadeUp} className="bg-background border border-border p-8">
                <div className="flex gap-4 mb-5">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0 rounded">
                    <cat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-[20px] md:text-[24px] font-bold self-center">{cat.title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Typical Scopes */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-[1170px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-[28px] md:text-[42px] font-bold uppercase">Typical Scopes</h2>
            <SectionSeparator />
            <p className="text-muted-foreground max-w-2xl mx-auto">Common work items across our projects</p>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto"
          >
            {typicalScopes.map((item) => (
              <motion.div key={item} variants={fadeUp} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pre-Construction & Phased Work */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="max-w-[1170px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <div className="flex gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0 rounded">
                  <HardHat className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-[24px] md:text-[30px] font-bold self-center">Pre-Construction Support</h3>
              </div>
              {preConstructionItems.map((item) => (
                <motion.div key={item} variants={fadeUp} className="flex items-start gap-2.5 mb-2.5">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <div className="flex gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0 rounded">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-[24px] md:text-[30px] font-bold self-center">Phased / After-Hours Work</h3>
              </div>
              {phasedItems.map((item) => (
                <motion.div key={item} variants={fadeUp} className="flex items-start gap-2.5 mb-2.5">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-foreground">
        <div className="max-w-[1170px] mx-auto px-4 text-center">
          <h2 className="text-[28px] md:text-[42px] font-bold text-background mb-4">Ready to Start Your Project?</h2>
          <p className="text-background/70 mb-8 max-w-xl mx-auto">
            Contact our team today for a consultation and project estimate.
          </p>
          <Link
            to="/contact"
            className="bg-primary text-primary-foreground px-8 py-3.5 text-[18px] font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
