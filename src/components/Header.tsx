import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import vitaLogo from "@/assets/vita-logo.svg";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-wide flex items-center justify-between h-20 px-6 md:px-12 lg:px-20">
        <Link to="/" className="flex-shrink-0">
          <img src={vitaLogo} alt="Vita Constructions" className="h-12 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-vita-blue ${
                location.pathname === link.path ? "text-vita-blue" : "text-vita-dark"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+1234567890"
            className="flex items-center gap-2 bg-vita-blue text-primary-foreground px-5 py-2.5 text-sm font-semibold rounded hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            Call Us
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-vita-dark"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium tracking-wide uppercase py-2 transition-colors ${
                  location.pathname === link.path ? "text-vita-blue" : "text-vita-dark"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+1234567890"
              className="flex items-center justify-center gap-2 bg-vita-blue text-primary-foreground px-5 py-3 text-sm font-semibold rounded mt-2"
            >
              <Phone className="w-4 h-4" />
              Call Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
