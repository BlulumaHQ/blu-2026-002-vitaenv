const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-[1170px] mx-auto px-4 py-6">
      </div>

      <div style={{ backgroundColor: '#202020' }}>
        <div className="max-w-[1170px] mx-auto px-4" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-2" style={{ color: '#FFFFFF', fontSize: '13px' }}>
            <p className="md:text-[13px] text-[12px]">
              Vita Constructions Copyright © 2026 All Rights Reserved.
            </p>
            <p className="md:text-[13px] text-[12px]">
              Web Design by{" "}
              <a
                href="https://bluluma.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity underline underline-offset-2"
                style={{ color: '#999999' }}
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
