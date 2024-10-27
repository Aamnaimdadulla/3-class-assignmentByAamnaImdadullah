import HeroSection from "./components/HeroSection"
import { NavBar } from "./components/NavBar";
import { SkillsSection } from "./components/SkillsSection";
import { Footer } from "./components/Footer";


export default function Home(){
  return(
    <main className="flex min-h-screen flex-col bg-pink-200">
      <NavBar />
    <HeroSection />
    <SkillsSection />
    <Footer />
    
</main>

    
  );
};



