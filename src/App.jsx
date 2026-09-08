import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";



function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills/>
      <Resume />
      <Contact/>
      <Footer/>
      
    </>
  );
}

export default App;