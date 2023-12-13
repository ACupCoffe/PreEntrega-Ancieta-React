import { Link } from "react-router-dom";

const ItemListContainer = props => {
  return (
    <ul>
      <li style={{ color: "white" }}>
        <Link to="category/procesador">{props.opc_uno}</Link>
      </li>

      <li>
        <Link to="category/placa madre">{props.opc_dos}</Link>
      </li>

      <li>
        <Link to="category/fuente">{props.opc_tres}</Link>
      </li>

      <li>
        <Link to="category/placa de video">{props.opc_cuatro}</Link>
      </li>
    </ul>
  );
};

export default ItemListContainer;
