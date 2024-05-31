import { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";

const ItemDetail = ({item}) => {
  const {addItem} = useContext(CartContext);

const onAdd = (quantity) => {
  addItem(item, quantity);
  console.log("Agregaste "+quantity+" productos.");
}

  return <div className="container">
    <div className="row">
        <div className="col-md-5 offset-md-2">
            <img src={item.imagen} className="img-fluid" alt={item.nombre} />
        </div>
        <div className="col-md-4">
        <h1 className="display-6 text-uppercase">{item.nombre}</h1>
          <p className="card-text">
            <b>${item.precio}</b>
          </p>
          <p className="card-text">{item.descripcion}</p>
          <ItemCount stock={item.stock} onAdd={onAdd} />
        </div>
    </div>
  </div>;
};

export default ItemDetail;
