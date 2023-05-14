import './App.css';
import { NavBar } from './components/naviBar';
import { AboutMe } from './components/AboutMe';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <AboutMe />
    </div>
  );
}

export default App;
