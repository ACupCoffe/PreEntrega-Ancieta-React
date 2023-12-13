import "./style.css";
import NavBar from "./components/header/NavBar";
import ContainerCardItems from "./components/componentes_item/ContainerCardItems";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsItem from "./components/componentes_item/ItemDetail";
import { createContext, useState } from "react";
import ProviderContextoListCart from "./components/componentes_item/InformationCarrito";
import DetalleCompras from "./components/componentes_item/DetalleDeCompras"; // Importa el componente Brief

function App() {
  return (
    <ProviderContextoListCart>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ContainerCardItems />} />
          <Route path="/item/:idItem" element={<DetailsItem />} />
          <Route
            path="/category/:idCategory"
            element={<ContainerCardItems />}
          />
          <Route path="/brief" element={<DetalleCompras />} />
        </Routes>
      </BrowserRouter>
    </ProviderContextoListCart>
  );
}

export default App;
