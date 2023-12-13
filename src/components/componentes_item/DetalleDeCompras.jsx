import "../../styles/detallesCompra.css";
import React, { useContext, useState } from "react";
import { listCartContext } from "../componentes_item/InformationCarrito";
import Swal from "sweetalert2";

const Brief = () => {
  const { addedProducts, clearCart } = useContext(listCartContext);

  const calcularTotalPagar = () => {
    return addedProducts.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    direccion: "",
    mensaje: "",
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRealizarCompraClick = () => {
    if (
      formData.nombre.trim() === "" ||
      formData.email.trim() === "" ||
      formData.direccion.trim() === "" ||
      addedProducts.length === 0
    ) {
      Swal.fire({
        title: "Error",
        text: "Completa el formulario y asegúrate de tener productos en el carrito",
        icon: "error",
        confirmButtonText: "OK",
      });
    } else {
      Swal.fire({
        title: "¡Compra realizada!",
        text: "Nos comunicaremos contigo enseguida",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        clearCart();

        window.location.href = "/";
      });
    }
  };

  return (
    <div className="check_out">
      <h2 className="title-finalizar">Resumen de Compra</h2>
      <div className="product-listado">
        {addedProducts.length > 0 ? (
          <ul className="resumen-productos">
            {addedProducts.map(product => (
              <li className="producto-detail" key={product.id}>
                <div className="producto-info">
                  <span className="producto-title">{product.title}</span>
                  <span className="producto-quantity">
                    Cantidad: {product.quantity}
                  </span>
                  <span className="producto-quantity">
                    Cantidad: {product.price * product.quantity}
                  </span>
                </div>
                <img
                  className="producto-imagen"
                  src={product.imageProduct.firtsImage}
                  alt="imagen-producto"
                />
              </li>
            ))}
            <div className="total-pagar">
              <p className="total-pagar">
                Total a Pagar: ${calcularTotalPagar()}
              </p>
            </div>
          </ul>
        ) : (
          <p>No hay productos en el carrito.</p>
        )}

        <div className="formulario-finalizar">
          <form action="/procesar-compra" method="post">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="direccion">Dirección de Envío:</label>
            <input
              type="text"
              id="direccion"
              name="direccion"
              value={formData.direccion}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="mensaje">Mensaje:</label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="4"
              value={formData.mensaje}
              onChange={handleInputChange}
            ></textarea>

            <button type="button" onClick={handleRealizarCompraClick}>
              Realizar Compra
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Brief;
