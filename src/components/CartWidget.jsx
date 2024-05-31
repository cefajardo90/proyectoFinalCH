import { Link } from "react-router-dom";
import cart from "../assets/images/cart.svg";
import { CartContext } from "./context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
const {getCountProducts} = useContext(CartContext);

  return (
    <>
      <Link to={"/cart"} className="btn btn-light">
        <img src={cart} alt="Compras" width={25}></img>{" "}
        <span className="badge text-bg-secondary">{getCountProducts()}</span>
      </Link>
    </>
  );
};

export default CartWidget;
