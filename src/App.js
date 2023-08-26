import Intro from "./components/Navbar/Into/Intro";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/contacts/Contact";
import Footer from "./components/footer/Footer";
import Skills from "./components/skills/Skills";
import Works from "./components/works/Works";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
