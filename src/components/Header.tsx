import { useState, useEffect } from "react";
import { Search, Phone, Star } from "lucide-react";
import logoImage from "../assets/images/lg.png";
import MegaMenu from "./MegaMenu";
import { menuData } from "../data/menu";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      setIsScrolled(scroll > 20);
      setScrollY(scroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = isHovered || isScrolled;

  // Disparition progressivement après 500 px de scroll
  const hideTopBar = scrollY > 500;

  // Disparition du menu après 900 px (plus bas)
  const hideMenu = scrollY > 900;

  // Animation plus lisse selon l'état
  const animTiming = isActive
    ? "duration-200 ease-out"
    : "duration-500 ease-in-out";

  return (
    <header
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setActiveMenu(null);
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${animTiming} ${
        isActive && !hideMenu
          ? "bg-white text-gray-800 shadow-m "
          : "bg-transparent text-white shadow-none "
      }`}
    >
      {/* TOP BAR – disparaît progressivement */}
      <div
        className={`px-[12%] py-2 text-sm transition-all ${animTiming} overflow-hidden ${
          hideTopBar
            ? "h-0 opacity-0 -translate-y-2" // disparaît doucement
            : isActive
            ? "bg-[#f9f6f0] h-auto opacity-100 translate-y-0"
            : "bg-transparent"
        }`}
      >
        <div className="flex justify-end items-center gap-5">
          <div className="flex items-center gap-2">
            <div
              className={`flex transition-all ${animTiming} ${
                isActive ? "text-[#c29b7a]" : "text-white"
              }`}
            >
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <span className="font-medium">4,9/5</span>
          </div>

          <span className="opacity-50">|</span>

          <button
            className={`flex items-center gap-2 transition-all ${animTiming} ${
              isActive ? "text-[#5b6fcf]" : "text-white"
            }`}
          >
            <Search size={15} />
            Rechercher
          </button>

          <span className="opacity-50">|</span>

          <a
            href="#"
            className={`flex items-center gap-2 font-semibold transition-all ${animTiming} ${
              isActive ? "text-[#5b6fcf]" : "text-white"
            }`}
          >
            <Phone size={15} />
            034 55 632 23
          </a>
        </div>
      </div>

      {/* LIGNE – disparaît avec la top bar */}
      {!hideTopBar && (
        <div
          className={`border-t mx-[0%] transition-all ${animTiming} ${
            isActive ? "border-gray-200" : "border-white/20"
          }`}
        ></div>
      )}

      {/* NAVIGATION – disparaît après la top bar */}
      <div
        className={`transition-all ${animTiming} overflow-hidden ${
          hideMenu
            ? "h-0 opacity-0 -translate-y-2" // menu disparaît fluide à 900 px
            : "h-auto opacity-100 translate-y-0"
        }`}
      >
        <nav className="px-[12%] py-4">
          <div className="flex items-center justify-center gap-10 ml-51">
            {/* LEFT MENU */}
            <div className="flex gap-8 font-medium">
              <div
                onMouseEnter={() => setActiveMenu("destinations")}
                className="hover:text-[#c29b7a] cursor-pointer"
              >
                Nos destinations
              </div>
              <div
                onMouseEnter={() => setActiveMenu("inspirations")}
                className="hover:text-[#c29b7a] cursor-pointer"
              >
                Idées & inspirations
              </div>
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
                    : "none",
                }}
              />
              <span
                className={`text-xs tracking-widest transition-all ${animTiming} ${
                  isActive ? "text-[#c29b7a]" : "text-white"
                }`}
              >
                Tour Operateur Mada
              </span>
            </div>

            {/* RIGHT MENU */}
            <div className="flex items-center gap-8 font-medium">
              <div
                onMouseEnter={() => setActiveMenu("croisieres")}
                className="hover:text-[#c29b7a] cursor-pointer"
              >
                Nos croisières
              </div>
              <div
                onMouseEnter={() => setActiveMenu("about")}
                className="hover:text-[#c29b7a] cursor-pointer"
              >
                Qui sommes-nous ?
              </div>

              <button className="bg-[#5b6fcf] px-5 py-2 rounded-md font-semibold hover:bg-[#4659b8] text-white shadow-sm transition-all duration-300">
                Concevez votre voyage
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* MEGA MENU – seulement si menu visible */}
      {activeMenu && !hideMenu && (
        <MegaMenu
          activeKey={activeMenu}
          {...menuData[activeMenu as keyof typeof menuData]}
        />
      )}
    </header>
  );
};

export default Header;
