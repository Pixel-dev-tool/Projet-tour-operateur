import HeroSection from "../components/sections/Home/HeroSection";
import CircuitSection from "../features/circuit/components/CircuitSection";
import GuideSection from "../components/GuideSection";
function Home() {
  return (
    <section className="relative ">  {/* ← AJOUTE h-screen ICI */}
       <HeroSection/>
       <CircuitSection />
       <GuideSection />
    </section>
  );
}

export default Home;
