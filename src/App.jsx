import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Terminal from "./components/Terminal";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-ink font-sans text-text">
      <Nav />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Terminal />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
