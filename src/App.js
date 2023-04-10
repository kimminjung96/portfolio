import "./App.css";
import Header from "./common/Header";
import About from "./component/About";
import Contact from "./component/Contact";
import Main from "./component/Main";
import Projects from "./component/Projects";
import Skills from "./component/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
