import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Home.js';
import Projects from './Projects.js';
import Art from './Art.js';
import AboutMe from './AboutMe.js';
import Contact from './Contact.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/AboutMe' element = {<AboutMe />} />
        <Route path = '/Contact' element = {<Contact />} />
        <Route path = '/Projects' element = {<Projects />} />
        <Route path = '/Art' element = {<Art />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
