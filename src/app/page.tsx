"use client";
import { useEffect, useRef, useState } from "react";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Head from "./head";
import Footer from "./components/Footer";

export default function Home() {
    const [buttonsVisible, setButtonsVisible] = useState(true);
    const buttonsRef = useRef(null);

    useEffect(() => {
        if (!buttonsRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setButtonsVisible(entry.isIntersecting);
            },
            { threshold: 1, rootMargin: "-19px 0px 0px 0px" } // triggers when buttons begin to leave screen
        );

        observer.observe(buttonsRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div className="mx-auto">
            <Head />
            <Navbar showButtons={!buttonsVisible} />
            <HeroSection buttonsRef={buttonsRef} />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}
