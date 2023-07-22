import Experience from "./components/Experience";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";

export default function Home() {
    return (
        <div className="max-w-5xl px-4 mx-auto">
            <HeroSection />
            <Experience />
            <Skills />
        </div>
    );
}
