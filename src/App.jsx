import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Bienvenido from './Bienvenido';
import ListadoProductos from './ListadoProductos';
import PokemonDetalle from './PokemonDetalle';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Bienvenido />} /> 
            <Route path="/productos" element={<ListadoProductos />} /> 
            <Route path="/detalle-pokemon" element={<PokemonDetalle />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
