import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import vitaLogo from "@/assets/vita-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-vita-dark text-primary-foreground">
      <div className="container-wide section-padding-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & About */}
          <div>
            <img
              src={vitaLogo}
              alt="Vita Constructions"
              className="h-10 w-auto mb-4 brightness-0 invert"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <p className="text-sm leading-relaxed opacity-70 mt-4">
              Professional general contracting services delivering quality construction, renovation, and project management solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Home", path: "/" },
                { label: "Services", path: "/services" },
                { label: "Projects", path: "/projects" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground">
              Contact Us
            </h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+1234567890" className="flex items-center gap-3 text-sm opacity-70 hover:opacity-100 transition-opacity">
                <Phone className="w-4 h-4 flex-shrink-0" />
                (123) 456-7890
              </a>
              <a href="mailto:info@vitaconstructions.com" className="flex items-center gap-3 text-sm opacity-70 hover:opacity-100 transition-opacity">
                <Mail className="w-4 h-4 flex-shrink-0" />
                info@vitaconstructions.com
              </a>
              <div className="flex items-start gap-3 text-sm opacity-70">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                123 Construction Ave, Suite 100
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs opacity-50">
            Vita Constructions Copyright © 2026 All Rights Reserved.
          </p>
          <p className="text-xs opacity-50">
            Web Design by{" "}
            <a
              href="https://bluluma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 transition-opacity underline underline-offset-2"
            >
              Bluluma Design
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
