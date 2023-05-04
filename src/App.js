import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import PokemonList from './Components/PokemonList';
import Pokemon from './Components/Pokemon';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link  to="/" className="nav-link" href="#">Home  </Link>
      </li>
      <li class="nav-item">
        <Link to="/about" className="nav-link" href="#">About</Link>
      </li>
      <li class="nav-item">
        <Link to="/PokemonList" className="nav-link" href="#">Pokemon List</Link>
      </li>
      <li class="nav-item">
        <Link to="/pokemon/" className="nav-link" href="#">Pokemon</Link>
      </li>
    
    </ul>
  </div>
</nav>
      
      <Routes>
        <Route   path="/PokemonList" element={<PokemonList />} />
        <Route   path="/about/:name/:lastName" element={<About />} />
        <Route   path="/pokemon/:pokemonName" element={<Pokemon />} />
        <Route   path="/about" element={<About />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
