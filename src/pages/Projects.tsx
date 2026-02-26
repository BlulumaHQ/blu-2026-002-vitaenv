import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronsRight } from "lucide-react";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import bannerImage from "@/assets/vita-slider-2.png";
import img1 from "@/assets/project-reference-1.png";
import img2 from "@/assets/project-reference-2.png";
import img3 from "@/assets/project-reference-3.png";
import img4 from "@/assets/project-reference-4.png";
import img5 from "@/assets/project-reference-5.png";
import img6 from "@/assets/project-reference-6.png";

const projects = [
  { image: img1, title: "Project Reference 1", desc: "Downtown Vancouver luxury hotel demolition project" },
  { image: img2, title: "Project Reference 2", desc: "Oakridge area, two multi-use commercial building construction prior to 1960." },
  { image: img3, title: "Project Reference 3", desc: "Large commercial retail unit in a Coquitlam shopping mall." },
  { image: img4, title: "Project Reference 4", desc: "Downtown Vancouver heritage building double height asbestos boiler demolition project" },
  { image: img5, title: "Project Reference 5", desc: "Metro Vancouver affordable housing demolition project" },
  { image: img6, title: "Project Reference 6", desc: "Canada place mechanical system selective demolition and removal completed on schedule with no retail operating downtime" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const Projects = () => {
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);

  return (
    <Layout>
      <PageBanner title="PROJECTS" backgroundImage={bannerImage} breadcrumb="Projects" />

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
              <motion.div key={project.title} variants={fadeUp} className="bg-background p-5">
                <div className="overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                    onClick={() => setSelected(project)}
                  />
                </div>
                <div className="mt-4">
                  <h4 className="font-bold text-base mb-2">
                    <button onClick={() => setSelected(project)} className="hover:text-primary transition-colors text-left">
                      {project.title}
                    </button>
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.desc}</p>
                  <button
                    onClick={() => setSelected(project)}
                    className="bg-primary text-primary-foreground text-xs font-semibold px-5 py-2 hover:opacity-90 transition-opacity inline-flex items-center gap-1"
                  >
                    More <ChevronsRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-foreground/60 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-background rounded max-w-lg w-full overflow-hidden shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selected.image} alt={selected.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-lg">{selected.title}</h3>
                  <button onClick={() => setSelected(null)} className="text-muted-foreground hover:text-foreground">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{selected.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Projects;
