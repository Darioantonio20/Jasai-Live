


import React, { useState, useEffect } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import NavBar from "../components/atoms/NavBar";
import IconoBlancoBoleto from "../assets/img/formaboletoBlanco.svg";
import imgBoleto from "../assets/img/conciertoBoleto.jpeg";
import "../assets/styles/Progress.css";

const ProductListPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      axios.get('http://localhost:5001/api/products')
        .then((response) => {
          setProducts(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching products:', error);
          setIsLoading(false);
        });
    }, 1000);
  }, []);

  const addToCart = (product) => {
    const isProductInCart = cart.some((item) => item.id === product.id);
    
    if (isProductInCart) {
      Swal.fire({
        icon: 'warning',
        title: 'Producto duplicado',
        text: 'Este boleto ya está en tu carrito.',
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      axios.post('http://localhost:5001/api/add-to-cart', product)
        .then((response) => {
          Swal.fire({
            icon: 'success',
            title: 'Agregado al carrito',
            text: 'El boleto se ha añadido correctamente a tu carrito.',
            showConfirmButton: false,
            timer: 2000,
          });
          setCart([...cart, product]);
          console.log(response.data.message);
        })
        .catch((error) => {
          console.error('Error adding to cart:', error);
        });
    }
  };

  if (isLoading) {
    return (
      <div className="row d-flex justify-content-center">
        <div className="containercito">
          <div className="loadercito"></div>
          <div className="loadercito"></div>
          <div className="loadercito"></div>
        </div>
        <div className="col-10 text-center">
          <div className="loader">
            <div></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <NavBar />
      <div className="ProductListPage">
        <div className="products">
          {products.map((product) => (
            <div key={product.id} className="row d-flex mt-3 mb-3">
              <div className="col-sm-12 col-md-6 col-xl-6 d-flex justify-content-md-end justify-content-sm-center">
                <div className="col-sm-12 col-md-6 col-xl-6 colorBoleto">
                  <div>
                    <div className="d-flex justify-content-between">
                      <img src={IconoBlancoBoleto} alt="Icono Boleto" />
                      <div className="text-center m-5">
                        <div className="text-light text-center fs-5">
                          <p>{product.lugar}</p>
                        </div>
                        <div className="barraBlanca">-</div>
                        <div className="text-light text-center fs-1">
                          <p>{product.nombreEvento}</p>
                        </div>
                        <div className="barraBlancaGrande">-</div>
                        <div className="d-flex justify-content-around text-light text-center">
                          <div className="fs-2">Lugar:</div>
                          <div className="fs-5 w-50">
                            <p>{product.direccion}</p>
                          </div>
                        </div>
                        <div className="barraBlanca">-</div>
                        <div className="d-flex justify-content-around text-light text-center">
                          <div className="fs-2">Fecha:</div>
                          <div className="fs-5"><p>{product.fecha}</p></div>
                        </div>
                        <div className="barraBlanca">-</div>
                        <div className="d-flex justify-content-around text-light text-center">
                          <div className="fs-2">Hora:</div>
                          <div className="fs-5"><p>{product.hora}</p></div>
                        </div>
                        <div className="barraBlanca">-</div>
                        <div className="barraBlancaGrande">-</div>
                        <button type="submit" className="btnVerMas mb-4 mt-4" onClick={() => addToCart(product)}>
                          Comprar boleto
                        </button>
                      </div>
                      <img
                        className="rotaciónBoleto"
                        src={IconoBlancoBoleto}
                        alt="Icono Boleto"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-xl-6 d-flex justify-content-md-start justify-content-sm-center">
                <div className="col-sm-12 col-md-6 col-xl-6 colorBoleto">
                  <div>
                    <div className="d-flex justify-content-between">
                      <img src={IconoBlancoBoleto} alt="Icono Boleto" />
                      <img className="img-fluid text-center" src={imgBoleto} alt="Boleto" />
                      <img
                        className="rotaciónBoleto"
                        src={IconoBlancoBoleto}
                        alt="Icono Boleto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductListPage;
