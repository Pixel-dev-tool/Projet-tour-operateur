import { ChevronRight } from "lucide-react"

type MegaMenuProps = {
  activeKey?: string  // gardé pour compatibilité avec Header.tsx
  title: string
  description: string
  button: string
  items: {
    title: string
    image: string
  }[]
}

export default function MegaMenu({
  title,
  description,
  button,
  items,
}: MegaMenuProps) {
  return (
    <div
      className="absolute left-0 top-full w-full bg-white shadow-lg py-10 z-40"
      style={{ animation: "megaFadeIn 150ms ease-out both" }}
    >
      <style>{`@keyframes megaFadeIn { from { opacity: 0 } to { opacity: 1 } }`}</style>

      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-10">

        {/* LEFT */}
        <div className="col-span-3">
          <p className="text-blue-600 mb-2 cursor-pointer flex items-center gap-1">
            <ChevronRight size={18} className="rotate-180" />
            Retour
          </p>
          <h2 className="text-3xl font-serif mb-4">{title}</h2>
          <p className="text-gray-600 mb-6">{description}</p>
          <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition">
            {button}
          </button>
        </div>

        {/* RIGHT — grille de cartes */}
        <div className="col-span-9 grid grid-cols-4 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="relative cursor-pointer group overflow-hidden rounded"
              style={{ height: "160px" }}
            >
              {/* Image en position absolute pour couvrir 100% de la carte */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />

              {/* Dégradé sombre + texte & icône en bas */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end justify-between px-3 py-2">
                <span className="text-white text-sm font-semibold leading-tight">
                  {item.title}
                </span>
                <ChevronRight size={20} className="text-white flex-shrink-0 ml-1" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}