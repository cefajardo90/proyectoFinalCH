import cart from "../assets/images/cart.svg"

const CartWidget = () => {
    return (
      <>
        <button type="button" className="btn btn-light">
          <img src={cart} alt="Compras"width={25}></img> <span className="badge text-bg-secondary">2</span>
        </button>
      </>
    );
  };
  
  export default CartWidget;