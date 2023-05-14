import './App.css';
import { NavBar } from './components/naviBar';
import { AboutMe } from './components/AboutMe';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <AboutMe />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
