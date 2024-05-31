import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, onAdd }) => {
  //stock= PROP :: cantidad máxima de items
  const [contador, setContador] = useState(1);
  const [itemStock, setItemStock] = useState(stock);
  const [visible, setVisible] = useState(true);

  const sumar = () => {
    if (contador < itemStock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const addToCart = () => {
    if (contador <= itemStock) {
      setItemStock(itemStock - contador);
      onAdd(contador);
      setVisible(false);
      setContador(1);
    }
  };

  useEffect(() => {
    setItemStock(stock);
  }, [stock]);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="btn-group">
            <button type="button" className="btn btn-primary" onClick={restar}>
              {" "}
              -{" "}
            </button>
            <button type="button" className="btn btn-primary">
              {" "}
              {contador}{" "}
            </button>
            <button type="button" className="btn btn-primary" onClick={sumar}>
              {" "}
              +{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="row my-1">
        <div className="col">
          {visible ? (
            <button
              type="button"
              className="btn btn-primary"
              onClick={addToCart}
            >
              Agregar al carrito
            </button>
          ) : (
            <Link to={"/cart"} className="btn btn-primary">
              Finalizar compra
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
