import brand from "../../img/logo.png";
import { Link } from "react-router-dom";

const Brand = () => {
  return (
    <Link to="/">
      <img src={brand} alt="Computer Shop" title="Computer Shop"></img>
    </Link>
  );
};

export default Brand;
