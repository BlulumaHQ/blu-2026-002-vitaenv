import { Link } from "react-router-dom";
import { Home } from "lucide-react";

interface PageBannerProps {
  title: string;
  backgroundImage: string;
  breadcrumb: string;
}

const PageBanner = ({ title, backgroundImage, breadcrumb }: PageBannerProps) => (
  <>
    {/* Banner */}
    <div
      className="relative bg-cover bg-center py-20 md:py-28"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-foreground/70" />
      <div className="relative max-w-[1170px] mx-auto px-4">
        <h1 className="text-[38px] md:text-[50px] font-bold text-background">{title}</h1>
      </div>
    </div>

    {/* Breadcrumb */}
    <div className="bg-muted border-b border-border">
      <div className="max-w-[1170px] mx-auto px-4 py-3">
        <ul className="flex items-center gap-2 text-[14px]">
          <li>
            <Link to="/" className="flex items-center gap-1 text-primary hover:underline">
              <Home className="w-3.5 h-3.5" />
              Home
            </Link>
          </li>
          <li className="text-muted-foreground">»</li>
          <li className="text-muted-foreground">{breadcrumb}</li>
        </ul>
      </div>
    </div>
  </>
);

export default PageBanner;
