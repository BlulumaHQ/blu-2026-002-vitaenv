import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronsRight } from "lucide-react";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import SectionSeparator from "@/components/SectionSeparator";
import usePageMeta from "@/hooks/usePageMeta";
import bannerImage from "@/assets/vita-slider-1.png";
import { services } from "@/data/services";

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
          <div className="text-center mb-12">
            <h2 className="text-[28px] md:text-[42px] font-bold uppercase">Our Services</h2>
            <SectionSeparator />
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Asbestos is a naturally occurring mineral that was commonly used in building materials before 1990. Breathing in asbestos fibers can cause serious health problems, including lung cancer, asbestosis, and mesothelioma. Symptoms of asbestosis include shortness of breath, persistent cough, fatigue, wheezing, chest pain, and weight loss. If you suspect that you have been exposed to asbestos, it is important to seek medical attention immediately.
            </p>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-3">
              To reduce your exposure to asbestos, avoid disturbing materials that may contain asbestos, hire a professional to test for asbestos before renovating or remodeling, and hire a qualified asbestos removal specialist to remove it safely.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <motion.div key={service.slug} variants={fadeUp} className="bg-background border border-border overflow-hidden group">
                <Link to={`/services/${service.slug}`} className="block overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>
                <div className="p-6">
                  <h4 className="font-bold text-[17px] mb-2">
                    <Link to={`/services/${service.slug}`} className="hover:text-primary transition-colors">
                      {service.title}
                    </Link>
                  </h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">{service.shortDesc}</p>
                  <Link
                    to={`/services/${service.slug}`}
                    className="border border-foreground text-foreground text-[14px] font-bold px-5 py-2 hover:bg-foreground hover:text-background transition-colors inline-flex items-center gap-1"
                  >
                    Read More <ChevronsRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
