import Brand from "./Brand";
import ItemListContainer from "./ItemList";
import CartWidget from "./CartWidget";
import ContainerCart from "./ItemListContainer";
import ContextCart from "./ContextCart";

const NavBar = () => {
  return (
    <ContextCart>
      <header>
        <div className="containerBrand">
          <Brand />
        </div>

        <nav className="containerItemList">
          <ItemListContainer
            opc_uno="Procesadores"
            opc_dos="Motherboards"
            opc_tres="Fuentes"
            opc_cuatro="Placas de video"
          />
        </nav>

        <div className="containerCart">
          <CartWidget />
        </div>

        <ContainerCart />
      </header>
    </ContextCart>
  );
};

export default NavBar;
