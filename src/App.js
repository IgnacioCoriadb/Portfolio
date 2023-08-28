import './App.css';
import Header from './Components/Header/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import { Element } from "react-scroll";
import AboutMe from './Components/About me/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Element name="home" className="element">
          <Header />
      </Element>
      <AboutMe></AboutMe>
      </header>
    </div>
  );
}

export default App;
