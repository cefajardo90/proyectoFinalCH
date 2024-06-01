import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import trash from "../assets/images/trash.svg";

const Cart = () => {
  const { cart, removeItem, clear, getCountProducts, getTotalPrice } =
    useContext(CartContext);

  if (getCountProducts() == 0) {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col">
            <div className="alert alert-danger d-flex-center" role="alert">
              <h3>No hay productos agregados en este momento</h3>
              <Link to={"/"} className="btn text-white bg-dark my-5 rounded-0">
                Volver a página principal
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col">
          <table className="table">
            <tbody>
            <tr>
                <td className="text-end" colSpan={6}>
                  <button className="btn text-white bg-dark rounded-0"    onClick={clear}              >
                    Vaciar carrito
                  </button>
                </td>
              </tr>
              {cart.map((item) => (
                <tr key={item.itemId}>
                  <td>
                    <img src={item.imagen} alt={item.nombre} width={120} />
                  </td>
                  <td className="align-middle text-center">{item.nombre}</td>
                  <td className="align-middle text-center">${item.precio}</td>
                  <td className="align-middle text-center">x{item.quantity}</td>
                  <td className="align-middle text-center">${item.quantity * item.precio}</td>
                  <td className="align-middle text-end">
                    <img src={trash} title="Borrar producto" alt="Borrar producto" width={32} 
                        onClick={() => {removeItem(item.itemId)}}/>
                  </td>
                </tr>
              ))}
              <tr>
                <td className="text-end" colSpan={4}>
                  <b>TOTAL:</b>
                </td>
                <td>
                  <b>${getTotalPrice()}</b>
                </td>
                <td className="text-end">
                  <Link
                    to={"/checkout"}
                    className="btn text-white bg-dark rounded-0"
                  >
                    Checkout
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
