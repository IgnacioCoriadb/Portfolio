import './App.css';
import Header from './Components/Header/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import { Element } from "react-scroll";
import AboutMe from './Components/About me/About';
import Technologies from './Components/Technologies/Technologies';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Element name="home" className="element">
          <Header />
      </Element>
      <Element name="about" className="element">
        <h1>Sobre Mi</h1>
      </Element>
      <AboutMe/>
      <Element name="technologies" className="element">
          <h1>Tecnologías</h1>
      </Element>
      <Technologies/>
      <Element name="projects" className="element">
        <h1>Proyectos</h1>
      </Element>
      <Projects></Projects>
      <Element name="contact" className="element">
        <h1>Contacto</h1>
      </Element>
      <Contact></Contact>
      <Footer></Footer>


      </header>
    </div>
  );
}

export default App;
