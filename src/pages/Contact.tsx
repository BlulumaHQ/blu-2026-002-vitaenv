import { useState, FormEvent } from "react";
import { Smartphone, Mail, MapPin, ChevronsRight, Home } from "lucide-react";
import Layout from "@/components/Layout";
import SectionSeparator from "@/components/SectionSeparator";
import usePageMeta from "@/hooks/usePageMeta";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  usePageMeta({
    title: "Vita Constructions | Contact",
    description: "Get in touch with Vita Constructions for a consultation, project estimate, or general inquiry. Located in Vancouver, BC.",
  });

  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          accessKey: "sf_9cnbhm86hb32b3f7ibabhc00",
          name: formData.get("username"),
          email: formData.get("email"),
          phone: formData.get("phone") || "",
          message: formData.get("message"),
          subject: "Vita Constructions Website Inquiry",
          source: "vita-preview.bluluma.com",
        }),
      });

      const data = await res.json();

      if (data.success) {
        toast({
          title: "Message Sent",
          description: "Thank you for contacting us. We'll get back to you shortly.",
        });
        form.reset();
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted border-b border-border">
        <div className="max-w-[1170px] mx-auto px-4 py-3">
          <ul className="flex items-center gap-2 text-[14px]">
            <li>
              <a href="/" className="text-primary hover:underline flex items-center gap-1">
                <Home className="w-3.5 h-3.5" /> Home
              </a>
            </li>
            <li className="text-muted-foreground">»</li>
            <li className="text-muted-foreground">Contact</li>
          </ul>
        </div>
      </div>

      {/* Contact Info Cards */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-[1170px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-primary text-center p-8 flex flex-col items-center">
              <Smartphone className="w-8 h-8 text-primary-foreground mb-3" />
              <h5 className="text-primary-foreground font-bold mb-2">Phone number</h5>
              <p className="text-primary-foreground/70">(778) 508-1118</p>
            </div>
            <div className="bg-primary text-center p-8 flex flex-col items-center">
              <Mail className="w-8 h-8 text-primary-foreground mb-3" />
              <h5 className="text-primary-foreground font-bold mb-2">Email address</h5>
              <p className="text-primary-foreground/70">info@vitaenv.com</p>
            </div>
            <div className="bg-primary text-center p-8 flex flex-col items-center">
              <MapPin className="w-8 h-8 text-primary-foreground mb-3" />
              <h5 className="text-primary-foreground font-bold mb-2">Address info</h5>
              <p className="text-primary-foreground/70">
                73 East 6th Avenue, Unit 230<br />
                Vancouver, BC V5T 1J3
              </p>
            </div>
          </div>

          {/* Map & Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold uppercase mb-2">Location</h4>
              <SectionSeparator />
              <div className="mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.5481472013435!2d-123.103234456516!3d49.26600978214879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867160009b11c3%3A0x1262cf580dd08946!2s60%20E%205th%20Ave%20%23110%2C%20Vancouver%2C%20BC%20V5T%201G8%2C%20Canada!5e0!3m2!1sen!2sde!4v1705352060429!5m2!1sen!2sde"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Vita Constructions Location"
                  className="w-full"
                />
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold uppercase mb-2">Contact Form</h4>
              <SectionSeparator />
              <div className="bg-muted p-6 mt-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center border border-border bg-background">
                    <span className="px-3 text-muted-foreground">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    </span>
                    <input
                      name="username"
                      type="text"
                      required
                      placeholder="Name"
                      className="flex-1 py-2.5 pr-3 bg-background outline-none"
                    />
                  </div>
                  <div className="flex items-center border border-border bg-background">
                    <span className="px-3 text-muted-foreground">
                      <Mail className="w-4 h-4" />
                    </span>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="Email"
                      className="flex-1 py-2.5 pr-3 bg-background outline-none"
                    />
                  </div>
                  <div className="flex items-center border border-border bg-background">
                    <span className="px-3 text-muted-foreground">
                      <Smartphone className="w-4 h-4" />
                    </span>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="Phone (optional)"
                      className="flex-1 py-2.5 pr-3 bg-background outline-none"
                    />
                  </div>
                  <div className="flex items-start border border-border bg-background">
                    <span className="px-3 pt-2.5 text-muted-foreground">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                    </span>
                    <textarea
                      name="message"
                      rows={3}
                      required
                      placeholder="Message"
                      className="flex-1 py-2.5 pr-3 bg-background outline-none resize-none"
                    />
                  </div>
                  <div className="flex gap-3">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="bg-primary text-primary-foreground text-[14px] font-semibold px-5 py-2.5 hover:opacity-90 transition-opacity inline-flex items-center gap-1 disabled:opacity-60"
                    >
                      {submitting ? "Sending..." : "Submit"} <ChevronsRight className="w-3 h-3" />
                    </button>
                    <button
                      type="reset"
                      className="bg-primary text-primary-foreground text-[14px] font-semibold px-5 py-2.5 hover:opacity-90 transition-opacity inline-flex items-center gap-1"
                    >
                      Reset <ChevronsRight className="w-3 h-3" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
