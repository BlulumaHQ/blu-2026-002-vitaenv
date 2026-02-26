const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-[1170px] mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-background/60">
          <p>
            Vita Environmental Copyright © 2026 All Rights Reserved.
          </p>
          <p>
            Web Design by{" "}
            <a
              href="https://bluluma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-background transition-colors underline underline-offset-2"
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
