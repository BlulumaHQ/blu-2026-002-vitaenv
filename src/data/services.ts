import imgAsbestos from "@/assets/services-asbestos-removal.png";
import imgDemolition from "@/assets/services-selective-demolition.png";
import imgInterior from "@/assets/services-interior-demolition.png";
import imgLead from "@/assets/services-lead-abatement.png";
import imgDeconstruction from "@/assets/services-deconstruction.png";
import imgSampling from "@/assets/services-asbestos-sampling-and-testing.png";
import imgWater from "@/assets/services-water-and-flood-damage-restoration.png";
import imgMold from "@/assets/services-mold-removal.png";

export interface ServiceData {
  slug: string;
  image: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
}

export const services: ServiceData[] = [
  {
    slug: "asbestos-removal",
    image: imgAsbestos,
    title: "Asbestos Removal",
    shortDesc: "AES asbestos abatement service is a dedicated solution crafted to tackle the hazardous presence of asbestos in buildings and structures.",
    fullDesc: "AES asbestos abatement service is a dedicated solution crafted to tackle the hazardous presence of asbestos in buildings and structures. Asbestos poses severe health risks, and our specialized team is trained to safely and efficiently remove asbestos-containing materials. Utilizing state-of-the-art techniques and strict safety protocols, we ensure the containment and proper disposal of asbestos, minimizing potential health hazards. Our comprehensive approach includes thorough risk assessments, advanced abatement methodologies, and meticulous post-removal inspections to guarantee a safe environment. With a commitment to compliance with all regulatory standards, our asbestos abatement service provides a reliable and responsible solution for the effective mitigation of asbestos-related health risks.",
  },
  {
    slug: "selective-demolition",
    image: imgDemolition,
    title: "Selective Demolition",
    shortDesc: "Our specialized team is experienced in working through challenges and provide creative approaches to every project.",
    fullDesc: "Our specialized team is experienced in working through challenges and provide creative approaches to every project.",
  },
  {
    slug: "interior-demolition",
    image: imgInterior,
    title: "Interior Demolition",
    shortDesc: "AES's interior demolition team is highly efficient and are flexible with scheduling to meet difficult timeline requirements.",
    fullDesc: "AES's interior demolition team is highly efficient and are flexible with scheduling to meet difficult timeline requirements.",
  },
  {
    slug: "lead-abadement",
    image: imgLead,
    title: "Lead Abatement",
    shortDesc: "AES's abatement service is a comprehensive solution designed to address the unique challenges associated with lead-based materials.",
    fullDesc: "AES's abatement service is a comprehensive solution designed to address the unique challenges associated with lead-based materials. Lead poses serious health risks, especially in older structures, and our specialized team is equipped to safely and effectively remove lead-containing materials. We employ industry best practices, including thorough risk assessments, advanced containment measures, and safe disposal methods. Our commitment to compliance with environmental regulations ensures a responsible and eco-friendly approach. Whether it's lead paint, pipes, or other lead-containing materials, our lead abatement service prioritizes the well-being of occupants, the environment, and our team, providing a secure and reliable solution for lead hazard mitigation.",
  },
  {
    slug: "mold-removal",
    image: imgMold,
    title: "Mold Removal",
    shortDesc: "AES's mold removal service is a swift and efficient solution to address the potential health hazards associated with mold infestations.",
    fullDesc: "AES's mold removal service is a swift and efficient solution to address the potential health hazards associated with mold infestations. Mold can thrive in various environments, posing risks to both property structures and human health. Our expert team employs cutting-edge techniques to identify and eliminate mold colonies, ensuring a thorough and lasting removal process. We prioritize the health and well-being of occupants, employing stringent safety measures throughout the removal process.",
  },
  {
    slug: "deconstruction",
    image: imgDeconstruction,
    title: "Deconstruction",
    shortDesc: "Our deconstruction service is a sustainable and strategic approach to dismantling structures with an emphasis on salvaging materials for reuse.",
    fullDesc: "Our deconstruction service is a sustainable and strategic approach to dismantling structures with an emphasis on salvaging materials for reuse. Unlike traditional demolition, deconstruction focuses on minimizing environmental impact by carefully disassembling buildings, salvaging valuable materials such as wood, metals, and fixtures. This method not only reduces waste but also promotes resource conservation. Our skilled team employs precision in the deconstruction process, ensuring the highest salvage yield while maintaining safety standards.",
  },
  {
    slug: "asbestos-sampling-and-testing",
    image: imgSampling,
    title: "Asbestos Sampling and Testing",
    shortDesc: "Our specialized sampling service involves collecting samples from suspect materials in your environment, followed by rigorous laboratory analysis.",
    fullDesc: "Our specialized sampling service involves collecting samples from suspect materials in your environment, followed by rigorous laboratory analysis. Our certified experts ensure accurate results, enabling informed decisions for asbestos abatement or management.",
  },
  {
    slug: "water-and-flood-damage-restoration",
    image: imgWater,
    title: "Water and Flood Damage Restoration",
    shortDesc: "AES's flood damage restoration service is a swift and comprehensive solution to mitigate the aftermath of water-related disasters.",
    fullDesc: "AES's flood damage restoration service is a swift and comprehensive solution to mitigate the aftermath of water-related disasters. Whether caused by heavy rainfall, burst pipes, or natural disasters, our expert team is ready to respond promptly. We employ advanced techniques to extract water, dry affected areas, and restore damaged structures and belongings.",
  },
];
