import img1 from "@/assets/project-reference-1.png";
import img2 from "@/assets/project-reference-2.png";
import img3 from "@/assets/project-reference-3.png";
import img4 from "@/assets/project-reference-4.png";
import img5 from "@/assets/project-reference-5.png";
import img6 from "@/assets/project-reference-6.png";

export interface ProjectData {
  slug: string;
  image: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  bullets?: string[];
}

export const projects: ProjectData[] = [
  {
    slug: "project-referrence-1",
    image: img1,
    title: "Project Reference 1",
    shortDesc: "Downtown Vancouver luxury hotel demolition project",
    fullDesc: "Downtown Vancouver luxury hotel interior demolition and asbestos abatement.",
    bullets: [
      "Combined 200,000+ square feet of space fully abated",
      "Safe from all hazardous materials",
    ],
  },
  {
    slug: "project-referrence-2",
    image: img2,
    title: "Project Reference 2",
    shortDesc: "Oakridge area, two multi-use commercial building construction prior to 1960.",
    fullDesc: "Oakridge area, two multi-use commercial building construction prior to 1960.",
    bullets: [
      "52,000+ square feet",
      "All drywall",
      "All sheet vinyl flooring",
      "All window putty in window frames",
      "All floor mastic adhesive",
      "All amosite asbestos insulation",
      "Moderate / High risk abatement procedures performed",
    ],
  },
  {
    slug: "project-referrence-3",
    image: img3,
    title: "Project Reference 3",
    shortDesc: "Large commercial retail unit in a Coquitlam shopping mall.",
    fullDesc: "Large commercial retail unit in Coquitlam shopping mall interior demolition project",
    bullets: [
      "Over 20,000 square feet",
      "All interior demolition",
      "All work performed outside of shopping mall operating hours",
      "Recycled and conserving some existing building materials to reduce carbon footprint",
    ],
  },
  {
    slug: "project-referrence-4",
    image: img4,
    title: "Project Reference 4",
    shortDesc: "Downtown Vancouver heritage building double height asbestos boiler demolition project",
    fullDesc: "Double height boiler demolition project",
    bullets: [
      "Large double height asbestos containing boiler abatement and removal",
      "Completed in a heritage building downtown Vancouver",
    ],
  },
  {
    slug: "project-referrence-5",
    image: img5,
    title: "Project Reference 5",
    shortDesc: "Metro Vancouver affordable housing demolition project",
    fullDesc: "Metro Vancouver affordable housing demolition project",
    bullets: [
      "Full abatement and interior demolition performed on 7 multi-residential buildings for metro Vancouver",
    ],
  },
  {
    slug: "project-referrence-6",
    image: img6,
    title: "Project Reference 6",
    shortDesc: "Canada place mechanical system selective demolition and removal completed on schedule with no retail operating downtime",
    fullDesc: "Canada place mechanical system selective demolition and removal completed on schedule with no retail operating downtime",
  },
];
