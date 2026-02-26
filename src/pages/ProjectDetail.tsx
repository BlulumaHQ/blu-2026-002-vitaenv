import { useParams, Link } from "react-router-dom";
import { ChevronsRight } from "lucide-react";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import SectionSeparator from "@/components/SectionSeparator";
import usePageMeta from "@/hooks/usePageMeta";
import bannerImage from "@/assets/vita-slider-2.png";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  const projectNumber = project ? project.title.replace("Project Reference ", "") : "";

  usePageMeta({
    title: project ? `Vita Constructions | Project Reference ${projectNumber}` : "Vita Constructions | Project Not Found",
    description: project ? project.shortDesc : "Project not found.",
  });

  if (!project) {
    return (
      <Layout>
        <div className="py-20 text-center">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <Link to="/projects" className="text-primary hover:underline">Back to Projects</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageBanner title={project.title.toUpperCase()} backgroundImage={bannerImage} breadcrumb={project.title} />

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-[1170px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-[28px] md:text-[42px] font-bold mb-2">{project.title}</h2>
              <SectionSeparator />
              <p className="text-muted-foreground leading-relaxed mt-4">
                {project.fullDesc}
              </p>
              {project.bullets && project.bullets.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="bg-primary text-primary-foreground text-[14px] font-semibold px-6 py-2.5 hover:opacity-90 transition-opacity inline-flex items-center gap-1"
                >
                  Request a Quote <ChevronsRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <Link to="/projects" className="text-primary hover:underline inline-flex items-center gap-1">
              ← Back to All Projects
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
