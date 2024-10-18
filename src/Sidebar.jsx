import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Navegación</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/productos">Listado de Productos</Link></li>
        <li><Link to="/detalle-pokemon">Detalle de pokemon</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
