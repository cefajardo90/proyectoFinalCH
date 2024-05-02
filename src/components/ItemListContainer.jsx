import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import arrayProducts from "./catalog/products.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(id ? arrayProducts.filter(item => item.categoria == id) : arrayProducts);
      }, 2000);
    });
    promesa.then((respuesta) => {
      setItems(respuesta);
    });
  }, [id]);

  return (
    <div className="container py-5">
      <div className="row">
        <ItemList items={items} />
      </div>
    </div>
  );
};

export default ItemListContainer;
