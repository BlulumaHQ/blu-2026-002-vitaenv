import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronsRight } from "lucide-react";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import SectionSeparator from "@/components/SectionSeparator";
import usePageMeta from "@/hooks/usePageMeta";
import bannerImage from "@/assets/vita-slider-2.png";
import { projects } from "@/data/projects";
import projectSitesImg from "@/assets/project-sites.png";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const Projects = () => {
  usePageMeta({
    title: "Vita Constructions | Projects",
    description: "View Vita Constructions' portfolio of 150+ completed projects spanning 20+ cities, from residential homes to large industrial buildings.",
  });

  return (
    <Layout>
      <PageBanner title="PROJECTS" backgroundImage={bannerImage} breadcrumb="Projects" />

      {/* Project Grid */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-[1170px] mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div key={project.slug} variants={fadeUp} className="bg-background p-5">
                <Link to={`/projects/${project.slug}`} className="block overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>
                <div className="mt-4">
                  <h4 className="font-bold text-[17px] mb-2">
                    <Link to={`/projects/${project.slug}`} className="hover:text-primary transition-colors">
                      {project.title}
                    </Link>
                  </h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">{project.shortDesc}</p>
                  <Link
                    to={`/projects/${project.slug}`}
                    className="bg-primary text-primary-foreground text-[14px] font-semibold px-5 py-2 hover:opacity-90 transition-opacity inline-flex items-center gap-1"
                  >
                    More <ChevronsRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-16 md:py-20 bg-foreground">
        <div className="max-w-[1170px] mx-auto px-4 text-center">
          <h2 className="text-[28px] md:text-[42px] font-bold text-background mb-4">We are ready to build your dream project</h2>
          <p className="text-background/70 mb-8 max-w-xl mx-auto">
            Contact our team today for a consultation and project estimate.
          </p>
          <Link
            to="/contact"
            className="bg-primary text-primary-foreground px-8 py-3.5 text-[18px] font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            Contact Us <ChevronsRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Projects Map */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-[1170px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-[28px] md:text-[42px] font-bold uppercase">Projects</h2>
            <SectionSeparator />
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              VES is proud to have 150+ completed projects span over 20 different cities, from single family homes to large industrial buildings.
            </p>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-3">
              VES believes providing special care to every project involves a combination of attention to detail, customization, clear communication, and a commitment to continuous improvement. This approach not only ensures project success but also establishes a reputation for delivering exceptional and tailored solutions to clients.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={projectSitesImg}
              alt="Project locations map"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
