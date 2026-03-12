import { ChevronRight, ChevronLeft } from "lucide-react"
import { circuits } from "../data/circuits"
import CircuitCard from "./CircuitCard"
import { useRef } from "react"

const CircuitSection = () => {

  const sliderRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -400,
      behavior: "smooth"
    })
  }

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 400,
      behavior: "smooth"
    })
  }

  return (
    <section className="bg-[#f5f5f5] pt-10 pb-24">

      <div className="max-w-[1200px] mx-auto px-6 relative">

        {/* TITLE */}
        <h2 className="text-[40px] font-serif mb-3">
          Nos idées de séjours
        </h2>

        {/* FILTERS */}
        <div className="flex gap-3 mb-8">

          <button className="px-6 py-2 bg-[#3f3f3f] text-white rounded-full text-[16px]">
            Voyage au printemps
          </button>

          <button className="px-6 py-2 border rounded-full text-[16px]">
            Voyage en été
          </button>

          <button className="px-6 py-2 border rounded-full text-[16px]">
            Voyage en famille
          </button>

        </div>

        {/* SLIDER */}
        <div
          ref={sliderRef}
          className="flex gap-3 overflow-x-auto overflow-y-hidden scrollbar-hide snap-x snap-mandatory scroll-smooth"
        >
          {circuits.map((circuit) => (
            <CircuitCard key={circuit.id} circuit={circuit} />
          ))}
        </div>

        {/* ARROW */}
        {/* LEFT ARROW */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-[50%] -translate-y-1/2 bg-white shadow-lg rounded-full p-3 z-10"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-[50%] translate-y-[-50%] bg-white shadow-lg rounded-full p-3"
        >
          <ChevronRight size={20} />
        </button>

      </div>
    </section>
  )
}

export default CircuitSection