import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import SectionSeparator from "@/components/SectionSeparator";
import bannerImage from "@/assets/vita-slider-1.png";
import imgAsbestos from "@/assets/services-asbestos-removal.png";
import imgDemolition from "@/assets/services-selective-demolition.png";
import imgInterior from "@/assets/services-interior-demolition.png";
import imgLead from "@/assets/services-lead-abatement.png";
import imgDeconstruction from "@/assets/services-deconstruction.png";
import imgSampling from "@/assets/services-asbestos-sampling-and-testing.png";
import imgWater from "@/assets/services-water-and-flood-damage-restoration.png";
import imgMold from "@/assets/services-mold-removal.png";

const services = [
  { image: imgAsbestos, title: "Asbestos Removal", desc: "AES asbestos abatement service is a dedicated solution crafted to tackle the hazardous presence of asbestos in buildings and structures." },
  { image: imgDemolition, title: "Selective Demolition", desc: "Our specialized team is experienced in working through challenges and provide creative approaches to every project." },
  { image: imgInterior, title: "Interior Demolition", desc: "AES's interior demolition team is highly efficient and are flexible with scheduling to meet difficult timeline requirements." },
  { image: imgLead, title: "Lead Abatement", desc: "AES's abatement service is a comprehensive solution designed to address the unique challenges associated with lead-based materials." },
  { image: imgDeconstruction, title: "Deconstruction", desc: "Our deconstruction service is a sustainable and strategic approach to dismantling structures with an emphasis on salvaging materials for reuse." },
  { image: imgSampling, title: "Asbestos Sampling and Testing", desc: "Our specialized sampling service involves collecting samples from suspect materials in your environment, followed by rigorous laboratory analysis." },
  { image: imgWater, title: "Water and Flood Damage Restoration", desc: "AES's flood damage restoration service is a swift and comprehensive solution to mitigate the aftermath of water-related disasters." },
  { image: imgMold, title: "Mold Removal", desc: "AES's mold removal service is a swift and efficient solution to address the potential health hazards associated with mold infestations." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const Services = () => {
  const [selected, setSelected] = useState<typeof services[0] | null>(null);

  return (
    <Layout>
      <PageBanner title="SERVICES" backgroundImage={bannerImage} breadcrumb="Services" />

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-[1170px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold uppercase">Our Services</h2>
            <SectionSeparator />
            <p className="text-muted-foreground max-w-3xl mx-auto text-sm leading-relaxed">
              Asbestos is a naturally occurring mineral that was commonly used in building materials before 1990. Breathing in asbestos fibers can cause serious health problems, including lung cancer, asbestosis, and mesothelioma. Symptoms of asbestosis include shortness of breath, persistent cough, fatigue, wheezing, chest pain, and weight loss. If you suspect that you have been exposed to asbestos, it is important to seek medical attention immediately.
            </p>
            <p className="text-muted-foreground max-w-3xl mx-auto text-sm leading-relaxed mt-3">
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
              <motion.div key={service.title} variants={fadeUp} className="bg-background border border-border overflow-hidden group">
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-base mb-2">{service.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.desc}</p>
                  <button
                    onClick={() => setSelected(service)}
                    className="border border-foreground text-foreground text-xs font-bold px-5 py-2 hover:bg-foreground hover:text-background transition-colors"
                  >
                    Read More
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
              <img src={selected.image} alt={selected.title} className="w-full h-56 object-cover" />
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

export default Services;
