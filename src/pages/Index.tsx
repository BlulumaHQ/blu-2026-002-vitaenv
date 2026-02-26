import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Users, Briefcase, ClipboardList, MessageSquare, Shield } from "lucide-react";
import Layout from "@/components/Layout";
import SectionSeparator from "@/components/SectionSeparator";
import sliderImage1 from "@/assets/vita-slider-1.png";
import sliderImage2 from "@/assets/vita-slider-2.png";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const slides = [sliderImage1, sliderImage2];

const whyVitaPoints = [
  { icon: Users, title: "Strong GC management", desc: "We coordinate trades, schedules, materials, and site standards so the work stays organized and moving." },
  { icon: Briefcase, title: "Experience you can trust", desc: "15+ years delivering builds, renovations, and improvements with consistent results." },
  { icon: ClipboardList, title: "Flexible delivery", desc: "When timelines or budgets are tight, we help you prioritize scope, offer options, and phase work where it makes sense." },
  { icon: MessageSquare, title: "Clear communication", desc: "Fast answers, regular updates, and transparent change management." },
  { icon: Shield, title: "Professional jobsites", desc: "Clean, safe, respectful—especially important for occupied homes and active businesses." },
];

const commercialServices = [
  "Tenant Improvements & Buildouts",
  "Interior Renovations & Refreshes",
  "Unit Turnovers & Make-Good",
  "Back-of-House Upgrades (storage, staff areas, washrooms)",
  "Repairs & Ongoing Maintenance",
];

const residentialServices = [
  "Home Renovations (full or partial)",
  "Kitchens & Bathrooms",
  "Basement Finishing",
  "Additions & Structural Changes",
  "Exterior Upgrades (decks, siding, doors/windows)",
  "Repairs & Upgrades (dry rot, water damage, framing)",
];

const handlePoints = [
  "Scope planning & estimating with clear inclusions/exclusions",
  "Scheduling & sequencing to reduce downtime and prevent trade conflicts",
  "Procurement planning for long-lead items and site readiness",
  "Site logistics (access, safety, protection, cleanliness)",
  "Quality control throughout, not just at the end",
  "Closeout with punch-list completion and turnover support",
];

const processSteps = [
  { step: "01", title: "Consultation", desc: "Goals, budget range, timeline, and site conditions." },
  { step: "02", title: "Scope & Estimate", desc: "Clear breakdown, options, and realistic expectations." },
  { step: "03", title: "Plan & Schedule", desc: "Trades, materials, milestones, and site logistics." },
  { step: "04", title: "Build", desc: "Consistent communication, clean site practices, quality checks." },
  { step: "05", title: "Final Walkthrough", desc: "Punch-list completed and project wrapped properly." },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <Layout>
      {/* Hero Slider */}
      <section className="relative min-h-[550px] md:min-h-[700px] overflow-hidden">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          >
            <img
              src={slide}
              alt={`Slide ${i + 1}`}
              className="w-full h-full object-cover"
              style={{
                animation: i === currentSlide ? "kenburns 12s ease-in-out forwards" : "none",
              }}
            />
            <div className="absolute inset-0 bg-foreground/50" />
          </div>
        ))}

        {/* Text overlay — positioned upper-mid like original */}
        <div className="relative z-20 max-w-[1170px] mx-auto px-4 pt-[100px] md:pt-[140px]">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-[700px]">
            <motion.h1 variants={fadeUp} className="text-[32px] md:text-[50px] font-bold text-background leading-[1.15] mb-5 uppercase" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              <span className="text-primary">General Contracting,</span> Made Simple.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-background/85 text-base md:text-lg leading-[1.65] mb-8">
              Vita is a general contracting company delivering clean, durable builds with 15+ years of experience. We lead projects with clear communication, strong coordination, and the flexibility to meet tight timelines and practical budgets—for both commercial and residential work.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground px-8 py-2.5 text-sm font-bold uppercase hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                Contact us <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="border border-background/40 text-background px-8 py-2.5 text-sm font-bold uppercase hover:bg-background/10 transition-colors"
              >
                Services
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-colors ${i === currentSlide ? "bg-primary" : "bg-background/50"}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Why Vita */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-[1170px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold uppercase">Why Vita</h2>
            <SectionSeparator />
            <p className="text-muted-foreground max-w-2xl mx-auto">Reliable Project Leadership From Start to Finish</p>
          </div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyVitaPoints.map((point) => (
              <motion.div key={point.title} variants={fadeUp} className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0 rounded">
                  <point.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-1">{point.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="max-w-[1170px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold uppercase">Services</h2>
            <SectionSeparator />
            <p className="text-muted-foreground max-w-2xl mx-auto">General Contracting Services</p>
          </div>
          <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
            Vita manages projects from planning to closeout—so you have one accountable team driving the job forward.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-background p-8 border border-border">
              <h3 className="text-lg font-bold mb-4 text-primary">Commercial</h3>
              <ul className="space-y-2.5">
                {commercialServices.map((s) => (
                  <li key={s} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-background p-8 border border-border">
              <h3 className="text-lg font-bold mb-4 text-primary">Residential</h3>
              <ul className="space-y-2.5">
                {residentialServices.map((s) => (
                  <li key={s} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8 italic">
            If you're not sure where your project fits, send the details— we'll tell you quickly and honestly.
          </p>
        </div>
      </section>

      {/* What We Handle */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-[1170px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold uppercase">What We Handle</h2>
            <SectionSeparator />
            <p className="text-muted-foreground max-w-2xl mx-auto">Coordination That Keeps Projects Moving</p>
          </div>
          <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
            The finish matters—but the process matters just as much. We focus on the fundamentals that protect schedule, budget, and quality:
          </p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {handlePoints.map((point) => (
              <motion.div key={point} variants={fadeUp} className="flex items-start gap-3 text-sm">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{point}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="max-w-[1170px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold uppercase">Process</h2>
            <SectionSeparator />
            <p className="text-muted-foreground max-w-2xl mx-auto">A Straightforward Build Process</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {processSteps.map((s) => (
              <div key={s.step} className="bg-background border border-border p-6 text-center">
                <div className="text-2xl font-bold text-primary mb-2">{s.step}</div>
                <h4 className="font-bold text-sm mb-2">{s.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-foreground">
        <div className="max-w-[1170px] mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-background mb-4">Ready to Start Your Project?</h2>
          <p className="text-background/70 mb-8 max-w-xl mx-auto">
            Contact our team today for a consultation and project estimate.
          </p>
          <Link
            to="/contact"
            className="bg-primary text-primary-foreground px-8 py-3.5 font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
