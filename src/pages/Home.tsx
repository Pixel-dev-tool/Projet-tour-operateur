import HeroSection from "../components/sections/Home/HeroSection";
import CircuitSection from "../features/circuit/components/CircuitSection";

function Home() {
  return (
    <section className="relative ">  {/* ← AJOUTE h-screen ICI */}
       <HeroSection/>
       <CircuitSection />
    </section>
  );
}

export default Home;
