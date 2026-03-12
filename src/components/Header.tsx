import { useState, useEffect } from "react";
import { Search, Phone, Star } from "lucide-react";
import logoImage from "../assets/images/lg.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent text-white"}`}>

      {/* TOP BAR */}
      <div className={`px-[12%] py-2 text-sm transition-colors duration-300 ${isScrolled ? "bg-[#f8f1e7]" : "bg-transparent"}`}>
        <div className="flex justify-end items-center gap-5">

          <div className="flex items-center gap-2">
            <div className={`flex ${isScrolled ? "text-[#b67852]" : "text-white"}`}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <span className={isScrolled ? "text-gray-600" : "text-white"}>4,9/5</span>
          </div>

          <span className={`opacity-50 ${isScrolled ? "text-gray-400" : "text-white"}`}>|</span>

          <button className={`flex items-center gap-2 ${isScrolled ? "text-[#5b6fcf]" : "text-white"}`}>
            <Search size={15} />
            Rechercher
          </button>

          <span className={`opacity-50 ${isScrolled ? "text-gray-400" : "text-white"}`}>|</span>

          <a href="#" className={`flex items-center gap-2 font-semibold ${isScrolled ? "text-[#5b6fcf]" : "text-white"}`}>
            <Phone size={15} />
            01 40 15 15 11
          </a>

        </div>
      </div>

      {/* LIGNE */}
      <div className={`border-t transition-colors duration-300 mx-[0%] ${isScrolled ? "border-transparent" : "border-white/20"}`}></div>

      {/* NAVIGATION */}
      <nav className="px-[12%] py-4">
        <div className="flex items-center justify-center gap-10 ml-51">

          {/* LEFT MENU */}
          <div className={`flex gap-8 font-medium transition-colors duration-300 ${isScrolled ? "text-gray-700" : "text-white"}`}>
            <a href="#" className="hover:text-blue-500">Nos destinations</a>
            <a href="#" className="hover:text-blue-500">Idées & inspirations</a>
          </div>

          {/* LOGO */}
          <div className="flex flex-col items-center px-6">
            <img
              src={logoImage}
              alt="logo"
              className="h-14 transition-all duration-300"
              style={{
                filter: !isScrolled
                  ? "brightness(0) invert(1)"
                  : "brightness(0) saturate(100%) invert(52%) sepia(40%) saturate(500%) hue-rotate(345deg) brightness(90%)",
              }}
            />
            <span className={`text-xs tracking-widest mt-1 transition-colors duration-300 ${isScrolled ? "text-[#b67852]" : "text-white"}`}>
              Dé tours Madagascar
            </span>
          </div>

          {/* RIGHT MENU */}
          <div className={`flex items-center gap-8 font-medium transition-colors duration-300 ${isScrolled ? "text-gray-700" : "text-white"}`}>
            <a href="#" className="hover:text-blue-500">Nos croisières</a>
            <a href="#" className="hover:text-blue-500">Qui sommes-nous ?</a>

            <button className="bg-[#5b6fcf] text-white px-5 py-2 rounded-md font-semibold hover:bg-[#4659b8] transition-colors">
              Concevez votre voyage
            </button>
          </div>

        </div>
      </nav>

    </header>
  );
};

export default Header;