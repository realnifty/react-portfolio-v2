import Header from './components/Header';
import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';
import About from './components/About';
import Skills from './components/Skills'
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <main id="home" className="md:px-20 lg:px-96">
        <Header/>
        <Nav />
        <Jumbotron />
        <About />
        <Skills />
        <Projects />
        <Contact/>
      </main>
    </>
  );
}

export default App;
