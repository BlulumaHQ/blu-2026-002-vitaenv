import { useParams, Link } from "react-router-dom";
import { ChevronsRight } from "lucide-react";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import SectionSeparator from "@/components/SectionSeparator";
import bannerImage from "@/assets/vita-slider-1.png";
import { services } from "@/data/services";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <Layout>
        <div className="py-20 text-center">
          <h2 className="text-2xl font-bold mb-4">Service Not Found</h2>
          <Link to="/services" className="text-primary hover:underline">Back to Services</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageBanner title={service.title.toUpperCase()} backgroundImage={bannerImage} breadcrumb={service.title} />

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-[1170px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
              <SectionSeparator />
              <p className="text-sm text-muted-foreground leading-relaxed mt-4">
                {service.fullDesc}
              </p>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="bg-primary text-primary-foreground text-xs font-semibold px-6 py-2.5 hover:opacity-90 transition-opacity inline-flex items-center gap-1"
                >
                  Request a Quote <ChevronsRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Back to services */}
          <div className="mt-12 pt-8 border-t border-border">
            <Link to="/services" className="text-primary hover:underline text-sm inline-flex items-center gap-1">
              ← Back to All Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
