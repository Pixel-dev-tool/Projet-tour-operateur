import { ChevronRight } from "lucide-react";

export default function MegaMenu({ title, description, button, items }: any) {
  return (
    <div className="absolute left-0 top-full w-full bg-white py-10 z-40 border-t border-gray-100 shadow-2xl overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-10 px-8 transition-opacity duration-75">
        <div className="col-span-3 animate-in fade-in slide-in-from-left-2 duration-150">
          <h2 className="text-3xl font-serif mb-4">{title}</h2>
          <p className="text-gray-600 mb-6 text-sm">{description}</p>
          <button className="border border-blue-500 text-blue-600 px-5 py-2 rounded hover:bg-blue-600 hover:text-white transition-all">
            {button}
          </button>
        </div>

        <div className="col-span-9 grid grid-cols-4 gap-4">
          {items.map((item: any, i: number) => (
            <div key={i} className="relative h-[160px] group overflow-hidden rounded-lg bg-gray-200">
              <img
                src={item.image}
                alt={item.title}
                // CRITIQUE : eager + fetchPriority pour un affichage instantané
                loading="eager"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                <span className="text-white text-sm font-bold">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}