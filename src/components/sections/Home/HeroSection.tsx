import { Search, Sparkles } from 'lucide-react';
import backgroundImage from '../../../assets/images/vg.jpg';

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] overflow-hidden ">
      {/* 1. IMAGE DE FOND ET OVERLAY */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center overflow-hidden h-[90vh]"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transform: 'scale(1.03)'
        }}
      >
        <div className="absolute inset-0 bg-black/25 backdrop-blur-[0.5px]"></div>
      </div>

      {/* 4. CONTENU CENTRAL (Héro) - Parfaitement adapté Madagascar */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full -translate-y-20 px-6 text-center w-full">
        <p className="text-[14px] text-white font-light tracking-[0.12em] mb-3 opacity-95 uppercase mt-12 md:mt-16">Explorer Madagascar autrement</p>

        <h1 className="text-[52px] text-white md:text-[62px] font-['Playfair_Display'] italic mb-10 leading-[1.15] w-full max-w-[800px] mx-auto">
          Faisons le <span className="font-black not-italic text-[#f8f9ff]">voyage</span> ensemble
        </h1>

        <div className="flex w-full max-w-[580px] bg-white rounded-[6px] shadow-2xl overflow-hidden p-1 mb-10 border border-white/20">
          <input
            type="text"
            placeholder="Antananarivo, Antsiarabe, Nosy Be..."
            className="flex-grow px-6 py-3.5 text-gray-800 text-[16px] font-medium bg-transparent outline-none placeholder-gray-500"
          />
          <button className="bg-[#4f6cbb] text-white px-8 py-3.5 rounded-[5px] font-bold flex items-center gap-2 hover:bg-[#3d5696] transition-all text-[15px] hover:scale-[1.02]">
            Explorer <Search size={18} />
          </button>
        </div>

        <div className="flex flex-col items-center gap-4 w-full max-w-[600px]">
          <p className="text-[12.5px] text-white font-semibold uppercase tracking-[0.2em] opacity-90">Besoin d'inspiration ?</p>
          <div className="flex flex-wrap justify-center gap-2.5 w-full">
            {['Antananarivo', 'Antsirabe', 'Toamasina', 'Fianarantsoa', 'Antsiranana', 'Nosy Be'].map(item => (
              <button key={item} className="px-5 py-2.5 bg-white text-gray-900 rounded-full font-bold text-[12.5px] shadow-md hover:scale-105 transition-transform hover:shadow-lg whitespace-nowrap">
                {item}
              </button>
            ))}
            <button className="px-5 py-2.5 bg-[#4f6cbb] text-white rounded-full font-bold text-[12.5px] flex items-center gap-1.5 shadow-md hover:scale-105 transition-transform hover:shadow-lg whitespace-nowrap">
              Inspirez-moi <Sparkles size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
