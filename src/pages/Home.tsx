import HeroSection from "../components/sections/Home/HeroSection";
import CircuitSection from "../features/circuit/components/CircuitSection";
import GuideSection from "../components/GuideSection";
import ExpertiseSection from "@/components/sections/Home/ExpertiseSection"
function Home() {
  return (
    <section className="relative ">  {/* ← AJOUTE h-screen ICI */}
       <HeroSection/>
       <CircuitSection />
       <GuideSection />
       <ExpertiseSection />
    </section>
  );
}

export default Home;
