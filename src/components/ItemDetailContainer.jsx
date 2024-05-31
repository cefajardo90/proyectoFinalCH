import { useEffect, useState } from "react";
import arrayProducts from "./catalog/products.json";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loading from "./Loading";


const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [visible, setVisible] = useState(true);
  const {id} = useParams();

  //ACCESO AL DETALLA DESDE JSON
  /* useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        const producto = arrayProducts.find(item => item.itemId == id )
        resolve(producto);
      }, 2000);
    });
    promesa.then((respuesta) => {
      setItem(respuesta);
    });
  }, [id]); */


// Acceso a un Producto por ID en Firestore
useEffect(() => {
  const db = getFirestore();
  const docRef = doc (db, "inventario", id);
  getDoc (docRef).then(snapShot => {
    if (snapShot.exists()) {
      setItem({id:snapShot.id,...snapShot.data()});
      setVisible(false);
    }});
},[id]); 

  return (
    <div className="container py-5">
      <div className="row">
        {visible ? <Loading/> : <ItemDetail item={item} />}
      </div>
    </div>
  );
};

export default ItemDetailContainer;
