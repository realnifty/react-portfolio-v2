import Nav from './components/Nav'
import Jumbotron from './components/Jumbotron';
import About from './components/About';
import Skills from './components/Skills'
import Projects from './components/Projects';

function App() {
  return (
    <>
      <main className="">
        <Nav />
        <Jumbotron />
        <About />
        <Skills />
        <Projects />
      </main>
    </>
  );
}

export default App;
