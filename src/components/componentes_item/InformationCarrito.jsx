import { useState, createContext } from "react";
import productos from "../../utils/products";

export const listCartContext = createContext(null);

const InformationCarrito = ({ children }) => {
  const [listCart, setListCart] = useState([]);
  const [addedProducts, setAddedProducts] = useState([]);

  const addProduct = id => {
    // Producto a añadir al carrito
    const productToAdd = productos.find(product => product.id === id);

    // Productos que se mantendrán en el carrito
    const productsToMaintain = listCart.filter(product => product.id !== id);

    let add = true;
    for (let product of listCart) {
      if (product.id === id) {
        let quantity = product.quantity;

        if (quantity < productToAdd.stock) {
          const newQuantity = { ...product, quantity: quantity + 1 };
          setListCart([...productsToMaintain, newQuantity]);
          setAddedProducts([...addedProducts, newQuantity]); // Actualizar la variable de productos agregados
        }

        add = false;
        break;
      }
    }

    if (add) {
      setListCart([...productsToMaintain, { ...productToAdd, quantity: 1 }]);
      setAddedProducts([...addedProducts, { ...productToAdd, quantity: 1 }]);
    }
  };

  const clearCart = () => {
    setListCart([]);
    setAddedProducts([]); // Limpiar la variable de productos agregados
  };

  const removeFromCart = id => {
    const updateList = listCart.filter(product => product.id !== id);
    setListCart(updateList);

    const updateAddedProducts = addedProducts.filter(
      product => product.id !== id
    );
    setAddedProducts(updateAddedProducts);
  };

  return (
    <listCartContext.Provider
      value={{ removeFromCart, listCart, addProduct, clearCart, addedProducts }}
    >
      {children}
    </listCartContext.Provider>
  );
};

export default InformationCarrito;
