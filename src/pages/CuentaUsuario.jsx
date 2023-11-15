import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from "../components/atoms/NavBar";

function CuentaUsuario() {
  const [cart, setCart] = useState([]);
  const [tableItems, setTableItems] = useState([]);

  useEffect(() => {
    // Obtiene los productos del carrito al cargar la página
    axios.get('http://localhost:5000/api/cart')
      .then((response) => {
        setCart(response.data);
      })
      .catch((error) => {
        console.error('Error fetching cart items:', error);
      });
  }, []);

  useEffect(() => {
    // Actualiza la tabla cuando se agrega un nuevo item al carrito
    setTableItems(cart);
  }, [cart]);

  return (
    <>
      <NavBar />
      <div className='container mt-5'>
        <div className="card text-center">
          <div className="card-header">
            Mi carrito
          </div>
          <div className="card-body">
            <h1 className="card-title">Carrito</h1>
            <div className="cart">
              {tableItems.map((item, index) => (
                <p key={index}>{item.id}{" " + item.nombreEvento}</p>
              ))}
            </div>
          </div>
          <div className="card-footer text-body-secondary">
            Jasai-Live
          </div>
        </div>
        <div className="table-responsive mt-4">
         
        </div>
      </div>
    </>
  );
}

export default CuentaUsuario;