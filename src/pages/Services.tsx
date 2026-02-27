import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import SectionSeparator from "@/components/SectionSeparator";
import usePageMeta from "@/hooks/usePageMeta";
import bannerImage from "@/assets/vita-slider-1.png";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const Services = () => {
  usePageMeta({
    title: "Vita Constructions | Services",
    description: "Explore Vita Constructions' full range of general contracting and abatement services including asbestos removal, demolition, mold removal, and more.",
  });

  return (
    <Layout>
      <PageBanner title="SERVICES" backgroundImage={bannerImage} breadcrumb="Services" />

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-[1170px] mx-auto px-4">
          {/* Tenant Improvements – Flagship */}
          <div className="text-center mb-12">
            <h2 className="text-[28px] md:text-[42px] font-bold uppercase">Tenant Improvements</h2>
            <SectionSeparator />
            <p className="text-primary font-bold text-lg mb-3">Flagship Service</p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-14"
          >
            <motion.div variants={fadeUp}>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 leading-relaxed">
                <li>Office TI</li>
                <li>Retail / Showroom TI</li>
                <li>Medical / Clinic TI</li>
                <li>Light Industrial / Warehouse Office TI</li>
                <li>Demising walls, reconfigurations, back-of-house upgrades</li>
              </ul>
            </motion.div>

            {/* Buildouts & Interior Renovations */}
            <motion.div variants={fadeUp}>
              <h3 className="text-[22px] md:text-[28px] font-bold uppercase mb-4">Buildouts &amp; Interior Renovations</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 leading-relaxed">
                <li>New unit buildouts (shell to occupancy-ready)</li>
                <li>Interior remodels / refreshes</li>
                <li>Space reconfigurations</li>
                <li>Finish upgrades (floors, ceilings, lighting coordination, paint)</li>
              </ul>
            </motion.div>

            {/* Turnovers & Make-Good */}
            <motion.div variants={fadeUp}>
              <h3 className="text-[22px] md:text-[28px] font-bold uppercase mb-4">Turnovers &amp; Make-Good</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 leading-relaxed">
                <li>Unit turnovers between tenants</li>
                <li>Landlord make-good / restoration scope</li>
                <li>Punch-list and deficiency work</li>
                <li>Fast resets for re-lease timelines</li>
              </ul>
            </motion.div>

            {/* Project Management & General Contracting */}
            <motion.div variants={fadeUp}>
              <h3 className="text-[22px] md:text-[28px] font-bold uppercase mb-4">Project Management &amp; General Contracting</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 leading-relaxed">
                <li>Trade coordination &amp; scheduling</li>
                <li>Budget management / cost tracking</li>
                <li>Site supervision &amp; safety</li>
                <li>Procurement planning (long-lead items)</li>
                <li>Quality control &amp; closeout</li>
              </ul>
            </motion.div>

            {/* Maintenance & Targeted Repairs */}
            <motion.div variants={fadeUp}>
              <h3 className="text-[22px] md:text-[28px] font-bold uppercase mb-4">Maintenance &amp; Targeted Repairs</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 leading-relaxed">
                <li>Damage repairs (water, wear-and-tear, impacts)</li>
                <li>Drywall/paint, door/hardware, flooring patch/replace</li>
                <li>Small upgrades and ongoing service</li>
              </ul>
            </motion.div>

            {/* Typical Scopes */}
            <motion.div variants={fadeUp}>
              <h2 className="text-[28px] md:text-[36px] font-bold uppercase mb-4">Typical Scopes</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 leading-relaxed">
                <li>Light demo, framing, drywall, taping</li>
                <li>Doors/frames/hardware coordination</li>
                <li>Finish carpentry and detail work</li>
                <li>Flooring installation coordination (LVP, tile, carpet)</li>
                <li>Ceiling systems (T-bar, grid, acoustic)</li>
                <li>Painting and wall finishes</li>
                <li>Millwork/fixture coordination (by others or supplied)</li>
                <li>Washroom upgrades</li>
                <li>Accessibility/code-driven upgrades (as required)</li>
              </ul>
            </motion.div>

            {/* Pre-Construction Support */}
            <motion.div variants={fadeUp}>
              <h2 className="text-[28px] md:text-[36px] font-bold uppercase mb-4">Pre-Construction Support</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 leading-relaxed">
                <li>Site walks &amp; feasibility input</li>
                <li>Budget pricing and alternates</li>
                <li>Value engineering options</li>
                <li>Schedule planning</li>
              </ul>
            </motion.div>

            {/* Phased / After-Hours Work */}
            <motion.div variants={fadeUp}>
              <h2 className="text-[28px] md:text-[36px] font-bold uppercase mb-4">Phased / After-Hours Work</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 leading-relaxed">
                <li>Minimizing downtime for operating businesses</li>
                <li>Clean, safe jobsite practices for occupied spaces</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
