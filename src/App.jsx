import Navbar from "./components/Navbar/Navbar";

import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

        <Projects />

        {/* Experience */}
        {/* Education */}
        {/* Contact */}
      </main>
    </>
  );
}

export default App;
