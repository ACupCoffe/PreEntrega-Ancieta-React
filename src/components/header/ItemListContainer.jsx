import "../../styles/containerCart.css";
import close from "../../img/close.svg";
import ItemCart from "./ItemCart";
import clear from "../../img/clear.svg";
import { useContext } from "react";
import { controllerShowCart } from "./ContextCart";
import { listCartContext } from "../componentes_item/InformationCarrito";
import { Link } from "react-router-dom";

const ContainerCart = () => {
  const { cartShow, setCartShow } = useContext(controllerShowCart);
  const { listCart, ClearCart } = useContext(listCartContext);

  const style = {
    display: cartShow,
  };

  const closeCart = () => {
    setCartShow(cartShow === "none" ? "flex" : "none");
  };

  const finalizarCompra = () => {
    if (listCart.length === 0) {
      return;
    }

    closeCart();
  };

  return (
    <div className="cart" style={style}>
      <div className="cerrar">
        <button className="close" onClick={closeCart}>
          <img src={close}></img>
        </button>
      </div>
      <div className="containerItemsCart">
        {listCart.length === 0 ? (
          <span className="emptyCart">Tu carrito esta vacio, ¡llenalo!</span>
        ) : (
          listCart.map(producto => (
            <ItemCart
              key={producto.id}
              id={producto.id}
              title={producto.title}
              image={producto.imageProduct.firtsImage}
              quantity={producto.quantity}
              price={producto.price}
            />
          ))
        )}

        <div className="TerminarCompra">
          <button className="terminar" onClick={finalizarCompra}>
            <Link className="terminar_compra_button" to="/brief">
              Terminar compra
            </Link>
          </button>

          <button className="clear" onClick={ClearCart}>
            <img src={clear}></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContainerCart;
