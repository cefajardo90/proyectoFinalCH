import { useEffect, useState } from "react";
import arrayProducts from "./catalog/products.json";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        const producto = arrayProducts.find(item => item.id == id )
        resolve(producto);
      }, 2000);
    });
    promesa.then((respuesta) => {
      setItem(respuesta);
    });
  }, [id]);

  return (
    <div className="container py-5">
      <div className="row">
        <ItemDetail item={item} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
