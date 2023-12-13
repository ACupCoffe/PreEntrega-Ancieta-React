import { useContext } from "react";
import { listCartContext } from "./InformationCarrito";

const ButtonAddCart = ({ id, svg }) => {
  let { addProduct } = useContext(listCartContext);

  const handlerClick = () => {
    addProduct(id);
  };

  return (
    <button id="addCart" onClick={handlerClick}>
      <img src={svg} alt="add"></img>
    </button>
  );
};

export default ButtonAddCart;
