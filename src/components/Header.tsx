import { useState, useEffect } from "react";
import { Search, Phone, Star } from "lucide-react";
import logoImage from "../assets/images/lg.png";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = isHovered || isScrolled;

  // RÉGLAGES DE L'ANIMATION (Le secret est ici)
  // Transition rapide quand on entre (150ms), plus douce quand on sort (500ms)
  const animTiming = isActive 
    ? "duration-200  ease-out" 
    : "duration-500 ease-in-out";

  return (
    <header 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${animTiming} ${
        isActive 
          ? "bg-white text-gray-800 shadow-md translate-y-0" 
          : "bg-transparent text-white"
      }`}
    >

      {/* TOP BAR */}
      <div className={`px-[12%] py-2 text-sm transition-all ${animTiming} ${
        isActive ? "bg-[#f9f6f0]" : "bg-transparent"
      }`}>
        <div className="flex justify-end items-center gap-5">
          <div className="flex items-center gap-2">
            <div className={`flex transition-all ${animTiming} ${isActive ? "text-[#c29b7a]" : "text-white"}`}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <span className="font-medium">4,9/5</span>
          </div>

          <span className="opacity-50">|</span>

          <button className={`flex items-center gap-2 transition-all ${animTiming} ${isActive ? "text-[#5b6fcf]" : "text-white"}`}>
            <Search size={15} />
            Rechercher
          </button>

          <span className="opacity-50">|</span>

          <a href="#" className={`flex items-center gap-2 font-semibold transition-all ${animTiming} ${isActive ? "text-[#5b6fcf]" : "text-white"}`}>
            <Phone size={15} />
            034 55 632 23
          </a>

        </div>
      </div>

      {/* LIGNE */}
      <div className={`border-t mx-[0%] transition-all ${animTiming} ${
        isActive ? "border-gray-200" : "border-white/20 duration-200"
      }`}></div>

      {/* NAVIGATION */}
      <nav className="px-[12%] py-4">
        <div className="flex items-center justify-center gap-10 ml-51">

          {/* LEFT MENU */}
          <div className="flex gap-8 font-medium">
            <a href="#" className="hover:text-[#c29b7a] transition-colors duration-0">Nos destinations</a>
            <a href="#" className="hover:text-[#c29b7a] transition-colors duration-0">Idées & inspirations</a>
          </div>

          {/* LOGO */}
          <div className="flex flex-col items-center px-6">
          <img
            src={logoImage}
            alt="logo"
            className={`h-10 transition-all ${animTiming}`}
            style={{
              filter: isActive
              ? "invert(60%) sepia(30%) saturate(650%) hue-rotate(345deg)"
              : "none"
  }}
/>
            <span className={`text-xs tracking-widest transition-all ${animTiming} ${isActive ? "text-[#c29b7a]" : "text-white"}`}>
               Tour Operateur Mada
            </span>
          </div>

          {/* RIGHT MENU */}
          <div className="flex items-center gap-8 font-medium">
            <a href="#" className="hover:text-[#c29b7a] transition-colors duration-0">Nos croisières</a>
            <a href="#" className="hover:text-[#c29b7a] ">Qui sommes-nous ?</a>

            <button className="bg-[#5b6fcf] px-5 py-2 rounded-md font-semibold hover:bg-[#4659b8] text-white shadow-sm transition-all duration-300">
              Concevez votre voyage
            </button>
          </div>

        </div>
      </nav>

    </header>
  );
};

export default Header;