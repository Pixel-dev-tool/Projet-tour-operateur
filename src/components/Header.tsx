import { Search, Phone, Star } from "lucide-react";
import logoImage from "../assets/images/lg.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 text-white ">

      {/* TOP BAR */}
      <div className="px-[12%] py-2 text-sm">
        <div className="flex justify-end items-center gap-5">

          <div className="flex items-center gap-2">
            <div className="flex text-white">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <span>4,9/5</span>
          </div>

          <span className="opacity-50">|</span>

          <button className="flex items-center gap-2">
            <Search size={15} />
            Rechercher
          </button>

          <span className="opacity-50">|</span>

          <a href="#" className="flex items-center gap-2 font-semibold">
            <Phone size={15} />
            034 55 632 23
          </a>

        </div>
      </div>

      {/* LIGNE */}
      <div className="border-t border-white/20 mx-[0%]"></div>

      {/* NAVIGATION */}
      <nav className="px-[12%] py-4">
        <div className="flex items-center justify-center gap-10 ml-51">

          {/* LEFT MENU */}
          <div className="flex gap-8 font-medium">
            <a href="#" className="hover:text-blue-400">Nos destinations</a>
            <a href="#" className="hover:text-blue-400">Idées & inspirations</a>
          </div>

          {/* LOGO */}
          <div className="flex flex-col items-center px-6">
            <img src={logoImage} alt="logo" className="h-10" />
            <span className="text-xs tracking-widest">
              Dé tours Madagascar
            </span>
          </div>

          {/* RIGHT MENU */}
          <div className="flex items-center gap-8 font-medium">
            <a href="#" className="hover:text-blue-400">Nos croisières</a>
            <a href="#" className="hover:text-blue-400">Qui sommes-nous ?</a>

            <button className="bg-[#5b6fcf] px-5 py-2 rounded-md font-semibold hover:bg-[#4659b8]">
              Concevez votre voyage
            </button>
          </div>

        </div>
      </nav>

    </header>
  );
};

export default Header;