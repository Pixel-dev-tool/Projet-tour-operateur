import { Search, Sparkles } from 'lucide-react';
import backgroundImage from '../../../assets/images/vg.jpg';


const HeroSection = () => {
  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* 1. IMAGE DE FOND ET OVERLAY */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center overflow-hidden h-[80vh]"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transform: 'scale(1.03)'
        }}
      >
        <div className="absolute inset-0 bg-black/25 backdrop-blur-[0.5px]"></div>
      </div>

      {/* 4. CONTENU CENTRAL (Héro) - Texts alignés et hiérarchisés */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full translate-y-4 px-4 text-center w-full space-y-6">
        {/* Subtitle - XS + tight */}
        <p className="text-xs md:text-sm text-white font-light -translate-y-10 tracking-[0.15em] mb-0 opacity-95 uppercase leading-tight">
          Explorer Madagascar autrement
        </p>

        {/* Title - hiérarchie claire */}
        <h1 className="text-4xl md:text-5xl lg:text-5xl text-white -translate-y-5 font-ivy leading-[1.15] w-full max-w-[700px] mx-auto tracking-tight">
          Faisons le <span className="font-black not-italic text-[#f8f9ff]">voyage</span> ensemble
        </h1>

        {/* Search Bar */}
        <div className="flex w-full max-w-[570px] bg-white -translate-y-5 rounded-[6px] shadow-2xl overflow-hidden p-1 border border-white/20">
          <input
            type="text"
            placeholder="Antananarivo, Antsiarabe, Nosy Be..."
            className="flex-grow px-6 py-5.5 text-base text-gray-800 font-medium bg-transparent outline-none placeholder-gray-500 leading-normal"
          />
          <button className="bg-[#4f6cbb] text-white px-8 py-3.5 rounded-[5px] font-bold flex items-center gap-2 hover:bg-[#3d5696] transition-all text-sm hover:scale-[1.02]">
            Explorer <Search size={18} />
          </button>
        </div>

        {/* Inspiration section - alignée */}
        <div className="flex flex-col items-center gap-3 w-full max-w-[550px]">
          <p className="text-xs md:text-sm -translate-y-2 text-white font-light uppercase tracking-[0.25em] opacity-90 leading-tight">
            Besoin d'inspiration ?
          </p>
          <div className="flex flex-wrap justify-center gap-2 w-full">
            {['Antananarivo', 'Antsirabe', 'Toamasina', 'Fianarantsoa', 'Antsiranana', 'Nosy Be'].map(item => (
              <button
                key={item}
                className="px-6 py-3 bg-white text-gray-900 rounded-full font-lightmedium text-base shadow-md hover:scale-105 transition-transform hover:shadow-lg whitespace-nowrap leading-tight"
              >
                {item}
              </button>
            ))}
            <button className="px-6 py-3 bg-[#4f6cbb] text-white rounded-full font-lightmedium text-base flex items-center gap-1.5 shadow-md hover:scale-105 transition-transform hover:shadow-lg whitespace-nowrap leading-tight">
              Inspirez-moi <Sparkles size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
