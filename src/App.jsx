import Navbar from "./components/Navbar/Navbar";

import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";
import Experience from "./sections/Experience/Experience";
import Education from "./sections/Education/Education";
import Contact from "./sections/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

        <Projects />

        <Experience />

        <Education />

        <Contact />
      </main>
    </>
  );
}

export default App;
