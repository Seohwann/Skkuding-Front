import './App.css';
import Detail from './components/PokemonDetail';
import List from './components/PokemonList';
import Title from './components/PokemonTitle';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Title />
        <Routes>
          <Route path="/" element={<List />}>
          </Route>
          <Route path="/detail/:id" element={<Detail />}>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
