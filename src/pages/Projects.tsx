import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectResidential from "@/assets/project-residential.jpg";
import projectIndustrial from "@/assets/project-industrial.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const projects = [
  {
    image: projectCommercial,
    title: "Metro Business Center",
    category: "Commercial",
    description: "A 50,000 sq ft modern office complex featuring sustainable design and LEED-certified construction.",
  },
  {
    image: projectResidential,
    title: "Lakewood Custom Home",
    category: "Residential",
    description: "Custom-built luxury residence with premium finishes and energy-efficient systems throughout.",
  },
  {
    image: projectIndustrial,
    title: "Westside Distribution Hub",
    category: "Industrial",
    description: "75,000 sq ft warehouse and distribution center with loading docks and climate-controlled storage.",
  },
  {
    image: projectCommercial,
    title: "Downtown Retail Renovation",
    category: "Commercial",
    description: "Complete interior renovation of a historic downtown retail space, preserving character while modernizing systems.",
  },
  {
    image: projectResidential,
    title: "Oakridge Townhomes",
    category: "Residential",
    description: "Multi-unit residential development featuring 12 contemporary townhomes with modern amenities.",
  },
  {
    image: projectIndustrial,
    title: "Northgate Manufacturing Facility",
    category: "Industrial",
    description: "Purpose-built manufacturing facility with specialized infrastructure and safety systems.",
  },
];

const Projects = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-vita-dark py-20 md:py-28">
        <div className="container-wide px-6 md:px-12 lg:px-20">
          <p className="text-vita-blue text-sm font-semibold uppercase tracking-widest mb-3">Our Portfolio</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground">Projects</h1>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="group overflow-hidden rounded border border-border"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-vita-blue text-primary-foreground text-xs font-semibold px-3 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                  <p className="text-sm text-vita-gray leading-relaxed">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-vita-dark section-padding">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-extrabold text-primary-foreground mb-4">Have a Project in Mind?</h2>
          <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">
            Let's discuss your vision and how we can bring it to life with quality craftsmanship.
          </p>
          <Link
            to="/contact"
            className="bg-vita-blue text-primary-foreground px-8 py-3.5 font-semibold rounded hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            Start a Conversation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
