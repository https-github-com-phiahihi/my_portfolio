import { useEffect } from "react";
import { Element } from "react-scroll";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Technologies from "./pages/Technologies";
function App() {

  // Hàm xử lý cuộn đến phần cụ thể
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  // Sử dụng useEffect để cuộn đến phần cụ thể khi component được tải
  useEffect(() => {
    scrollToSection('home_page'); // Cuộn đến Phần 1 khi component được tải
  }, []);

  return (
    <div>
      <Header />
      <Element name="home_page" className="element" >
        <Home />
      </Element>
      <Element name="about_page" className="element" >
        <About />
      </Element>
      <Element name="technologies_page" className="element" >
        <Technologies />
      </Element>
      <Element name="projects_page" className="element" >
        <Projects />
      </Element>
      <Element name="contact_page" className="element" >
        <Contact />
      </Element>
      <Footer />
    </div>
  );
}
export default App;