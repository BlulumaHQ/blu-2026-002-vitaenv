import { useState, useEffect } from "react";
import vitaLogo from "@/assets/vita-logo.svg";

const Preloader = () => {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = "hidden";

    const fadeTimer = setTimeout(() => setFading(true), 500);
    const removeTimer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, 800);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{
        backgroundColor: "#000000",
        opacity: fading ? 0 : 1,
        transition: "opacity 300ms ease-out",
        pointerEvents: fading ? "none" : "auto",
      }}
    >
      <img
        src={vitaLogo}
        alt=""
        aria-hidden="true"
        className="w-48 md:w-56"
        style={{
          animation: "preloader-scale 500ms ease-out forwards",
        }}
      />
    </div>
  );
};

export default Preloader;
