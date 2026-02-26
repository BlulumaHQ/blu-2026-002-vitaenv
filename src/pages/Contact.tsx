import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const contactInfo = [
  { icon: Phone, label: "Phone", value: "(123) 456-7890", href: "tel:+1234567890" },
  { icon: Mail, label: "Email", value: "info@vitaconstructions.com", href: "mailto:info@vitaconstructions.com" },
  { icon: MapPin, label: "Address", value: "123 Construction Ave, Suite 100" },
  { icon: Clock, label: "Hours", value: "Mon – Fri: 7:00 AM – 5:00 PM" },
];

const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll get back to you shortly.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-vita-dark py-20 md:py-28">
        <div className="container-wide px-6 md:px-12 lg:px-20">
          <p className="text-vita-blue text-sm font-semibold uppercase tracking-widest mb-3">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground">Contact Us</h1>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.h2 variants={fadeUp} className="text-3xl font-extrabold mb-4">
                Let's Talk About Your Project
              </motion.h2>
              <motion.p variants={fadeUp} className="text-vita-gray mb-10 leading-relaxed">
                Whether you're planning a new build, renovation, or need construction consultation, our team is ready to help. Reach out and we'll get back to you within one business day.
              </motion.p>

              <motion.div variants={stagger} className="space-y-6">
                {contactInfo.map((item) => (
                  <motion.div key={item.label} variants={fadeUp} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded bg-vita-blue/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-vita-blue" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-vita-gray mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-vita-dark font-medium hover:text-vita-blue transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-vita-dark font-medium">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <form onSubmit={handleSubmit} className="border border-border rounded p-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-vita-gray mb-2">
                      First Name *
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full border border-border rounded px-4 py-3 text-sm bg-background focus:outline-none focus:border-vita-blue transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-vita-gray mb-2">
                      Last Name *
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full border border-border rounded px-4 py-3 text-sm bg-background focus:outline-none focus:border-vita-blue transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-vita-gray mb-2">
                    Email *
                  </label>
                  <input
                    required
                    type="email"
                    className="w-full border border-border rounded px-4 py-3 text-sm bg-background focus:outline-none focus:border-vita-blue transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-vita-gray mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full border border-border rounded px-4 py-3 text-sm bg-background focus:outline-none focus:border-vita-blue transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-vita-gray mb-2">
                    Project Type
                  </label>
                  <select className="w-full border border-border rounded px-4 py-3 text-sm bg-background focus:outline-none focus:border-vita-blue transition-colors">
                    <option value="">Select a project type</option>
                    <option>Commercial Construction</option>
                    <option>Residential Construction</option>
                    <option>Industrial Construction</option>
                    <option>Renovation / Buildout</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-vita-gray mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full border border-border rounded px-4 py-3 text-sm bg-background focus:outline-none focus:border-vita-blue transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-vita-blue text-primary-foreground px-8 py-3.5 font-semibold rounded hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {submitting ? "Sending..." : "Send Message"}
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
