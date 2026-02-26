const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-[1170px] mx-auto px-4 py-6">
      </div>

      <div style={{ backgroundColor: '#323232' }}>
        <div className="max-w-[1170px] mx-auto px-4 py-[20px]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs" style={{ color: '#FFFFFF' }}>
            <p>
              Vita Environmental Copyright © 2026 All Rights Reserved.
            </p>
            <p>
              Web Design by{" "}
              <a
                href="https://bluluma.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity underline underline-offset-2"
                style={{ color: '#FFFFFF' }}
              >
                Bluluma Design
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
