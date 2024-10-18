import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ListadoProductos.css'; 

const ListadoProductos = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          'https://api.mercadolibre.com/sites/MLA/search?q=playstation'
        );
        setProducts(response.data.results);
      } catch (error) {
        console.error('Error MercadoLibre API:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      <h1>Listado de Productos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <div className="product-container">
              <div className="product-image">
                <img src={product.thumbnail} alt={product.title} />
              </div>
              <div className="product-details">
                <h2>{product.title}</h2>
                <p>
                  La consola es marca <b>{product.attributes.find(attr => attr.id === 'BRAND')?.value_name || 'No disponible'}</b>,
                  modelo <b>{product.attributes.find(attr => attr.id === 'MODEL')?.value_name || 'No disponible'} </b>
                  de color <b>{product.attributes.find(attr => attr.id === 'COLOR')?.value_name || 'No disponible'} </b>
                  con un peso aproximado de <b>{product.attributes.find(attr => attr.id === 'WEIGHT')?.value_name || 'No disponible'} </b>
                  y su condición es <b>{product.condition === 'new' ? 'Nuevo' : 'Usado'}</b>.
                </p>
                <p><b>Precio: </b>${product.price}</p>
                <button className="product-button">Ver Detalle</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListadoProductos;
